import { profile } from '../data/content'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 pt-28 pb-16">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Headline & CTA */}
        <div className="lg:col-span-7">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-5">
            <span className="text-[#111] dark:text-white">Syahrul</span>
            <br />
            <span className="text-[#6b7280] dark:text-[#9CA3AF]">Al Habib</span>
          </h1>
          <p className="text-base sm:text-lg text-[#4b5563] dark:text-[#D1D5DB] leading-relaxed mb-8 max-w-xl">
            {profile.tagline} {profile.description}
          </p>
          <div className="flex gap-3 sm:gap-4 flex-wrap">
            <a
              href="#projects"
              className="px-6 py-3 bg-[#111] dark:bg-white text-white dark:text-[#0f0f0f] rounded-lg font-semibold text-sm transition-transform duration-200 hover:scale-[1.03] cursor-pointer"
            >
              View Projects
            </a>
            <a
              href={profile.cv}
              download
              className="px-6 py-3 border border-[#e5e7eb] dark:border-[#2E3238] text-[#111] dark:text-white rounded-lg font-semibold text-sm transition-all duration-200 hover:border-[#999] dark:hover:border-[#9CA3AF] cursor-pointer inline-flex items-center gap-2"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              <span>Download CV</span>
            </a>
          </div>
        </div>

        {/* Right Column: Interactive Terminal Card */}
        <div className="lg:col-span-5 w-full">
          <div className="w-full bg-[#16181D] border border-[#2E3238] rounded-2xl shadow-xl overflow-hidden font-mono text-xs">
            {/* Terminal Header */}
            <div className="px-4 py-3 bg-[#111216] border-b border-[#2E3238] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#ef4444]/80"></span>
                <span className="w-3 h-3 rounded-full bg-[#f59e0b]/80"></span>
                <span className="w-3 h-3 rounded-full bg-[#10b981]/80"></span>
              </div>
              <span className="text-[#9CA3AF] text-[11px]">syahrul@cloud:~$</span>
              <div className="w-10"></div>
            </div>

            {/* Terminal Body */}
            <div className="p-5 space-y-3.5 text-[#D1D5DB] leading-relaxed select-text">
              <div className="flex items-center gap-2">
                <span className="text-emerald-400 font-bold">$</span>
                <span className="text-white font-medium">cat profile.json</span>
              </div>

              <div className="pl-3 border-l-2 border-[#2E3238] space-y-1 text-[11px] sm:text-xs">
                <p>
                  <span className="text-sky-300">"role"</span>: <span className="text-[#9CA3AF]">"Software Engineer"</span>,
                </p>
                <p>
                  <span className="text-sky-300">"specialization"</span>: [
                  <span className="text-[#9CA3AF]">"Cloud"</span>, <span className="text-[#9CA3AF]">"Security"</span>],
                </p>
                <p>
                  <span className="text-sky-300">"education"</span>: <span className="text-[#9CA3AF]">"Muhammadiyah University of Jakarta"</span>,
                </p>
                <p>
                  <span className="text-sky-300">"cohort"</span>: <span className="text-[#9CA3AF]">"Bangkit 2024 (Cloud)"</span>,
                </p>
                <p>
                  <span className="text-sky-300">"credentials"</span>: <span className="text-emerald-300">"18 Verified Badges &amp; Certs"</span>
                </p>
              </div>

              <div className="pt-2">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400 font-bold">$</span>
                  <span className="text-white font-medium">ping -c 1 security.defense</span>
                </div>
                <p className="text-[11px] text-[#9CA3AF] mt-1 pl-4">
                  64 bytes: icmp_seq=1 ttl=64 time=0.038ms{' '}
                  <span className="text-emerald-400 font-semibold">[SECURE]</span>
                </p>
              </div>

              <div className="flex items-center gap-1.5 pt-1 text-[#9CA3AF]">
                <span className="text-emerald-400 font-bold">$</span>
                <span className="inline-block w-2 h-4 bg-emerald-400 animate-pulse"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
