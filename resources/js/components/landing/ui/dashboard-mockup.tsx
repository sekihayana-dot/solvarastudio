import {
    BarChart3,
    Boxes,
    FileText,
    LayoutDashboard,
    LineChart,
    PieChart,
    Users,
} from 'lucide-react';

const navItems = [
    { icon: LayoutDashboard, label: 'Ringkasan' },
    { icon: BarChart3, label: 'Analitik' },
    { icon: PieChart, label: 'Laporan' },
    { icon: Boxes, label: 'Produk' },
    { icon: Users, label: 'Pelanggan' },
];

const docsItems = [
    { icon: FileText, label: 'Dokumen' },
    { icon: LineChart, label: 'Insight' },
];

const metrics = [
    {
        label: 'Total revenue',
        value: 'Rp 1.250.000',
        delta: '+12.5%',
        deltaTone: 'up',
        sub: 'Tren naik bulan ini',
        hint: 'Performa stabil 6 bulan terakhir',
    },
    {
        label: 'New customer',
        value: '1.234',
        delta: '-2.0%',
        deltaTone: 'down',
        sub: 'Akuisisi turun tipis',
        hint: 'Perlu kanal akuisisi tambahan',
    },
    {
        label: 'Active accounts',
        value: '45.678',
        delta: '+12.5%',
        deltaTone: 'up',
        sub: 'Retensi pengguna kuat',
        hint: 'Engagement melewati target',
    },
    {
        label: 'Growth rate',
        value: '4,5%',
        delta: '+4.5%',
        deltaTone: 'up',
        sub: 'Performa konsisten',
        hint: 'Mengarah ke target tahunan',
    },
];

