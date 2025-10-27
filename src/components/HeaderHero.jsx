import { Rocket, TrendingUp, Menu, X } from "lucide-react";
import { useState } from "react";

export default function HeaderHero() {
  const [open, setOpen] = useState(false);

  const NavLinks = () => (
    <ul className="flex flex-col lg:flex-row gap-6 items-start lg:items-center text-sm font-medium">
      <li><a href="#services" className="text-gray-700 hover:text-gray-900">Services</a></li>
      <li><a href="#work" className="text-gray-700 hover:text-gray-900">Work</a></li>
      <li><a href="#contact" className="text-gray-700 hover:text-gray-900">Contact</a></li>
      <li>
        <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-black text-white px-5 py-2 hover:bg-gray-900">
          <Rocket size={16} /> Get a Strategy Call
        </a>
      </li>
    </ul>
  );

  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0 -z-[1] bg-gradient-to-br from-indigo-50 via-white to-rose-50" />
      <div className="absolute -top-24 right-1/2 translate-x-1/2 h-[46rem] w-[46rem] rounded-full bg-gradient-to-tr from-indigo-200/60 to-rose-200/60 blur-3xl" />

      <nav className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-black text-white grid place-items-center">
            <TrendingUp size={18} />
          </div>
          <span className="text-lg font-semibold tracking-tight">GrowthNest Media</span>
        </a>
        <div className="hidden lg:block">
          <NavLinks />
        </div>
        <button className="lg:hidden p-2" onClick={() => setOpen(true)} aria-label="Open menu">
          <Menu />
        </button>
      </nav>

      {open && (
        <div className="fixed inset-0 z-50 bg-white/90 backdrop-blur-md p-6">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <span className="text-base font-semibold">Menu</span>
            <button className="p-2" onClick={() => setOpen(false)} aria-label="Close menu">
              <X />
            </button>
          </div>
          <div className="mt-8 max-w-6xl mx-auto">
            <NavLinks />
          </div>
        </div>
      )}

      <section className="max-w-6xl mx-auto px-6 pt-10 pb-20 lg:pt-16 lg:pb-28">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/80 px-3 py-1 text-xs text-gray-700 shadow-sm">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
              Booked 200+ meetings for clients last quarter
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
              We build growth engines for brands that want more than likes
            </h1>
            <p className="mt-5 text-gray-600 text-base leading-7">
              Social-first performance marketing that turns attention into revenue. We combine content, paid media, and conversion design to scale your pipeline.
            </p>
            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-lg bg-black text-white px-5 py-3 font-medium hover:bg-gray-900">
                <Rocket size={18} /> Get a free audit
              </a>
              <a href="#work" className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-5 py-3 font-medium text-gray-800 hover:bg-gray-50">
                See our work
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-gray-600">
              <div className="flex -space-x-2">
                <img src="https://i.pravatar.cc/40?img=1" alt="client" className="h-8 w-8 rounded-full border-2 border-white" />
                <img src="https://i.pravatar.cc/40?img=2" alt="client" className="h-8 w-8 rounded-full border-2 border-white" />
                <img src="https://i.pravatar.cc/40?img=3" alt="client" className="h-8 w-8 rounded-full border-2 border-white" />
              </div>
              <p className="text-sm">Trusted by founders at DTC, SaaS and local service brands</p>
            </div>
          </div>

          <div className="relative h-[420px] sm:h-[480px] lg:h-[520px]">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-indigo-500 via-violet-500 to-fuchsia-500" />
            <div className="absolute inset-0 rounded-2xl p-1">
              <div className="h-full w-full rounded-xl bg-white/90 backdrop-blur shadow-xl p-6 flex flex-col">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-9 w-9 rounded-md bg-black text-white grid place-items-center">
                      <TrendingUp size={18} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">Performance Dashboard</p>
                      <p className="text-xs text-gray-500">Live overview</p>
                    </div>
                  </div>
                  <span className="text-emerald-600 text-sm font-semibold">+182% ROAS</span>
                </div>
                <div className="mt-6 grid grid-cols-3 gap-4">
                  {["Revenue","Leads","CTR"].map((label, i) => (
                    <div key={label} className="rounded-lg border border-gray-200 p-4">
                      <p className="text-xs text-gray-500">{label}</p>
                      <p className="mt-2 text-xl font-semibold text-gray-900">{["$128k","1,204","3.6%"][i]}</p>
                      <p className="mt-1 text-xs text-emerald-600">↑ {["32%","64%","18%"][i]} this month</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex-1 rounded-lg border border-gray-200 p-4">
                  <p className="text-xs text-gray-500">Ad Spend vs Revenue</p>
                  <div className="mt-3 h-40 w-full rounded-md bg-gradient-to-r from-indigo-100 via-violet-100 to-fuchsia-100 relative overflow-hidden">
                    <div className="absolute bottom-0 left-0 h-full w-1/2 bg-indigo-400/30" />
                    <div className="absolute bottom-0 left-1/2 h-3/5 w-1/2 bg-fuchsia-400/30" />
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="rounded-lg border border-gray-200 p-4">
                    <p className="text-xs text-gray-500">Top Channel</p>
                    <p className="mt-2 text-sm font-semibold">Meta Ads</p>
                    <p className="text-xs text-gray-500">$68k revenue</p>
                  </div>
                  <div className="rounded-lg border border-gray-200 p-4">
                    <p className="text-xs text-gray-500">Best Creative</p>
                    <p className="mt-2 text-sm font-semibold">UGC Reel V4</p>
                    <p className="text-xs text-gray-500">5.1% CTR</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}
