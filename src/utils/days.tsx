import clsx from "clsx";
import { Dayjs } from "dayjs";
import { MonthCalendarProps } from "../components/Calendar/MonthCalendar";
import { ReactNode } from "react";
// import "../components/Calendar/index.scss";
import cs from "classnames";

export const getAllDays = (date: Dayjs) => {
  const daysInMonth = date.daysInMonth();
  const startDate = date.startOf("month");
  const day = startDate.day();

  // 计算每个格子的信息
  const daysInfo: Array<{ date: Dayjs; currentMonth: boolean }> = new Array(42)
    .fill(null)
    .map((_, index) => {
      // 修复：确保所有元素都被正确初始化
      if (index < day) {
        // 上个月的日期
        return {
          date: startDate.subtract(day - index, "day"),
          currentMonth: false,
        };
      } else {
        // 当前月和下个月的日期
        const calcDate = startDate.add(index - day, "day");
        return {
          date: calcDate,
          currentMonth: calcDate.month() === date.month(),
        };
      }
    });

  return daysInfo;
};

export const renderDays = (
  days: Array<{ date: Dayjs; currentMonth: boolean }>,
  dateRender: MonthCalendarProps["dateRender"],
  dateInnerContent: MonthCalendarProps["dateInnerContent"],
  value: Dayjs,
  selectHandler: MonthCalendarProps["selectHandler"]
) => {
  const rows = [];
  for (let i = 0; i < 6; i++) {
    const row = [];
    for (let j = 0; j < 7; j++) {
      const index = i * 7 + j;
      // 防止数组越界
      if (index >= days.length) {
        continue;
      }

      const item = days[index];
      if (!item || !item.date) {
        console.error("Invalid date item at index", index, item);
        continue;
      }

      row[j] = (
        <div
          key={`cell-${i}-${j}`}
          className={
            "calendar-month-body-cell " +
            (item.currentMonth ? "calendar-month-body-cell-current" : "")
          }
          // onClick={() => {
          //   selectHandler?.(item.date);
          // }}
        >
          {dateRender ? (
            dateRender(item.date)
          ) : (
            <div className="calendar-month-body-cell-date">
              <div
                className={cs(
                  "calendar-month-body-cell-date-value",
                  value.format("YYYY-MM-DD") === item.date.format("YYYY-MM-DD")
                    ? "calendar-month-body-cell-date-selected"
                    : ""
                )}
                onClick={() => {
                  selectHandler?.(item.date);
                }}
              >
                {item.date.date()}
              </div>
              <div className="calendar-month-cell-body-date-content">
                {dateInnerContent?.(item.date)}
              </div>
            </div>
          )}
        </div>
      );
    }
    rows.push(row);
  }
  return rows.map((row, index) => (
    <div key={`row-${index}`} className="calendar-month-body-row">
      {row}
    </div>
  ));
};
