import NFooter from '@/components/naturovos/nfooter'
import NHeader from '@/components/naturovos/nheader'
import React from 'react'

export default function NaturLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <main className="min-h-screen flex flex-col bg-gray-100">
                    <NHeader />
                    <div className="flex-grow px-4">
                        {children}
                    </div>
                    <NFooter />
                </main>

            </body>
        </html>
    )
}