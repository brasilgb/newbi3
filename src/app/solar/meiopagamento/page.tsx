'use client'
import Loading from '@/app/loading'
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuthContext } from '@/contexts/authcontext'
import React, { useEffect, useState } from 'react'
import AnaliseVenda from './analisevenda';
import SituacaoCliente from './situacaocliente';
import birel from '@/services/birel';
import moment from 'moment';

export default function MeioPagamento() {
    const { loading, setLoading, filterDate } = useAuthContext();
    const [meioPag, setMeioPag] = useState<any>([]);
    const [meioPagTotal, setMeioPagTotal] = useState<any>([]);
    const [meioPagFilial, setMeioPagFilial] = useState<any>([]);
    const [meioPagFilTotal, setMeioPagFilTotal] = useState<any>([]);
    const [allFiliais, setAllFiliais] = useState<any>([]);
    const [allMeios, setAllMeios] = useState<any>([]);
    const [situacao, setSituacao] = useState<any>([]);
    const [allPlanos, setAllPlanos] = useState<any>([]);
    const [allData, setAllData] = useState<any>([]);
    const [graficoCliente, setGraficoCliente] = useState<any>([]);
    
    useEffect(() => {
        const getMeioPag = (async () => {
            setLoading(true);
            await birel.post('(MEIO_PAGAMENTO)', {
                datachave: moment(filterDate).format('YYYYMMDD'),
            })
                .then((results) => {
                    const res = results.data.bi095.bidata;
                    setMeioPag(typeof res === "undefined" ? [] : res);
                })
                .catch((err) => {
                    console.log(err);
                })
                .finally(() => setLoading(false));
        });
        getMeioPag();
    }, [filterDate]);

    useEffect(() => {
        const getMeioPag = (async () => {
            setLoading(true);
            await birel.post('(MEIO_PAGAMENTO_TOTAL)', {
                datachave: moment(filterDate).format('YYYYMMDD'),
            })
                .then((results) => {
                    const res = results.data.bi096.bidata;
                    setMeioPagTotal(typeof res === "undefined" ? [] : res);
                })
                .catch((err) => {
                    console.log(err);
                })
                .finally(() => setLoading(false));
        });
        getMeioPag();
    }, [filterDate]);

    useEffect(() => {
        const getMeioPag = (async () => {
            setLoading(true);
            await birel.post('(MEIO_PAGAMENTO_FILIAL)', {
                datachave: moment(filterDate).format('YYYYMMDD'),
            })
                .then((results) => {
                    const res = results.data.bi097.bidata;
                    const ajust = typeof res === "undefined" ? [] : res;
                    setMeioPagFilial(ajust?.sort((a: any, b: any) => (parseInt(a.VendaDevolucao) < parseInt(b.VendaDevolucao) ? 1 : -1)));
                    setAllFiliais(ajust?.sort((a: any, b: any) => (parseInt(a.VendaDevolucao) < parseInt(b.VendaDevolucao) ? 1 : -1)).map((c: any) => c.NomeFilial).filter((value: any, index: any, self: any) => self.indexOf(value) === index));
                    setAllMeios(ajust?.sort((a: any, b: any) => (parseInt(a.VendaDevolucao) < parseInt(b.VendaDevolucao) ? 1 : -1)).map((c: any) => c.MeioPagamento).filter((value: any, index: any, self: any) => self.indexOf(value) === index));
                })
                .catch((err) => {
                    console.log(err);
                })
                .finally(() => setLoading(false));
        });
        getMeioPag();
    }, [filterDate]);

    useEffect(() => {
        const getMeioPag = (async () => {
            setLoading(true);
            await birel.post('(MEIO_PAGAMENTO_FILIAL_TOTAL)', {
                datachave: moment(filterDate).format('YYYYMMDD'),
            })
                .then((results) => {
                    const res = results.data.bi098.bidata;
                    setMeioPagFilTotal(typeof res === "undefined" ? [] : res);
                })
                .catch((err) => {
                    console.log(err);
                })
                .finally(() => setLoading(true));
        });
        getMeioPag();
    }, [filterDate]);

    // Análise do cliente -------------------------
    useEffect(() => {
        const getMeioPag = (async () => {
            setLoading(true);
            await birel.post('(SITU_ANALISE_CLIENTE)', {
                datachave: moment(filterDate).format('YYYYMMDD'),
            })
                .then((results) => {
                    const res = results.data.bi099.bidata;
                    const ajust = typeof res === "undefined" ? [] : res;
                    setAllData(ajust?.sort((a: any, b: any) => (parseInt(a.CodPlano) > parseInt(b.CodPlano) ? 1 : -1)));
                    setAllPlanos(ajust?.map((c: any) => c.CodPlano).filter((value: any, index: any, self: any) => self.indexOf(value) === index));
                    setSituacao(ajust?.map((c: any) => c.Situacao).filter((value: any, index: any, self: any) => self.indexOf(value) === index).sort());
                })
                .catch((err) => {
                    console.log(err);
                })
                .finally(() => setLoading(false));
        });
        getMeioPag();
    }, [filterDate]);

    useEffect(() => {
        const getMeioPag = (async () => {
            setLoading(true);
            await birel.post('(SITU_GRAFICO_CLIENTE)', {
                datachave: moment(filterDate).format('YYYYMMDD'),
            })
                .then((results) => {
                    const res = results.data.bi100.bidata;
                    setGraficoCliente(typeof res === "undefined" ? [] : res);
                })
                .catch((err) => {
                    console.log(err);
                })
                .finally(() => setLoading(false));
        });
        getMeioPag();
    }, [filterDate]);



    const valuesFiliais = (meio: string, filial: string, campo: string) => {
        const meiofilial = meioPagFilial.filter((fmeio: any) => (fmeio?.MeioPagamento == meio && fmeio?.NomeFilial == filial)).map((vd: any) => (campo == 'VendaDevolucao' ? vd?.VendaDevolucao : vd?.PercentVenda));
        return meiofilial;
    }
    const analisecli = {
        meioPag: meioPag, 
        meioPagTotal:meioPagTotal, 
        meioPagFilial:meioPagFilial, 
        meioPagFilTotal:meioPagFilTotal, 
        allFiliais:allFiliais, 
        allMeios:allMeios
    }
    const situacaocli = {
        situacao:situacao,
        allPlanos:allPlanos,
        allData:allData,
        graficoCliente:graficoCliente
    }

    return (
        <div className='container0 m-auto'>
            {loading && <Loading />}
            
                <div className=''>
                    <Tabs defaultValue="analisevenda" className="w-full">
                       <Card className='p-4'> 
                        <TabsList className="flex w-full justify-start">
                            <TabsTrigger className='w-56' value="analisevenda">Análise Venda</TabsTrigger>
                            <TabsTrigger className='w-56' value="situacaocliente">Situação Cliente</TabsTrigger>
                        </TabsList>
                        </Card>
                        <TabsContent value="analisevenda">
                            <AnaliseVenda analise={analisecli} />
                        </TabsContent>
                        <TabsContent value="situacaocliente">
                            <SituacaoCliente situacao={situacaocli} />
                        </TabsContent>
                    </Tabs>
                </div>
            
        </div>
    )
}
