import { projects } from '../data/content'
import { useReveal } from '../hooks/useReveal'

function ProjectCard({ project, index }) {
  const ref = useReveal()
  const isGithub = project.isGithub

  return (
    <div ref={ref} className="reveal h-full" style={{ transitionDelay: `${index * 80}ms` }}>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col justify-between bg-white dark:bg-[#16181D] border border-[#e5e7eb] dark:border-[#2E3238] rounded-2xl overflow-hidden transition-all duration-250 hover:-translate-y-1 hover:border-[#aaa] dark:hover:border-[#4B5563] hover:shadow-lg dark:hover:shadow-black/50 cursor-pointer h-full group"
      >
        <div>
          {/* Header Bar */}
          <div className="bg-[#f3f4f6] dark:bg-[#111216] border-b border-[#e5e7eb] dark:border-[#2E3238] px-3.5 py-2.5 flex items-center justify-between">
            {/* Window Dots / GitHub indicator */}
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444]/80"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]/80"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#10b981]/80"></span>
            </div>

            {/* Address Bar Pill */}
            <div className="flex-1 max-w-[220px] sm:max-w-[280px] bg-white dark:bg-[#1A1D24] border border-[#e5e7eb] dark:border-[#2E3238] rounded-md px-2.5 py-0.5 flex items-center justify-between text-[11px] font-mono text-[#6b7280] dark:text-[#9CA3AF]">
              <div className="flex items-center gap-1.5 truncate">
                {isGithub ? (
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" className="text-[#111] dark:text-white shrink-0">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                ) : (
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-500 shrink-0">
                    <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                  </svg>
                )}
                <span className="truncate">{project.domain}</span>
              </div>
            </div>

            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-[#6b7280] dark:text-[#9CA3AF] group-hover:text-[#111] dark:group-hover:text-white transition-colors"
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </div>

          {/* Visual Preview / GitHub Card */}
          {isGithub ? (
            <div className="relative aspect-[16/10] bg-[#0E1015] border-b border-[#e5e7eb] dark:border-[#2E3238] flex flex-col items-center justify-center p-6 text-center select-none overflow-hidden">
              <div className="w-16 h-16 rounded-2xl bg-[#16181D] border border-[#2E3238] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-250">
                <svg width="34" height="34" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
              <p className="text-xs font-mono font-bold text-white mb-1 tracking-tight">
                Syahrulalhabib / Everin-Project
              </p>
              <div className="flex items-center gap-2 text-[11px] font-mono text-[#9CA3AF]">
                <span className="inline-flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  Public Repository
                </span>
                <span>&bull;</span>
                <span>branch: main</span>
              </div>
            </div>
          ) : (
            <div className="relative aspect-[16/10] bg-[#f9fafb] dark:bg-[#0E1014] overflow-hidden border-b border-[#e5e7eb] dark:border-[#2E3238]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-top transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                loading="lazy"
                onError={(e) => {
                  if (e.target.src.endsWith('.png')) {
                    e.target.src = e.target.src.replace('.png', '.jpeg')
                  } else if (e.target.src.endsWith('.jpeg')) {
                    e.target.src = e.target.src.replace('.jpeg', '.png')
                  }
                }}
              />
            </div>
          )}

          {/* Project Details */}
          <div className="p-6">
            <div className="flex items-center justify-between gap-2 mb-2.5">
              <span className="text-xs uppercase tracking-widest text-[#6b7280] dark:text-[#9CA3AF] font-mono font-semibold">
                {project.label}
              </span>
              <span className="text-xs text-[#6b7280] dark:text-[#9CA3AF] font-medium flex items-center gap-1 group-hover:text-[#111] dark:group-hover:text-white transition-colors">
                <span>{isGithub ? 'View Repo' : 'Visit Site'}</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            </div>

            <h3 className="text-lg font-bold text-[#111] dark:text-white mb-2.5 leading-snug group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors">
              {project.title}
            </h3>

            <p className="text-sm text-[#4b5563] dark:text-[#D1D5DB] leading-relaxed mb-6">
              {project.description}
            </p>
          </div>
        </div>

        {/* Tech Stack Pills Footer */}
        <div className="px-6 pb-6 pt-0">
          <div className="flex flex-wrap gap-2 pt-3 border-t border-[#f0f0f0] dark:border-[#20232A]">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 bg-[#f9fafb] dark:bg-[#0F1013] border border-[#e5e7eb] dark:border-[#2E3238] rounded-md text-xs text-[#4b5563] dark:text-[#9CA3AF] font-medium"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </a>
    </div>
  )
}

export default function Projects() {
  const ref = useReveal()
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="reveal mb-12">
          <p className="text-xs uppercase tracking-widest text-[#6b7280] dark:text-[#9CA3AF] font-semibold mb-2">
            Portfolio
          </p>
          <h2 className="text-3xl font-bold text-[#111] dark:text-white">
            Featured Projects
          </h2>
          <p className="text-sm text-[#4b5563] dark:text-[#D1D5DB] mt-2">
            Selected engineering work spanning commercial platforms, academic research, and cloud infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
