import Definition from "../modules/Defenition";
import Attribuets from "../modules/Attribuets";
import Banner from "../modules/Banner";
import styles from "./Homepage.module.css";
import Companies from "../modules/Companies";
import Info from "../modules/Info";
import Guide from "../modules/Guide";
import Restriction from "../modules/Restriction";

function Homepage() {
  return (
    <div className={styles.container}>
      <Banner />
      <Attribuets />
      <Definition />
      <Companies />
      <Info />
      <Guide />
      <Restriction />
    </div>
  );
}

export default Homepage;
