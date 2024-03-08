import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import SearchCoin from "./SearchCoin";
import { useCoins } from "../../context/CoinProvider";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link to="/home">
        <img src="https://www.koinx.com/_next/static/media/Logo.5f2ad8d5.svg" />
      </Link>
      <ul>
        <SearchCoin />
        <SearchList />
        <li>
          <a>Crypto Taxes</a>
        </li>
        <li>
          <a>Free Tools</a>
        </li>
        <li>
          <a>Resource Center</a>
        </li>
        <Link className={styles.button}>Get Started</Link>
      </ul>
    </nav>
  );
}

function SearchList() {
  const { coin, setCoin, setQuery, setCurrentId } = useCoins();
  function handleClick(id) {
    setCoin([]);
    setQuery("");
    setCurrentId(id);
  }
  return (
    <ul className={styles.searchlist}>
      {coin.map(
        (e, i) =>
          i < 5 && (
            <li onClick={() => handleClick(e)} key={e}>
              <a>{e.name}</a>
              <img src={e.thumb} />
            </li>
          )
      )}
    </ul>
  );
}

export default Navbar;
