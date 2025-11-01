import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import { TextEffect } from "@/components/motion-primitives/text-effect";
import { AnimatedGroup } from "@/components/motion-primitives/animated-group";


export default function HeroSection() {
  return (
    <>
      <div className="overflow-hidden min-h-screen">
        <section>
          <div className="relative pt-24 md:pt-36">
            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      delayChildren: 1,
                    },
                  },
                },
                item: {
                  hidden: {
                    opacity: 0,
                    y: 20,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                      transition: {
                        type: "spring" as const,
                        bounce: 0.3,
                        duration: 2,
                      },
                  },
                },
              }}
              className="absolute inset-0 -z-20"
            >
              <div className="h-screen xl:h-auto absolute inset-2 -z-10 overflow-hidden rounded-3xl border border-black/10 lg:aspect-video lg:rounded-[3rem] dark:border-white/5">
                <video
                  autoPlay
                  loop
                  muted
                  preload="auto"
                  className="size-full -scale-x-100 object-cover opacity-50 invert-0 dark:opacity-35 dark:invert "
                >
                  <source src="/hero-light.mp4" type="video/mp4" />
                </video>
              </div>
            </AnimatedGroup>

            <div className="mx-auto max-w-6xl px-6">
              <div className="text-center">
                <TextEffect
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  as="h1"
                  className="mt-20 md:mt-32 text-balance text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight"
                >
                  {"Des vidéos qui captivent.\nDes histoires qui restent."}
                </TextEffect>
                <TextEffect
                  per="line"
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  delay={0.5}
                  as="p"
                  className="mx-auto mt-8 max-w-2xl text-balance text-lg md:text-xl text-muted-foreground"
                >
                  Vidéaste professionnel basé à Paris, je crée des contenus vidéo
                  sur mesure pour le corporate, l'événementiel et les clips
                  musicaux. Mon ambition : raconter votre histoire avec émotion, précision et impact.
                </TextEffect>

                <AnimatedGroup
                  variants={{
                    container: {
                      visible: {
                        transition: {
                          staggerChildren: 0.05,
                          delayChildren: 0.75,
                        },
                      },
                    },
                    item: {
                      hidden: {
                        opacity: 0,
                        y: 20,
                      },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                          type: "spring" as const,
                          bounce: 0.3,
                          duration: 0.6,
                        },
                      },
                    },
                  }}
                  className="mt-12 flex flex-col items-center justify-center gap-4 md:flex-row md:gap-6"
                >
                  <Button
                    key={1}
                    asChild
                    size="lg"
                    className="rounded-xl px-8 py-6 text-base font-medium"
                  >
                    <Link href="#portfolio">
                      Voir mon portfolio
                    </Link>
                  </Button>
                  <Button
                    key={2}
                    asChild
                    size="lg"
                    variant="outline"
                    className="rounded-xl px-8 py-6 text-base font-medium"
                  >
                    <Link href="#contact">
                      Me contacter
                    </Link>
                  </Button>
                </AnimatedGroup>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
