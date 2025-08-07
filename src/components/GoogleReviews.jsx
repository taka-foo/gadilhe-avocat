'use client'

import clsx from 'clsx'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridPattern } from '@/components/GridPattern'

export function GoogleReviews({ className }) {
  return (
    <div
      className={clsx(
        'relative isolate bg-neutral-50 py-16 sm:py-28 md:py-32',
        className,
      )}
    >
      <GridPattern
        className="absolute inset-0 -z-10 h-full w-full mask-[linear-gradient(to_bottom_left,white_50%,transparent_60%)] fill-neutral-100 stroke-neutral-950/5"
        yOffset={-256}
      />
      <Container>
        <FadeIn>
          <div className="mb-16 text-center">
            <h2 className="font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              Avis clients
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              Découvrez ce que nos clients disent de notre accompagnement
              juridique
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="flex justify-center">
            <div
              className="google-reviews-widget"
              style={{
                width: '100%',
                maxWidth: '800px',
                height: '600px',
                border: 'none',
                borderRadius: '12px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              }}
            >
              {/* Widget Google Reviews */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2547.1234567890123!2d3.1817!3d50.6901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDQxJzI0LjQiTiAzwrAxMCc1NC4xIkU!5e0!3m2!1sfr!2sfr!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Avis Google - Cabinet Maître Julia GADILHE"
              />
            </div>
          </div>
        </FadeIn>

        <FadeIn className="mt-12 text-center">
          <a
            href="https://www.google.com/maps/place/Cabinet+Maître+Julia+GADILHE"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-neutral-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
          >
            Voir tous les avis sur Google
          </a>
        </FadeIn>
      </Container>
    </div>
  )
}
