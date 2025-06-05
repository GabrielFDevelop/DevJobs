import "./globals.css";

import { Header } from '../components/header';
import { Metadata } from 'next'

// Metadados da aplicação web
export const metadata: Metadata = {
  title: 'DevJobs',
  description: 'Página de aplicação de vagas de emprego.',
// openGraph é usado para definir metadados para compartilhamento em redes sociais, é o que vai aparecer para as pessoas ao compartilhar o link da aplicação
  openGraph: {
    title: 'DevJobs',
    description: 'Venha encontrar seu emprego!',
    images: []
  },
// robots controlam a quantidade de conteúdo que o Google extrai automaticamente de páginas da web para exibição como resultados de pesquisa.
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
