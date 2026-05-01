import { cn } from '@/lib/utils';

type SectionLabelProps = {
    children: React.ReactNode;
    number?: string;
    className?: string;
    variant?: 'dark' | 'light';
};

export function SectionLabel({
    children,
    number,
    className,
    variant = 'dark',
}: SectionLabelProps) {
    const isDark = variant === 'dark';

    return (
        <div
            className={cn(
                'flex items-center gap-3 text-[11px] font-medium tracking-[0.18em] uppercase',
                isDark ? 'text-white/55' : 'text-muted-ink',
                className,
            )}
        >
            {number ? (
                <span
                    className={cn(
                        'font-mono',
                        isDark ? 'text-[var(--color-lime)]' : 'text-gold',
                    )}
                >
                    {number}
                </span>
            ) : (
                <span
                    aria-hidden
                    className={cn(
                        'block h-1 w-1 rounded-full',
                        isDark ? 'bg-[var(--color-lime)]' : 'bg-gold',
                    )}
                />
            )}
            <span>{children}</span>
        </div>
    );
}
