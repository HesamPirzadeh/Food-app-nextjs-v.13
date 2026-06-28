import styles from "./Detailpage.module.css";
import Location from "../icons/Location";
import Dollar from "../icons/Dollar";

function Detailpage(props) {
  console.log(props);
  const {
    id,
    name,
    price,
    discount,
    introduction,
    ingredients,
    details,
    recipe,
  } = props;
  console.log(details);
  return (
    <div className={styles.container}>
      <h2>Details</h2>
      <div className={styles.subContainer}>
        <div className={styles.banner}>
          <img src={`/images/${id}.jpeg`} />
          <div>
          <h3>{name}</h3>
          <span className={styles.location}>
            <Location />
            {details[0].Cuisine}
          </span>
          <span className={styles.price}>
            <Dollar />
            {discount ? (price * (100 - discount)) / 100 : price}
          </span>
          {discount ? (
            <span className={styles.discount}>{discount} $OFF</span>
          ) : null}
          </div>
        </div>
      </div>
      <div className={styles.introduction}>
        <p>{introduction}</p>
      </div>
      <div className={styles.details}>
        <h4>Details</h4>
        <ul>
          {details.map((detail, index) => {
            return (
              <li key={index}>
                <p>{Object.keys(detail)[0]}</p>
                <span>{Object.values(detail)[0]}</span>
              </li>
            );
          })}
        </ul>
        <div className={styles.details}>
          <h4>ingredient</h4>
          <ul>
            {ingredients.map((item, index) => {
              return (
                <li key={index}>
                  <p>{item}</p>
                </li>
              );
            })}
          </ul>
        </div>
        <div className={styles.recipe}>
          <h4>Recipe</h4>
          <ul>
            {recipe.map((item, index) => {
              return (
                <div
                  key={index}
                  className={index % 2 ? styles.odd : styles.even}
                >
                  <span>{index + 1}</span>
                  <p>{item}</p>
                </div>
              );
            })}
          </ul>
        </div>
        <button>Add to cart</button>
      </div>
    </div>
  );
}

export default Detailpage;
