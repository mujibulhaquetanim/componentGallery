import { RangeCalendar } from "@nextui-org/react";
import { today, getLocalTimeZone } from "@internationalized/date";

export default function RangeCalendarComponent() {
  return (
    <div className="flex gap-3 mt-7 justify-center items-center">
      <RangeCalendar aria-label="Date (No Selection)" />
      <RangeCalendar
        aria-label="Date (Uncontrolled)"
        defaultValue={{
          start: today(getLocalTimeZone()),
          end: today(getLocalTimeZone()).add({ weeks: 1 }),
        }}
      />
    </div>
  );
}
