import { ArrowUpRight, Sparkles } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { CTALink } from '../ui/cta-button';
import { DashboardMockup } from '../ui/dashboard-mockup';

export function Hero() {
    const reduce = useReducedMotion();

    const fadeUp = (delay: number) =>
        reduce
            ? {}
            : {
                  initial: { opacity: 0, y: 18 },
                  animate: { opacity: 1, y: 0 },
                  transition: {
                      duration: 0.8,
                      delay,
                      ease: [0.22, 1, 0.36, 1] as [
                          number,
                          number,
                          number,
                          number,
                      ],
                  },
              };

    return (
        <section
            id="top"
            className="relative isolate overflow-hidden bg-[var(--color-night)] pt-28 pb-0 md:pt-36"
        >
            <div
                aria-hidden
                className="hero-landscape pointer-events-none absolute inset-0 -z-10 opacity-95"
            />
            <div
                aria-hidden
                className="noise-overlay pointer-events-none absolute inset-0 -z-10 opacity-40 mix-blend-overlay"
            />

            <div className="mx-auto max-w-[1200px] px-5 md:px-8">
                {/* Pill: Now Available */}
                <motion.div
                    {...fadeUp(0)}
                    className="mx-auto flex w-fit items-center gap-2 rounded-full border border-stroke-soft bg-white/90 px-3 py-1.5 text-[12px] text-[var(--color-night)] backdrop-blur"
                >
                    <span className="font-medium">Sekarang tersedia</span>
                    <Sparkles
                        aria-hidden
                        className="size-3.5 text-[var(--color-lime-deep)]"
                    />
                </motion.div>

                {/* Headline */}
                <motion.h1
                    {...fadeUp(0.05)}
                    className="mx-auto mt-7 max-w-[920px] text-center font-display text-[44px] leading-[1.02] tracking-[-0.02em] text-[var(--color-night)] sm:text-[60px] md:text-[80px] lg:text-[92px]"
                >
                    Bangun Lebih Cepat
                    <br />
                    Rilis dengan{' '}
                    <span className="text-[var(--color-night)] italic">
                        Percaya Diri
                    </span>
                </motion.h1>

                <motion.p
                    {...fadeUp(0.18)}
                    className="mx-auto mt-7 max-w-2xl text-center text-[15px] leading-relaxed text-[var(--color-night)]/80 md:text-[17px]"
                >
                    Studio digital modern untuk tim yang ingin bergerak cepat
                    tanpa mengorbankan kualitas — website, aplikasi, dan sistem
                    bisnis yang rapi sejak scope awal.
                </motion.p>

                <motion.div
                    {...fadeUp(0.28)}
                    className="mt-9 flex flex-wrap items-center justify-center gap-3"
                >
                    <CTALink href="#contact" variant="primary">
                        Mulai Sekarang
                    </CTALink>
                </motion.div>

                {/* Trust line */}
                <motion.div
                    {...fadeUp(0.4)}
                    className="mt-8 flex items-center justify-center gap-2 text-[12px] tracking-tight text-[var(--color-night)]/70"
                >
                    <span className="inline-flex h-1 w-6 bg-[var(--color-night)]/40" />
                    <span>Discovery jelas. Scope rapi. Delivery bertahap.</span>
                </motion.div>

                {/* Floating dashboard mockup */}
                <motion.div
                    {...(reduce
                        ? {}
                        : {
                              initial: { opacity: 0, y: 60 },
                              animate: { opacity: 1, y: 0 },
                              transition: {
                                  duration: 1,
                                  delay: 0.45,
                                  ease: [0.22, 1, 0.36, 1] as [
                                      number,
                                      number,
                                      number,
                                      number,
                                  ],
                              },
                          })}
                    className="relative mt-16 md:mt-24"
                >
                    <DashboardMockup />
                </motion.div>
            </div>

            {/* Inline arrow pill bottom (decorative) */}
            <a
                href="#features"
                aria-label="Lihat fitur platform"
                className="group absolute right-6 bottom-6 hidden size-11 items-center justify-center rounded-full border border-stroke-soft bg-white/10 text-white backdrop-blur transition hover:bg-white/20 md:inline-flex"
            >
                <ArrowUpRight className="size-4 rotate-90 transition-transform group-hover:translate-y-0.5" />
            </a>
        </section>
    );
}
