import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { formatMoney, formatPercent } from '@/utils';
import React from 'react'

interface FiliaisProps {
    filiais: any;
    totais: any;
}

export default function Filiais({ filiais, totais }: FiliaisProps) {
    return (
        <Table className=''>
            <TableHeader>
                <TableRow>
                    <TableHead>Filial</TableHead>
                    <TableHead>Faturamento</TableHead>
                    <TableHead>Rep. Fatu</TableHead>
                    <TableHead>Projeção</TableHead>
                    <TableHead>Margem</TableHead>
                    <TableHead>Meta</TableHead>
                    <TableHead>Juros</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {totais?.map((total: any, tdx: number) => (
                    <TableRow key={tdx} className='text-gray-800 bg-gray-50'>
                        <TableCell>Total</TableCell>
                        <TableCell>{formatMoney(total.Faturamento)}</TableCell>
                        <TableCell>100%</TableCell>
                        <TableCell>{formatPercent(total.Projecao)}%</TableCell>
                        <TableCell>{formatPercent(total.Margem)}%</TableCell>
                        <TableCell>{formatPercent(total.MetaAlcancada)}%</TableCell>
                        <TableCell>{formatPercent(total.Juros)}%</TableCell>
                    </TableRow>
                ))}
                {filiais?.sort((a:any, b:any) => (a.Faturamento < b.Faturamento ? 1 : -1)).map((filial: any, fdx: number) => (
                    <TableRow key={fdx} className='text-gray-600'>
                        <TableCell>{filial.Filial}</TableCell>
                        <TableCell>{formatMoney(filial.Faturamento)}</TableCell>
                        <TableCell>{formatPercent(filial.RepFaturamento)}%</TableCell>
                        <TableCell>{formatPercent(filial.Projecao)}%</TableCell>
                        <TableCell>{formatPercent(filial.Margem)}%</TableCell>
                        <TableCell>{formatPercent(filial.MetaAlcancada)}%</TableCell>
                        <TableCell>{formatPercent(filial.Juros)}%</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
