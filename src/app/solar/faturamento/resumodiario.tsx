import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { formatMoney, formatPercent } from '@/utils';
import React from 'react'

interface ResumoDiarioProps {
    resumos: any;
    totais: any;
}

export default function ResumoDiario({ resumos, totais }: ResumoDiarioProps) {
    return (
        <Table className=''>
            <TableHeader>
                <TableRow>
                    <TableHead>Associação</TableHead>
                    <TableHead>Venda Dia (19)</TableHead>
                    <TableHead>Margem</TableHead>
                    <TableHead>Venda Dia (18)</TableHead>
                    <TableHead>Margem</TableHead>
                    <TableHead>Venda Semana</TableHead>
                    <TableHead>Margem</TableHead>
                    <TableHead>Venda Mês</TableHead>
                    <TableHead>Margem</TableHead>
                    <TableHead></TableHead>
                    <TableHead>Rep.</TableHead>
                    <TableHead></TableHead>
                    <TableHead>Juros Mês</TableHead>
                    <TableHead>Rep.</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {totais?.map((total: any, tdx: number) => (
                    <TableRow key={tdx} className='text-gray-800 bg-gray-50'>
                        <TableCell>Total</TableCell>
                        <TableCell>{formatMoney(total.FatuDia)}</TableCell>
                        <TableCell>{formatPercent(total.MargemDia)}%</TableCell>
                        <TableCell>{formatMoney(total.FatuAnterior)}</TableCell>
                        <TableCell>{formatPercent(total.MargemAnterior)}%</TableCell>
                        <TableCell>{formatMoney(total.FatuSemana)}</TableCell>
                        <TableCell>{formatPercent(total.MargemSemana)}%</TableCell>
                        <TableCell>{formatMoney(total.FatuMes)}</TableCell>
                        <TableCell>{formatPercent(total.MargemMes)}%</TableCell>
                        <TableCell></TableCell>
                        <TableCell>{formatPercent(total.RepFatu)}%</TableCell>
                        <TableCell></TableCell>
                        <TableCell>{formatMoney(total.JurosSPM)}</TableCell>
                        <TableCell>{formatPercent(total.RepSemFatu)}%</TableCell>
                    </TableRow>
                ))}
                {resumos?.sort((a:any, b:any) => (a.FatuMes < b.FatuMes ? 1 : -1)).map((resumo: any, fdx: number) => (
                    <TableRow key={fdx} className='text-gray-600'>
                        <TableCell>{resumo.Associacao}</TableCell>
                        <TableCell>{formatMoney(resumo.FatuDia)}</TableCell>
                        <TableCell>{formatPercent(resumo.MargemDia)}%</TableCell>
                        <TableCell>{formatMoney(resumo.FatuAnterior)}</TableCell>
                        <TableCell>{formatPercent(resumo.MargemAnterior)}%</TableCell>
                        <TableCell>{formatMoney(resumo.FatuSemana)}</TableCell>
                        <TableCell>{formatPercent(resumo.MargemSemana)}%</TableCell>
                        <TableCell>{formatMoney(resumo.FatuMes)}</TableCell>
                        <TableCell>{formatPercent(resumo.MargemMes)}%</TableCell>
                        <TableCell></TableCell>
                        <TableCell>{formatPercent(resumo.RepFatu)}%</TableCell>
                        <TableCell></TableCell>
                        <TableCell>{formatMoney(resumo.JurosSPM)}</TableCell>
                        <TableCell>{formatPercent(resumo.RepSemFatu)}%</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
