
import SFooter from '@/components/solar/sfooter';
import SHeader from '@/components/solar/sheader';
import React from 'react'

export default function SolarLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <main className="min-h-screen flex flex-col bg-gray-100">
                    <SHeader />
                    <div className="flex-grow px-4">
                        {children}
                    </div>
                    <SFooter />
                </main>

            </body>
        </html>
    )
}
