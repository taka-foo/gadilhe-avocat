import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - Maître Julia GADILHE',
    default:
      'Maître Julia GADILHE - Avocat Droit de la famille & Droit pénal à Roubaix',
  },
}

export default function Layout({ children }) {
  return (
    <html lang="fr" className="h-full bg-neutral-950 text-base antialiased">
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  )
}
