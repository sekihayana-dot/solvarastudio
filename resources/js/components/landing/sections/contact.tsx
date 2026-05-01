import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowRight, Check, Loader2, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
    budgetRanges,
    deadlineRanges,
    projectTypes,
} from '@/data/contactOptions';
import { cn } from '@/lib/utils';
import { Reveal } from '../ui/reveal';

const contactSchema = z.object({
    name: z
        .string()
        .trim()
        .min(2, 'Nama minimal 2 karakter')
        .max(100, 'Nama terlalu panjang'),
    contact: z
        .string()
        .trim()
        .min(5, 'Email atau nomor WhatsApp wajib diisi')
        .max(150, 'Terlalu panjang'),
    project_type: z.enum(projectTypes, {
        message: 'Pilih jenis project',
    }),
    budget: z.enum(budgetRanges, {
        message: 'Pilih budget range',
    }),
    deadline: z
        .union([z.enum(deadlineRanges), z.literal('')])
        .optional()
        .transform((v) => (v === '' ? undefined : v)),
    message: z
        .string()
        .trim()
        .min(20, 'Pesan minimal 20 karakter')
        .max(2000, 'Pesan terlalu panjang'),
    company: z.string().max(0, 'Form tidak valid'),
});

type ContactFormValues = z.input<typeof contactSchema>;

