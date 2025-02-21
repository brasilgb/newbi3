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

export function DatePicker() {
  const { setFilterDate, filterDate } = useAuthContext();

  const [date, setDate] = useState<Date>();
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  useEffect(() => {
    if (date) {
      setFilterDate(moment(date));
    }
  }, [date, setFilterDate])

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
            <span>{date ? moment(date).format("DD/MM/YYYY") : moment().format("DD/MM/YYYY")}</span>
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
          locale={ptBR}
          onDayClick={(e) => setIsCalendarOpen(false)}
          defaultMonth={filterDate}
        />
      </PopoverContent>
    </Popover>
  )
}
