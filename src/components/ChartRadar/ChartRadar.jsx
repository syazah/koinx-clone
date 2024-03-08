import styles from "./ChartRadar.module.css";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const data = {
  labels: [
    "Underlying Technology",
    "Token Performance ",
    "Ecosystem Development",
    "Team Partners & Investors",
    "Roadmap & Progress",
  ],
  datasets: [
    {
      data: [85.32, 85.32, 53, 24, 67],
      backgroundColor: "#3FA1FF",
      borderColor: " #FAA002",
      borderWidth: 1,
    },
  ],
};

function ChartRadar() {
  return (
    <div className={styles.radarcontainer}>
      <Radar data={data} />
    </div>
  );
}

export default ChartRadar;
