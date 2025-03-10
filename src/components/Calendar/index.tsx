import "./styles/index.scss";
import dayjs, { Dayjs } from "dayjs";
import MonthCalendar from "./MonthCalendar";
import { CSSProperties, ReactNode, useEffect, useState } from "react";
import Header from "./Header";
import cs from "classnames";
import LocaleContext from "./localeContextType";
import ErrorBoundary from "../ErrorBoundary";
import LanguageSelector from "./LanguageSelector";

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
  //是否显示语言选择器
  showLanguageSelector?: boolean;
  //语言变更回调
  onLocaleChange?: (locale: string) => void;
}

const Calendar = (props: CalendarProps) => {
  const {
    value,
    style,
    className,
    dateRender,
    dateInnerContent,
    locale = navigator.language,
    onChange,
    showLanguageSelector = true,
    onLocaleChange,
  } = props;

  const [curValue, setCurValue] = useState<Dayjs>(value);
  const [curMonth, setCurMonth] = useState<Dayjs>(value);
  // const [currentLocale, setCurrentLocale] = useState<string>(locale);
  const classNames = cs("calendar", className);

  const selectHandler = (date: Dayjs) => {
    setCurValue(date);
    setCurMonth(date);
    onChange?.(date);
  };

  const handleLocaleChange = (newLocale: string) => {
    // setCurrentLocale(newLocale);
    onLocaleChange?.(newLocale);
  };

  return (
    <LocaleContext.Provider
      value={{
        locale: locale,
      }}
    >
      <div className={classNames} style={style}>
        <div className="calendar-header-container">
          <Header
            curMonth={curMonth}
            todayHandler={() => {
              const date = dayjs(Date.now());
              setCurMonth(date);
              setCurValue(date);
              onChange?.(date);
            }}
            prevMonthHandler={() => {
              setCurMonth(curMonth.subtract(1, "month"));
            }}
            nextMonthHandler={() => {
              setCurMonth(curMonth.add(1, "month"));
            }}
          />
          {showLanguageSelector && (
            <LanguageSelector
              currentLocale={locale}
              onChange={handleLocaleChange}
            />
          )}
        </div>
        <ErrorBoundary>
          <MonthCalendar
            {...props}
            value={curValue}
            curMonth={curMonth}
            selectHandler={selectHandler}
            locale={locale}
          />
        </ErrorBoundary>
      </div>
    </LocaleContext.Provider>
  );
};

export default Calendar;
