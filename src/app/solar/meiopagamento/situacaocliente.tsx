import MultiLineCliente from '@/components/chart/MultiLineCliente';
import { Card } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { formatMoney } from '@/utils';
import React, { Fragment, useEffect, useState } from 'react'

interface SituacaoClienteProps {
  situacaocli: any;
};

export default function SituacaoCliente({ situacaocli }: SituacaoClienteProps) {

  const valuesPlanos = (plano: string, situacao: string, campo: string) => {
    const planoPag = situacaocli?.allData.filter((fplano: any) => (fplano?.CodPlano == plano && fplano?.Situacao == situacao)).map((vd: any) => (campo == 'Vendas' ? vd?.Vendas : vd?.QtdCliente));
    return planoPag;
  }

  return (
    <main className='animate__animated animate__fadeIn'>
      <div>
        <MultiLineCliente data={situacaocli?.graficoCliente} />
      </div>
      <Card className="mt-4 h-72 overflow-auto">
        <div className='p-4'>
          <Table className="has-sticky-header">
            <TableHeader className='sticky top-0 z-10'>
              <TableRow className='text-gray-700 bg-gray-100'>
                <TableHead className='text-center'><></></TableHead>
                {situacaocli?.situacao.map((situ: any, sdx: number) => (
                  <Fragment key={sdx}>
                    <TableHead colSpan={2} className='sm:text-base text-xs text-center'>
                      <div className='border-b-2 border-gray-300'>{situ}</div>
                    </TableHead>
                  </Fragment>
                ))}
              </TableRow>
              <TableRow className='text-gray-700 bg-gray-100 sm:text-sm text-xs'>
                <TableHead>Plano Pagto.</TableHead>
                {situacaocli?.situacao.map((situ: any, sdx: number) => (
                  <Fragment key={sdx}>
                    <TableHead>Venda</TableHead>
                    <TableHead>Cliente</TableHead>
                  </Fragment>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {situacaocli?.allPlanos.map((plano: any, fdx: number) => (
                <TableRow key={fdx} className={`text-gray-500 text-base ${fdx % 2 === 1 ? 'bg-gray-100' : 'bg-gray-50'} sm:text-base text-xs`}>
                  <TableCell>{plano}</TableCell>
                  {situacaocli?.situacao.map((situ: any, ddx: number) => (
                    <Fragment key={ddx}>
                      <TableCell>{formatMoney(valuesPlanos(plano, situ, 'Vendas'))}</TableCell>
                      <TableCell>{valuesPlanos(plano, situ, 'QtdCliente')}</TableCell>
                    </Fragment>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>
    </main>
  )
}
