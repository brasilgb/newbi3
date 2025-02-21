'use client'
import { Card } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import React, { useEffect, useState } from 'react'
import Filiais from '@/app/solar/resumo/filiais'
import Associacao from '@/app/solar/resumo/associacao'
import birel from '@/services/birel'
import moment from 'moment'
import { useAuthContext } from '@/contexts/authcontext'
import Loading from '@/app/loading'
import ResumoDiario from '@/app/solar/faturamento/resumodiario'
import Performance from './performance'
import PerfAssoc from './perfassoc'
import PerfMes from './perfmes'

export default function Resumo() {
    const { setDateUpdate, filterDate, loading, setLoading } = useAuthContext();
    const [lFaturamento, setLFaturamento] = useState<any>([]);
    const [lFatuTotLojas, setLFatuTotLojas] = useState<any>([]);
    const [lGraficoLojas, setLGraficoLojas] = useState<any>([]);
    const [lFatuPerfAssocLojas, setLFatuPerfAssocLojas] = useState<any>([]);
    const [lFatuTotPerfLojas, setLFatuTotPerfLojas] = useState<any>([]);
    const [lFatuPerfMesLojas, setLFatuPerfMesLojas] = useState<any>([]);
    const [lFatuTotMesLojas, setLFatuTotMesLojas] = useState<any>([]);

    useEffect(() => {
        async function getLFatuTotLojas() {
            await birel
                .post('(LOJ_FAT_FATUTO)', {
                    datalojfatuto: moment(filterDate).format('YYYYMMDD'),
                })
                .then(results => {
                    const res = results.data.bi007.bidata;
                    setLFatuTotLojas(typeof res === "undefined" ? [] : res);
                    setDateUpdate(typeof res === "undefined" ? [] : res[0].Atualizacao);
                })
                .catch(err => {
                    console.log(err);
                });
        }
        getLFatuTotLojas();
    }, [filterDate]);

    useEffect(() => {
        async function getLFaturamento() {
            await birel
                .post('(LOJ_FAT_FATURA)', {
                    datalojfatura: moment(filterDate).format('YYYYMMDD'),
                })
                .then(results => {
                    const res = results.data.bi006.bidata;
                    setLFaturamento(typeof res === "undefined" ? [] : res);
                })
                .catch(err => {
                    console.log(err);
                });
        }
        getLFaturamento();
    }, [filterDate]);

    useEffect(() => {
        async function getLGraficoLojas() {
            await birel.post('(LOJ_FAT_GRAFEVO)', {
                datalojgrafevo: moment(filterDate).format('YYYYMMDD'),
            })
                .then(results => {
                    const res = results.data.bi008.bidata;
                    setLGraficoLojas(typeof res === "undefined" ? [] : res);
                })
                .catch(err => {
                    console.log(err);
                });
        }
        getLGraficoLojas();
    }, [filterDate]);

    useEffect(() => {
        async function getLFatuTotLojas() {
            await birel
                .post('(LOJ_FAT_TOTPEFASM)', {
                    datalojtotpefasm: moment(filterDate).format('YYYYMMDD'),
                })
                .then(results => {
                    const res = results.data.bi011.bidata;
                    setLFatuTotPerfLojas(typeof res === "undefined" ? [] : res);
                })
                .catch(err => {
                    console.log(err);
                });
        }
        getLFatuTotLojas();
    }, [filterDate]);

    useEffect(() => {
        async function getLFatuTotLojas() {
            await birel
                .post('(LOJ_FAT_REFAAS)', {
                    datalojrefaas: moment(filterDate).format('YYYYMMDD'),
                })
                .then(results => {
                    const res = results.data.bi009.bidata;
                    setLFatuPerfAssocLojas(typeof res === "undefined" ? [] : res);
                })
                .catch(err => {
                    console.log(err);
                });
        }
        getLFatuTotLojas();
    }, [filterDate]);

    useEffect(() => {
        async function getLFatuPerfMesLojas() {
            await birel
                .post('(LOJ_FAT_REPERFMES)', {
                    datalojfatperfmes: moment(filterDate).format('YYYYMMDD'),
                })
                .then(results => {
                    const res = results.data.bi010.bidata;
                    setLFatuPerfMesLojas(typeof res === "undefined" ? [] : res);
                })
                .catch(err => {
                    console.log(err);
                });
        }
        getLFatuPerfMesLojas();
    }, [filterDate]);

    useEffect(() => {
        async function getLFatuTotLojas() {
            await birel
                .post('(LOJ_FAT_TOTPEFASM)', {
                    datalojtotpefasm: moment(filterDate).format('YYYYMMDD'),
                })
                .then(results => {
                    const res = results.data.bi011.bidata;
                    setLFatuTotMesLojas(typeof res === "undefined" ? [] : res);
                })
                .catch(err => {
                    console.log(err);
                });
        }
        getLFatuTotLojas();
    }, [filterDate]);

    return (
        <div className=''>
            {loading && <Loading />}
            <Card>
                <div className='p-4'>
                    <Tabs defaultValue="resumod" className="w-full">
                        <TabsList className="flex w-full justify-start">
                            <TabsTrigger className='w-56' value="resumod">Resumo Diário</TabsTrigger>
                            <TabsTrigger className='w-56' value="performance">Perfomance</TabsTrigger>
                            <TabsTrigger className='w-56' value="perfassoc">Perform. Assoc.</TabsTrigger>
                            <TabsTrigger className='w-56' value="perfmes">Perform. Mês</TabsTrigger>
                        </TabsList>
                        <TabsContent value="resumod">
                            <ResumoDiario resumos={lFaturamento} totais={lFatuTotLojas} />
                        </TabsContent>
                        <TabsContent value="performance">
                            <Performance grafico={lGraficoLojas} totais={lFatuTotLojas} />
                        </TabsContent>
                        <TabsContent value="perfassoc">
                            <PerfAssoc assocs={lFatuPerfAssocLojas} totais={lFatuTotPerfLojas} />
                        </TabsContent>
                        <TabsContent value="perfmes">
                            <PerfMes meses={lFatuPerfMesLojas} totais={lFatuTotMesLojas} />
                        </TabsContent>
                    </Tabs>
                </div>
            </Card>
        </div>
    )
}

