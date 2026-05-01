import { cn } from '@/lib/utils';

type LogoProps = {
    className?: string;
    compact?: boolean;
};

export function Logo({ className, compact = false }: LogoProps) {
    return (
        <a
            href="#top"
            className={cn(
                'group inline-flex items-center gap-2 rounded-md px-1 py-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[color-mix(in_srgb,var(--color-lime)_50%,transparent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-night)]',
                className,
            )}
            aria-label="Solvara Studio — beranda"
        >
            <span
                aria-hidden
                className="relative inline-flex size-7 items-center justify-center rounded-full bg-white"
            >
                <span className="font-display text-[15px] leading-none text-[var(--color-night)]">
                    S
                </span>
                <span className="absolute -top-0.5 -right-0.5 size-1.5 rounded-full bg-[var(--color-lime)]" />
            </span>
            {!compact && (
                <span className="font-display text-[18px] tracking-tight text-white">
                    Solvara <span className="text-white/50 italic">Studio</span>
                </span>
            )}
        </a>
    );
}
