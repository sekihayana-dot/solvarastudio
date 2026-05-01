import { ArrowUpRight } from 'lucide-react';
import type {
    AnchorHTMLAttributes,
    ButtonHTMLAttributes,
    ReactNode,
} from 'react';
import { cn } from '@/lib/utils';

type Variant = 'primary' | 'secondary' | 'ghost' | 'light' | 'lime';

type CommonProps = {
    variant?: Variant;
    children: ReactNode;
    className?: string;
    icon?: boolean;
};

const baseStyles =
    'group relative inline-flex items-center justify-center gap-1.5 rounded-full text-[13px] font-medium tracking-tight transition-[background,color,border-color,transform] duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-night)]';

const sizeStyles = 'px-5 py-3';

const variantStyles: Record<Variant, string> = {
    primary:
        'bg-white text-[var(--color-night)] hover:bg-[var(--color-cream)] focus-visible:ring-white/40',
    secondary:
        'border border-stroke-soft bg-transparent text-white hover:border-white/40 hover:bg-white/5 focus-visible:ring-white/30',
    ghost: 'text-white/70 hover:text-white focus-visible:ring-white/30',
    light: 'bg-white text-[var(--color-night)] hover:bg-[var(--color-cream)] focus-visible:ring-white/40',
    lime: 'bg-[var(--color-lime)] text-[var(--color-night)] hover:bg-[var(--color-lime-soft)] focus-visible:ring-[color-mix(in_srgb,var(--color-lime)_60%,transparent)]',
};

function ArrowChip({ variant }: { variant: Variant }) {
    const isDarkChip =
        variant === 'primary' || variant === 'light' || variant === 'lime';

    return (
        <span
            aria-hidden
            className={cn(
                '-mr-2 ml-1 inline-flex size-7 items-center justify-center rounded-full transition-transform duration-300 group-hover:translate-x-0.5',
                isDarkChip
                    ? 'bg-[var(--color-lime)] text-[var(--color-night)]'
                    : 'bg-white/10 text-white',
            )}
        >
            <ArrowUpRight className="size-3.5" />
        </span>
    );
}

export function CTAButton({
    variant = 'primary',
    children,
    className,
    icon = true,
    ...rest
}: CommonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            type="button"
            {...rest}
            className={cn(
                baseStyles,
                sizeStyles,
                'pr-1.5',
                variantStyles[variant],
                className,
            )}
        >
            <span className="px-2">{children}</span>
            {icon && <ArrowChip variant={variant} />}
        </button>
    );
}

export function CTALink({
    variant = 'primary',
    children,
    className,
    icon = true,
    ...rest
}: CommonProps & AnchorHTMLAttributes<HTMLAnchorElement>) {
    return (
        <a
            {...rest}
            className={cn(
                baseStyles,
                sizeStyles,
                'pr-1.5',
                variantStyles[variant],
                className,
            )}
        >
            <span className="px-2">{children}</span>
            {icon && <ArrowChip variant={variant} />}
        </a>
    );
}
