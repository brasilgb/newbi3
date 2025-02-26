import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import birel from '@/services/birel';
import { formatMoney } from '@/utils';
import React, { useEffect, useState } from 'react';

interface VencidosProps {
    vencidosData: any;
}

export default function Vencidos({vencidosData}: VencidosProps){

  // Extração de dados resumos filiais

  return (
      <Table className="text-gray-50">
        <TableHeader>
          <TableRow className="">
            <TableHead className="w-16">Faixa de vencidos</TableHead>
            <TableHead className="w-16">Valor vencido</TableHead>
            <TableHead className="w-16">Rep.Vencido</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className="bg-blue-50 text-gray-600 font-bold">
            <TableCell>Total</TableCell>
            <TableCell>{formatMoney(vencidosData?.vencidosTotais[0]?.ValorVencido)}</TableCell>
            <TableCell>{(parseFloat(vencidosData?.vencidosTotais[0]?.RepVencido) * 100).toFixed(2)}%</TableCell>
          </TableRow>
          {vencidosData?.vencidos
            .sort((a: any, b: any) =>
              parseInt(a.ordemFaixa) < parseInt(b.ordemFaixa) ? 1 : -1
            )
            .map((vencido: any, idx: number) => (
              <TableRow
                key={idx}
                className={`${idx % 2 === 0 ? 'bg-gray-100' : 'bg-neutral-50'} text-gray-500 hover:bg-red-50`}
              >
                <TableCell>{vencido?.FaixaVencidos}</TableCell>
                <TableCell>{formatMoney(vencido?.ValorVencido)}</TableCell>
                <TableCell>{(vencido?.RepVencido * 100).toFixed(2)}%</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
  );
};