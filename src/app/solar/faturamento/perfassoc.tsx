import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { formatMoney, formatPercent } from '@/utils';
import React from 'react'

interface FiliaisProps {
    assocs: any;
    totais: any;
}

export default function PerfAssoc({ assocs, totais }: FiliaisProps) {
    return (
        <Table className=''>
            <TableHeader>
                <TableRow>
                    <TableHead>Associação</TableHead>
                    <TableHead>Faturamento</TableHead>
                    <TableHead>Margem</TableHead>
                    <TableHead>Rep.</TableHead>
                    <TableHead>Juros</TableHead>
                    <TableHead>Rep.</TableHead>
                    <TableHead>Estoque</TableHead>
                    <TableHead>Giro</TableHead>
                    <TableHead>Rep.Est.</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {totais?.map((total: any, tdx: number) => (
                    <TableRow key={tdx} className='text-gray-800 bg-gray-50'>
                        <TableCell>Total</TableCell>
                        <TableCell>{formatMoney(total.FaturamentoAss)}</TableCell>
                        <TableCell>{formatPercent(total.MargemAss)}</TableCell>
                        <TableCell>{formatPercent(total.RepFatAss)}%</TableCell>
                        <TableCell>{formatMoney(total.JurSFatAss)}</TableCell>
                        <TableCell>{formatPercent(total.RepJurosAss)}%</TableCell>
                        <TableCell>{formatMoney(total.EstoqueAss)}</TableCell>
                        <TableCell>{total.GiroAss}</TableCell>
                        <TableCell>{formatPercent(total.RepEstoqueAss)}%</TableCell>
                    </TableRow>
                ))}
                {assocs?.sort((a:any, b:any) => (a.Faturamento < b.Faturamento ? 1 : -1)).map((assoc: any, fdx: number) => (
                    <TableRow key={fdx} className='text-gray-600'>
                        <TableCell>{assoc.Assoc}</TableCell>
                        <TableCell>{formatMoney(assoc.Faturamento)}</TableCell>
                        <TableCell>{formatPercent(assoc.Margem)}</TableCell>
                        <TableCell>{formatPercent(assoc.RepFat)}%</TableCell>
                        <TableCell>{formatMoney(assoc.JurSFat)}</TableCell>
                        <TableCell>{formatPercent(assoc.RepJuros)}%</TableCell>
                        <TableCell>{formatMoney(assoc.Estoque)}</TableCell>
                        <TableCell>{assoc.Giro}</TableCell>
                        <TableCell>{formatPercent(assoc.RepEstoque)}%</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
