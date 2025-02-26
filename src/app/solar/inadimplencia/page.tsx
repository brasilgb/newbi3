'use client'
import { Card } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import React, { useEffect, useState } from 'react'
import { useAuthContext } from '@/contexts/authcontext'
import Loading from '@/app/loading'
import birel from '@/services/birel'
import Vencidos from './vencidos'

export default function inadimplencia() {
    const { loading, setLoading } = useAuthContext();

    const [vencidosTotais, setVencidosTotais] = useState<any>([]);
    const [vencidos, setVencidos] = useState<any>([]);
    
      useEffect(() => {
        async function getVencidaosTotais() {
            setLoading(true);
          await birel
            .get('(LOJVEN_INADIM)')
            .then(results => {
              setVencidosTotais(results.data.bi062.bidata);
            })
            .catch(err => {
              console.log(err);
            }).finally(() => setLoading(false));
        }
        getVencidaosTotais();
      }, []);
    
      // Extração de dados resumos totais
      useEffect(() => {
        async function getVencidos() {
            setLoading(true);
          await birel
            .get('(LOJVEN_VENCI)')
            .then(results => {
              setVencidos(results.data.bi061.bidata);
            })
            .catch(err => {
              console.log(err);
            }).finally(() => setLoading(false));
        }
        getVencidos();
      }, []);

  return (
    <div className='m-auto'>
            {loading && <Loading />}
            <Card>
                <div className='p-4'>
                    <Tabs defaultValue="vencidos" className="w-full">
                        <TabsList className="flex w-full justify-start">
                            <TabsTrigger className='w-56' value="vencidos">Vencidos</TabsTrigger>
                        </TabsList>
                        <TabsContent value="vencidos">
                            <Vencidos vencidosData={{vencidos: vencidos, vencidosTotais: vencidosTotais}} />
                        </TabsContent>
                    </Tabs>
                </div>
            </Card>
        </div>
  )
}
