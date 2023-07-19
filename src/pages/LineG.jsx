import { Link } from "react-router-dom";
import { data } from "../data";
import "../styles/LineG.css";
import "../styles/Home.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
export const LineG = () => {
  return (
    <div className="tablePg">
      <Link className="webLink" to={"/"}>
        Go to Home
      </Link>
      <h1 className="tableH">Medals won by India In Olympics</h1>
      <LineChart
        width={600}
        height={400}
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        className="lineGraph"
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="Year"
          label={{ value: "Year", position: "insideBottom", offset: -5 }}
        />
        <YAxis
          label={{ value: "Medals Won", angle: -90, position: "insideLeft" }}
        />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="Medals"
          name="Medals"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </div>
  );
};
