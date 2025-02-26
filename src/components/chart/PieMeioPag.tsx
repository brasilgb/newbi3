"use client"
import { LabelList, Legend, Pie, PieChart, Tooltip } from "recharts"

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



const chartConfig = {
    name: {
        label: "Meio Pagamento",
    },
    crediario: {
        label: "Crediário",
        color: "hsl(var(--chart-1))",
    },
    cartao: {
        label: "Cartão",
        color: "hsl(var(--chart-2))",
    },
    avista: {
        label: "À Vista",
        color: "hsl(var(--chart-3))",
    },
    pix: {
        label: "Pix",
        color: "hsl(var(--chart-4))",
    },
    cartaopb: {
        label: "Cartão/PIX/Boleto",
        color: "hsl(var(--chart-5))",
    },
    cheque: {
        label: "Cheque",
        color: "hsl(var(--chart-6))",
    },
    geral: {
        label: "Geral",
        color: "hsl(var(--chart-7))",
    },
} satisfies ChartConfig

export function PieMeioPag({ data }: any) {

    function alteredData(meio: any) {
        const res = data?.filter((fl: any) => (fl.MeioPagamento == meio)).map((res: any) => (res.VendasTotal))[0] * 100;
        return parseFloat(res.toFixed(2));
    };
     
    const chartData = [
        { name: "Crediário ", value: alteredData('Crediário'), fill: "var(--color-crediario)" },
        { name: "Cartão ", value: alteredData('Cartão'), fill: "var(--color-cartao)" },
        { name: "À Vista ", value: alteredData('À Vista'), fill: "var(--color-avista)" },
        { name: "PIX ", value: alteredData('PIX'), fill: "var(--color-pix)" },
        { name: "Cartão/PIX/Boleto ", value: alteredData('Cartão/PIX/Boleto'), fill: "var(--color-cartaopb)" },
        { name: "Cheque ", value: alteredData('Cheque'), fill: "var(--color-cheque)" },
        // { name: "geral", value: alteredData('Geral'), fill: "var(--color-geral)" },
    ];

    return (
        <Card className="flex flex-col h-80">
            <CardHeader className="items-center pb-0 py-2">
                <CardTitle>Representatividade por meio pagamento</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 pb-0">
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square max-h-[250px] [&_.recharts-text]:fill-background"
                >
                    <PieChart >
                        <ChartTooltip
                            content={<ChartTooltipContent  />}
                        />
                        <Pie
                            data={chartData}
                            innerRadius={40}
                            outerRadius={75}
                            dataKey="value"
                            nameKey="name"
                            labelLine={true}
                            fill="#8884d8"
                            label={({ payload, ...props }) => {
                                return (
                                    <text
                                        cx={props.cx}
                                        cy={props.cy}
                                        x={props.x}
                                        y={props.y}
                                        textAnchor={props.textAnchor}
                                        dominantBaseline={props.dominantBaseline}
                                        fill="hsla(var(--foreground))"
                                    >
                                        {payload.value}%
                                    </text>
                                )
                            }}
                        />

                    </PieChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col gap-2 text-xs -mt-2">
                <div className="leading-none text-muted-foreground">
                    * O conjunto de dados contém valores negativos ou zerados que não podem ser mostrados
                </div>
            </CardFooter>
        </Card>
    )
}
