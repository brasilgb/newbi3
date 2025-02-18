import { Card } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import React from 'react'

export default function Resumo() {
    return (
        <div className='container m-auto bg-gray-50 p-4 font-roboto'>
            <Tabs defaultValue="filiais" className="w-[400px]">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="filiais">Filiais</TabsTrigger>
                    <TabsTrigger value="associacao">Associação</TabsTrigger>
                </TabsList>
                <TabsContent value="filiais">
                    <Card>
                        <p>Filiais</p>
                    </Card>
                </TabsContent>
                <TabsContent value="associacao">
                    <Card>
                        <p>Associação</p>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    )
}
