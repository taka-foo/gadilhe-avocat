import { useId } from 'react'

import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { RootLayout } from '@/components/RootLayout'

function TextInput({ label, ...props }) {
  let id = useId()

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <input
        type="text"
        id={id}
        {...props}
        placeholder=" "
        className="peer block w-full border border-neutral-300 bg-transparent px-6 pt-12 pb-4 text-base/6 text-neutral-950 ring-4 ring-transparent transition group-first:rounded-t-2xl group-last:rounded-b-2xl focus:border-neutral-950 focus:ring-neutral-950/5 focus:outline-hidden"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute top-1/2 left-6 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-not-placeholder-shown:-translate-y-4 peer-not-placeholder-shown:scale-75 peer-not-placeholder-shown:font-semibold peer-not-placeholder-shown:text-neutral-950 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950"
      >
        {label}
      </label>
    </div>
  )
}

function RadioInput({ label, ...props }) {
  return (
    <label className="flex gap-x-3">
      <input
        type="radio"
        {...props}
        className="h-6 w-6 flex-none appearance-none rounded-full border border-neutral-950/20 outline-hidden checked:border-[0.5rem] checked:border-neutral-950 focus-visible:ring-1 focus-visible:ring-neutral-950 focus-visible:ring-offset-2"
      />
      <span className="text-base/6 text-neutral-950">{label}</span>
    </label>
  )
}

function ContactForm() {
  return (
    <FadeIn className="lg:order-last">
      <form>
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Demande de rendez-vous
        </h2>
        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
          <TextInput label="Nom" name="name" autoComplete="name" />
          <TextInput
            label="Prénom"
            name="firstname"
            autoComplete="given-name"
          />
          <TextInput
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
          />
          <TextInput
            label="Téléphone"
            type="tel"
            name="phone"
            autoComplete="tel"
          />
          <TextInput label="Message" name="message" />
          <div className="border border-neutral-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
            <fieldset>
              <legend className="text-base/6 text-neutral-500">
                Domaine de droit
              </legend>
              <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
                <RadioInput
                  label="Droit de la famille"
                  name="domain"
                  value="famille"
                />
                <RadioInput label="Droit pénal" name="domain" value="penal" />
                <RadioInput label="Autre" name="domain" value="autre" />
              </div>
            </fieldset>
          </div>
        </div>
        <Button type="submit" className="mt-10">
          Demander un rendez-vous
        </Button>
      </form>
    </FadeIn>
  )
}

function ContactDetails() {
  return (
    <FadeIn>
      <h2 className="font-display text-base font-semibold text-neutral-950">
        Cabinet d&apos;avocat
      </h2>
      <p className="mt-6 text-base text-neutral-600">
        Maître Julia GADILHE vous reçoit sur rendez-vous, du lundi au vendredi
        de 8h30 à 12h30 et de 14h à 19h00.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-8">
        <div className="rounded-3xl bg-neutral-50 p-8">
          <h3 className="font-display text-lg font-semibold text-neutral-950">
            Adresse du cabinet
          </h3>
          <p className="mt-4 text-base text-neutral-600">
            70 Avenue Jean Lebas
            <br />
            Résidence Ermitage, 3ème étage
            <br />
            59100 ROUBAIX
          </p>
          <p className="mt-2 text-sm text-neutral-500">
            Proche de la gare de Roubaix
          </p>
        </div>
      </div>

      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Nous contacter
        </h2>
        <dl className="mt-6 grid grid-cols-1 gap-8 text-sm">
          <div>
            <dt className="font-semibold text-neutral-950">Téléphone</dt>
            <dd>
              <a
                href="tel:0637414309"
                className="text-neutral-600 hover:text-neutral-950"
              >
                06 37 41 43 09
              </a>
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-neutral-950">Email</dt>
            <dd>
              <a
                href="mailto:gadilhe.avocat@gmail.com"
                className="text-neutral-600 hover:text-neutral-950"
              >
                gadilhe.avocat@gmail.com
              </a>
            </dd>
          </div>
        </dl>
      </Border>

      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Informations pratiques
        </h2>
        <div className="mt-6 space-y-4 text-sm text-neutral-600">
          <p>
            <strong>Horaires de consultation :</strong>
            <br />
            Lundi - Vendredi : 8h30 - 12h30 et 14h00 - 19h00
          </p>
          <p>
            <strong>Aide juridictionnelle :</strong>
            <br />
            Prise en charge de vos frais d&apos;avocat selon vos ressources
          </p>
          <p>
            <strong>Barreau :</strong>
            <br />
            Avocat au Barreau de Lille depuis 2015
          </p>
        </div>
      </Border>
    </FadeIn>
  )
}

export const metadata = {
  title: 'Contact',
  description:
    "Contactez Maître Julia GADILHE pour un rendez-vous. Cabinet d'avocat à Roubaix spécialisé en droit de la famille et droit pénal.",
}

export default function Contact() {
  return (
    <RootLayout>
      <PageIntro eyebrow="Contact" title="Prendre rendez-vous">
        <p>
          Maître Julia GADILHE vous reçoit sur rendez-vous pour étudier votre
          situation.
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <ContactForm />
          <ContactDetails />
        </div>
      </Container>
    </RootLayout>
  )
}
