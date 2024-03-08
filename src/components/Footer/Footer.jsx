import { Facebook, Instagram, Linkedin, Twitch, Twitter } from "react-feather";
import styles from "./Footer.module.css";

const data = [
  [
    "Crypto Taxes For",
    "Individuals and investors",
    "Tax Professionals and Accountants",
    "Exchanges and Web3 projects",
  ],
  [
    "Free Tools",
    "Crypto Prices Live",
    "Crypto Tax Saving Speculator",
    "Crypto Profit Calculator",
    "Crypto Converter",
    "Crypto Staking ROI Calculator",
  ],
  [
    "Resource Center",
    "Crypto Tax Guides",
    "Dumb Ways To Lose Money",
    "Crypto Tax Savings Guide ",
    "Blogs",
    "Crypto Buying Guides",
    "Crypto Staking Guides",
    "Crypto Mining Guides",
    "Crypto Price Predictions",
  ],
  [
    "Help And Support",
    "Product Guides",
    "How To Guides",
    "Templates",
    "Contact us",
  ],
  [
    "Company",
    "About Us",
    "Backed by",
    "Media and Press",
    "Careers",
    "Security",
    "Refund Policy",
    "Terms of use",
    "Privacy Policy",
  ],
];

function Footer() {
  return (
    <div className={styles.footer}>
      <Row1 />
      <br />
      <hr />
      <div className={styles.row}>
        <Col data={data[0]} />
        <Col data={data[1]} />
        <Col data={data[2]} />
        <Col data={data[3]} />
        <Col data={data[4]} />
      </div>
      <br />
      <hr />
      <br />
      <Row2 />
    </div>
  );
}

function Row1() {
  return (
    <div className={styles.row}>
      <img src="https://www.koinx.com/_next/static/media/LogoWhite.b3b0d642.svg" />
      <ul className={styles.social}>
        <li>
          <a>
            <Facebook />
          </a>
        </li>
        <li>
          <a>
            <Instagram />
          </a>
        </li>
        <li>
          <a>
            <Twitter />
          </a>
        </li>
        <li>
          <a>
            <Twitch />
          </a>
        </li>
        <li>
          <a>
            <Linkedin />
          </a>
        </li>
      </ul>
    </div>
  );
}
function Row2() {
  return (
    <div className={styles.row}>
      <h5>© All rights reserved by Simplify Infotech Pvt. Ltd.</h5>
    </div>
  );
}

function Col({ data }) {
  return (
    <div className={styles.col}>
      {data.map((el, i) =>
        i > 0 ? <a key={i}>{el}</a> : <h3 key={i}>{el}</h3>
      )}
    </div>
  );
}

export default Footer;
