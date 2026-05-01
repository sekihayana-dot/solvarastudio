import { Check } from 'lucide-react';
import { CTALink } from '../ui/cta-button';
import { Reveal } from '../ui/reveal';

type Plan = {
    id: string;
    name: string;
    price: string;
    priceUnit: string;
    billing: string;
    features: string[];
    highlighted?: boolean;
    cta: string;
};

const plans: Plan[] = [
    {
        id: 'starter',
        name: 'Starter',
        price: 'Rp 9jt',
        priceUnit: '/project',
        billing: 'Cocok untuk landing page atau company profile ringkas.',
        features: [
            'Sampai 5 halaman',
            'Hosting & domain setup',
            'Basic analitik',
            'Support 14 hari',
        ],
        cta: 'Mulai project',
    },
    {
        id: 'premium',
        name: 'Premium',
        price: 'Rp 25jt',
        priceUnit: '/project',
        billing:
            'Untuk company profile lengkap, landing campaign, atau katalog.',
        features: [
            'Halaman & seksi tanpa batas',
            'CMS / admin ringan',
            'Integrasi WhatsApp & form',
            'SEO & performance tuning',
            'Support 30 hari',
        ],
        highlighted: true,
        cta: 'Pilih Premium',
    },
    {
        id: 'enterprise',
        name: 'Enterprise',
        price: 'Custom',
        priceUnit: '',
        billing: 'Untuk web app, dashboard internal, atau sistem terintegrasi.',
        features: [
            'Custom backend & API',
            'Dashboard & role admin',
            'Integrasi sistem internal',
            'Dedicated support',
        ],
        cta: 'Diskusikan kebutuhan',
    },
];

export function SelectedWork() {
    return (
        <section
            id="pricing"
            className="relative bg-[var(--color-night)] pt-24 pb-24 md:pt-32 md:pb-32"
        >
            <div className="mx-auto max-w-[1200px] px-5 md:px-8">
                <Reveal className="text-center">
                    <p className="text-[12px] tracking-[0.18em] text-white/55 uppercase">
                        Harga
                    </p>
                </Reveal>
                <Reveal delay={0.04}>
                    <h2 className="mx-auto mt-3 max-w-3xl text-center font-display text-[36px] leading-[1.05] tracking-tight text-white md:text-[56px]">
                        Harga Solvara,
                        <br />
                        <span className="text-white/70 italic">transparan</span>
                    </h2>
                </Reveal>

                <div className="mx-auto mt-14 grid max-w-[1100px] grid-cols-1 gap-4 md:mt-20 md:grid-cols-3 md:gap-5">
                    {plans.map((plan, i) => {
                        const isHighlighted = !!plan.highlighted;

                        return (
                            <Reveal
                                key={plan.id}
                                delay={i * 0.06}
                                className="h-full"
                            >
                                <div
                                    className={
                                        'relative flex h-full flex-col rounded-2xl border p-6 md:p-8 ' +
                                        (isHighlighted
                                            ? 'border-[var(--color-lime)] bg-[var(--color-night-3)]'
                                            : 'border-stroke bg-[var(--color-night-2)]')
                                    }
                                >
                                    {isHighlighted && (
                                        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[var(--color-lime)] px-3 py-1 text-[10px] font-medium tracking-[0.18em] text-[var(--color-night)] uppercase">
                                            Paling Populer
                                        </span>
                                    )}

                                    <h3 className="font-display text-[20px] tracking-tight text-white">
                                        {plan.name}
                                    </h3>

                                    <div className="mt-4 flex items-baseline gap-1">
                                        <span className="font-display text-[36px] leading-none text-white md:text-[44px]">
                                            {plan.price}
                                        </span>
                                        {plan.priceUnit && (
                                            <span className="text-[12px] text-white/50">
                                                {plan.priceUnit}
                                            </span>
                                        )}
                                    </div>

                                    <p className="mt-3 text-[12px] leading-relaxed text-white/55">
                                        {plan.billing}
                                    </p>

                                    <div className="mt-6">
                                        <CTALink
                                            href="#contact"
                                            variant={
                                                isHighlighted
                                                    ? 'lime'
                                                    : 'secondary'
                                            }
                                            className="w-full justify-center"
                                        >
                                            {plan.cta}
                                        </CTALink>
                                    </div>

                                    <div className="mt-7 border-t border-stroke pt-5">
                                        <p className="text-[11px] tracking-[0.16em] text-white/45 uppercase">
                                            Termasuk:
                                        </p>
                                        <ul className="mt-3 space-y-2.5 text-[13px] text-white/75">
                                            {plan.features.map((feat) => (
                                                <li
                                                    key={feat}
                                                    className="flex items-start gap-2"
                                                >
                                                    <Check className="mt-0.5 size-3.5 shrink-0 text-[var(--color-lime)]" />
                                                    <span>{feat}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </Reveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
