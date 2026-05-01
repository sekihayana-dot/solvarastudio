import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { CTALink } from '../ui/cta-button';
import { Logo } from '../ui/logo';

const navLinks = [
    { href: '#services', label: 'Layanan' },
    { href: '#features', label: 'Platform' },
    { href: '#process', label: 'Cara kerja' },
    { href: '#pricing', label: 'Harga' },
    { href: '#contact', label: 'Kontak' },
];

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 12);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });

        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        if (open) {
            document.documentElement.style.overflow = 'hidden';
        } else {
            document.documentElement.style.overflow = '';
        }
    }, [open]);

    return (
        <header className="pointer-events-none fixed inset-x-0 top-4 z-50 px-4 md:top-6 md:px-6">
            <div className="mx-auto max-w-[1180px]">
                <div
                    className={cn(
                        'pointer-events-auto flex items-center justify-between gap-4 rounded-full border border-stroke bg-[var(--color-night)]/85 px-3 py-2 backdrop-blur-md transition-all duration-300 md:px-4 md:py-2.5',
                        scrolled
                            ? 'shadow-[0_18px_60px_-30px_rgba(0,0,0,0.6)]'
                            : 'shadow-none',
                    )}
                >
                    <div className="pl-2">
                        <Logo />
                    </div>

                    <nav
                        aria-label="Navigasi utama"
                        className="hidden items-center gap-7 md:flex"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="rounded text-[13px] text-white/65 transition hover:text-white focus-visible:ring-2 focus-visible:ring-[color-mix(in_srgb,var(--color-lime)_50%,transparent)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--color-night)] focus-visible:outline-none"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    <div className="flex items-center gap-2">
                        <a
                            href="#contact"
                            className="hidden text-[13px] text-white/65 transition hover:text-white md:inline-flex"
                        >
                            Mulai diskusi
                        </a>
                        <CTALink
                            variant="lime"
                            href="#contact"
                            className="hidden md:inline-flex"
                        >
                            Konsultasi
                        </CTALink>
                        <button
                            type="button"
                            aria-label="Buka menu navigasi"
                            aria-expanded={open}
                            aria-controls="mobile-nav"
                            onClick={() => setOpen((v) => !v)}
                            className="inline-flex size-10 items-center justify-center rounded-full border border-stroke-soft bg-white/5 text-white transition hover:border-white/40 focus-visible:ring-2 focus-visible:ring-[color-mix(in_srgb,var(--color-lime)_50%,transparent)] focus-visible:outline-none md:hidden"
                        >
                            {open ? (
                                <X className="size-4" aria-hidden />
                            ) : (
                                <Menu className="size-4" aria-hidden />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {open && (
                    <motion.div
                        id="mobile-nav"
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{
                            duration: 0.25,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="pointer-events-auto mx-auto mt-2 max-w-[1180px] rounded-3xl border border-stroke bg-[var(--color-night)]/95 backdrop-blur-md md:hidden"
                    >
                        <nav
                            aria-label="Navigasi mobile"
                            className="flex flex-col gap-1 px-3 py-3"
                        >
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setOpen(false)}
                                    className="rounded-2xl px-4 py-3 text-[14px] text-white/80 hover:bg-white/5 focus-visible:ring-2 focus-visible:ring-[color-mix(in_srgb,var(--color-lime)_50%,transparent)] focus-visible:outline-none"
                                >
                                    {link.label}
                                </a>
                            ))}
                            <CTALink
                                href="#contact"
                                variant="lime"
                                onClick={() => setOpen(false)}
                                className="mx-2 my-2 justify-center"
                            >
                                Konsultasi project
                            </CTALink>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
