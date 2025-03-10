import { CalendarProps } from "./index";
import { getAllDays, renderDays } from "../../utils/days";
import "./styles/index.scss";
import { useContext } from "react";
import LocaleContext from "./localeContextType";
import allLocales from "./locale";
import { Dayjs } from "dayjs";

export interface MonthCalendarProps extends CalendarProps {
  selectHandler?: (date: Dayjs) => void;
  curMonth: Dayjs;
}

const MonthCalendar = (props: MonthCalendarProps) => {
  const { value, dateRender, dateInnerContent, selectHandler, curMonth } =
    props;

  const localeContext = useContext(LocaleContext);
  const locale = localeContext?.locale || "zh-CN";
  const CalendarLocale = allLocales[locale] || allLocales["zh-CN"];

  if (!CalendarLocale || !CalendarLocale.week) {
    console.error("语言配置错误:", locale, CalendarLocale);
    const fallbackLocale = {
      week: {
        sunday: "日",
        monday: "一",
        tuesday: "二",
        wednesday: "三",
        thursday: "四",
        friday: "五",
        saturday: "六",
      },
    };
    return renderFallbackCalendar(props, fallbackLocale);
  }

  const weeekList = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];
  const allDays = getAllDays(curMonth);

  return (
    <div className="calendar-month">
      <div className="calendar-month-week-list">
        {weeekList.map((week) => {
          return (
            <div className="calendar-month-week-list-item" key={week}>
              {CalendarLocale.week[week]}
            </div>
          );
        })}
      </div>
      <div className="calendar-month-body">
        {renderDays(
          allDays,
          dateRender,
          dateInnerContent,
          value,
          selectHandler
        )}
      </div>
    </div>
  );
};

function renderFallbackCalendar(
  props: MonthCalendarProps,
  fallbackLocale: any
) {
  const { dateRender, dateInnerContent } = props;
  const weeekList = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];
  const allDays = getAllDays(props.value);

  return (
    <div className="calendar-month">
      <div className="calendar-month-week-list">
        {weeekList.map((week) => {
          return (
            <div className="calendar-month-week-list-item" key={week}>
              {fallbackLocale.week[week]}
            </div>
          );
        })}
      </div>
      <div className="calendar-month-body">
        {renderDays(
          allDays,
          dateRender,
          dateInnerContent,
          props.value,
          props.selectHandler
        )}
      </div>
    </div>
  );
}

export default MonthCalendar;
