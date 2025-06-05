import "./globals.css";

import { Header } from '../components/header';
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'DevJobs',
  description: 'Página de aplicação de vagas de emprego.',
  openGraph: {
    title: 'DevJobs',
    description: 'Venha encontrar seu emprego!',
    images: []
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
    }
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
