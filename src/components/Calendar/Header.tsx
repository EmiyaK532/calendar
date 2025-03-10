import { Dayjs } from "dayjs";
import { FC, useContext } from "react";
import LocaleContext from "./localeContextType";
import allLocales from "./locale";

interface HeaderProps {
  curMonth: Dayjs;
  prevMonthHandler: () => void;
  nextMonthHandler: () => void;
  todayHandler: () => void;
}

const Header: FC<HeaderProps> = (props) => {
  const { curMonth, prevMonthHandler, nextMonthHandler, todayHandler } = props;
  const localeConext = useContext(LocaleContext);
  const locale = localeConext?.locale || "zh-CN";
  const CalendarLocale = allLocales[locale] || allLocales["zh-CN"];
  return (
    <div className="calendar-header">
      <div className="calendar-header-left">
        <div className="calendar-header-icon" onClick={prevMonthHandler}>
          &lt;
        </div>
        <div className="calendar-header-value">
          {curMonth.format(CalendarLocale.formatMonth)}
        </div>
        <div className="calendar-header-icon" onClick={nextMonthHandler}>
          &gt;
        </div>
        <button className="calendar-header-btn" onClick={todayHandler}>
          {CalendarLocale.today}
        </button>
      </div>
    </div>
  );
};

export default Header;
