import { useCoins } from "../../context/CoinProvider";
import styles from "./SearchCoin.module.css";
import { Search } from "react-feather";
function SearchCoin() {
  const { query, setQuery } = useCoins();
  function settingQuery(id) {
    setQuery(id);
  }
  return (
    <div className={styles.search}>
      <input
        value={query}
        onChange={(e) => settingQuery(e.target.value)}
        placeholder="Search Coin..."
      />
      <Search className={styles.icon} />
    </div>
  );
}

export default SearchCoin;
