"use client"
import { Calendar as CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { ptBR } from "date-fns/locale"
import { useEffect, useState } from "react"
import moment from "moment"
import { useAuthContext } from "@/contexts/authcontext"
import { DateRange } from "react-day-picker"
import { addDays, format } from "date-fns"

export function DateRangeCalendar() {
  const { setFilterDate, setRangeDate } = useAuthContext();

  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(),
    to: new Date(),
  });

  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  useEffect(() => {
    if (date) {
      setRangeDate(date);
      setIsCalendarOpen(false);
    }
  }, [date, setRangeDate])

  return (
    <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
      <PopoverTrigger asChild>
        <Button
          variant={"ghost"}
          className={cn(
            "w-[240px] justify-start text-left font-normal bg-white h-8 border",
            !date && "text-muted-foreground"
          )}
        >
          <div className="text-gray-500 flex items-center">
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "dd/MM/yyyy")} -{" "}
                  {format(date.to, "dd/MM/yyyy")}
                </>
              ) : (
                format(date.from, "dd/MM/yyyy")
              )
            ) : (
              <span>Pick a date</span>
            )}

            {/* <span>{date ? moment(date.from).format("DD/MM/YYYY") : moment().format("DD/MM/YYYY")}</span> */}
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          initialFocus
          mode="range"
          defaultMonth={date?.from}
          selected={date}
          onSelect={setDate}
          numberOfMonths={1}
          // numberOfMonths={1}
          locale={ptBR}
        // onDayClick={(e) => date && date?.from date ? setIsCalendarOpen(false) : ''}
        />
      </PopoverContent>
    </Popover>
  )
}
