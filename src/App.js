import "./styles.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "../src/pages/Home";
import { LineG } from "../src/pages/LineG";
import { Table } from "../src/pages/Table";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/linepg" element={<LineG />} />
        <Route path="/tablepg" element={<Table />} />
      </Routes>
    </div>
  );
}
