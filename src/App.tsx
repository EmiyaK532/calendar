// import { forwardRef, useImperativeHandle, useRef, useState } from "react";
// import "./index.css";

import React, { useState } from "react";
import dayjs from "dayjs";
import Calendar from "./components/Calendar";
import Header from "./components/Calendar/Header";
import "./App.css";

const App: React.FC = () => {
  const [date, setDate] = useState(dayjs());
  const [locale, setLocale] = useState("zh-CN");

  return (
    <div className="App">
      {/* <Header></Header> */}
      <Calendar
        value={date}
        dateInnerContent={(value) => {
          return (
            <div>
              <p style={{ height: "30px" }}>{value.format("YYYY-MM-DD")}</p>
            </div>
          );
        }}
        locale={locale}
        onChange={setDate}
        onLocaleChange={setLocale}
        showLanguageSelector={true}
      />
    </div>
  );
};

export default App;
