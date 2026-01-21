import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Cyber Odyssey 2077 - Game Detail',
    description: 'Game detail page',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className="dark">
            <head>
                <link href="https://fonts.googleapis.com" rel="preconnect" />
                <link crossOrigin="anonymous" href="https://fonts.gstatic.com" rel="preconnect" />
                <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&amp;family=Manrope:wght@400;500;600;700&amp;display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet" />
            </head>
            <body className="bg-background-dark text-white font-body selection:bg-primary selection:text-black">
                {children}
            </body>
        </html>
    )
}
