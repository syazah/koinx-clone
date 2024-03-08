import Content from "../components/Content/Content";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.wrapper}>
      <Navbar />
      <div className={styles.main}>
        <Content />
        <Sidebar />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
