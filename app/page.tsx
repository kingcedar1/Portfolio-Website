const steps = [
  { label: "Taking classes", status: "building" },
  { label: "Building projects", status: "building" },
  { label: "Learning skills", status: "building" },
  { label: "Documenting progress", status: "queued" },
] as const;

export default function Home() {
  return (
    <div className="relative flex flex-1 flex-col items-center justify-center overflow-hidden bg-zinc-50 px-6 py-24 font-sans dark:bg-black">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)]"
      />

      <main className="relative flex w-full max-w-xl flex-col items-center gap-8 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-black/[.08] bg-white px-3 py-1 text-xs font-medium text-zinc-600 dark:border-white/[.145] dark:bg-black dark:text-zinc-400">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-500" />
          </span>
          Building
        </span>

        <h1 className="text-4xl font-semibold tracking-tight text-black sm:text-5xl dark:text-zinc-50">
          Under construction.
        </h1>
        <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          This portfolio is being built. Check back soon.
        </p>

        <div className="w-full overflow-hidden rounded-xl border border-black/[.08] bg-white text-left shadow-sm dark:border-white/[.145] dark:bg-[#0a0a0a]">
          <div className="flex items-center gap-1.5 border-b border-black/[.08] px-4 py-3 dark:border-white/[.145]">
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-200 dark:bg-zinc-800" />
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-200 dark:bg-zinc-800" />
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-200 dark:bg-zinc-800" />
            <span className="ml-2 font-mono text-xs text-zinc-500">build.log</span>
          </div>
          <ul className="flex flex-col gap-3 px-4 py-4 font-mono text-sm">
            {steps.map((step) => (
              <li key={step.label} className="flex items-center justify-between gap-4">
                <span
                  className={
                    step.status === "queued"
                      ? "text-zinc-400 dark:text-zinc-600"
                      : "text-zinc-800 dark:text-zinc-200"
                  }
                >
                  {step.label}
                </span>
                {step.status === "done" && <span className="text-emerald-600 dark:text-emerald-500">✓</span>}
                {step.status === "building" && (
                  <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-zinc-300 border-t-zinc-900 dark:border-zinc-700 dark:border-t-zinc-100" />
                )}
                {step.status === "queued" && <span className="text-zinc-400 dark:text-zinc-600">—</span>}
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}
