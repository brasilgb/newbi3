"use client"

import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { formatMoney } from "@/utils";
import { SquareCheck } from "lucide-react";
import moment from "moment";


export function BarPerformance({ perfdata }: any) {

  const chartData = [
    { month: "January", compras: 186 },
    { month: "February", compras: 305 },
    { month: "March", compras: 237 },
    { month: "April", compras: 73 },
    { month: "May", compras: 209 },
    { month: "June", compras: 214 },
  ];
  const dataBar = perfdata?.map((dt: any) => ({ DiaSemana: dt.DiaSemana, Compras: dt.Compras }));
const montaData = () => {
  let nd = (perfdata[0].DataChave).toString();
  let year = nd.slice(0, 4); 
  let month = nd.slice(4, 6); 
  let day = nd.slice(6, 8); 
  let date = year + '-' + month + '-' + day;
  return moment(date).locale('pt-br').format("MMMM/YYYY");
}
  const chartConfig = {
    compras: {
      label: "DiaSemana",
      color: "hsl(var(--chart-1))",
    },
  } satisfies ChartConfig

  const renderCustomBarLabel = ({ payload, x, y, width, height, value }: any) => {
    return <text x={x + width / 2} y={y} fill="#666" textAnchor="middle" dy={-6}>{`${formatMoney(value)}`}</text>;
  };
  
  return (
    <Card className="h-80 shadow-none mt-4">
      <CardHeader className="flex flex-col items-center justify-center">
        <CardTitle>Gráfico de Evolução de Compras</CardTitle>
        <CardDescription>{montaData()}</CardDescription>
      </CardHeader>
      <CardContent className="w-full">
        <ChartContainer config={chartConfig} className="h-52 w-full">
          <BarChart accessibilityLayer data={dataBar} className="w-full" >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="DiaSemana"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <YAxis />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent formatter={(value: any, name, props: any) => (
                <div>
                  <p className="flex items-center gap-2">
                    {name == 'Compras' && <SquareCheck color={props.color} className={`w-4 h-4`} />}
                    {name == 'Compras' && name + ': ' + formatMoney(value)}
                  </p>
                </div>
              )} />}
            />
            <Bar dataKey="Compras" radius={4} barSize={30} fill="#1a9cd9" label={renderCustomBarLabel} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
