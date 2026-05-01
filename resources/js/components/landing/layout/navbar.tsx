import { ArrowUpRight, Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Logo } from '../ui/logo';

const navLinks = [
    { href: '#work', label: 'Work' },
    { href: '#services', label: 'Services' },
    { href: '#process', label: 'Process' },
    { href: '#why', label: 'Insights' },
    { href: '#contact', label: 'Contact' },
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
        <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-6 md:pt-4">
            <div
                className={cn(
                    'mx-auto flex max-w-[1200px] items-center justify-between gap-4 rounded-full border border-line bg-white/85 py-2 pr-2 pl-4 backdrop-blur-xl transition-shadow duration-300 md:py-2.5 md:pr-2.5 md:pl-6',
                    scrolled
                        ? 'shadow-[0_18px_40px_-22px_rgba(17,24,39,0.18)]'
                        : 'shadow-[0_8px_24px_-18px_rgba(17,24,39,0.12)]',
                )}
            >
                <Logo />

                <nav
                    aria-label="Navigasi utama"
                    className="hidden items-center gap-1 md:flex"
                >
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="rounded-full px-3.5 py-2 text-[13px] text-muted-ink transition hover:bg-mint hover:text-ink focus-visible:ring-2 focus-visible:ring-[color-mix(in_srgb,var(--color-teal)_40%,transparent)] focus-visible:ring-offset-2 focus-visible:ring-offset-white focus-visible:outline-none"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                <div className="flex items-center gap-2">
                    <NavCTA href="#contact" className="hidden md:inline-flex">
                        Mulai Diskusi
                    </NavCTA>
                    <button
                        type="button"
                        aria-label={
                            open ? 'Tutup menu navigasi' : 'Buka menu navigasi'
                        }
                        aria-expanded={open}
                        aria-controls="mobile-nav"
                        onClick={() => setOpen((v) => !v)}
                        className="inline-flex size-10 items-center justify-center rounded-full border border-line bg-white text-ink transition hover:border-[var(--color-teal)] hover:text-[var(--color-teal)] focus-visible:ring-2 focus-visible:ring-[color-mix(in_srgb,var(--color-teal)_40%,transparent)] focus-visible:outline-none md:hidden"
                    >
                        {open ? (
                            <X className="size-4" aria-hidden />
                        ) : (
                            <Menu className="size-4" aria-hidden />
                        )}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {open && (
                    <motion.div
                        id="mobile-nav"
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{
                            duration: 0.25,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="mx-auto mt-2 max-w-[1200px] overflow-hidden rounded-3xl border border-line bg-white/95 shadow-[0_24px_60px_-32px_rgba(17,24,39,0.22)] backdrop-blur-xl md:hidden"
                    >
                        <nav
                            aria-label="Navigasi mobile"
                            className="flex flex-col gap-1 px-4 py-4"
                        >
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setOpen(false)}
                                    className="rounded-2xl px-4 py-3 text-[14px] text-ink transition hover:bg-mint focus-visible:ring-2 focus-visible:ring-[color-mix(in_srgb,var(--color-teal)_40%,transparent)] focus-visible:outline-none"
                                >
                                    {link.label}
                                </a>
                            ))}
                            <NavCTA
                                href="#contact"
                                onClick={() => setOpen(false)}
                                className="mt-2 self-start"
                            >
                                Mulai Diskusi
                            </NavCTA>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}

type NavCTAProps = {
    href: string;
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
};

function NavCTA({ href, children, className, onClick }: NavCTAProps) {
    return (
        <a
            href={href}
            onClick={onClick}
            className={cn(
                'group inline-flex items-center gap-2 rounded-full bg-ink py-1.5 pr-1.5 pl-4 text-[13px] font-medium tracking-tight text-white transition-colors duration-300 hover:bg-[#1f2937] focus-visible:ring-2 focus-visible:ring-[color-mix(in_srgb,var(--color-teal)_50%,transparent)] focus-visible:ring-offset-2 focus-visible:ring-offset-white focus-visible:outline-none',
                className,
            )}
        >
            <span>{children}</span>
            <span
                aria-hidden
                className="inline-flex size-7 items-center justify-center rounded-[10px] bg-[var(--color-teal)] text-white transition-transform duration-300 group-hover:translate-x-0.5"
            >
                <ArrowUpRight className="size-3.5" />
            </span>
        </a>
    );
}
