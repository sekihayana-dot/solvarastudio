import { Github, Instagram, Linkedin } from 'lucide-react';
import { Logo } from '../ui/logo';

const productLinks = [
    { href: '#features', label: 'Platform' },
    { href: '#process', label: 'Cara kerja' },
    { href: '#pricing', label: 'Harga' },
    { href: '#trusted', label: 'Klien' },
];

const companyLinks = [
    { href: '#contact', label: 'Kontak' },
    { href: '#faq', label: 'FAQ' },
    { href: 'mailto:hello@solvarastudio.com', label: 'Email kami' },
];

const legalLinks = [
    { href: '#', label: 'Syarat' },
    { href: '#', label: 'Privasi' },
];

export function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer
            id="footer"
            className="relative border-t border-stroke bg-[var(--color-night)]"
        >
            <div className="mx-auto max-w-[1200px] px-5 pt-16 pb-10 md:px-8 md:pt-20">
                <div className="grid grid-cols-2 gap-10 md:grid-cols-12 md:gap-8">
                    <div className="col-span-2 md:col-span-5">
                        <Logo />
                        <p className="mt-5 max-w-sm text-[14px] leading-relaxed text-white/55">
                            Studio digital untuk website, aplikasi, dan sistem
                            bisnis yang rapi sejak awal — dibangun untuk skala.
                        </p>

                        <div className="mt-6 flex items-center gap-2">
                            <a
                                href="https://instagram.com/solvarastudio"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Instagram Solvara Studio"
                                className="inline-flex size-9 items-center justify-center rounded-full border border-stroke-soft bg-white/5 text-white transition hover:border-white/40 hover:bg-white/10"
                            >
                                <Instagram aria-hidden className="size-4" />
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="LinkedIn Solvara Studio"
                                className="inline-flex size-9 items-center justify-center rounded-full border border-stroke-soft bg-white/5 text-white transition hover:border-white/40 hover:bg-white/10"
                            >
                                <Linkedin aria-hidden className="size-4" />
                            </a>
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="GitHub Solvara Studio"
                                className="inline-flex size-9 items-center justify-center rounded-full border border-stroke-soft bg-white/5 text-white transition hover:border-white/40 hover:bg-white/10"
                            >
                                <Github aria-hidden className="size-4" />
                            </a>
                        </div>
                    </div>

                    <div className="md:col-span-3">
                        <h3 className="text-[11px] font-medium tracking-[0.2em] text-white/45 uppercase">
                            Produk
                        </h3>
                        <ul className="mt-4 space-y-2.5">
                            {productLinks.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className="text-[14px] text-white/75 transition hover:text-[var(--color-lime)]"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="md:col-span-2">
                        <h3 className="text-[11px] font-medium tracking-[0.2em] text-white/45 uppercase">
                            Solvara
                        </h3>
                        <ul className="mt-4 space-y-2.5">
                            {companyLinks.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="text-[14px] text-white/75 transition hover:text-[var(--color-lime)]"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="md:col-span-2">
                        <h3 className="text-[11px] font-medium tracking-[0.2em] text-white/45 uppercase">
                            Legal
                        </h3>
                        <ul className="mt-4 space-y-2.5">
                            {legalLinks.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="text-[14px] text-white/75 transition hover:text-[var(--color-lime)]"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Big wordmark like Circular */}
                <div className="mt-16 border-t border-stroke pt-10 select-none">
                    <p className="font-display text-[22vw] leading-[0.9] tracking-[-0.04em] text-white/[0.06] md:text-[14rem]">
                        Solvara
                    </p>
                </div>

                <div className="mt-6 flex flex-col items-start justify-between gap-3 border-t border-stroke pt-6 text-[12px] text-white/45 md:flex-row md:items-center">
                    <p>© {year} Solvara Studio. Semua hak dilindungi.</p>
                    <p>Dibangun di Jakarta · hello@solvarastudio.com</p>
                </div>
            </div>
        </footer>
    );
}
