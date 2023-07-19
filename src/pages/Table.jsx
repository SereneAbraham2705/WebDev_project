import { Link } from "react-router-dom";
import { data } from "../data";
import "../styles/Table.css";
import "../styles/Home.css";
export const Table = () => {
  return (
    <div className="tablePg">
      <Link className="webLink" to={"/"}>
        Go to Home
      </Link>
      <br />
      <h2 className="tableH">Table to denote Medals Won</h2>
      <br />
      <br />
      <div className="medalTable">
        <table className="tableData">
          <tr>
            <th>Id</th>
            <th>Year</th>
            <th>Medal</th>
          </tr>
          {data.map((val, key) => {
            return (
              <tr key={key}>
                <td>{val.Id}</td>
                <td>{val.Year}</td>
                <td>{val.Medals}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};
