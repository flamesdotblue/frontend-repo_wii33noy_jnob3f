import { Mail, Phone, CheckCircle } from "lucide-react";

export default function ContactFooter() {
  return (
    <footer id="contact" className="relative">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Let’s unlock your next growth chapter</h2>
            <p className="mt-3 text-gray-600">Book a free strategy call. We’ll audit your funnel and share quick wins you can implement immediately—no strings attached.</p>
            <ul className="mt-6 space-y-3 text-sm text-gray-700">
              <li className="flex items-center gap-2"><CheckCircle className="text-emerald-600" size={16}/> Actionable audit in 48 hours</li>
              <li className="flex items-center gap-2"><CheckCircle className="text-emerald-600" size={16}/> Clear channel plan with numbers</li>
              <li className="flex items-center gap-2"><CheckCircle className="text-emerald-600" size={16}/> Month-to-month, no long contracts</li>
            </ul>
            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <a href="mailto:hello@growthnestmedia.space" className="inline-flex items-center gap-2 rounded-lg bg-black text-white px-5 py-3 font-medium hover:bg-gray-900"><Mail size={18}/> hello@growthnestmedia.space</a>
              <a href="tel:+1234567890" className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-5 py-3 font-medium text-gray-800 hover:bg-gray-50"><Phone size={18}/> +1 (234) 567-890</a>
            </div>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <form onSubmit={(e)=>e.preventDefault()} className="grid grid-cols-1 gap-4">
              <div>
                <label className="text-sm text-gray-700">Name</label>
                <input className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900" placeholder="Jane Doe" />
              </div>
              <div>
                <label className="text-sm text-gray-700">Email</label>
                <input type="email" className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900" placeholder="jane@company.com" />
              </div>
              <div>
                <label className="text-sm text-gray-700">What are you trying to achieve?</label>
                <textarea rows={4} className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900" placeholder="e.g., Profitably scale Meta ads, build content engine, improve landing page conversion" />
              </div>
              <button className="mt-2 inline-flex items-center justify-center rounded-lg bg-black text-white px-5 py-3 font-medium hover:bg-gray-900">Request audit</button>
              <p className="text-xs text-gray-500">By submitting you agree to be contacted about your request.</p>
            </form>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} GrowthNest Media. All rights reserved.</p>
          <div className="text-sm text-gray-600 flex items-center gap-6">
            <a href="#services" className="hover:text-gray-900">Services</a>
            <a href="#work" className="hover:text-gray-900">Work</a>
            <a href="#contact" className="hover:text-gray-900">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
