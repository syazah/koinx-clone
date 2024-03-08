import styles from "./ConThree.module.css";

import { Swiper, SwiperSlide } from "swiper/react";

const data = [
  {
    id: 0,
    text: "Bitcoin ipsum dolor sit amet.",
    para: " Digital signature nonce peer-to-peer genesis block SHA-256 blocksize soft fork address public key. Mempool, private key hash miner nonce inputs soft fork, Merkle Tree. Stacking sats block height electronic cash block reward electronic cash inputs, Merkle Tree block height.",
  },
  {
    id: 1,
    text: "Nonce soft fork consensus UTXO ",
    para: "stacking sats UTXO private key halvening. Timestamp server block reward proof-of-work blocksize, outputs cryptocurrency consensus nonce. Double-spend problem proof-of-work cryptocurrency soft fork halvening, decentralized outputs. Genesis block hashrate consensus segwit mempool public key segwit private key bitcoin. Satoshis.",
  },
  {
    id: 2,
    text: "Merkle Tree digital signature, blocksize miner whitepaper UTXO electronic cash. ",
    para: "Decentralized, segwit key pair double-spend problem, wallet, block height mining. Nonce miner nonce, hash address genesis block, wallet public key? Soft fork genesis block, full node block reward Bitcoin Improvement Proposal public key full node! Sats.",
  },
];

// Import Swiper styles
import "swiper/css";
import { useState } from "react";
import ChartRadar from "../ChartRadar/ChartRadar";

function ConThree() {
  return (
    <div className={styles.conthree}>
      <Header />
      <Swipers />
      <AnalysisEstimation />
      <br />
      <hr />
      <div className={styles.chartheader}>
        <h4>Rating</h4>
        <h3>Rating Breakdown : 79.83/100</h3>
      </div>
      <div className={styles.chartContainer}>
        <ChartRadar />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div>
      <h1>Sentiment</h1>
      <h3>Key Events</h3>
    </div>
  );
}

function Swipers() {
  return (
    <Swiper
      className={styles.swipe}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
    >
      {data.map((el) => (
        <SwiperSlide className={styles.swipeslide} key={el.id}>
          <Slides data={el} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

function Slides({ data }) {
  return (
    <div className={styles.slide}>
      <div className={styles.imgcontainer}></div>
      <div className={styles.textcontainer}>
        <h3>{data.text}</h3>
        <p>{data.para}</p>
      </div>
    </div>
  );
}

function AnalysisEstimation() {
  const [buy, setBuy] = useState(70);
  const [hold, setHold] = useState(8);
  const [sell, setSell] = useState(16);

  return (
    <div className={styles.analysisest}>
      <div className={styles.circle}>
        <h3>76%</h3>
      </div>
      <div className={styles.stats}>
        <div>
          <h4>Buy</h4>
          <div
            style={{ width: `${buy * 4}px` }}
            className={styles.progress1}
          ></div>
          <h4>{buy}%</h4>
        </div>
        <div>
          <h4>Hold</h4>
          <div
            style={{ width: `${hold * 4}px` }}
            className={styles.progress2}
          ></div>
          <h4>{hold}%</h4>
        </div>
        <div>
          <h4>Sell</h4>
          <div
            style={{ width: `${sell * 4}px` }}
            className={styles.progress3}
          ></div>
          <h4>{sell}%</h4>
        </div>
      </div>
    </div>
  );
}

export default ConThree;
