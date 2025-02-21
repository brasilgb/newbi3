import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { formatMoney, formatPercent } from '@/utils';
import React from 'react'

interface FiliaisProps {
    meses: any;
    totais: any;
}

export default function PerfMes({ meses, totais }: FiliaisProps) {
    return (
        <Table className=''>
            <TableHeader>
                <TableRow>
                    <TableHead>Mês/Ano</TableHead>
                    <TableHead>Meta</TableHead>
                    <TableHead>Média Fat.</TableHead>
                    <TableHead>Margem</TableHead>
                    <TableHead>Rep.Fat.</TableHead>
                    <TableHead>Meta</TableHead>
                    <TableHead>Média Juros</TableHead>
                    <TableHead>Rep. Juros</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {totais?.map((total: any, tdx: number) => (
                    <TableRow key={tdx} className='text-gray-800 bg-gray-50'>
                        <TableCell>Total</TableCell>
                        <TableCell>{formatMoney(total.MetaMes)}</TableCell>
                        <TableCell>{formatMoney(total.MediaFatuMes)}</TableCell>
                        <TableCell>{formatPercent(total.MargemMes)}%</TableCell>
                        <TableCell>{formatPercent(total.RepFatuMes)}%</TableCell>
                        <TableCell>{formatPercent(total.MetaAlcancadaMes)}%</TableCell>
                        <TableCell>{formatMoney(total.MedJurSParcMes)}</TableCell>
                        <TableCell>{formatPercent(total.RepJurosMes)}%</TableCell>
                    </TableRow>
                ))}
                {meses?.map((mes: any, mdx: number) => (
                    <TableRow key={mdx} className='text-gray-600'>
                        <TableCell>{mes.MesAno}</TableCell>
                        <TableCell>{formatMoney(mes.Meta)}</TableCell>
                        <TableCell>{formatMoney(mes.MediaFatu)}</TableCell>
                        <TableCell>{formatPercent(mes.Margem)}%</TableCell>
                        <TableCell>{formatPercent(mes.RepFatu)}%</TableCell>
                        <TableCell>{formatPercent(mes.MetaAlcancada)}%</TableCell>
                        <TableCell>{formatMoney(mes.MedJurSParc)}</TableCell>
                        <TableCell>{formatPercent(mes.RepJuros)}%</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
