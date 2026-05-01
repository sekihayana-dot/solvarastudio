import { CalendarCheck, Rocket, Users } from 'lucide-react';
import { CTALink } from '../ui/cta-button';
import { Reveal } from '../ui/reveal';

const steps = [
    {
        icon: CalendarCheck,
        title: 'Kickoff terjadwal',
        description:
            'Selaraskan scope, struktur, dan timeline. Cocok untuk setup ringkas maupun migrasi penuh, kami yang ambil alih prosesnya.',
    },
    {
        icon: Users,
        title: 'Kolaborasi real-time',
        description:
            'Bekerja bersama tim Solvara dengan visibilitas penuh. Setiap langkah mengikuti best practice dan QA menyeluruh untuk menjaga kualitas.',
    },
    {
        icon: Rocket,
        title: 'Launch & scale',
        description:
            'Rilis dengan percaya diri. Sistem kami terus belajar dan berkembang agar tim Anda bisa tumbuh tanpa hambatan teknis.',
    },
];

export function Process() {
    return (
        <section
            id="process"
            className="relative bg-[var(--color-night)] pt-24 pb-24 md:pt-32 md:pb-32"
        >
            <div className="mx-auto max-w-[1200px] px-5 md:px-8">
                <div className="grid grid-cols-1 gap-16 md:grid-cols-12 md:gap-12">
                    <div className="md:col-span-5">
                        <Reveal>
                            <h2 className="font-display text-[40px] leading-[1.05] tracking-tight text-white md:text-[64px]">
                                Cara kerja
                                <br /> kami
                            </h2>
                        </Reveal>
                        <Reveal delay={0.05}>
                            <p className="mt-6 max-w-md text-[14px] leading-relaxed text-white/65 md:text-[15px]">
                                Platform Anda dikonfigurasi oleh ahlinya dan
                                diluncurkan di paket{' '}
                                <span className="font-medium text-white">
                                    Enterprise plan
                                </span>
                                , siap tumbuh bersama tim.
                            </p>
                        </Reveal>
                        <Reveal delay={0.1}>
                            <div className="mt-8">
                                <CTALink href="#contact" variant="light">
                                    Jadwalkan kickoff
                                </CTALink>
                            </div>
                        </Reveal>
                    </div>

                    <div className="md:col-span-7">
                        <ol className="relative">
                            <span
                                aria-hidden
                                className="absolute top-3 bottom-3 left-[18px] w-px bg-[var(--color-lime)]/40 md:left-[22px]"
                            />
                            {steps.map((step, idx) => (
                                <Reveal
                                    key={step.title}
                                    delay={idx * 0.08}
                                    className="relative pb-14 pl-12 last:pb-0 md:pl-16"
                                >
                                    <span
                                        aria-hidden
                                        className="absolute top-0 left-0 inline-flex size-9 items-center justify-center rounded-full bg-[var(--color-lime)] text-[var(--color-night)] md:size-11"
                                    >
                                        <step.icon className="size-4 md:size-5" />
                                    </span>
                                    <h3 className="font-display text-[22px] leading-tight text-white md:text-[26px]">
                                        {step.title}
                                    </h3>
                                    <p className="mt-2 max-w-md text-[13px] leading-relaxed text-white/60 md:text-[14px]">
                                        {step.description}
                                    </p>
                                </Reveal>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
        </section>
    );
}