export function Contact() {
    const [submitted, setSubmitted] = useState(false);
    const [serverError, setServerError] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<ContactFormValues>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            name: '',
            contact: '',
            project_type: '' as ContactFormValues['project_type'],
            budget: '' as ContactFormValues['budget'],
            deadline: '',
            message: '',
            company: '',
        },
    });

    const onSubmit = async (values: ContactFormValues) => {
        setServerError(null);

        try {
            const csrfToken = document
                .querySelector<HTMLMetaElement>('meta[name="csrf-token"]')
                ?.getAttribute('content');

            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    ...(csrfToken ? { 'X-CSRF-TOKEN': csrfToken } : {}),
                },
                body: JSON.stringify(values),
            });

            if (!res.ok) {
                const data = await res
                    .json()
                    .catch(() => ({ message: undefined }));

                throw new Error(
                    data?.message ??
                        'Sepertinya ada gangguan. Coba lagi sebentar lagi atau kirim email ke hello@solvarastudio.com.',
                );
            }

            setSubmitted(true);
            reset();
        } catch (err) {
            setServerError(
                err instanceof Error
                    ? err.message
                    : 'Sepertinya ada gangguan. Coba lagi sebentar lagi.',
            );
        }
    };

    return (
        <section
            id="contact"
            className="relative overflow-hidden bg-[var(--color-night)] pb-24 md:pb-32"
        >
            {/* Big CTA banner - Circular-style */}
            <div className="mx-auto max-w-[1200px] px-5 md:px-8">
                <Reveal>
                    <div className="relative isolate mx-auto overflow-hidden rounded-3xl">
                        <div
                            aria-hidden
                            className="hero-landscape pointer-events-none absolute inset-0"
                        />
                        <div
                            aria-hidden
                            className="noise-overlay pointer-events-none absolute inset-0 opacity-40 mix-blend-overlay"
                        />
                        <div className="relative flex min-h-[460px] flex-col items-center justify-center px-6 py-20 text-center md:px-12 md:py-28">
                            <h2 className="mx-auto max-w-3xl font-display text-[36px] leading-[1.05] tracking-tight text-[var(--color-night)] md:text-[64px]">
                                Mulai bangun produk
                                <br />
                                <span className="italic">
                                    digital yang luar biasa
                                </span>
                            </h2>
                            <p className="mx-auto mt-5 max-w-md text-[14px] leading-relaxed text-[var(--color-night)]/70 md:text-[15px]">
                                Diskusikan ide Anda dengan tim kami. Respons
                                biasanya kurang dari 24 jam kerja.
                            </p>

                            <a
                                href="#contact-form"
                                className="group mt-7 inline-flex items-center gap-1.5 rounded-full bg-[var(--color-night)] px-3 py-2 pr-1.5 text-[13px] font-medium text-white transition hover:bg-[var(--color-night-3)]"
                            >
                                <span className="px-2">
                                    Daftar untuk konsultasi
                                </span>
                                <span className="inline-flex size-7 items-center justify-center rounded-full bg-[var(--color-lime)] text-[var(--color-night)] transition-transform group-hover:translate-x-0.5">
                                    <ArrowRight className="size-3.5" />
                                </span>
                            </a>
                        </div>
                    </div>
                </Reveal>
            </div>

            {/* Form */}
            <div
                id="contact-form"
                className="mx-auto mt-20 max-w-[1200px] px-5 md:mt-28 md:px-8"
            >
                <div className="grid grid-cols-12 gap-y-12 md:gap-x-12">
                    <div className="col-span-12 md:col-span-5">
                        <p className="text-[12px] tracking-[0.18em] text-[var(--color-lime)] uppercase">
                            <Sparkles className="-mt-0.5 mr-1 inline size-3.5" />
                            Kontak
                        </p>
                        <Reveal>
                            <h3 className="mt-3 font-display text-[34px] leading-[1.05] text-white md:text-[48px]">
                                Punya ide project?
                                <br />
                                <span className="text-white/65 italic">
                                    Kita rapikan jadi scope
                                </span>
                            </h3>
                        </Reveal>
                        <Reveal delay={0.1}>
                            <p className="mt-6 max-w-md text-[14px] leading-relaxed text-white/60">
                                Ceritakan kebutuhan awal, jenis project, budget,
                                dan target waktu. Kami akan bantu susun langkah
                                pertama yang masuk akal.
                            </p>
                        </Reveal>

                        <ul className="mt-8 space-y-3 border-t border-stroke pt-6 text-[13.5px] text-white/60">
                            <li className="flex items-start gap-2">
                                <span
                                    aria-hidden
                                    className="mt-2 size-1 shrink-0 rounded-full bg-[var(--color-lime)]"
                                />
                                Respons biasanya kurang dari 24 jam kerja.
                            </li>
                            <li className="flex items-start gap-2">
                                <span
                                    aria-hidden
                                    className="mt-2 size-1 shrink-0 rounded-full bg-[var(--color-lime)]"
                                />
                                Discovery awal 30–60 menit, gratis.
                            </li>
                            <li className="flex items-start gap-2">
                                <span
                                    aria-hidden
                                    className="mt-2 size-1 shrink-0 rounded-full bg-[var(--color-lime)]"
                                />
                                Tidak harus sudah punya konten lengkap.
                            </li>
                        </ul>
                    </div>

                    <div className="col-span-12 md:col-span-7">
                        <Reveal>
                            {submitted ? (
                                <SuccessState
                                    onReset={() => setSubmitted(false)}
                                />
                            ) : (
                                <form
                                    noValidate
                                    onSubmit={handleSubmit(onSubmit)}
                                    className="rounded-3xl border border-stroke bg-[var(--color-night-2)] p-6 md:p-10"
                                >
                                    {/* Honeypot */}
                                    <div
                                        aria-hidden
                                        className="absolute top-auto left-[-9999px] h-px w-px overflow-hidden"
                                    >
                                        <label htmlFor="company">Company</label>
                                        <input
                                            id="company"
                                            type="text"
                                            tabIndex={-1}
                                            autoComplete="off"
                                            {...register('company')}
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                                        <Field
                                            label="Nama"
                                            error={errors.name?.message}
                                            required
                                        >
                                            <input
                                                type="text"
                                                autoComplete="name"
                                                placeholder="Nama lengkap"
                                                className={inputCls(
                                                    !!errors.name,
                                                )}
                                                {...register('name')}
                                            />
                                        </Field>

                                        <Field
                                            label="Email atau WhatsApp"
                                            error={errors.contact?.message}
                                            required
                                        >
                                            <input
                                                type="text"
                                                autoComplete="email tel"
                                                placeholder="hello@studioanda.com / +62…"
                                                className={inputCls(
                                                    !!errors.contact,
                                                )}
                                                {...register('contact')}
                                            />
                                        </Field>

                                        <Field
                                            label="Jenis project"
                                            error={errors.project_type?.message}
                                            required
                                        >
                                            <select
                                                className={selectCls(
                                                    !!errors.project_type,
                                                )}
                                                {...register('project_type')}
                                                defaultValue=""
                                            >
                                                <option value="" disabled>
                                                    Pilih jenis project
                                                </option>
                                                {projectTypes.map((p) => (
                                                    <option key={p} value={p}>
                                                        {p}
                                                    </option>
                                                ))}
                                            </select>
                                        </Field>

                                        <Field
                                            label="Budget range"
                                            error={errors.budget?.message}
                                            required
                                        >
                                            <select
                                                className={selectCls(
                                                    !!errors.budget,
                                                )}
                                                {...register('budget')}
                                                defaultValue=""
                                            >
                                                <option value="" disabled>
                                                    Pilih budget range
                                                </option>
                                                {budgetRanges.map((p) => (
                                                    <option key={p} value={p}>
                                                        {p}
                                                    </option>
                                                ))}
                                            </select>
                                        </Field>

                                        <Field
                                            label="Target deadline"
                                            error={errors.deadline?.message}
                                        >
                                            <select
                                                className={selectCls(
                                                    !!errors.deadline,
                                                )}
                                                {...register('deadline')}
                                                defaultValue=""
                                            >
                                                <option value="">
                                                    Pilih target deadline
                                                </option>
                                                {deadlineRanges.map((p) => (
                                                    <option key={p} value={p}>
                                                        {p}
                                                    </option>
                                                ))}
                                            </select>
                                        </Field>

                                        <Field
                                            label="Pesan"
                                            error={errors.message?.message}
                                            required
                                            className="md:col-span-2"
                                        >
                                            <textarea
                                                rows={5}
                                                placeholder="Ceritakan ringkas konteks project, halaman/fitur yang dibutuhkan, dan apa yang sudah dimiliki saat ini."
                                                className={cn(
                                                    inputCls(!!errors.message),
                                                    'resize-y',
                                                )}
                                                {...register('message')}
                                            />
                                        </Field>
                                    </div>

                                    {serverError && (
                                        <p
                                            role="alert"
                                            className="mt-5 rounded-md border border-[color-mix(in_srgb,var(--color-coral)_30%,transparent)] bg-[color-mix(in_srgb,var(--color-coral)_15%,transparent)] px-4 py-3 text-[13px] text-[#fda797]"
                                        >
                                            {serverError}
                                        </p>
                                    )}

                                    <div className="mt-7 flex flex-col gap-4 border-t border-stroke pt-6 md:flex-row md:items-center md:justify-between">
                                        <p className="text-[12.5px] text-white/55">
                                            Dengan mengirim form, Anda setuju
                                            data dipakai hanya untuk
                                            mendiskusikan project.
                                        </p>
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="group inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-lime)] px-3 py-3 pr-1.5 text-[13px] font-medium text-[var(--color-night)] transition hover:bg-[var(--color-lime-soft)] focus-visible:ring-2 focus-visible:ring-[color-mix(in_srgb,var(--color-lime)_50%,transparent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-night)] focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-70"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <Loader2
                                                        aria-hidden
                                                        className="ml-2 size-4 animate-spin"
                                                    />
                                                    <span className="px-2">
                                                        Mengirim…
                                                    </span>
                                                </>
                                            ) : (
                                                <>
                                                    <span className="px-2">
                                                        Kirim detail project
                                                    </span>
                                                    <span className="inline-flex size-7 items-center justify-center rounded-full bg-[var(--color-night)] text-white">
                                                        <ArrowRight
                                                            aria-hidden
                                                            className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
                                                        />
                                                    </span>
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </form>
                            )}
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );
}

