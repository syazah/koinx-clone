import styles from "./ConTwo.module.css";
const data = [
  "Overview",
  "Fundamentals",
  "News Insights",
  "Sentiments",
  "Team",
  "Technicals",
  "Tokenomics",
];

import { useState } from "react";

function ConTwo() {
  const [currActive, setCurrActive] = useState(0);
  return (
    <div className={styles.contwo}>
      <Header currActive={currActive} setCurrActive={setCurrActive} />
      <hr />
      {currActive === 0 && <Performance />}
    </div>
  );
}
function Header({ currActive, setCurrActive }) {
  return (
    <div className={styles.header}>
      {data.map((e, i) => (
        <h4
          style={i === currActive ? { color: "#1b4aef" } : {}}
          onClick={() => setCurrActive(i)}
          key={i}
        >
          {e}
        </h4>
      ))}
    </div>
  );
}
function Performance() {
  return (
    <div className={styles.performance}>
      <h1>Performance</h1>
      <div className={styles.rangecontainer}>
        <Range />
        <Range />
      </div>
      <Analytics />
    </div>
  );
}
function Range() {
  return (
    <div className={styles.range}>
      <div className={styles.low}>
        <h5>Today&apos;s Low</h5>
        <h4>46,930</h4>
      </div>
      <div className={styles.colordiv}></div>
      <div className={styles.low}>
        <h5>Today&apos;s High</h5>
        <h4>49,343</h4>
      </div>
    </div>
  );
}
function Analytics() {
  return (
    <div className={styles.analytics}>
      <h3>Fundamentals</h3>
      <div className={styles.fundamental}>
        <ul>
          <li>
            <h5>Bitcoin Price</h5>
            <h5>$16,900</h5>
          </li>
          <hr />
          <li>
            <h5>24h Low / 24h High</h5>
            <h5>$15,900 / $16,900</h5>
          </li>
          <hr />
          <li>
            <h5>7d Low / 7d High</h5>
            <h5>$15,900 / $16,900</h5>
          </li>
          <hr />

          <li>
            <h5>Trading Volume</h5>
            <h5>$23,24,92,021</h5>
          </li>
          <hr />

          <li>
            <h5>Market Cap Rank</h5>
            <h5>#1</h5>
          </li>
        </ul>
        <ul>
          <li>
            <h5>Market Cap</h5>
            <h5>$323,506,987,123</h5>
          </li>
          <hr />
          <li>
            <h5>Market Cap Dominance</h5>
            <h5>38.43%</h5>
          </li>
          <hr />
          <li>
            <h5>Volume / Market Cap</h5>
            <h5>0.0718</h5>
          </li>
          <hr />

          <li>
            <h5>All Time High</h5>
            <h5>$68,990</h5>
          </li>
          <hr />

          <li>
            <h5>All Time Low</h5>
            <h5>$65,09</h5>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ConTwo;
