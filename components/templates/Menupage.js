import Card from "../modules/Card";
import styles from "./Menu.module.css";

function Menupage({ data }) {
  console.log(data);
  return (
    <div className={styles.container}>
      <h1>Menu</h1>
      <div className={styles.subContainer}>
        {data.map((food) => {
          return <Card key={food.id} data={food} />;
        })}
      </div>
    </div>
  );
}

export default Menupage;
