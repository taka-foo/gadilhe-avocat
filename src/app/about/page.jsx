import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { RootLayout } from '@/components/RootLayout'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'

function Expertise() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Notre expertise"
        title="Accompagnement juridique personnalisé et professionnel"
        invert
      >
        <p>
          Maître Julia GADILHE met son expertise au service de vos intérêts avec
          rigueur et humanité.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Écoute" invert>
            Chaque situation est unique. Nous prenons le temps d&apos;écouter et
            de comprendre votre dossier pour vous proposer la meilleure
            stratégie.
          </GridListItem>
          <GridListItem title="Réactivité" invert>
            Nous répondons rapidement à vos demandes et vous tenons informé de
            l&apos;évolution de votre dossier.
          </GridListItem>
          <GridListItem title="Détermination" invert>
            Nous nous engageons pleinement dans votre défense avec
            professionnalisme et détermination pour obtenir les meilleurs
            résultats.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

function Parcours() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeInStagger>
        <Border as={FadeIn} />
        <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
          <FadeIn>
            <h2 className="font-display text-2xl font-semibold text-neutral-950">
              Parcours professionnel
            </h2>
          </FadeIn>
          <div className="lg:col-span-3">
            <FadeIn>
              <div className="space-y-8">
                <div className="rounded-3xl bg-neutral-50 p-8">
                  <h3 className="mb-4 font-display text-xl font-semibold text-neutral-950">
                    Formation et diplômes
                  </h3>
                  <ul className="space-y-2 text-neutral-600">
                    <li>• Master en Droit privé</li>
                    <li>• Formation spécialisée en droit de la famille</li>
                    <li>• Formation spécialisée en droit pénal</li>
                    <li>• Formation continue régulière</li>
                  </ul>
                </div>

                <div className="rounded-3xl bg-neutral-50 p-8">
                  <h3 className="mb-4 font-display text-xl font-semibold text-neutral-950">
                    Expérience professionnelle
                  </h3>
                  <ul className="space-y-2 text-neutral-600">
                    <li>• Avocat au Barreau de Lille depuis 2015</li>
                    <li>
                      • Spécialisation en droit de la famille et droit pénal
                    </li>
                    <li>• Représentation devant toutes les juridictions</li>
                    <li>• Accompagnement de centaines de clients</li>
                  </ul>
                </div>

                <div className="rounded-3xl bg-neutral-50 p-8">
                  <h3 className="mb-4 font-display text-xl font-semibold text-neutral-950">
                    Approche du métier
                  </h3>
                  <p className="text-neutral-600">
                    Maître Julia GADILHE considère que chaque client mérite une
                    attention particulière et un accompagnement personnalisé.
                    Son approche combine rigueur juridique et écoute humaine
                    pour offrir la meilleure défense possible dans des
                    situations souvent difficiles.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </FadeInStagger>
    </Container>
  )
}

function Cabinet() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeInStagger>
        <Border as={FadeIn} />
        <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
          <FadeIn>
            <h2 className="font-display text-2xl font-semibold text-neutral-950">
              Le Cabinet
            </h2>
          </FadeIn>
          <div className="lg:col-span-3">
            <FadeIn>
              <div className="space-y-8">
                <div className="rounded-3xl bg-neutral-50 p-8">
                  <h3 className="mb-4 font-display text-xl font-semibold text-neutral-950">
                    Localisation
                  </h3>
                  <p className="mb-4 text-neutral-600">
                    Le cabinet est situé au cœur de Roubaix, proche de la gare,
                    pour faciliter l&apos;accès à tous les clients.
                  </p>
                  <p className="text-neutral-600">
                    <strong>Adresse :</strong>
                    <br />
                    70 Avenue Jean Lebas
                    <br />
                    Résidence Ermitage, 3ème étage
                    <br />
                    59100 ROUBAIX
                  </p>
                </div>

                <div className="rounded-3xl bg-neutral-50 p-8">
                  <h3 className="mb-4 font-display text-xl font-semibold text-neutral-950">
                    Horaires de consultation
                  </h3>
                  <p className="mb-4 text-neutral-600">
                    Maître Julia GADILHE vous reçoit sur rendez-vous pour
                    garantir un accompagnement de qualité.
                  </p>
                  <p className="text-neutral-600">
                    <strong>Lundi - Vendredi :</strong>
                    <br />
                    8h30 - 12h30 et 14h00 - 19h00
                  </p>
                </div>

                <div className="rounded-3xl bg-neutral-50 p-8">
                  <h3 className="mb-4 font-display text-xl font-semibold text-neutral-950">
                    Aide juridictionnelle
                  </h3>
                  <p className="text-neutral-600">
                    Le cabinet accepte l&apos;aide juridictionnelle pour
                    permettre l&apos;accès au droit pour tous. Les conditions
                    d&apos;éligibilité sont étudiées lors du premier
                    rendez-vous.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </FadeInStagger>
    </Container>
  )
}

export const metadata = {
  title: 'Le Cabinet',
  description:
    "Découvrez le cabinet d'avocat de Maître Julia GADILHE, spécialisé en droit de la famille et droit pénal à Roubaix.",
}

export default function About() {
  return (
    <RootLayout>
      <PageIntro eyebrow="Le Cabinet" title="Maître Julia GADILHE">
        <p>
          Avocat au Barreau de Lille depuis 2015, Maître Julia GADILHE vous
          défend, vous conseille et vous représente devant toutes les
          juridictions pénales et civiles.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            Que vous souhaitiez initier une action en justice ou vous défendre
            d&apos;une procédure intentée contre vous, Maître Julia GADILHE vous
            assiste et met en œuvre la stratégie de défense adaptée à votre
            situation.
          </p>
          <p>
            Spécialisée en droit de la famille et en droit pénal, elle
            accompagne ses clients avec professionnalisme et humanité dans des
            moments souvent difficiles de leur vie.
          </p>
        </div>
      </PageIntro>

      <Container className="mt-16">
        <StatList>
          <StatListItem value="8+" label="Années d'expérience" />
          <StatListItem value="500+" label="Dossiers traités" />
          <StatListItem value="100%" label="Engagement client" />
        </StatList>
      </Container>

      <Expertise />

      <Parcours />

      <Cabinet />

      <ContactSection />
    </RootLayout>
  )
}
