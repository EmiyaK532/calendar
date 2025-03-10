import "./styles/index.scss";
import { Dayjs } from "dayjs";
import MonthCalendar from "./MonthCalendar";
import { CSSProperties, ReactNode, useEffect, useState } from "react";
import Header from "./Header";
import cs from "classnames";
import LocaleContext from "./localeContextType";
import ErrorBoundary from "../ErrorBoundary";

export interface CalendarProps {
  value: Dayjs;
  style?: CSSProperties;
  className?: string | string[];
  //定制日期显示，会完全覆盖日期单元格
  dateRender?: (currentDate: Dayjs) => ReactNode;
  //定制日期单元格, 内容会添加到单元格内,只在全屏日历模式下生效
  dateInnerContent?: (currentDate: Dayjs) => ReactNode;
  //国际化相关
  locale?: string;
  onChange?: (date: Dayjs) => void;
}

const Calendar = (props: CalendarProps) => {
  const {
    value,
    style,
    className,
    dateRender,
    dateInnerContent,
    locale,
    onChange,
  } = props;
  const [curValue, setCurValue] = useState<Dayjs>(value);
  const [curMonth, setCurMonth] = useState<Dayjs>(value);
  const classNames = cs("calendar", className);

  const selectHandler = (date: Dayjs) => {
    setCurValue(date);
    onChange?.(date);
  };

  return (
    <LocaleContext.Provider
      value={{
        locale: locale || navigator.language,
      }}
    >
      <div className={classNames} style={style}>
        <Header
          curMonth={curMonth}
          prevMonthHandler={() => {
            setCurMonth(curMonth.subtract(1, "month"));
          }}
          nextMonthHandler={() => {
            setCurMonth(curMonth.add(1, "month"));
          }}
        ></Header>
        <ErrorBoundary>
          <MonthCalendar
            {...props}
            value={curValue}
            curMonth={curMonth}
            selectHandler={selectHandler}
          />
        </ErrorBoundary>
      </div>
    </LocaleContext.Provider>
  );
};

export default Calendar;
