import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { formatMoney, formatPercent } from '@/utils';
import React from 'react'

interface AssociacaoProps {
    associacao: any;
    totais: any;
}

export default function Associacao({ associacao, totais }: AssociacaoProps) {
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
                {associacao?.sort((a: any, b: any) => (a.Faturamento < b.Faturamento ? 1 : -1)).map((assoc: any, fdx: number) => (
                    <TableRow key={fdx} className='text-gray-600'>
                        <TableCell>{assoc.Associacao}</TableCell>
                        <TableCell>{formatMoney(assoc.Faturamento)}</TableCell>
                        <TableCell>{formatPercent(assoc.RepFaturamento)}%</TableCell>
                        <TableCell>{formatPercent(assoc.Projecao)}%</TableCell>
                        <TableCell>{formatPercent(assoc.Margem)}%</TableCell>
                        <TableCell>{formatPercent(assoc.MetaAlcancada)}%</TableCell>
                        <TableCell>{formatPercent(assoc.Juros)}%</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
