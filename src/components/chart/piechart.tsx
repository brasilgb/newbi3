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

    function alteredData(meio: any){
        const res = data?.filter((fl: any) => (fl.MeioPagamento == meio)).map((res: any) => (res.VendasTotal))[0]*100;
        return parseFloat(res.toFixed(2));
    };

    const chartData = [
        { name: "crediario", value: alteredData('Crediário'), fill: "var(--color-crediario)" },
        { name: "cartao", value: alteredData('Cartão'), fill: "var(--color-cartao)" },
        { name: "avista", value: alteredData('À Vista'), fill: "var(--color-avista)" },
        { name: "pix", value: alteredData('PIX'), fill: "var(--color-pix)" },
        { name: "cartaopb", value: alteredData('Cartão/PIX/Boleto'), fill: "var(--color-cartaopb)" },
        { name: "cheque", value: alteredData('Cheque'), fill: "var(--color-cheque)" },
        // { name: "geral", value: alteredData('Geral'), fill: "var(--color-geral)" },
    ]
    console.log(chartData);
    
    const style = {
        top: '50%',
        right: -200,
        transform: 'translate(0, -50%)',
        lineHeight: '24px',
    };

    return (
        <Card className="flex flex-col h-80">
            <CardHeader className="items-center pb-0 py-2">
                <CardTitle>Representatividade por meio pagamento</CardTitle>
                <CardDescription>02/2024</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 pb-0">
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square max-h-[240px] [&_.recharts-text]:fill-background"
                >
                    <PieChart >
                        <ChartTooltip
                            content={<ChartTooltipContent nameKey="name" label />}
                        />
                        <Pie
                            data={chartData}
                            dataKey="value"
                            nameKey="name"
                            labelLine={false}
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
                        {payload.visitors}
                      </text>
                    )
                  }}
                        >
                            <LabelList
                                dataKey="value"
                                className="fill-background"
                                stroke="none"
                                fontSize={14}
                            />
                        </Pie>
                        <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
                    </PieChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col gap-2 text-xs">
                <div className="leading-none text-muted-foreground">
                    * O conjunto de dados contém valores negativos ou zerados que não podem ser mostrados
                </div>
            </CardFooter>
        </Card>
    )
}
