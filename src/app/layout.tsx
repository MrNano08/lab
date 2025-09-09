import './globals.css'

export const metadata = { title: 'Risk Calculator', description: 'Next + OpenTelemetry' }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className="min-h-dvh bg-gray-50 text-gray-900"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  )
}
