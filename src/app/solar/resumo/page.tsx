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

export default function Resumo() {
    const { setDateUpdate, filterDate, loading, setLoading } = useAuthContext();
    const [lFiliais, setLFiliais] = useState<any>([]);
    const [lAssociacao, setLAssociacao] = useState([]);
    const [lTotais, setLTotais] = useState<any>([]);

    // Extração de dados resumos filiais
    useEffect(() => {
        async function getLFiliais() {
            setLoading(true);
            await birel
                .post('(LOJ_FATU_FILIAL)', {
                    datalojfilial: moment(filterDate).format('YYYYMMDD'),
                })
                .then(results => {
                    const res = results.data.bi039.bidata;
                    setLFiliais(typeof res === "undefined" ? [] : res);
                })
                .catch(err => {
                    console.log(err);
                }).finally(() => setLoading(false));
        }
        getLFiliais();
    }, [filterDate]);

    // Extração de dados resumos filiais
    useEffect(() => {
        async function getLAssociacao() {
            setLoading(true);
            await birel
                .post('(LOJ_FATU_ASSOCI)', {
                    datalojassoci: moment(filterDate).format('YYYYMMDD'),
                })
                .then(results => {
                    const res = results.data.bi038.bidata;
                    setLAssociacao(typeof res === "undefined" ? [] : res);
                })
                .catch(err => {
                    console.log(err);
                }).finally(() => setLoading(false));
        }
        getLAssociacao();
    }, [filterDate]);

    // Extração de dados resumos totais
    useEffect(() => {
        async function getTotais() {
            setLoading(true);
            await birel
                .post('(LOJ_FATU_TOTAL)', {
                    datalojfatutotal: moment(filterDate).format('YYYYMMDD'),
                })
                .then(results => {
                    const res = results.data.bi040.bidata;
                    setLTotais(typeof res === "undefined" ? [] : res);
                    setDateUpdate(typeof res === "undefined" ? [] : res[0].Atualizacao);
                })
                .catch(err => {
                    console.log(err);
                }).finally(() => setLoading(false));
        }
        getTotais();
    }, [filterDate]);

    return (
        <div className='m-auto'>
            {loading && <Loading />}
            <Card>
                <div className='p-4'>
                    <Tabs defaultValue="filiais" className="w-full">
                        <TabsList className="flex w-full justify-start">
                            <TabsTrigger className='w-56' value="filiais">Filiais</TabsTrigger>
                            <TabsTrigger className='w-56' value="associacao">Associação</TabsTrigger>
                        </TabsList>
                        <TabsContent value="filiais">
                            <Filiais filiais={lFiliais} totais={lTotais} />
                        </TabsContent>
                        <TabsContent value="associacao">
                            <Associacao associacao={lAssociacao} totais={lTotais} />
                        </TabsContent>
                    </Tabs>
                </div>
            </Card>
        </div>
    )
}

