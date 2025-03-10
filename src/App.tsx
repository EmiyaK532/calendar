// import { forwardRef, useImperativeHandle, useRef, useState } from "react";
// import "./index.css";

import dayjs from "dayjs";
import Calendar from "./components/Calendar";
import Header from "./components/Calendar/Header";
const App: React.FC = () => {
  return (
    <div className="App">
      {/* <Header></Header> */}
      <Calendar
        value={dayjs("2025-3-4")}
        dateInnerContent={(value) => {
          return (
            <div>
              <p style={{ height: "30px" }}>{value.format("YYYY-MM-DD")}</p>
            </div>
          );
        }}
        locale="jp-jp"
        onChange={(date) => {
          // alert(date.format("YYYY-MM-DD"));
        }}
      />
    </div>
  );
};

export default App;
