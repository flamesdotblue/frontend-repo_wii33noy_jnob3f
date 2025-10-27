export default function Work() {
  const items = [
    {
      label: "DTC Skincare",
      kpi: "+312%",
      sub: "revenue in 90 days",
      gradient: "from-fuchsia-500 to-rose-500",
    },
    {
      label: "B2B SaaS",
      kpi: "-46%",
      sub: "CAC while doubling MQLs",
      gradient: "from-indigo-500 to-cyan-500",
    },
    {
      label: "Local Services",
      kpi: "5.6x",
      sub: "ROAS on Meta",
      gradient: "from-violet-500 to-emerald-500",
    },
  ];

  return (
    <section id="work" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Selected results</h2>
          <p className="mt-3 text-gray-600">A peek at outcomes from recent engagements. Every account is unique—strategy is tailored to your goals and stage.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {items.map((it) => (
            <article key={it.label} className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white">
              <div className={`h-40 w-full bg-gradient-to-r ${it.gradient}`} />
              <div className="p-6">
                <p className="text-4xl font-extrabold tracking-tight text-gray-900">{it.kpi}</p>
                <p className="text-sm text-gray-600">{it.sub}</p>
                <p className="mt-4 text-base font-semibold text-gray-900">{it.label}</p>
                <p className="mt-1 text-sm text-gray-600">Creative testing + paid social + CRO</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-gray-200 p-6 bg-white">
          <p className="text-sm text-gray-600">Want a deeper dive? We’ll review your offer, funnel and current channels, then share a channel plan with forecasts.</p>
        </div>
      </div>
    </section>
  );
}
