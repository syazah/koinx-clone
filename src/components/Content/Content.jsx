import ConFive from "../ConFive/ConFive";
import ConFour from "../ConFour/ConFour";
import ConOne from "../ConOne/ConOne";
import ConSix from "../ConSix/ConSix";
import ConThree from "../ConThree/ConThree";
import ConTwo from "../ConTwo/ConTwo";
import styles from "./Content.module.css";
function Content() {
  return (
    <div className={styles.content}>
      <ConOne />
      <ConTwo />
      <ConThree />
      <ConFour />
      <ConFive />
      <ConSix />
    </div>
  );
}

export default Content;
