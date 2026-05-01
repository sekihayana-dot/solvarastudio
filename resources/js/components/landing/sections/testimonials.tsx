import { useState } from 'react';
import { testimonials } from '@/data/testimonials';
import { Reveal } from '../ui/reveal';

const partnerLogos = ['Command+R', 'Interlock', 'FocalPoint', 'Acme Corp'];

export function Testimonials() {
    const [active, setActive] = useState(1);
    const current = testimonials[active] ?? testimonials[0];

    const initials = (name: string) =>
        name
            .split(' ')
            .map((p) => p[0])
            .join('')
            .slice(0, 2)
            .toUpperCase();

    const avatarTone = ['#5b6f3a', '#a8b88e', '#3a4626', '#8aa055'];

    return (
        <section
            id="trusted"
            className="relative bg-[var(--color-night)] pt-24 pb-24 md:pt-32 md:pb-32"
        >
            <div className="mx-auto max-w-[1200px] px-5 md:px-8">
                <Reveal>
                    <h2 className="max-w-3xl font-display text-[34px] leading-[1.05] tracking-tight text-white md:text-[56px]">
                        Dipercaya tim di seluruh{' '}
                        <span className="text-white/70 italic">Indonesia</span>
                    </h2>
                </Reveal>

                <div className="mt-12 grid items-center gap-10 md:mt-16 md:grid-cols-12 md:gap-12">
                    <div className="md:col-span-5">
                        <div className="flex items-center gap-3">
                            {testimonials.map((t, i) => {
                                const isActive = i === active;

                                return (
                                    <button
                                        type="button"
                                        key={t.name}
                                        onClick={() => setActive(i)}
                                        aria-label={`Lihat testimoni dari ${t.name}`}
                                        className={
                                            'relative size-14 shrink-0 rounded-full transition md:size-16 ' +
                                            (isActive
                                                ? 'p-[2px]'
                                                : 'p-[1px] opacity-70 hover:opacity-100')
                                        }
                                        style={{
                                            background: isActive
                                                ? 'var(--color-lime)'
                                                : 'transparent',
                                        }}
                                    >
                                        <span
                                            className="flex size-full items-center justify-center rounded-full text-[13px] font-medium text-white"
                                            style={{
                                                backgroundColor:
                                                    avatarTone[
                                                        i % avatarTone.length
                                                    ],
                                            }}
                                        >
                                            {initials(t.name)}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    <div className="md:col-span-7">
                        <Reveal>
                            <p className="text-[18px] leading-relaxed text-white md:text-[22px]">
                                “{current.quote}”
                            </p>
                            <p className="mt-5 text-[14px] text-white/65">
                                <span className="font-medium text-white">
                                    {current.name}
                                </span>
                                <span className="mx-2 text-white/30">·</span>
                                {current.role}
                            </p>
                        </Reveal>
                    </div>
                </div>

                <div className="mt-16 grid grid-cols-2 items-center gap-6 border-t border-stroke pt-10 sm:grid-cols-4 md:gap-10">
                    {partnerLogos.map((brand) => (
                        <div
                            key={brand}
                            className="text-center font-display text-[18px] tracking-tight text-white/35 transition hover:text-white/70 md:text-[22px]"
                        >
                            {brand}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
