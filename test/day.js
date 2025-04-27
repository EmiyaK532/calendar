import dayjs from "dayjs";

console.log(dayjs("2025-3-1").daysInMonth());
console.log(dayjs("2025-3-2").startOf("month").format("YYYY-MM-DD"));
console.log(dayjs("2025-3-3").endOf("month").format("YYYY-MM-DD"));

console.log(dayjs("2025-3-1").daysInMonth());
console.log(dayjs("2025-3-2").startOf("month").format("YYYY-MM-DD"));
console.log(dayjs("2025-3-3").endOf("month").format("YYYY-MM-DD"));

console.log(2);
console.log(3);

console.log("a");
console.log("b");
console.log("c");

console.log("test branch");
console.log(`test before commit`);