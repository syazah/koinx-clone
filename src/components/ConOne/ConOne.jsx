import { useCoins } from "../../context/CoinProvider";
import ChartHistory from "../ChartHistory/ChartHistory";
import styles from "./ConOne.module.css";
function ConOne() {
  const { currentId } = useCoins();
  console.log(currentId);
  return (
    <div className={styles.conone}>
      <Header currId={currentId} />
      <ChartHistory currId={currentId} />
    </div>
  );
}

function Header({ currId }) {
  return (
    <div className={styles.header}>
      <div className={styles.text}>
        <img src={currId.large} />
        <h1>{currId.name}</h1>
        <h5>{currId.symbol}</h5>
      </div>
      <span>Rank #{currId.market_cap_rank}</span>
    </div>
  );
}

export default ConOne;
