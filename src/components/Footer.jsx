import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Logo } from '@/components/Logo'

const navigation = [
  {
    title: "Domaines d'expertise",
    links: [
      { title: 'Droit de la famille', href: '/droit-famille' },
      { title: 'Droit pénal', href: '/droit-penal' },
      { title: 'Divorce', href: '/droit-famille' },
      { title: "Garde d'enfants", href: '/droit-famille' },
    ],
  },
  {
    title: 'Cabinet',
    links: [
      { title: 'Le Cabinet', href: '/about' },
      { title: 'Actualités', href: '/blog' },
      { title: 'Contact', href: '/contact' },
      { title: 'Horaires', href: '/contact' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { title: '06 37 41 43 09', href: 'tel:0637414309' },
      {
        title: 'gadilhe.avocat@gmail.com',
        href: 'mailto:gadilhe.avocat@gmail.com',
      },
      { title: '70 Avenue Jean Lebas, Roubaix', href: '/contact' },
    ],
  },
]

function Navigation() {
  return (
    <nav>
      <ul role="list" className="grid grid-cols-2 gap-8 sm:grid-cols-3">
        {navigation.map((section, sectionIndex) => (
          <li key={sectionIndex}>
            <div className="font-display text-sm font-semibold tracking-wider text-neutral-950">
              {section.title}
            </div>
            <ul role="list" className="mt-4 text-sm text-neutral-700">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex} className="mt-4">
                  <Link
                    href={link.href}
                    className="transition hover:text-neutral-950"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  )
}

function ContactInfo() {
  return (
    <div className="max-w-sm">
      <h2 className="font-display text-sm font-semibold tracking-wider text-neutral-950">
        Prendre rendez-vous
      </h2>
      <p className="mt-4 text-sm text-neutral-700">
        Maître Julia GADILHE vous reçoit sur rendez-vous du lundi au vendredi de
        8h30 à 12h30 et de 14h à 19h00.
      </p>
      <div className="mt-6 space-y-2 text-sm text-neutral-700">
        <p>
          <strong>Téléphone :</strong>
          <br />
          <a href="tel:0637414309" className="hover:text-neutral-950">
            06 37 41 43 09
          </a>
        </p>
        <p>
          <strong>Email :</strong>
          <br />
          <a
            href="mailto:gadilhe.avocat@gmail.com"
            className="hover:text-neutral-950"
          >
            gadilhe.avocat@gmail.com
          </a>
        </p>
        <p>
          <strong>Adresse :</strong>
          <br />
          70 Avenue Jean Lebas
          <br />
          Résidence Ermitage, 3ème étage
          <br />
          59100 ROUBAIX
        </p>
      </div>
    </div>
  )
}

export function Footer() {
  return (
    <Container as="footer" className="mt-24 w-full sm:mt-32 lg:mt-40">
      <FadeIn>
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          <Navigation />
          <div className="flex lg:justify-end">
            <ContactInfo />
          </div>
        </div>
        <div className="mt-24 mb-20 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-12">
          <Link href="/" aria-label="Accueil">
            <Logo className="h-8" fillOnHover />
          </Link>
          <p className="text-sm text-neutral-700">
            © Cabinet Maître Julia GADILHE {new Date().getFullYear()} - Avocat
            au Barreau de Lille
          </p>
        </div>
      </FadeIn>
    </Container>
  )
}
