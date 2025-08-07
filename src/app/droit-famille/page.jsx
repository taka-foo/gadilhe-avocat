import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { RootLayout } from '@/components/RootLayout'

export const metadata = {
  title: 'Droit de la famille',
  description:
    'Maître Julia GADILHE vous accompagne dans toutes vos procédures de droit de la famille à Roubaix.',
}

export default function DroitFamille() {
  return (
    <RootLayout>
      <PageIntro
        eyebrow="Droit de la famille"
        title="Accompagnement juridique en droit de la famille"
      >
        <p>
          La vie familiale est soumise à de nombreux aléas et évolue
          constamment. Les changements sont parfois tellement importants
          qu&apos;ils nécessitent l&apos;intervention d&apos;un Juge.
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeInStagger>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <FadeIn>
              <div className="rounded-3xl bg-neutral-50 p-8">
                <h3 className="mb-4 text-xl font-semibold text-neutral-950">
                  Divorce et séparation
                </h3>
                <List className="mt-6">
                  <ListItem title="Divorce par consentement mutuel">
                    Accompagnement dans la rédaction de la convention de divorce
                    et suivi de la procédure.
                  </ListItem>
                  <ListItem title="Divorce contentieux">
                    Défense de vos intérêts devant le juge aux affaires
                    familiales.
                  </ListItem>
                  <ListItem title="Séparation de corps">
                    Procédure alternative au divorce permettant la séparation
                    tout en conservant le lien matrimonial.
                  </ListItem>
                </List>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="rounded-3xl bg-neutral-50 p-8">
                <h3 className="mb-4 text-xl font-semibold text-neutral-950">
                  Autorité parentale et garde d&apos;enfants
                </h3>
                <List className="mt-6">
                  <ListItem title="Garde alternée">
                    Organisation de la résidence alternée et fixation des
                    modalités de garde dans l&apos;intérêt de l&apos;enfant.
                  </ListItem>
                  <ListItem title="Droit de visite et d'hébergement">
                    Définition des modalités de rencontre entre l&apos;enfant et
                    le parent non gardien.
                  </ListItem>
                  <ListItem title="Autorité parentale conjointe">
                    Maintien de l&apos;autorité parentale partagée malgré la
                    séparation.
                  </ListItem>
                </List>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="rounded-3xl bg-neutral-50 p-8">
                <h3 className="mb-4 text-xl font-semibold text-neutral-950">
                  Pension alimentaire et prestations compensatoires
                </h3>
                <List className="mt-6">
                  <ListItem title="Pension alimentaire pour enfants">
                    Calcul et fixation de la contribution à l&apos;entretien et
                    à l&apos;éducation des enfants.
                  </ListItem>
                  <ListItem title="Prestation compensatoire">
                    Indemnisation du déséquilibre économique créé par le
                    divorce.
                  </ListItem>
                  <ListItem title="Révision des pensions">
                    Adaptation des montants en cas de changement de situation.
                  </ListItem>
                </List>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="rounded-3xl bg-neutral-50 p-8">
                <h3 className="mb-4 text-xl font-semibold text-neutral-950">
                  Succession et donation
                </h3>
                <List className="mt-6">
                  <ListItem title="Succession ab intestat">
                    Défense de vos droits dans les successions sans testament.
                  </ListItem>
                  <ListItem title="Testament et donation">
                    Rédaction et conseils en matière de transmission
                    patrimoniale.
                  </ListItem>
                  <ListItem title="Liquidation de succession">
                    Accompagnement dans toutes les étapes de la procédure
                    successorale.
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
              Besoin d&apos;un conseil juridique ?
            </h2>
            <p className="mt-4 text-xl text-neutral-300">
              Maître Julia GADILHE vous reçoit sur rendez-vous pour étudier
              votre situation.
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
