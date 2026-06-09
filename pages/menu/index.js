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
  const api = await fetch("http://localhost:4000/data");
  const data = await api.json();
  console.log('ragenerated');
  return {
    props: { data },
    revalidate: 10
  };
}
