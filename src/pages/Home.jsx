import { Link } from "react-router-dom";
import "../styles/Home.css";
export const Home = () => {
  return (
    <div className="homePg">
      <h2>Statistic View Of Medals Won</h2>
      <div className="linkContainer">
        <Link className="webLink" to={"/tablepg"}>
          Table
        </Link>
        <Link className="webLink" to={"/linepg"}>
          LineGraph
        </Link>
      </div>
      <div className="infoBox">
        <p>
          <strong>Name: </strong>Serene Achamma Abraham
        </p>
        <p>
          <strong>Email Id: </strong>sereneabraham2003@gmail.com
        </p>
        <p>
          <strong>Contact Number: </strong>9491610543
        </p>
      </div>
    </div>
  );
};
