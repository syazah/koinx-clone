import styles from "./ConFive.module.css";
import ChartDonut from "../ChartDonut/ChartDonut";
function ConFive() {
  return (
    <div className={styles.confive}>
      <Header />
      <div className={styles.donut}>
        <div className={styles.donutchart}>
          <ChartDonut />
        </div>
        <div className={styles.donuttext}>
          <div>
            <div
              style={{ backgroundColor: "#0082FF" }}
              className={styles.circle}
            ></div>
            <h5>Crowdsale Investors: 80%</h5>
          </div>
          <div>
            <div
              style={{ backgroundColor: "#FAA002" }}
              className={styles.circle}
            ></div>
            <h5>Foundation: 20%</h5>
          </div>
        </div>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
          reiciendis inventore dolorem ab soluta totam molestias quam quaerat,
          eum dolore minima magnam odio ratione! Molestiae, molestias? Sint
          porro modi ad.
        </p>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className={styles.header}>
      <h1>Tokenomics</h1>
      <h3>Initial Distribution</h3>
    </div>
  );
}

export default ConFive;
