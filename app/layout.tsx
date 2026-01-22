import './globals.css'
import React from 'react'
import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Cormorant_Garamond } from 'next/font/google'

const plusJakartaSans = Plus_Jakarta_Sans({
    subsets: ['latin'],
    variable: '--font-sans',
    display: 'swap',
    weight: ['200', '300', '400', '500', '600', '700', '800'],
})

const cormorantGaramond = Cormorant_Garamond({
    subsets: ['latin'],
    variable: '--font-serif',
    display: 'swap',
    weight: ['300', '400', '600'],
    style: ['normal', 'italic'],
})

export const metadata: Metadata = {
    title: 'Premium Cinematic Dark Portfolio',
    description: 'Aesthetic Visualist & Creative Director Portfolio',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={`dark ${plusJakartaSans.variable} ${cormorantGaramond.variable}`}>
            <head>
                <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
            </head>
            <body className="bg-true-black text-white font-sans antialiased selection:bg-primary selection:text-black overflow-x-hidden">
                {children}
            </body>
        </html>
    )
}