export function DashboardMockup() {
    return (
        <div
            aria-hidden
            className="relative mx-auto w-full max-w-[1080px] overflow-hidden rounded-2xl border border-stroke bg-[var(--color-night-2)] shadow-[0_60px_120px_-40px_rgba(0,0,0,0.7)]"
        >
            {/* Top bar */}
            <div className="flex items-center justify-between border-b border-stroke px-5 py-3">
                <div className="flex items-center gap-2">
                    <span className="size-3 rounded-full bg-white/10" />
                    <span className="size-3 rounded-full bg-white/10" />
                    <span className="size-3 rounded-full bg-white/10" />
                </div>
                <div className="flex items-center gap-2 rounded-md border border-stroke-soft bg-white/[0.02] px-3 py-1 text-[10px] text-white/40">
                    studio.solvara.app
                </div>
                <div className="flex items-center gap-2 text-[10px] text-white/40">
                    <span className="rounded-md border border-stroke-soft px-2 py-1">
                        Quick action
                    </span>
                </div>
            </div>

            <div className="flex">
                {/* Sidebar */}
                <aside className="hidden w-[200px] shrink-0 border-r border-stroke bg-[var(--color-night-3)] p-4 sm:block">
                    <div className="flex items-center gap-2 pb-4">
                        <span className="inline-flex size-6 items-center justify-center rounded-md bg-[var(--color-lime)] text-[10px] font-semibold text-[var(--color-night)]">
                            S
                        </span>
                        <span className="text-[12px] text-white">
                            Solvara Inc.
                        </span>
                    </div>

                    <p className="mt-3 mb-2 text-[10px] tracking-[0.18em] text-white/35 uppercase">
                        Home
                    </p>
                    <nav className="flex flex-col gap-0.5">
                        {navItems.map((item, i) => (
                            <button
                                key={item.label}
                                type="button"
                                className={
                                    'flex items-center gap-2 rounded-md px-2 py-1.5 text-left text-[12px] ' +
                                    (i === 0
                                        ? 'bg-white/5 text-white'
                                        : 'text-white/55 hover:bg-white/5')
                                }
                            >
                                <item.icon className="size-3.5" />
                                {item.label}
                            </button>
                        ))}
                    </nav>

                    <p className="mt-5 mb-2 text-[10px] tracking-[0.18em] text-white/35 uppercase">
                        Dokumen
                    </p>
                    <nav className="flex flex-col gap-0.5">
                        {docsItems.map((item) => (
                            <button
                                key={item.label}
                                type="button"
                                className="flex items-center gap-2 rounded-md px-2 py-1.5 text-left text-[12px] text-white/55 hover:bg-white/5"
                            >
                                <item.icon className="size-3.5" />
                                {item.label}
                            </button>
                        ))}
                    </nav>
                </aside>

                {/* Main content */}
                <div className="flex-1 p-4 md:p-5">
                    <div className="flex items-center justify-between">
                        <div>
                            <h3 className="text-[14px] font-medium text-white">
                                Ringkasan
                            </h3>
                            <p className="text-[11px] text-white/45">
                                Pantau metrik utama bisnis Anda secara real-time
                            </p>
                        </div>
                        <span className="rounded-md bg-[var(--color-lime)] px-2.5 py-1 text-[10px] font-medium text-[var(--color-night)]">
                            Quick create
                        </span>
                    </div>

                    {/* Metric cards */}
                    <div className="mt-4 grid grid-cols-2 gap-3 lg:grid-cols-4">
                        {metrics.map((m) => (
                            <div
                                key={m.label}
                                className="rounded-xl border border-stroke bg-[var(--color-night-3)] p-3"
                            >
                                <div className="flex items-center justify-between text-[10px] text-white/45">
                                    <span>{m.label}</span>
                                    <span
                                        className={
                                            'rounded-full px-1.5 py-0.5 text-[9px] ' +
                                            (m.deltaTone === 'up'
                                                ? 'bg-[var(--color-lime)]/15 text-[var(--color-lime)]'
                                                : 'bg-white/8 text-white/60')
                                        }
                                    >
                                        {m.delta}
                                    </span>
                                </div>
                                <div className="mt-1.5 text-[18px] font-semibold tracking-tight text-white">
                                    {m.value}
                                </div>
                                <p className="mt-1 text-[10px] text-white/55">
                                    {m.sub}
                                </p>
                                <p className="mt-0.5 text-[10px] text-white/35">
                                    {m.hint}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Visitors chart card */}
                    <div className="mt-4 rounded-xl border border-stroke bg-[var(--color-night-3)] p-4">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                            <div>
                                <h4 className="text-[12px] font-medium text-white">
                                    Total pengunjung
                                </h4>
                                <p className="text-[10px] text-white/45">
                                    Total dalam 3 bulan terakhir
                                </p>
                            </div>
                            <div className="flex gap-1 rounded-md border border-stroke-soft p-0.5 text-[10px]">
                                {['3 bulan', '30 hari', '7 hari'].map(
                                    (label, i) => (
                                        <span
                                            key={label}
                                            className={
                                                'rounded px-2 py-0.5 ' +
                                                (i === 2
                                                    ? 'bg-white/10 text-white'
                                                    : 'text-white/45')
                                            }
                                        >
                                            {label}
                                        </span>
                                    ),
                                )}
                            </div>
                        </div>
                        <div className="relative mt-4 h-[140px] w-full overflow-hidden">
                            <svg
                                viewBox="0 0 600 140"
                                preserveAspectRatio="none"
                                className="h-full w-full"
                            >
                                <defs>
                                    <linearGradient
                                        id="gradLime"
                                        x1="0"
                                        y1="0"
                                        x2="0"
                                        y2="1"
                                    >
                                        <stop
                                            offset="0%"
                                            stopColor="#c1f53c"
                                            stopOpacity="0.5"
                                        />
                                        <stop
                                            offset="100%"
                                            stopColor="#c1f53c"
                                            stopOpacity="0"
                                        />
                                    </linearGradient>
                                    <linearGradient
                                        id="gradWhite"
                                        x1="0"
                                        y1="0"
                                        x2="0"
                                        y2="1"
                                    >
                                        <stop
                                            offset="0%"
                                            stopColor="#ffffff"
                                            stopOpacity="0.18"
                                        />
                                        <stop
                                            offset="100%"
                                            stopColor="#ffffff"
                                            stopOpacity="0"
                                        />
                                    </linearGradient>
                                </defs>

                                <path
                                    d="M0,110 C70,80 130,95 200,75 C280,55 350,90 420,70 C480,55 540,75 600,55 L600,140 L0,140 Z"
                                    fill="url(#gradWhite)"
                                />
                                <path
                                    d="M0,110 C70,80 130,95 200,75 C280,55 350,90 420,70 C480,55 540,75 600,55"
                                    fill="none"
                                    stroke="rgba(255,255,255,0.55)"
                                    strokeWidth="1.5"
                                />

                                <path
                                    d="M0,125 C70,110 140,115 220,95 C300,80 360,110 440,90 C500,75 560,95 600,80 L600,140 L0,140 Z"
                                    fill="url(#gradLime)"
                                />
                                <path
                                    d="M0,125 C70,110 140,115 220,95 C300,80 360,110 440,90 C500,75 560,95 600,80"
                                    fill="none"
                                    stroke="#c1f53c"
                                    strokeWidth="1.5"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
