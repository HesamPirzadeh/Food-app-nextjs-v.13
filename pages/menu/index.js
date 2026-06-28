import React from "react";
import Menupage from "../../components/templates/Menupage";

function index({ data }) {
  return (
    <div>
      <Menupage data={data} />
    </div>
  );
}

export default index;

export async function getStaticProps() {
  const api = await fetch(`${process.env.BASE_URL}/data`);
  const data = await api.json();
  return {
    props: { data },
    revalidate: +process.env.REVALIDATE,
  };
}
