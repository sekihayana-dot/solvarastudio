import { ChevronDown } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { useState } from 'react';
import { faqs } from '@/data/faqs';
import { CTALink } from '../ui/cta-button';
import { Reveal } from '../ui/reveal';

export function FAQ() {
    const [open, setOpen] = useState<number | null>(0);
    const reduce = useReducedMotion();

    return (
        <section
            id="faq"
            className="relative bg-[var(--color-night)] pt-24 pb-24 md:pt-32 md:pb-32"
        >
            <div className="mx-auto max-w-[800px] px-5 md:px-8">
                <Reveal className="text-center">
                    <p className="text-[12px] tracking-[0.18em] text-white/55 uppercase">
                        Frequently Asked Questions
                    </p>
                </Reveal>
                <Reveal delay={0.05}>
                    <h2 className="mx-auto mt-3 max-w-2xl text-center font-display text-[34px] leading-[1.05] tracking-tight text-white md:text-[52px]">
                        Semua yang perlu Anda tahu
                    </h2>
                </Reveal>
                <Reveal delay={0.1}>
                    <p className="mx-auto mt-5 max-w-md text-center text-[14px] leading-relaxed text-white/60">
                        Tidak menemukan yang Anda cari? Hubungi kami langsung.
                    </p>
                </Reveal>
                <Reveal delay={0.14}>
                    <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                        <CTALink href="#contact" variant="primary">
                            Mulai diskusi
                        </CTALink>
                        <CTALink href="#contact" variant="secondary">
                            Hubungi support
                        </CTALink>
                    </div>
                </Reveal>

                <ul className="mt-14 space-y-3 md:mt-20">
                    {faqs.map((item, idx) => {
                        const isOpen = open === idx;
                        const buttonId = `faq-button-${idx}`;
                        const panelId = `faq-panel-${idx}`;

                        return (
                            <li
                                key={item.question}
                                className={
                                    'overflow-hidden rounded-2xl border transition-colors ' +
                                    (isOpen
                                        ? 'border-stroke-soft bg-[var(--color-night-3)]'
                                        : 'border-stroke bg-[var(--color-night-2)]')
                                }
                            >
                                <h3>
                                    <button
                                        id={buttonId}
                                        type="button"
                                        aria-expanded={isOpen}
                                        aria-controls={panelId}
                                        onClick={() =>
                                            setOpen(isOpen ? null : idx)
                                        }
                                        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-white transition-colors hover:bg-white/[0.02] focus-visible:ring-2 focus-visible:ring-[color-mix(in_srgb,var(--color-lime)_40%,transparent)] focus-visible:outline-none md:px-7 md:py-6"
                                    >
                                        <span className="text-[15px] font-medium tracking-tight text-white md:text-[16px]">
                                            {item.question}
                                        </span>
                                        <ChevronDown
                                            aria-hidden
                                            className={
                                                'size-4 shrink-0 text-white/65 transition-transform duration-300 ' +
                                                (isOpen ? 'rotate-180' : '')
                                            }
                                        />
                                    </button>
                                </h3>
                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            id={panelId}
                                            role="region"
                                            aria-labelledby={buttonId}
                                            initial={
                                                reduce
                                                    ? false
                                                    : {
                                                          height: 0,
                                                          opacity: 0,
                                                      }
                                            }
                                            animate={
                                                reduce
                                                    ? undefined
                                                    : {
                                                          height: 'auto',
                                                          opacity: 1,
                                                      }
                                            }
                                            exit={
                                                reduce
                                                    ? undefined
                                                    : {
                                                          height: 0,
                                                          opacity: 0,
                                                      }
                                            }
                                            transition={{
                                                duration: 0.28,
                                                ease: [0.22, 1, 0.36, 1],
                                            }}
                                            className="overflow-hidden"
                                        >
                                            <p className="px-6 pb-6 text-[14px] leading-relaxed text-white/70 md:px-7 md:pb-7">
                                                {item.answer}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
}
