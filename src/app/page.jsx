import photoJulia from '@/images/julia-gadilhe.jpg'
import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GoogleReviews } from '@/components/GoogleReviews'
import { List, ListItem } from '@/components/List'
import { RootLayout } from '@/components/RootLayout'
import { SectionIntro } from '@/components/SectionIntro'
import { Testimonial } from '@/components/Testimonial'
import { loadArticles } from '@/lib/mdx'

function Specialites() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            Nos domaines d&apos;expertise
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <FadeIn>
              <div className="rounded-3xl bg-neutral-900 p-8">
                <h3 className="mb-4 text-xl font-semibold text-white">
                  Droit de la famille
                </h3>
                <p className="text-neutral-300">
                  La vie familiale est soumise à de nombreux aléas et évolue
                  constamment. Les changements sont parfois tellement importants
                  qu&apos;ils nécessitent l&apos;intervention d&apos;un Juge.
                </p>
                <Link
                  href="/droit-famille"
                  className="mt-4 inline-block rounded-full bg-neutral-950 px-5 py-2 text-sm font-semibold text-white transition hover:bg-neutral-800"
                >
                  En savoir plus →
                </Link>
              </div>
            </FadeIn>
            <FadeIn>
              <div className="rounded-3xl bg-neutral-900 p-8">
                <h3 className="mb-4 text-xl font-semibold text-white">
                  Droit pénal
                </h3>
                <p className="text-neutral-300">
                  Le cabinet intervient en défense de vos intérêts que vous
                  soyez auteur d&apos;une contravention, d&apos;un délit ou
                  d&apos;un crime. Il vous accompagne et vous défend également
                  si vous êtes victime d&apos;une infraction.
                </p>
                <Link
                  href="/droit-penal"
                  className="mt-4 inline-block rounded-full bg-neutral-950 px-5 py-2 text-sm font-semibold text-white transition hover:bg-neutral-800"
                >
                  En savoir plus →
                </Link>
              </div>
            </FadeIn>
          </div>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function Actualites() {
  return (
    <>
      <SectionIntro
        title="Actualités juridiques"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Restez informé des dernières évolutions en droit de la famille et en
          droit pénal.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <FadeIn className="flex">
            <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
              <h3 className="mb-4 font-display text-xl font-semibold text-neutral-950">
                Droit de la famille
              </h3>
              <ul className="space-y-2 text-neutral-600">
                <li>• Cour de cassation, 1ère Chambre Civile</li>
                <li>• Réforme concernant le changement de nom</li>
              </ul>
            </article>
          </FadeIn>
          <FadeIn className="flex">
            <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
              <h3 className="mb-4 font-display text-xl font-semibold text-neutral-950">
                Droit pénal
              </h3>
              <ul className="space-y-2 text-neutral-600">
                <li>• La fin des réductions automatiques des peines</li>
                <li>• La création de la Cour Criminelle Départementale</li>
                <li>• Entrée en vigueur du Code pénitentiaire</li>
              </ul>
            </article>
          </FadeIn>
        </FadeInStagger>
      </Container>
    </>
  )
}

function DerniersArticles({ articles }) {
  return (
    <>
      <SectionIntro
        title="Derniers articles"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Découvrez nos derniers articles sur les évolutions du droit et nos
          conseils juridiques.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {articles.map((article) => (
            <FadeIn key={article.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={article.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <span className="font-display text-xl font-semibold text-neutral-950">
                      {article.title}
                    </span>
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time
                    dateTime={article.date.split('-')[0]}
                    className="font-semibold"
                  >
                    {new Date(article.date).toLocaleDateString('fr-FR', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </time>
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {article.description}
                </p>
                <Link
                  href={article.href}
                  className="mt-4 text-sm font-semibold text-neutral-950 hover:text-neutral-700"
                >
                  Lire la suite →
                </Link>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className="rounded-full bg-neutral-950 px-6 py-3 text-sm font-semibold text-white hover:bg-neutral-800"
          >
            Voir tous les articles
          </Link>
        </div>
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Nos services"
        title="Accompagnement juridique personnalisé"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Maître Julia GADILHE vous défend, vous conseille et vous représente
          devant toutes les juridictions pénales et civiles.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-135 flex-none lg:w-180">
              <div className="rounded-3xl bg-neutral-100 p-8 text-center">
                <h3 className="mb-4 text-2xl font-semibold text-neutral-950">
                  Cabinet d&apos;avocat à Roubaix
                </h3>
                <p className="text-neutral-600">
                  70 Avenue Jean Lebas
                  <br />
                  Résidence Ermitage, 3ème étage
                  <br />
                  59100 ROUBAIX
                </p>
                <p className="mt-4 text-sm text-neutral-500">
                  Proche de la gare de Roubaix
                </p>
              </div>
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-132 lg:pl-4">
            <ListItem title="Droit de la famille">
              Divorce, garde d&apos;enfants, pension alimentaire, succession,
              adoption. Nous vous accompagnons dans toutes les étapes de votre
              procédure familiale.
            </ListItem>
            <ListItem title="Droit pénal">
              Défense en matière de contraventions, délits et crimes.
              Accompagnement des victimes et représentation devant toutes les
              juridictions.
            </ListItem>
            <ListItem title="Consultation juridique">
              Conseils personnalisés et stratégie de défense adaptée à votre
              situation. Suivi rigoureux de votre dossier.
            </ListItem>
            <ListItem title="Aide juridictionnelle">
              Prise en charge de vos frais d&apos;avocat selon vos ressources.
              Accès au droit pour tous.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata = {
  description:
    "Cabinet d'avocat Julia GADILHE - Droit de la famille et droit pénal à Roubaix. Avocat au Barreau de Lille depuis 2015.",
}

export default async function Home() {
  let articles = (await loadArticles()).slice(0, 3)

  return (
    <RootLayout>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn>
          <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-start">
            <div className="flex-shrink-0">
              <Image
                src={photoJulia}
                alt="Maître Julia Gadilhe"
                width={160}
                height={160}
                className="rotate-[52deg] rounded-full border-4 border-white object-cover shadow-lg"
                priority
              />
            </div>
            <div className="flex-1">
              <h1 className="font-display text-5xl font-medium tracking-tight text-balance text-neutral-950 sm:text-7xl">
                Maître Julia GADILHE
              </h1>
              <p className="mt-6 text-xl text-neutral-600">
                Votre avocat en droit Pénal & Droit de la Famille à Roubaix.
                Avocat au Barreau de Lille depuis 2015, je vous défends, vous
                conseille et vous représente devant toutes les juridictions.
              </p>
              <div className="mt-8 flex gap-4">
                <Link
                  href="/contact"
                  className="rounded-full bg-neutral-950 px-4 py-2 text-sm font-semibold text-white hover:bg-neutral-800"
                >
                  Demande de rendez-vous
                </Link>
                <a
                  href="tel:0637414309"
                  className="rounded-full border border-neutral-950 px-4 py-2 text-sm font-semibold text-neutral-950 hover:bg-neutral-950 hover:text-white"
                >
                  06 37 41 43 09
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>

      <Specialites />

      <Actualites />

      <DerniersArticles articles={articles} />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Benoît Bertrand-Hardy', logo: null }}
      >
        Maître Gadilhe m&apos;a défendu et obtenu un résultat tout à fait
        satisfaisant. À l&apos;écoute, elle est aussi très réactive pour
        répondre à mes questions. Je recommande !
      </Testimonial>

      <Services />

      <GoogleReviews className="mt-24 sm:mt-32 lg:mt-40" />

      <ContactSection />
    </RootLayout>
  )
}
