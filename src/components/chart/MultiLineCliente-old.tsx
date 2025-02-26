"use client"

import { SquareCheck, TrendingUp } from "lucide-react"
import { CartesianGrid, Legend, Line, LineChart, XAxis, YAxis } from "recharts"

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
import { useEffect, useState } from "react"
const chartData = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
]

const chartConfig = {
    Auais: {
        label: "Atuais",
        color: "hsl(var(--chart-1))",
    },
    Novos: {
        label: "Novos",
        color: "hsl(var(--chart-2))",
    },
    Recuperados: {
        label: "Recuperados",
        color: "hsl(var(--chart-2))",
    },
} satisfies ChartConfig

interface MultilineClienteProps {
    datachart: any;
}

export default function MultiLineCliente({ datachart }: MultilineClienteProps) {

    // const mes = data?.map((value: any) => value.DataChave.toString().slice(4, 6));
    // const cliPlano = data?.map((value: any) => value.CodPlano).filter((value: any, index: any, self: any) => self.indexOf(value) === index).sort((a: any, b: any) => (a > b ? 1 : -1));
    // const cliAtuais = data?.sort((a: any, b: any) => (a.CodPlano > b.CodPlano ? 1 : -1)).filter((fl: any) => (fl.Situacao === 'Atuais')).map((value: any) => value.QtdCliente);
    // const cliNovos = datachart?.sort((a: any, b: any) => (a.CodPlano > b.CodPlano ? 1 : -1)).filter((fl: any) => (fl.Situacao === 'Novos')).map((value: any) => value.QtdCliente);
    // const cliRecuperados = datachart?.sort((a: any, b: any) => (a.CodPlano > b.CodPlano ? 1 : -1)).filter((fl: any) => (fl.Situacao === 'Recuperados')).map((value: any) => value.QtdCliente);
    const [chartData, setChartData] = useState<any>([]);

    useEffect(() => {
        const getChartData = () => {
            const newData = datachart?.map((dt: any) => ([
                dt?.map((value: any) => ({Plano: value.CodPlano})).filter((value: any, index: any, self: any) => self.indexOf(value) === index).sort((a: any, b: any) => (a > b ? 1 : -1)),
                dt?.filter((fl: any) => (fl.Situacao == 'Atuais')).map((value: any) => ({Atuais: value.QtdCliente})),
                dt?.filter((fl: any) => (fl.Situacao == 'Novos')).map((value: any) => ({Novos: value.QtdCliente})),
                dt?.filter((fl: any) => (fl.Situacao == 'Recuperados')).map((value: any) => ({Recuperados: value.QtdCliente}))
            ]));
            setChartData(newData);
        };
        getChartData();
    }, [datachart]);
    console.log(chartData);


    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-sm text-gray-500">Análise de Vencidos e projeção de vencidos por Ano/Mês da Emissão do Carnê</CardTitle>
                {/* <CardDescription>{chartData[0]?.MesAno} a {chartData[chartData.length - 1]?.MesAno}</CardDescription> */}
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig} className="max-h-[215px] w-full">
                    <LineChart
                        accessibilityLayer
                        data={chartData}
                        margin={{
                            left: 12,
                            right: 12,
                        }}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="Plano"
                            tickLine={true}
                            axisLine={false}
                            tickMargin={8}
                        />
                        <YAxis />
                        <ChartTooltip cursor={false} content={<ChartTooltipContent formatter={(value: any, name, props: any) => (
                            <div>
                                <p className="flex items-center gap-2">
                                    {name == 'Atuais' && <SquareCheck color={props.color} className={`w-4 h-4`} />}
                                    {name == 'Atuais' && name + ': ' + (value).toFixed(2) + '%'}
                                </p>
                                <p className="flex items-center gap-2">
                                    {name == 'Novos' && <SquareCheck color={props.color} className={`w-4 h-4`} />}
                                    {name == 'Novos' && name + ': ' + (value).toFixed(2) + '%'}
                                </p>
                                <p className="flex items-center gap-2">
                                    {name == 'Recuperados' && <SquareCheck color={props.color} className={`w-4 h-4`} />}
                                    {name == 'Recuperados' && name + ': ' + (value).toFixed(2) + '%'}
                                </p>
                            </div>
                        )} />} />
                        <Legend />
                        <CartesianGrid stroke="#f5f5f5" />
                        <Line
                            dataKey="Atuais"
                            type="monotone"
                            stroke="#e54757"
                            strokeWidth={2}
                        />
                        <Line
                            dataKey="Novos"
                            type="monotone"
                            stroke="#bccf00"
                            strokeWidth={2}
                        />
                        <Line
                            dataKey="Recuperados"
                            type="monotone"
                            stroke="#bccf00"
                            strokeWidth={2}
                        />
                    </LineChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}
