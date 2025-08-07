import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { RootLayout } from '@/components/RootLayout'

export const metadata = {
  title: 'Droit pénal',
  description:
    'Maître Julia GADILHE vous défend en matière pénale à Roubaix. Défense des auteurs et accompagnement des victimes.',
}

export default function DroitPenal() {
  return (
    <RootLayout>
      <PageIntro
        eyebrow="Droit pénal"
        title="Défense pénale et accompagnement des victimes"
      >
        <p>
          Le cabinet intervient en défense de vos intérêts que vous soyez auteur
          d&apos;une contravention, d&apos;un délit ou d&apos;un crime. Il vous
          accompagne et vous défend également si vous êtes victime d&apos;une
          infraction.
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeInStagger>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <FadeIn>
              <div className="rounded-3xl bg-neutral-50 p-8">
                <h3 className="mb-4 text-xl font-semibold text-neutral-950">
                  Défense pénale
                </h3>
                <List className="mt-6">
                  <ListItem title="Contraventions">
                    Défense devant le tribunal de police pour les infractions de
                    5ème classe (amendes jusqu&apos;à 1500€).
                  </ListItem>
                  <ListItem title="Délits">
                    Représentation devant le tribunal correctionnel pour les
                    délits punis d&apos;emprisonnement jusqu&apos;à 10 ans.
                  </ListItem>
                  <ListItem title="Crimes">
                    Défense devant la cour d&apos;assises pour les infractions
                    les plus graves punies de réclusion.
                  </ListItem>
                </List>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="rounded-3xl bg-neutral-50 p-8">
                <h3 className="mb-4 text-xl font-semibold text-neutral-950">
                  Droit routier
                </h3>
                <List className="mt-6">
                  <ListItem title="Excès de vitesse">
                    Défense en cas de dépassement des limitations de vitesse et
                    contestation des radars.
                  </ListItem>
                  <ListItem title="Conduite en état d'ivresse">
                    Accompagnement dans les procédures de conduite sous
                    l&apos;emprise de l&apos;alcool ou de stupéfiants.
                  </ListItem>
                  <ListItem title="Permis de conduire">
                    Défense en cas de suspension ou annulation du permis de
                    conduire.
                  </ListItem>
                </List>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="rounded-3xl bg-neutral-50 p-8">
                <h3 className="mb-4 text-xl font-semibold text-neutral-950">
                  Accompagnement des victimes
                </h3>
                <List className="mt-6">
                  <ListItem title="Constitution de partie civile">
                    Représentation des victimes pour obtenir réparation du
                    préjudice subi.
                  </ListItem>
                  <ListItem title="Indemnisation">
                    Accompagnement dans les demandes d&apos;indemnisation auprès
                    du CIVI ou des assurances.
                  </ListItem>
                  <ListItem title="Protection des victimes">
                    Défense des droits des victimes et accompagnement dans les
                    procédures.
                  </ListItem>
                </List>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="rounded-3xl bg-neutral-50 p-8">
                <h3 className="mb-4 text-xl font-semibold text-neutral-950">
                  Procédures spécialisées
                </h3>
                <List className="mt-6">
                  <ListItem title="Comparution immédiate">
                    Défense dans les procédures d&apos;urgence où le jugement
                    intervient dans les jours qui suivent l&apos;interpellation.
                  </ListItem>
                  <ListItem title="Placement en détention">
                    Contradiction lors des audiences de placement en détention
                    provisoire.
                  </ListItem>
                  <ListItem title="Appel et cassation">
                    Recours devant la cour d&apos;appel et la Cour de cassation.
                  </ListItem>
                </List>
              </div>
            </FadeIn>
          </div>
        </FadeInStagger>
      </Container>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <div className="rounded-3xl bg-neutral-950 py-20 text-center">
            <h2 className="font-display text-3xl font-semibold text-white">
              Besoin d&apos;une défense pénale ?
            </h2>
            <p className="mt-4 text-xl text-neutral-300">
              Maître Julia GADILHE vous défend devant toutes les juridictions
              pénales.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <a
                href="tel:0637414309"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-950 hover:bg-neutral-100"
              >
                06 37 41 43 09
              </a>
              <a
                href="mailto:gadilhe.avocat@gmail.com"
                className="rounded-full border border-white px-6 py-3 text-sm font-semibold text-white hover:bg-white hover:text-neutral-950"
              >
                gadilhe.avocat@gmail.com
              </a>
            </div>
          </div>
        </FadeIn>
      </Container>
    </RootLayout>
  )
}
