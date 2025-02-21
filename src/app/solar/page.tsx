'use client';
import { RadialChart } from '@/components/chart/radial';
import Kpis from '@/components/Kpis';
import { useAuthContext } from '@/contexts/authcontext';
import birel from '@/services/birel';
import { formatPercent } from '@/utils';
import { Boxes, ChartSpline, DollarSign, HandCoins, TrendingDown, TrendingUp, TrendingUpDown } from 'lucide-react';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import Loading from '../loading';

export default function Loja() {
  const { setDateUpdate, filterDate, loading, setLoading } = useAuthContext();
  const [fatTotalLoja, setFatTotalLoja] = useState<any>();
  const [fatTotalAssoc, setFatTotalAssoc] = useState<any>();
  const [totalFaturamentoLoja, setTotalFaturamentoLoja] = useState<any>();
  const [inadimplencia, setInadimplencia] = useState<any>();

  useEffect(() => {
    const getFatTotalAssoc = async () => {
      setLoading(true);
      await birel.post('(LOJ_FAT_TOTPEFASM)', {
        datalojtotpefasm: moment(filterDate).format('YYYYMMDD'),
      })
        .then((res: any) => {
          setFatTotalAssoc(res.data.bi011.bidata[0]);

        })
        .catch((err: any) => {
          console.log(err);
        }).finally(() => setLoading(false));
    }
    getFatTotalAssoc();
  }, [filterDate]);

  useEffect(() => {
    const getFatTotalLoja = async () => {
      setLoading(true);
      await birel.post('(LOJ_FATU_TOTAL)', {
        datalojfatutotal: moment(filterDate).format('YYYYMMDD'),
      })
        .then((res: any) => {
          setFatTotalLoja(res.data.bi040.bidata[0]);
          setDateUpdate(res.data.bi040.bidata[0].Atualizacao);
        })
        .catch((err: any) => {
          console.log(err);
        }).finally(() => setLoading(false));
    }
    getFatTotalLoja();
  }, [filterDate]);

  useEffect(() => {
    const getTotalFaturamentoLoja = async () => {
      setLoading(true);
      await birel.post('(LOJ_FAT_FATUTO)', {
        datalojfatuto: moment(filterDate).format('YYYYMMDD'),
      })
        .then((res: any) => {
          setTotalFaturamentoLoja(res.data.bi007.bidata[0]);
        })
        .catch((err: any) => {
          console.log(err);
        }).finally(() => setLoading(false));
    }
    getTotalFaturamentoLoja();
  }, [filterDate]);

  useEffect(() => {
    const getInadimplencia = async () => {
      setLoading(true);
      await birel.get('(LOJVEN_INADIM)')
        .then((res: any) => {
          setInadimplencia(res.data.bi062.bidata[0]);
        })
        .catch((err: any) => {
          console.log(err);
        }).finally(() => setLoading(false));
    }
    getInadimplencia();
  }, [filterDate]);


  return (
    <>
      {loading && <Loading />}
      <div className='grid sm:grid-cols-5 gap-4'>
        <Kpis
          title="Vendas ao Mês"
          value={parseFloat(fatTotalLoja?.VendaAgora)}
          icon={<HandCoins />}
          footer="Valores gerado em tempo real pelo sistema"
        />
        <Kpis
          title="Vendas ao Dia"
          value={parseFloat(fatTotalLoja?.VendaDia)}
          icon={<HandCoins />}
          footer="Valores gerado em tempo real pelo sistema"
        />
        <Kpis
          title="Juros ao Dia"
          value={parseFloat(fatTotalLoja?.JuroAgora)}
          icon={<TrendingUp />}
          footer="Valores gerado em tempo real pelo sistema"
        />
        <Kpis
          title="Meta"
          value={parseFloat(fatTotalLoja?.Meta)}
          icon={<ChartSpline />}
          footer="Meta do período"
        />
        <Kpis
          title="Faturamento"
          value={parseFloat(fatTotalLoja?.Faturamento)}
          icon={<DollarSign />}
          footer="Faturamento do período"
        />
      </div>

      <div className='grid sm:grid-cols-5 gap-4 mt-4'>
        <RadialChart
          value={fatTotalLoja?.MetaAlcancada}
          title="Meta"
        />
        <RadialChart
          value={fatTotalLoja?.Margem}
          title="Margem"
        />
        <RadialChart
          value={fatTotalLoja?.Projecao}
          title="Projeção"
        />
        <RadialChart
          value={fatTotalLoja?.MargemMediaAno}
          title="Margem Média"
        />
        <RadialChart
          value={fatTotalLoja?.JurosMedioAno}
          title="Juro Médio"
        />
      </div>

      <div className='grid sm:grid-cols-4 gap-4 mt-4'>
        <Kpis
          title="Vencidos (15 > venc <= 180)"
          value={parseFloat(inadimplencia?.ValorVencido)}
          icon={<TrendingUpDown />}
          footer={
            <div className='flex items-center justify-between w-full'>
              <div className='text-sm font-medium'>Representa</div>
              <div className='text-xl font-semibold'>
                {formatPercent((inadimplencia?.RepVencido))}%
              </div>
            </div>
          }
        />
        <Kpis
          title="Perdas efetivas ( venc > 180)"
          value={parseFloat(inadimplencia?.ValorPerda)}
          icon={<TrendingDown />}
          footer={
            <div className='flex items-center justify-between w-full'>
              <div className='text-sm font-medium'>Representa</div>
              <div className='text-xl font-semibold'>
                {formatPercent((inadimplencia?.RepPerda))}%
              </div>
            </div>
          }
        />
        <Kpis
          title="Juros ao Mês"
          value={parseFloat(totalFaturamentoLoja?.JurosSPM)}
          icon={<TrendingUp />}
          footer={
            <div className='flex items-center justify-between w-full'>
              <div className='text-sm font-medium'>Representa</div>
              <div className='text-xl font-semibold'>
                {formatPercent((totalFaturamentoLoja?.RepSemFatu))}%
              </div>
            </div>
          }
        />
        <Kpis
          title="Estoque Atual"
          value={parseFloat(fatTotalAssoc?.EstoqueAss)}
          icon={<Boxes />}
          footer={
            <div className='flex items-center justify-between w-full'>
              <div className='text-sm font-medium'>Representa</div>
              <div className='text-xl font-semibold'>
                {formatPercent((fatTotalAssoc?.RepEstoqueAss))}%
              </div>
            </div>
          }
        />
      </div>
    </>
  )
}