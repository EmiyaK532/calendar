// import { forwardRef, useImperativeHandle, useRef, useState } from "react";
// import "./index.css";

import dayjs from "dayjs";
import Calendar from "./components/Calendar";
import Header from "./components/Calendar/Header";

// interface CalendarProps {
//   defaultValue?: Date;
//   onChange?: (date: Date) => void;
// }

// interface CalendarRef {
//   getDate: () => Date;
//   setDate: (date: Date) => void;
// }

// const InternalCalendar: React.ForwardRefRenderFunction<
//   CalendarRef,
//   CalendarProps
// > = (props, ref) => {
//   const { defaultValue = new Date(), onChange } = props;

//   const [date, setDate] = useState(defaultValue);

//   useImperativeHandle(ref, () => {
//     return {
//       getDate() {
//         return date;
//       },
//       setDate(date: Date) {
//         setDate(date);
//       },
//     };
//   });

//   // 处理上个月的点击事件
//   const handlePrevMonth = () => {
//     setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
//   };

//   // 处理下个月的点击事件
//   const handleNextMonth = () => {
//     setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1));
//   };

//   //更新日期的方法
//   const daysOfMonth = (year: number, month: number) => {
//     return new Date(year, month + 1, 0).getDate();
//   };

//   const firstDayOfMonth = (year: number, month: number) => {
//     return new Date(year, month, 1).getDay();
//   };

//   const renderDates = () => {
//     //定义数组存储渲染的内容
//     const days = [];
//     //计算当月有多少天
//     const daysCount = daysOfMonth(date.getFullYear(), date.getMonth());
//     //再计算当月的第一天是星期几也就是new Date(year, month, 1).getDay()
//     const firstDay = firstDayOfMonth(date.getFullYear(), date.getMonth());

//     //先渲染empty块
//     for (let i = 0; i < firstDay; i++) {
//       days.push(<div key={`empty-${i}`} className="empty"></div>);
//     }

//     //再渲染日期
//     for (let i = 1; i <= daysCount; i++) {
//       days.push(
//         <div key={`${i}`} className="day">
//           {i}
//         </div>
//       );
//     }

//     return days;
//   };

//   const monthNames = [
//     "一月",
//     "二月",
//     "三月",
//     "四月",
//     "五月",
//     "六月",
//     "七月",
//     "八月",
//     "九月",
//     "十月",
//     "十一月",
//     "十二月",
//   ];

//   return (
//     <div className="calendar">
//       <div className="header">
//         <button onClick={handlePrevMonth}>&lt;</button>
//         <div>{`${date.getFullYear()}年${monthNames[date.getMonth()]}`}</div>
//         <button onClick={handleNextMonth}>&gt;</button>
//       </div>
//       <div className="days">
//         <div className="day">日</div>
//         <div className="day">一</div>
//         <div className="day">二</div>
//         <div className="day">三</div>
//         <div className="day">四</div>
//         <div className="day">五</div>
//         <div className="day">六</div>
//         {renderDates()}
//       </div>
//     </div>
//   );
// };

// const Calendar = forwardRef(InternalCalendar);

const App: React.FC = () => {
  return (
    <div className="App">
      {/* <Header></Header> */}
      <Calendar
        value={dayjs("2025-3-4")}
        // className={"aaa"}
        // style={{ background: "yellow" }}
        dateRender={(value) => {
          return (
            <div>
              <p
                style={{
                  background: "yellowgreen",
                  height: "50px",
                }}
              >
                {value.format("YYYY/MM/DD")}
              </p>
            </div>
          );
        }}
      />
    </div>
  );
};

export default App;