function Field({
    label,
    children,
    error,
    required,
    className,
}: {
    label: string;
    children: React.ReactNode;
    error?: string;
    required?: boolean;
    className?: string;
}) {
    return (
        <label className={cn('flex flex-col gap-1.5', className)}>
            <span className="flex items-center gap-1 text-[12px] tracking-[0.16em] text-white/55 uppercase">
                {label}
                {required && (
                    <span aria-hidden className="text-[var(--color-lime)]">
                        *
                    </span>
                )}
            </span>
            {children}
            {error && (
                <span className="text-[12px] text-[#fda797]">{error}</span>
            )}
        </label>
    );
}

const inputCls = (hasError: boolean) =>
    cn(
        'w-full rounded-lg border bg-[var(--color-night-3)] px-3.5 py-3 text-[14px] text-white transition placeholder:text-white/35 focus:ring-2 focus:ring-[color-mix(in_srgb,var(--color-lime)_30%,transparent)] focus:outline-none',
        hasError
            ? 'border-[#9a3a31]/60 focus:border-[#9a3a31]'
            : 'border-stroke-soft focus:border-[var(--color-lime)]/60',
    );

const selectCls = (hasError: boolean) =>
    cn(
        'w-full appearance-none rounded-lg border bg-[var(--color-night-3)] bg-[length:14px_14px] bg-[right_14px_center] bg-no-repeat px-3.5 py-3 pr-10 text-[14px] text-white transition focus:ring-2 focus:ring-[color-mix(in_srgb,var(--color-lime)_30%,transparent)] focus:outline-none',
        hasError
            ? 'border-[#9a3a31]/60 focus:border-[#9a3a31]'
            : 'border-stroke-soft focus:border-[var(--color-lime)]/60',
    );

function SuccessState({ onReset }: { onReset: () => void }) {
    return (
        <div className="rounded-3xl border border-stroke bg-[var(--color-night-2)] p-8 md:p-12">
            <span className="inline-flex size-12 items-center justify-center rounded-full bg-[var(--color-lime)] text-[var(--color-night)]">
                <Check aria-hidden className="size-5" />
            </span>
            <h3 className="mt-5 font-display text-[24px] leading-tight text-white md:text-[28px]">
                Terima kasih, pesan kamu sudah masuk.
            </h3>
            <p className="mt-3 max-w-md text-[14px] leading-relaxed text-white/65">
                Kami akan baca konteks project-nya dan respons via email atau
                WhatsApp dalam 24 jam kerja. Sementara itu, kamu bisa siapkan
                referensi atau aset yang relevan.
            </p>
            <button
                type="button"
                onClick={onReset}
                className="mt-6 inline-flex items-center gap-2 text-[13px] font-medium text-[var(--color-lime)] hover:text-[var(--color-lime-soft)]"
            >
                Kirim pesan lain
                <ArrowRight aria-hidden className="size-4" />
            </button>
        </div>
    );
}
