import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@/components/analytics"
import { NavBar } from "@/components/navbar"
import Seo from "@/components/SEO"
import Script from "next/script"

export const metadata = {
  title: "Dakota Goldberg",
  description: "Dakota Goldberg's Personal Website",
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link
          rel="apple-touch-icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body
        className={`antialiased min-h-screen bg-white dark:bg-lilac-950 text-lilac-900 dark:text-lilac-50 font-sans`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Seo />
          <Script async src="https://www.googletagmanager.com/gtag/js?id=G-KL580V71S7"></Script>
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-KL580V71S7');
            `}
          </Script>
          <div className="max-w-2xl mx-auto py-10 px-4">
            <header>
              <NavBar />
            </header>
            <main>{children}</main>
            <footer className="mt-20 mb-3">
              {/* Maybe list the tech stack here? */}
              <div className="text-sm font-medium text-lilac-700 dark:text-lilac-500">Dakota Goldberg © 2023</div>
              <div className="text-sm text-lilac-600 dark:text-lilac-600"><a className="underline" target="_blank" rel="noopener noreferrer" href="https://github.com/dakotagoldberg/dakota.so">dakota.so</a> on GitHub</div>
            </footer> 
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
