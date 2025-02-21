import PerformChart from '@/components/chart/performance';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { formatMoney, formatPercent } from '@/utils';
import React from 'react'

interface PerformanceProps {
    grafico: any;
    totais: any;
}

export default function Performance({ grafico, totais }: PerformanceProps) {
    return (
        <>
            <div className='mt-4'>
                <div className="bg-solar-blue-primary rounded-t-md text-sm uppercase font-semibold text-white px-2 py-1">Performance Mês</div>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Meta</TableHead>
                            <TableHead>Venda</TableHead>
                            <TableHead>Falta Vender</TableHead>
                            <TableHead>Meta</TableHead>
                            <TableHead>Atingido</TableHead>
                            <TableHead>Perf.</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {totais?.map((total: any, tdx: number) => (
                            <TableRow key={tdx} className='text-gray-800 bg-gray-50'>
                                <TableCell>{formatMoney(total.MetaMes)}</TableCell>
                                <TableCell>{formatMoney(total.VendaMes)}</TableCell>
                                <TableCell>{formatMoney(total.FaltaVenderMes)}</TableCell>
                                <TableCell>{formatPercent(total.MetaParcMes)}%</TableCell>
                                <TableCell>{formatPercent(total.AtingidoMes)}%</TableCell>
                                <TableCell>{formatPercent(total.PerfAtualMes)}%</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            <div className='mt-4'>
                <div className="bg-solar-blue-primary rounded-t-md text-sm uppercase font-semibold text-white px-2 py-1">Performance Dia</div>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Meta</TableHead>
                            <TableHead>Venda</TableHead>
                            <TableHead>Falta Vender</TableHead>
                            <TableHead>Meta</TableHead>
                            <TableHead>Juros</TableHead>
                            <TableHead>Juros%</TableHead>
                            <TableHead>Media</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {totais?.map((total: any, tdx: number) => (
                            <TableRow key={tdx} className='text-gray-800 bg-gray-50'>
                                <TableCell>{formatMoney(total.MetaDia)}</TableCell>
                                <TableCell>{formatMoney(total.VendaDia)}</TableCell>
                                <TableCell>{formatMoney(total.FaltaVenderDia)}</TableCell>
                                <TableCell>{formatPercent(total.PerfMetaDia)}%</TableCell>
                                <TableCell>{formatMoney(total.JurSParcDia)}</TableCell>
                                <TableCell>{formatPercent(total.PerfJurDia)}%</TableCell>
                                <TableCell>{formatMoney(total.MediaDia)}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            <div className='mt-4'>
                  <PerformChart data={grafico} />      
            </div>
        </>
    )
}
