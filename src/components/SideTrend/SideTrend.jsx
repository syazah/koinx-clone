import { useEffect, useState } from "react";
import styles from "./SideTrend.module.css";

function SideTrend() {
  const [reference, setReference] = useState("aed");
  const [data, setData] = useState([]);

  useEffect(() => {
    async function FetchTrending() {
      const res = await fetch(
        `https://api.coingecko.com/api/v3/search/trending`
      );
      const d = await res.json();
      setData(d.coins);
    }
    FetchTrending();
  }, []);

  return (
    <div className={styles.trend}>
      <h1>Trending Coins (24h)</h1>
      <div className={styles.reference}>
        <h4>Select Reference Coin</h4>
        <select onChange={(e) => setReference(e.target.value)}>
          <option value="aed">AED</option>
          <option value="btc">BTC</option>
          <option value="cad">CAD</option>
          <option value="eth">ETH</option>
          <option value="eur">EUR</option>
          <option value="inr">INR</option>
        </select>
      </div>
      <div className={styles.listdiv}>
        {data.map((el, i) => (
          <Sidelist key={i} data={el} reference={reference} />
        ))}
      </div>
    </div>
  );
}
function Sidelist({ data, reference }) {
  let range;
  switch (reference) {
    case "aed":
      range = data.item.data.price_change_percentage_24h.aed;
      break;
    case "btc":
      range = data.item.data.price_change_percentage_24h.btc;
      break;
    case "eth":
      range = data.item.data.price_change_percentage_24h.eth;
      break;
    case "eur":
      range = data.item.data.price_change_percentage_24h.eur;
      break;
    case "cad":
      range = data.item.data.price_change_percentage_24h.cad;
      break;
    case "usd":
      range = data.item.data.price_change_percentage_24h.usd;
      break;
    case "inr":
      range = data.item.data.price_change_percentage_24h.inr;
      break;
    default:
      range = data.item.data.price_change_percentage_24h.aed;
      break;
  }
  return (
    <div className={styles.list}>
      <div>
        <img src={data.item.large} />
        <h4>{data.item.name}</h4>
      </div>
      <h4
        style={
          range < 0
            ? {
                backgroundColor: "rgb(255, 200, 200)",
                color: "rgb(255, 75, 75)",
              }
            : {}
        }
        className={styles.range}
      >
        {range > 0 ? `+${range.toFixed(3)}%` : `${range.toFixed(3)}%`}
      </h4>
    </div>
  );
}

export default SideTrend;
