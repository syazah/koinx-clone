import SideAd from "../SideAd/SideAd";
import SideTrend from "../SideTrend/SideTrend";
import styles from "./Sidebar.module.css";
function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <SideAd />
      <SideTrend />
    </div>
  );
}

export default Sidebar;
