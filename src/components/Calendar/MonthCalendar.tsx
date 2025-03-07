import { CalendarProps } from "./index";
import { getAllDays, renderDays } from "../../utils/days";
import "./index.scss";

export interface MonthCalendarProps extends CalendarProps {}

const MonthCalendar = (props: MonthCalendarProps) => {
  const weeekList = ["日", "一", "二", "三", "四", "五", "六"];
  const allDays = getAllDays(props.value);

  return (
    <div className="calendar-month">
      <div className="calendar-month-week-list">
        {weeekList.map((week) => {
          return <div className="calendar-month-week-list-item">{week}</div>;
        })}
      </div>
      <div className="calendar-month-body">{renderDays(allDays)}</div>
    </div>
  );
};

export default MonthCalendar;
