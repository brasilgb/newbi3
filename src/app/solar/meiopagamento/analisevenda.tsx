import { PieMeioPag } from '@/components/chart/piechart';
import Kpis from '@/components/Kpis';
import { Card } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { formatMoney, formatPercent } from '@/utils';
import { ChartLine, ChartNoAxesCombined, DollarSign, TrendingUp } from 'lucide-react';
import React from 'react'

interface AnaliseVendaProps {
    analise: any;
}
export default function AnaliseVenda({ analise }: AnaliseVendaProps) {

    const valuesPlanos = (plano: string, situacao: string, campo: string) => {
        const planoPag = analise.filter((fplano: any) => (fplano?.CodPlano == plano && fplano?.Situacao == situacao)).map((vd: any) => (campo == 'Vendas' ? vd?.Vendas : vd?.QtdCliente));
        return planoPag;
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
        </>
    )
}
