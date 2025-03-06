import { CalendarProps } from "./index";

export interface MonthCalendarProps extends CalendarProps {}

const MonthCalendar = (props: MonthCalendarProps) => {
  const weeekList = ["日", "一", "二", "三", "四", "五", "六"];

  return (
    <div className="calendar-month">
      <div className="calendar-month-week-list">
        {weeekList.map((week) => {
          return <div className="calendar-month-week-list-item">{week}</div>;
        })}
      </div>
    </div>
  );
};

export default MonthCalendar;
