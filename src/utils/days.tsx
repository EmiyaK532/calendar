import clsx from "clsx";
import { Dayjs } from "dayjs";
// import "../components/Calendar/index.scss";

export const getAllDays = (date: Dayjs) => {
  const daysInMonth = date.daysInMonth();
  const startDate = date.startOf("month");
  const day = startDate.day();

  // 计算每个格子的信息
  //需要先fill填充， 再使用map进行遍历数组元素
  const daysInfo: Array<{ date: Dayjs; currentMonth: boolean }> = new Array(42);
  for (let i = 0; i < daysInMonth; i++) {
    daysInfo[i] = {
      date: startDate.subtract(day - i, "day"),
      currentMonth: false,
    };
  }

  for (let i = day; i < daysInfo.length; i++) {
    const calcDate = startDate.add(i - day, "day");

    daysInfo[i] = {
      date: calcDate,
      currentMonth: calcDate.month() === date.month(),
    };
  }
  // console.log(daysInfo);
  return daysInfo;
};

export const renderDays = (
  days: Array<{ date: Dayjs; currentMonth: boolean }>
) => {
  const rows = [];
  for (let i = 0; i < 6; i++) {
    const row = [];
    for (let j = 0; j < 7; j++) {
      const item = days[i * 7 + j];
      row[j] = (
        <div
          //clsx改写
          className={clsx("calendar-month-body-cell", {
            "calendar-month-body-cell-current": item.currentMonth === true,
          })}
        >
          {item.date.date()}
        </div>
      );
    }
    rows.push(row);
  }
  return rows.map((row) => {
    return <div className="calendar-month-body-row">{row}</div>;
  });
};
