import { CheckCircle2, Rocket, Sparkles, Star } from 'lucide-react';
import { Reveal } from '../ui/reveal';

export function Services() {
    return (
        <section
            id="features"
            className="relative bg-[var(--color-night)] pt-24 md:pt-32"
        >
            <div
                aria-hidden
                className="dot-grid pointer-events-none absolute inset-0 -z-0 opacity-50"
            />

            <div className="relative mx-auto max-w-[1200px] px-5 md:px-8">
                <Reveal>
                    <h2 className="max-w-4xl font-display text-[34px] leading-[1.05] tracking-[-0.01em] text-white md:text-[56px] lg:text-[64px]">
                        Tim modern memakai Solvara untuk{' '}
                        <span className="text-white/70 italic">
                            menyederhanakan
                        </span>{' '}
                        setiap titik kontak digital — menggabungkan keahlian
                        manusia dengan workflow yang konsisten dalam satu sistem
                        yang mendorong perbaikan berkelanjutan di seluruh kanal.
                    </h2>
                </Reveal>

                <div className="mt-12 grid grid-cols-1 gap-4 md:mt-16 md:grid-cols-12 md:gap-5">
                    {/* Big card - Onboarding */}
                    <Reveal className="md:col-span-6 md:row-span-2">
                        <div className="relative flex h-full flex-col overflow-hidden rounded-2xl bg-[var(--color-lime)] p-7 md:p-10">
                            <h3 className="font-display text-[26px] leading-[1.1] tracking-tight text-[var(--color-night)] md:text-[34px]">
                                Onboarding terpandu
                                <br />
                                untuk setiap tim
                            </h3>
                            <p className="mt-3 max-w-md text-[13px] leading-relaxed text-[var(--color-night)]/75 md:text-[14px]">
                                Tim Anda siap pakai dalam hitungan hari, bukan
                                bulan, dengan walkthrough bertahap, dokumentasi
                                ringan, dan handover yang rapi.
                            </p>

                            <div className="mt-auto flex justify-center pt-10">
                                <div className="relative w-full max-w-[280px] rounded-3xl border border-[var(--color-night)]/20 bg-white p-5 shadow-xl">
                                    <div className="mx-auto mb-3 h-1.5 w-12 rounded-full bg-[var(--color-night)]/15" />
                                    <p className="text-center font-display text-[20px] leading-tight text-[var(--color-night)]">
                                        Workspace Anda
                                        <br />
                                        siap digunakan!
                                    </p>
                                    <p className="mx-auto mt-2 max-w-[210px] text-center text-[11px] text-[var(--color-night)]/55">
                                        Undang tim dan mulai kolaborasi instan.
                                    </p>
                                    <div className="mt-4 rounded-xl border border-[var(--color-night)]/10 bg-[var(--color-cream)] p-3 text-[11px] text-[var(--color-night)]">
                                        <div className="flex items-start justify-between">
                                            <div>
                                                <p className="text-[10px] tracking-[0.16em] text-[var(--color-night)]/50 uppercase">
                                                    Project
                                                </p>
                                                <p className="mt-1 font-medium">
                                                    Solvara · Phase 1
                                                </p>
                                            </div>
                                            <CheckCircle2 className="size-4 text-[var(--color-lime-deep)]" />
                                        </div>
                                        <div className="mt-3 flex items-center gap-2 text-[9px] tracking-[0.18em] text-[var(--color-night)]/55 uppercase">
                                            <span>Sprint 1</span>
                                            <span className="size-1 rounded-full bg-[var(--color-night)]/30" />
                                            <span>Live preview</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Reveal>

                    {/* Real-time Data card */}
                    <Reveal delay={0.05} className="md:col-span-6">
                        <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-stroke bg-[var(--color-olive)] p-7 md:p-8">
                            <div className="flex items-start justify-between gap-6">
                                <div>
                                    <h3 className="font-display text-[22px] leading-tight tracking-tight text-white md:text-[26px]">
                                        Data &amp; analitik real-time
                                    </h3>
                                    <p className="mt-2 max-w-[280px] text-[13px] leading-relaxed text-white/65">
                                        Pantau metrik, trafik, dan aktivitas tim
                                        secara langsung dari satu dashboard.
                                    </p>
                                </div>

                                <div className="hidden w-[200px] shrink-0 rounded-xl border border-white/10 bg-[var(--color-night-2)] p-3 text-[11px] text-white sm:block">
                                    <div className="flex items-center gap-1.5 rounded-md bg-white/5 px-2 py-1 text-[10px] text-white/55">
                                        <Sparkles className="size-3" />
                                        Cari project…
                                    </div>
                                    <p className="mt-3 text-[10px] text-white/50">
                                        Active projects
                                    </p>
                                    <p className="text-[18px] font-semibold text-white">
                                        24 berjalan
                                    </p>
                                    <div className="mt-2 flex flex-wrap gap-1 text-[9px]">
                                        <span className="rounded-md bg-[var(--color-lime)] px-1.5 py-0.5 text-[var(--color-night)]">
                                            Deploy
                                        </span>
                                        <span className="rounded-md bg-white/5 px-1.5 py-0.5 text-white/65">
                                            Build
                                        </span>
                                        <span className="rounded-md bg-white/5 px-1.5 py-0.5 text-white/65">
                                            Test
                                        </span>
                                    </div>
                                    <div className="mt-3 rounded-md border border-white/10 bg-white/5 px-2 py-1.5 text-[10px]">
                                        <div className="flex items-center justify-between">
                                            <span className="text-white/55">
                                                Build status
                                            </span>
                                            <span className="text-[9px] text-white/55">
                                                100%
                                            </span>
                                        </div>
                                        <p className="mt-0.5 text-[var(--color-lime)]">
                                            Semua lulus
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Reveal>

                    {/* Trusted by */}
                    <Reveal delay={0.1} className="md:col-span-3">
                        <div className="relative flex h-full flex-col rounded-2xl border border-stroke bg-[var(--color-olive)] p-7 md:p-8">
                            <h3 className="font-display text-[22px] leading-tight text-white md:text-[24px]">
                                Dipercaya
                                <br />
                                40+ klien
                            </h3>

                            <div className="mt-auto flex items-center gap-2 pt-6">
                                <div className="flex -space-x-2">
                                    {[
                                        'bg-[#5b6f3a]',
                                        'bg-[#a8b88e]',
                                        'bg-[#3a4626]',
                                    ].map((c, i) => (
                                        <span
                                            key={i}
                                            className={
                                                'size-7 rounded-full border-2 border-[var(--color-olive)] ' +
                                                c
                                            }
                                        />
                                    ))}
                                </div>
                                <span className="rounded-full bg-[var(--color-lime)] px-2 py-0.5 text-[11px] font-medium text-[var(--color-night)]">
                                    5+
                                </span>
                            </div>
                            <div className="mt-3 flex items-center gap-1 text-[11px] text-white/65">
                                <Star className="size-3.5 fill-[var(--color-lime)] text-[var(--color-lime)]" />
                                <span>4.9 dari klien aktif</span>
                            </div>
                        </div>
                    </Reveal>

                    {/* Built to scale */}
                    <Reveal delay={0.15} className="md:col-span-3">
                        <div className="relative flex h-full flex-col rounded-2xl border border-stroke bg-[var(--color-olive)] p-7 md:p-8">
                            <div className="mb-3 inline-flex w-fit items-center gap-1 rounded-full bg-white/5 px-2 py-0.5 text-[10px] tracking-[0.16em] text-white/55 uppercase">
                                <Rocket className="size-3" />
                                Skala
                            </div>
                            <h3 className="font-display text-[20px] leading-tight text-white md:text-[22px]">
                                Dibangun untuk skala
                            </h3>
                            <p className="mt-2 text-[12px] leading-relaxed text-white/55">
                                Infrastruktur enterprise-ready yang tumbuh
                                bersama tim Anda.
                            </p>

                            <div className="mt-5 space-y-2">
                                <div className="flex items-center justify-between rounded-lg border border-stroke-soft bg-[var(--color-night-3)] px-3 py-2 text-[11px]">
                                    <span className="text-white/65">
                                        Deploy/bln
                                    </span>
                                    <span className="font-medium text-white">
                                        2.598
                                    </span>
                                </div>
                                <div className="flex items-center justify-between rounded-lg border border-stroke-soft bg-[var(--color-night-3)] px-3 py-2 text-[11px]">
                                    <span className="text-white/65">
                                        Uptime
                                    </span>
                                    <span className="font-medium text-[var(--color-lime)]">
                                        99,9%
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
