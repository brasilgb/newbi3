
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { formatMoney } from '@/utils';
import React from 'react';

interface CompDiaProps {
    compdia: any;
    totais: any;
};

export default function CompDia({ compdia, totais }: CompDiaProps) {

    return (
        <Table>
            <TableHeader>
                <TableRow className="">
                    <TableHead className="w-16">Associação</TableHead>
                    <TableHead className="w-16">
                        Compra dia {totais.map((d: any) => d.DiaAtual)}
                    </TableHead>
                    <TableHead className="w-16">
                        Compra dia {totais.map((d: any) => d.DiaAnterior)}
                    </TableHead>
                    <TableHead className="w-16">Compra Semana</TableHead>
                    <TableHead className="w-16">Compra Mês</TableHead>
                    <TableHead className="w-16">Rep.</TableHead>
                    <TableHead className="w-16">Prazo médio</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow className="bg-blue-50 text-gray-600 font-bold">
                    <TableCell>Total</TableCell>
                    <TableCell>{formatMoney(totais[0]?.CompraDia)}</TableCell>
                    <TableCell>{formatMoney(totais[0]?.CompraAnterior)}</TableCell>
                    <TableCell>{formatMoney(totais[0]?.CompraSemana)}</TableCell>
                    <TableCell>{formatMoney(totais[0]?.CompraMes)}</TableCell>
                    <TableCell>{(totais[0]?.Rep * 100).toFixed(2)}%</TableCell>
                    <TableCell>{totais[0]?.PrazoMedio}</TableCell>
                </TableRow>
                {compdia?.sort((a: any, b: any) =>
                    parseInt(a.CompraMes) < parseInt(b.CompraMes) ? 1 : -1
                )
                    .map((comp: any, idx: number) => (
                        <TableRow
                            key={idx}
                            className={`${idx % 2 === 0 ? 'bg-gray-100' : 'bg-neutral-50'} text-gray-500 hover:bg-red-50`}
                        >
                            <TableCell>{comp.Assoc}</TableCell>
                            <TableCell>{formatMoney(comp?.CompraDia)}</TableCell>
                            <TableCell>{formatMoney(comp?.CompraAnterior)}</TableCell>
                            <TableCell>{formatMoney(comp?.CompraSemana)}</TableCell>
                            <TableCell>{formatMoney(comp?.CompraMes)}</TableCell>
                            <TableCell>{(comp?.Rep * 100).toFixed(2)}%</TableCell>
                            <TableCell>{comp?.PrazoMedio}</TableCell>
                        </TableRow>
                    ))}
            </TableBody>
        </Table>
    );
};
