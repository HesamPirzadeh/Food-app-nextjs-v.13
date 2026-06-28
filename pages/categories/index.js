import React from "react";
import Categorypage from "../../components/templates/Categorypage";

function index({ data }) {
  return (
    <div>
      <Categorypage data={data} />
    </div>
  );
}

export default index;

export async function getServerSideProps(context) {
  const {
    query: { difficulty, time },
  } = context;

  const res = await fetch(`${process.env.BASE_URL}/data`);
  const data = await res.json();

  const filteredData = data.filter((item) => {
    const filteredDifficulty = item.details.filter((detail) => {
      return detail.Difficulty && detail.Difficulty === difficulty;
    });

    const timing = item.details.filter((details) => {
      const timeString = details["Cooking Time"] || "";
      const [valueTime] = timeString.split(" ");

      if (time === "less" && valueTime && +valueTime <= 30) {
        return details;
      } else if (time === "more" && valueTime && +valueTime > 30) {
        return details;
      }
    });

    if (time && difficulty && timing.length && filteredDifficulty.length) {
      return item;
    } else if (!time && difficulty && filteredDifficulty.length) {
      return item;
    } else if (time && !difficulty && timing.length) {
      return item;
    }
  });

  return {
    props: {
      data: filteredData,
    },
  };
}
