import { SquareCheck } from "lucide-react"
import { Area, Bar, CartesianGrid, ComposedChart, Legend, Line, XAxis, YAxis } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
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
import { formatMoney } from "@/utils"
import { useAuthContext } from "@/contexts/authcontext"
import moment from "moment"

const chartConfig = {
    ValorCredito: {
        label: "Vendas",
        color: "hsl(var(--chart-1))",
    },
} satisfies ChartConfig

interface ComboChartProps {
    data: any;
}

export default function PerformChart({ data }: ComboChartProps) {
    const {filterDate} = useAuthContext();
    const [chartData, setChartData] = useState<any>([]);

    useEffect(() => {
        const getChartData = async () => {
            const newData = await data?.map((value: any) => ({
                DiaSemana: value?.DiaSemana,
                Venda: parseFloat(value?.Vendas),
                Margem: (parseFloat(value?.Margem) * (parseFloat(value?.Vendas))),
                Meta: parseFloat(value?.Meta)
            }));
            setChartData(newData);
        };
        getChartData();
    }, [data, setChartData]);

    return (
        <Card className="shadow-none">
            <CardHeader>
                <CardTitle className="text-sm text-gray-500">Gráfico de Evolução de Vendas</CardTitle>
                <CardDescription>{moment(filterDate).format("MM/YYYY")}</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig} className="max-h-[215px] w-full">
                    <ComposedChart data={chartData}>
                        <XAxis
                            dataKey="DiaSemana"
                            tickLine={true}
                            axisLine={false}
                            tickMargin={8}
                        />
                        <YAxis />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent formatter={(value: any, name, props: any) => (
                                <div>
                                    <p className="flex items-center gap-2">
                                        {name == 'Venda' && <SquareCheck color={props.color} className={`w-4 h-4`} />}
                                        {name == 'Venda' && name + ': ' + formatMoney(value)}
                                    </p>
                                    <p className="flex items-center gap-2">
                                        {name == 'Margem' && <SquareCheck color={props.color} className={`w-4 h-4`} />}
                                        {name == 'Margem' && name + ': ' + ((value / props.payload.Venda) * 100).toFixed(2) + '%'}
                                    </p>
                                    <p className="flex items-center gap-2">
                                        {name == 'Meta' && <SquareCheck color={props.color} className={`w-4 h-4`} />}
                                        {name == 'Meta' && name + ': ' + formatMoney(value)}
                                    </p>
                                </div>
                            )} />}
                        />
                        <Legend />
                        <CartesianGrid stroke="#f5f5f5" />
                        <Bar dataKey="Venda" barSize={20} fill="#1a9cd9" />
                        <Line type="monotone" dataKey="Meta" stroke="#99aa03" />
                        <Line type="monotone" dataKey="Margem" stroke="#e54757" />
                    </ComposedChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}