import styles from "./ConFour.module.css";

const data = [
  {
    head: "About Bitcoin",
    question: "What is Bitcoin?",
    ans: "Bitcoins price today is US$16,951.82, with a 24-hour trading volume of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from its 7-day all-time low of $16,394.75. BTC has a circulating supply of 19.24 M BTC and a max supply of 21 M BTC.",
  },
  {
    question: "Lorem ipsum dolor sit amet",
    ans: "Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis tristique pharetra. Diam id et lectus urna et tellus aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus. Ultricies urna volutpat pendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus. Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas vitae pellentesque auctor amet. Nunc sagittis libero adipiscing cursus felis pellentesque interdum. Odio cursus phasellus velit in senectus enim dui. Turpis tristique placerat interdum sed volutpat. Id imperdiet magna eget eros donec cursus nunc. Mauris faucibus diam mi nunc praesent massa turpis a. Integer dignissim augue viverra nulla et quis lobortis phasellus. Integer pellentesque enim convallis ultricies at.Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui",
  },
];
function ConFour() {
  return (
    <div className={styles.confour}>
      <div className={styles.head}>
        <h1>{data[0].head}</h1>
        <h2>{data[0].question}</h2>
        <p>{data[0].ans}</p>
        <hr />
        <h2>{data[1].question}</h2>
        <p>{data[1].ans}</p>
      </div>
      <Cardcontainer />
      <hr />
      <div className={styles.head}>
        <p>
          Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam
          massa vel convallis duis ac. Mi adipiscing semper scelerisque
          porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia
          congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in
          eget. Ullamcorper dui
        </p>
      </div>
    </div>
  );
}

function Cardcontainer() {
  return (
    <div className={styles.cardcontainer}>
      <h2>Already Holding Bitcoin ?</h2>
      <div className={styles.cards}>
        <div className={styles.card}>
          <img src="https://images.pexels.com/photos/2068664/pexels-photo-2068664.jpeg?auto=compress&cs=tinysrgb&w=600" />
          <div>
            <h4>Calculate Your Profits</h4>
            <button>Check Now &rarr;</button>
          </div>
        </div>
        <div className={styles.card}>
          <img src="https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=600" />
          <div>
            <h4>Calculate Your Tax Liability</h4>
            <button>Check Now &rarr;</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConFour;
