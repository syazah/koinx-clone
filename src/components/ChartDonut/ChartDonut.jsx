import styles from "./ChartDonut.module.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  datasets: [
    {
      label: "# of Votes",
      data: [80, 20],
      backgroundColor: ["#0082FF", "#FAA002"],
      borderColor: ["#0082FF", "#FAA002"],
      borderWidth: 1,
    },
  ],
};
function ChartDonut() {
  return (
    <div className={styles.donut}>
      <Doughnut data={data} />
    </div>
  );
}

export default ChartDonut;
