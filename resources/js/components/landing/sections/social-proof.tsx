import { Reveal } from '../ui/reveal';

const brands = [
    'Capsule',
    'Catalog',
    'CloudWatch',
    'Command+R',
    'Acme Corp',
    'Alt+Shift',
];

export function SocialProof() {
    return (
        <section className="relative bg-[var(--color-night)]">
            <div className="mx-auto max-w-[1200px] px-5 pb-20 md:px-8 md:pb-28">
                <Reveal>
                    <div className="grid grid-cols-2 items-center gap-8 sm:grid-cols-3 md:grid-cols-6 md:gap-10">
                        {brands.map((brand) => (
                            <div
                                key={brand}
                                className="flex items-center justify-center text-center font-display text-[18px] tracking-tight text-white/40 transition hover:text-white/70 md:text-[20px]"
                            >
                                {brand}
                            </div>
                        ))}
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
