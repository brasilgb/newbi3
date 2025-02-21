import React, { ReactNode } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { formatMoney } from '@/utils';

interface KpisProps {
    title: string;
    value: any;
    icon: ReactNode;
    footer: any;
    className?: string;
}
export default function Kpis({ title, value, icon, footer, className }: KpisProps) {
    return (
        <Card className={`${className}`}>
            <CardHeader className='p-4'>
                <CardTitle className='flex items-center justify-between text-gray-500'><div>{title}</div><div>{icon}</div></CardTitle>
            </CardHeader>
            <CardContent className='px-4 py-0'>
                <div className='sm:text-3xl font-bold text-gray-700 drop-shadosm'>{value}</div>
            </CardContent>
            <CardFooter className='px-4 py-2'>
                <CardDescription className='w-full'><div className='text-xs'>{footer}</div></CardDescription>
            </CardFooter>
        </Card>
    )
}
