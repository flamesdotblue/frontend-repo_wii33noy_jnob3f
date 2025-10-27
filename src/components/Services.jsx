import { Megaphone, Target, PenTool, Globe } from "lucide-react";

const services = [
  {
    icon: Megaphone,
    title: "Paid Social & UGC",
    desc: "Profitable creative + media buying on Meta, TikTok and YouTube to scale revenue, not just reach.",
  },
  {
    icon: Target,
    title: "Lead Gen Systems",
    desc: "Multi-channel growth funnels that turn cold traffic into booked calls and closed deals.",
  },
  {
    icon: PenTool,
    title: "Content Engine",
    desc: "Short-form video production and editing to build authority and demand across social.",
  },
  {
    icon: Globe,
    title: "SEO & CRO",
    desc: "Own your demand with compound search growth and conversion-first landing experiences.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-20">
      <div className="absolute inset-0 -z-[1] bg-gradient-to-b from-transparent to-indigo-50" />
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">What we do</h2>
          <p className="mt-3 text-gray-600">End-to-end growth support from attention to acquisition. Pick a lane or plug in the full stack.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-10 w-10 rounded-lg bg-gray-900 text-white grid place-items-center mb-4">
                <Icon size={18} />
              </div>
              <h3 className="text-base font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600 leading-6">{desc}</p>
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/5 group-hover:ring-black/10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
