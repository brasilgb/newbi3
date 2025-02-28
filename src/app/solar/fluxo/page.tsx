'use client'
import Loading from '@/app/loading';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuthContext } from '@/contexts/authcontext';
import React, { useEffect, useState } from 'react'
import FluxoLojas from './FluxoLojas';
import FluxoGrupo from './FluxoGrupo';
import FluxoLojasData from './FluxoLojasData';
import FluxoGrupoData from './FluxoGrupoData';
import birel from '@/services/birel';
import moment from 'moment';

export default function Fluxo() {
    const { loading, rangeDate } = useAuthContext();
    const [fluxoLojas, setFluxoLojas] = useState<any>([]);

    useEffect(() => {
        async function getFluxoCaixaLojas() {
            await birel
                .post('(FLUXO_DE_CAIXA)', {
                    fluxoTipreg: 1,
                    fluxoDepto: 1,
                    fluxoDatini: moment(rangeDate?.from).format('YYYYMMDD'),
                    fluxoDatfin: moment(rangeDate?.to).format('YYYYMMDD'),
                })
                .then(results => {
                    setFluxoLojas(results.data.bi054.bidata);
                })
                .catch(err => {
                    console.log(err);
                });
        }
        getFluxoCaixaLojas();
    }, [rangeDate]);

    return (
        <div className='m-auto'>
            {loading && <Loading />}
            <Card>
                <div className='p-4'>
                    <Tabs defaultValue="fluxlojas" className="w-full">
                        <TabsList className="flex w-full justify-start">
                            <TabsTrigger className='w-56' value="fluxlojas">Fluxo Lojas</TabsTrigger>
                            <TabsTrigger className='w-56' value="fluxgrupo">Fluxo Grupo</TabsTrigger>
                            <TabsTrigger className='w-56' value="fluxlojasdata">Fluxo Lojas/Data</TabsTrigger>
                            <TabsTrigger className='w-56' value="fluxgrupodata">Fluxo Grupo/Data</TabsTrigger>
                        </TabsList>
                        <TabsContent value="fluxlojas">
                            <FluxoLojas fluxo={fluxoLojas} />
                        </TabsContent>
                        <TabsContent value="fluxgrupo">
                            <FluxoGrupo fluxo={fluxoLojas} />
                        </TabsContent>
                        <TabsContent value="fluxlojasdata">
                            <FluxoLojasData fluxo={fluxoLojas} />
                        </TabsContent>
                        <TabsContent value="fluxgrupodata">
                            <FluxoGrupoData fluxo={fluxoLojas} />
                        </TabsContent>
                    </Tabs>
                </div>
            </Card>
        </div>
    )
}