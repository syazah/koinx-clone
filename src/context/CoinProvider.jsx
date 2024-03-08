import { createContext, useContext, useState } from "react";
import { useEffect } from "react";

const CoinContext = createContext();
function CoinProvider({ children }) {
  const [query, setQuery] = useState("");
  const [coin, setCoin] = useState([]);
  const [currentId, setCurrentId] = useState({
    api_symbol: "bitcoin",
    id: "bitcoin",
    large: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png",
    market_cap_rank: 1,
    name: "Bitcoin",
    symbol: "BTC",
    thumb: "https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png",
  });
  const [market, setMarket] = useState({});

  useEffect(() => {
    const controller = new AbortController();
    console.log(currentId);
    const signal = controller.signal;
    fetch(`https://api.coingecko.com/api/v3/search?query=${query}`, {
      signal,
    })
      .then(async (res) => {
        if (res.ok) {
          const data = await res.json();
          setCoin(data.coins);
        }
      })
      .catch((err) => console.log(err));
    return function () {
      controller.abort();
    };
  }, [query]);
  return (
    <CoinContext.Provider
      value={{
        query,
        setQuery,
        coin,
        setCoin,
        currentId,
        setCurrentId,
        market,
        setMarket,
      }}
    >
      {children}
    </CoinContext.Provider>
  );
}

function useCoins() {
  const context = useContext(CoinContext);
  if (context === undefined) {
    throw new Error("Context Used Outside The Provider");
  }
  return context;
}

export { CoinProvider, useCoins };
