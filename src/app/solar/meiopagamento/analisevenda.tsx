import { BarMeioPag } from '@/components/chart/BarPerformance';
import { PieMeioPag } from '@/components/chart/PieMeioPag';
import Kpis from '@/components/Kpis';
import { Card } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { formatMoney, formatPercent } from '@/utils';
import { ChartLine, ChartNoAxesCombined, DollarSign, TrendingUp } from 'lucide-react';
import React, { Fragment } from 'react'

interface AnaliseVendaProps {
    analise: any;
}
export default function AnaliseVenda({ analise }: AnaliseVendaProps) {

    const valuesFiliais = (meio: string, filial: string, campo: string) => {
        const meiofilial = analise?.meioPagFilial.filter((fmeio: any) => (fmeio?.MeioPagamento == meio && fmeio?.NomeFilial == filial)).map((vd: any) => (campo == 'VendaDevolucao' ? vd?.VendaDevolucao : vd?.PercentVenda));
        return meiofilial;
    }
    return (
        <>
            {analise.meioPagTotal?.map((mpt: any, mdx: number) => (
                <div key={mdx} className='grid sm:grid-cols-6 gap-4 mt-4'>
                    <Kpis
                        title="Meta Rede"
                        value={formatMoney(mpt?.MetaRede)}
                        icon={<ChartLine />}
                        footer={undefined}
                    />
                    <Kpis
                        title="Vendas Rede"
                        value={formatMoney(mpt?.VenDevRede)}
                        icon={<DollarSign />}
                        footer={undefined}
                    />
                    <Kpis
                        title="Vendas s/Meta"
                        value={formatPercent(mpt?.VendaSMetaRede) + '%'}
                        icon={<DollarSign />}
                        footer={undefined}
                    />
                    <Kpis
                        title="Margem Contrib."
                        value={formatPercent(mpt?.MargemContribRede) + '%'}
                        icon={<ChartNoAxesCombined />}
                        footer={undefined}
                    />
                    <Kpis
                        title="Juros"
                        value={formatMoney(mpt?.ValJurosRede)}
                        icon={<TrendingUp />}
                        footer={undefined}
                    />
                    <Kpis
                        title="Juros"
                        value={formatPercent(mpt?.PercJurosRede) + '%'}
                        icon={<TrendingUp />}
                        footer={undefined}
                    />
                </div>
            ))}

            <div className='sm:grid grid-cols-2 gap-4 mt-4'>
                <Card className='p-4 h-80 overflow-auto'>
                    <Table className=''>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Meio Pagamento</TableHead>
                                <TableHead>Venda/Devolução</TableHead>
                                <TableHead>% Venda s/Tot</TableHead>
                                <TableHead>Qtd.Cliente</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {analise.meioPagTotal?.map((total: any, tdx: number) => (
                                <TableRow key={tdx} className='text-gray-800 bg-gray-50'>
                                    <TableCell>Total</TableCell>
                                    <TableCell>{formatMoney(total.VenDevRede)}</TableCell>
                                    <TableCell>{formatPercent(total.VendasTotal)}%</TableCell>
                                    <TableCell>{total.QtdCliMesAno}</TableCell>
                                </TableRow>
                            ))}
                            {analise.meioPag?.sort((a: any, b: any) => (a.VendaDevolucao < b.VendaDevolucao ? 1 : -1)).map((mpag: any, mdx: number) => (
                                <TableRow key={mdx} className='text-gray-600'>
                                    <TableCell>{mpag.MeioPagamento}</TableCell>
                                    <TableCell>{formatMoney(mpag.VendaDevolucao)}</TableCell>
                                    <TableCell>{formatPercent(mpag.VendasTotal)}%</TableCell>
                                    <TableCell>{mpag.QtdCliMesAno}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Card>

                <div>
                    <PieMeioPag data={analise?.meioPag} />
                </div>
            </div>
            <Card className='h-96 mt-4 relative overflow-auto z-0'>
                <div className='p-4'>
                    <Table className="has-sticky-header">
                        <TableHeader className='sticky top-0 z-50'>
                            <TableRow className='text-gray-700 bg-gray-100'>
                                <TableHead><></></TableHead>
                                {analise?.allMeios?.map((meio: any, mdx: number) => (
                                    meio != '-' && meio != 'Cartão/PIX/Boleto' && meio != 'Geral' && meio != 'Cheque' &&
                                    <TableHead colSpan={2} key={mdx} className='sm:text-base text-xs text-center'>{meio}</TableHead>
                                ))}
                                <TableHead colSpan={2} className='sm:text-base text-xs text-center'>Cartão/PIX/Boleto</TableHead>
                                <TableHead colSpan={2} className='sm:text-base text-xs text-center'>Cheque</TableHead>
                                <TableHead colSpan={2} className='sm:text-base text-xs text-center'>Geral</TableHead>
                            </TableRow>
                            <TableRow className='text-gray-700 bg-gray-100 sm:text-base text-xs'>
                                <TableHead className='text-center'>Filial</TableHead>
                                {analise?.allMeios?.map((meio: any, mdx: number) => (
                                    meio != '-' && meio != 'Cartão/PIX/Boleto' && meio != 'Geral' && meio != 'Cheque' &&
                                    <Fragment key={mdx}>
                                        <TableHead className='text-sm'>Venda Devolução</TableHead>
                                        <TableHead className='text-sm'>% Venda</TableHead>
                                    </Fragment>
                                ))}
                                <TableHead className='text-sm'>Venda Devolução</TableHead>
                                <TableHead className='text-sm'>% Venda</TableHead>
                                <TableHead className='text-sm'>Venda Devolução</TableHead>
                                <TableHead className='text-sm'>% Venda</TableHead>
                                <TableHead className='text-sm'>Venda Devolução</TableHead>
                                <TableHead className='text-sm'>% Venda</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {analise?.allFiliais?.map((filial: any, fdx: number) => (
                                filial != '-' &&
                                <TableRow key={fdx} className={`text-gray-500 text-base ${fdx % 2 === 1 ? 'bg-gray-100' : 'bg-gray-50'} sm:text-base text-xs`}>
                                    <TableCell>{filial}</TableCell>
                                    {analise?.allMeios?.map((meio: any, fdx: number) => (
                                        meio != '-' && meio != 'Cartão/PIX/Boleto' && meio != 'Geral' && meio != 'Cheque' &&
                                        <Fragment key={fdx}>
                                            <TableCell>{formatMoney(valuesFiliais(meio, filial, 'VendaDevolucao'))}</TableCell>
                                            <TableCell>{formatPercent(valuesFiliais(meio, filial, 'PercentVenda'))}%</TableCell>
                                        </Fragment>
                                    ))}
                                    <TableCell>{formatMoney(valuesFiliais('Cartão/PIX/Boleto', filial, 'VendaDevolucao'))}</TableCell>
                                    <TableCell>{formatPercent(valuesFiliais('Cartão/PIX/Boleto', filial, 'PercentVenda'))}%</TableCell>
                                    <TableCell>{formatMoney(valuesFiliais('Cheque', filial, 'VendaDevolucao'))}</TableCell>
                                    <TableCell>{formatPercent(valuesFiliais('Cheque', filial, 'PercentVenda'))}%</TableCell>
                                    <TableCell>{formatMoney(valuesFiliais('Geral', filial, 'VendaDevolucao'))}</TableCell>
                                    <TableCell>{formatPercent(valuesFiliais('Geral', filial, 'PercentVenda'))}%</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </Card>
        </>
    )
}
