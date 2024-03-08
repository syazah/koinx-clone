import { Link } from "react-router-dom";
import styles from "./SideAd.module.css";
function SideAd() {
  return (
    <div className={styles.adcontainer}>
      <h1>Get Started with KoinX for FREE</h1>
      <p>
        With our range of features that you can equip for free, KoinX allows you
        to be more educated and aware of your tax reports.
      </p>
      <img src="https://www.koinx.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.1712c77e.png&w=1920&q=75" />
      <Link className={styles.button}>Get Started For FREE &rarr;</Link>
    </div>
  );
}

export default SideAd;
