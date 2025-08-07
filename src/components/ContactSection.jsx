import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'

export function ContactSection() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="-mx-6 rounded-4xl bg-neutral-950 px-6 py-20 sm:mx-0 sm:py-32 md:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-medium text-balance text-white sm:text-4xl">
              Besoin d&apos;un conseil juridique ?
            </h2>
            <p className="mt-6 text-xl text-neutral-300">
              Maître Julia GADILHE vous reçoit sur rendez-vous pour étudier
              votre situation et vous proposer la meilleure stratégie de
              défense.
            </p>
            <div className="mt-6 flex gap-4">
              <Button href="/contact" invert>
                Prendre rendez-vous
              </Button>
              <a
                href="tel:0637414309"
                className="rounded-full border border-white px-6 py-3 text-sm font-semibold text-white hover:bg-white hover:text-neutral-950"
              >
                06 37 41 43 09
              </a>
            </div>
            <div className="mt-10 border-t border-white/10 pt-10">
              <h3 className="font-display text-base font-semibold text-white">
                Cabinet d&apos;avocat à Roubaix
              </h3>
              <div className="mt-6 grid grid-cols-1 gap-8">
                <div>
                  <h4 className="font-semibold text-white">Adresse</h4>
                  <p className="mt-2 text-neutral-300">
                    70 Avenue Jean Lebas
                    <br />
                    Résidence Ermitage, 3ème étage
                    <br />
                    59100 ROUBAIX
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-white">Horaires</h4>
                  <p className="mt-2 text-neutral-300">
                    Lundi - Vendredi
                    <br />
                    8h30 - 12h30 et 14h00 - 19h00
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-white">Contact</h4>
                  <p className="mt-2 text-neutral-300">
                    <a href="tel:0637414309" className="hover:text-white">
                      06 37 41 43 09
                    </a>
                    <br />
                    <a
                      href="mailto:gadilhe.avocat@gmail.com"
                      className="hover:text-white"
                    >
                      gadilhe.avocat@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}
