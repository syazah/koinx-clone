import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import styles from "./ChartHistory.module.css";
import { useEffect, useState } from "react";
import moment from "moment";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const options = {
  responsive: true,
};

function ChartHistory({ currId }) {
  const id = currId.id;
  const [chartData, setChartData] = useState([]);
  const [day, setDay] = useState(1);
  useEffect(() => {
    fetch(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${day}`
    )
      .then(async (res) => {
        if (res.ok) {
          const data = await res.json();
          setChartData(
            data.prices.map((value) => ({
              x: value[0],
              y: value[1].toFixed(2),
            }))
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id, day]);
  const data = {
    labels: chartData.map((e) => moment(e.x).format("MMMDD")),
    datasets: [
      {
        label: id,
        fill: true,
        data: chartData.map((val) => val.y),
        borderColor: "#5a79e8e6",
        backgroundColor: "#6094edd7",
      },
    ],
  };

  return (
    <div className={styles.chart}>
      <div className={styles.chartheader}>
        <h4>{currId.name} Price Chart (USD)</h4>
        <Days day={day} setDay={setDay} />
      </div>

      <Line style={{ width: "100%" }} options={options} data={data} />
    </div>
  );
}

function Days({ setDay, day }) {
  return (
    <div className={styles.days}>
      <h5
        style={
          day === 1 ? { backgroundColor: "#6094edd7", color: "white" } : {}
        }
        onClick={() => setDay(1)}
      >
        1D
      </h5>
      <h5
        style={
          day === 7 ? { backgroundColor: "#6094edd7", color: "white" } : {}
        }
        onClick={() => setDay(7)}
      >
        7D
      </h5>
      <h5
        style={
          day === 14 ? { backgroundColor: "#6094edd7", color: "white" } : {}
        }
        onClick={() => setDay(14)}
      >
        14D
      </h5>
      <h5
        style={
          day === 30 ? { backgroundColor: "#6094edd7", color: "white" } : {}
        }
        onClick={() => setDay(30)}
      >
        30D
      </h5>
    </div>
  );
}

export default ChartHistory;
