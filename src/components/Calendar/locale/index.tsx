import { CalendarType } from "./language/interface";
import zhCN from "./language/zh-CN";
import enUS from "./language/en-US";
import jp from "./language/jp";

const allLocales: Record<string, CalendarType> = {
  "zh-CN": zhCN,
  "en-US": enUS,
  "jp-jp": jp,
};

export default allLocales;
