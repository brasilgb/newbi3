'use client'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { formatMoney } from '@/utils';
import React from 'react'

interface PerformAssocProps {
  performdata: any;
  totais: any;
}

export default function PerformAssoc({ performdata, totais }: PerformAssocProps) {
  return (
    <Table className="text-gray-50">
      <TableHeader>
        <TableRow className="">
          <TableHead className="w-16">Associação</TableHead>
          <TableHead className="w-16">Compras</TableHead>
          <TableHead className="w-16">Rep.</TableHead>
          <TableHead className="w-16">Prazo médio</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow className="bg-blue-50 text-gray-600 font-bold">
          <TableHead>Total</TableHead>
          <TableHead>{formatMoney(totais[0]?.ComprasAssoc)}</TableHead>
          <TableHead>{(totais[0]?.RepAssoc * 100).toFixed(2)}%</TableHead>
          <TableHead>{totais[0]?.PrazoMedioAssoc}</TableHead>
        </TableRow>
        {performdata?.sort((a: any, b: any) =>
          parseInt(a.Compras) < parseInt(b.Compras) ? 1 : -1
        )
          .map((associacao: any, idx: number) => (
            <TableRow
              key={idx}
              className={`${idx % 2 === 0 ? 'bg-gray-100' : 'bg-neutral-50'} text-gray-500 hover:bg-red-50`}
            >
              <TableCell>{associacao.Assoc}</TableCell>
              <TableCell>{formatMoney(associacao?.Compras)}</TableCell>
              <TableCell>{(associacao?.Rep * 100).toFixed(2)}%</TableCell>
              <TableCell>{associacao?.PrazoMedio}</TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  )
}
