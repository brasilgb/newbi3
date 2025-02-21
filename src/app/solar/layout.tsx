'use client'
import SFooter from '@/components/solar/sfooter';
import SHeader from '@/components/solar/sheader';
import { useAuthContext } from '@/contexts/authcontext';
import React from 'react'
import Loading from '../loading';

export default function SolarLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <main className="min-h-screen flex flex-col bg-gray-50">
                    <SHeader />
                    <div className="flex-grow p-4">
                        {children}
                    </div>
                    <SFooter />
                </main>

            </body>
        </html>
    )
}
