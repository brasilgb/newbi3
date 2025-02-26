'use client'
import Loading from '@/app/loading';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuthContext } from '@/contexts/authcontext';
import React, { useEffect, useState } from 'react'
import Filiais from '../resumo/filiais';
import CompDia from './compdia';
import Performance from './performance';
import PerformAssoc from './performassoc';
import PerformMes from './performmes';
import birel from '@/services/birel';
import moment from 'moment';

export default function page() {
    const { loading, setLoading, filterDate } = useAuthContext();
    const [lComComparaDia, setLComComparaDia] = useState<any>([]);
    const [lComTotais, setLComTotais] = useState<any>([]);
    const [lComGrafico, setLComGrafico] = useState<any>([]);
    const [lComPerfAssoc, setLComPerfAssoc] = useState<any>([]);
    const [lComPerfMes, setLComPerfMes] = useState<any>([]);

    // Extração de dados resumos serviço resumo dia
    useEffect(() => {
        async function getLComComparaDia() {
            setLoading(true);
            await birel
                .post('(LOJ_COM_COMPARA)', {
                    datalojcompara: moment(filterDate).format('YYYYMMDD'),
                })
                .then(results => {
                    const res = results.data.bi001.bidata;
                    setLComComparaDia(typeof res === "undefined" ? [] : res);
                })
                .catch(err => {
                    console.log(err);
                }).finally(() => setLoading(false));
        }
        getLComComparaDia();
    }, [filterDate]);

    // Extração de dados resumos totais
    useEffect(() => {
        async function getLComTotais() {
            setLoading(true);
            await birel
                .post('(LOJ_COM_TOTAL)', {
                    datalojtotal: moment(filterDate).format('YYYYMMDD'),
                })
                .then(results => {
                    const res = results.data.bi005.bidata;
                    setLComTotais(typeof res === "undefined" ? [] : res);
                })
                .catch(err => {
                    console.log(err);
                }).finally(() => setLoading(false));
        }
        getLComTotais();
    }, [filterDate]);

    // Extração de dados resumos totais
    useEffect(() => {
        async function getLComGrafico() {
            setLoading(true);
            await birel
                .post('(LOJ_COM_GRAFICO)', {
                    datalojgraf: moment(filterDate).format('YYYYMMDD'),
                })
                .then(results => {
                    const res = results.data.bi002.bidata;
                    setLComGrafico(typeof res === "undefined" ? [] : res);
                })
                .catch(err => {
                    console.log(err);
                }).finally(() => setLoading(false));
        }
        getLComGrafico();
    }, [filterDate]);

    // Extração de dados resumos serviço resumo dia
    useEffect(() => {
        async function getLComPerfAssoc() {
            setLoading(true);
            await birel
                .post('(LOJ_COM_PERFAS)', {
                    datalojperfas: moment(filterDate).format('YYYYMMDD'),
                })
                .then(results => {
                    const res = results.data.bi003.bidata;
                    setLComPerfAssoc(typeof res === "undefined" ? [] : res);
                })
                .catch(err => {
                    console.log(err);
                }).finally(() => setLoading(false));
        }
        getLComPerfAssoc();
    }, [filterDate]);

    // Extração de dados resumos serviço resumo dia
    useEffect(() => {
        async function getLComPerfMes() {
            setLoading(true);
            await birel
                .post('(LOJ_COM_PERFMES)', {
                    datalojperfmes: moment(filterDate).format('YYYYMMDD'),
                })
                .then(results => {
                    const res = results.data.bi004.bidata;
                    setLComPerfMes(typeof res === "undefined" ? [] : res);
                })
                .catch(err => {
                    console.log(err);
                }).finally(() => setLoading(false));
        }
        getLComPerfMes();
    }, [filterDate]);

    return (
        <div className='m-auto'>
            {loading && <Loading />}
            <Card>
                <div className='p-4'>
                    <Tabs defaultValue="compdia" className="w-full">
                        <TabsList className="flex w-full justify-start">
                            <TabsTrigger className='w-56' value="compdia">Comp. Dia</TabsTrigger>
                            <TabsTrigger className='w-56' value="perform">Performance</TabsTrigger>
                            <TabsTrigger className='w-56' value="performassoc">Perform. Assoc.</TabsTrigger>
                            <TabsTrigger className='w-56' value="performmes">Perform. Mês</TabsTrigger>
                        </TabsList>
                        <TabsContent value="compdia">
                            <CompDia compdia={lComComparaDia} totais={lComTotais} />
                        </TabsContent>
                        <TabsContent value="perform">
                            <Performance graficoData={lComGrafico} />
                        </TabsContent>
                        <TabsContent value="performassoc">
                            <PerformAssoc />
                        </TabsContent>
                        <TabsContent value="performmes">
                            <PerformMes />
                        </TabsContent>
                    </Tabs>
                </div>
            </Card>
        </div>
    )
}
