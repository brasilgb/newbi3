'use client'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { formatMoney } from '@/utils'
import React from 'react'

interface PerformMesProps {
  performes: any;
  totais: any;
}

export default function PerformMes({ performes, totais }: PerformMesProps) {
  return (
    <Table className="text-gray-50">
      <TableHeader>
        <TableRow className="">
          <TableHead className="w-16">Mes/Ano</TableHead>
          <TableHead className="w-16">Média Compras</TableHead>
          <TableHead className="w-16">Rep.</TableHead>
          <TableHead className="w-16">Prazo médio</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow className="bg-blue-50 text-gray-600 font-bold">
          <TableCell>Total</TableCell>
          <TableCell>{formatMoney(totais[0]?.MediaCompraMes)}</TableCell>
          <TableCell>{(totais[0]?.RepMes * 100).toFixed(2)}%</TableCell>
          <TableCell>{totais[0]?.PrazoMedioMes}</TableCell>
        </TableRow>
        {performes?.sort((a: any, b: any) =>
          parseInt(a.AnoMesNum) < parseInt(b.AnoMesNum) ? 1 : -1
        )
          .map((mes: any, idx: number) => (
            <TableRow
              key={idx}
              className={`${idx % 2 === 0 ? 'bg-gray-100' : 'bg-neutral-50'} text-gray-500 hover:bg-red-50`}
            >
              <TableCell>{mes.MesAno}</TableCell>
              <TableCell>{formatMoney(mes?.MediaCompra)}</TableCell>
              <TableCell>{(mes?.Rep * 100).toFixed(2)}%</TableCell>
              <TableCell>{mes?.PrazoMedio}</TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  )
}
