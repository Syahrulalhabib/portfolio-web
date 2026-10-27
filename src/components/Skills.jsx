import { skillCategories } from '../data/content'
import { useReveal } from '../hooks/useReveal'

function CategoryIcon({ type }) {
  if (type === 'cloud') {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
      </svg>
    )
  }
  if (type === 'shield') {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      </svg>
    )
  }
  if (type === 'code') {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    )
  }
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  )
}

function SkillCard({ category, index }) {
  const ref = useReveal()
  return (
    <div
      ref={ref}
      className="reveal bg-white dark:bg-[#16181D] border border-[#e5e7eb] dark:border-[#2E3238] rounded-2xl p-6 transition-all duration-200 hover:border-[#ccc] dark:hover:border-[#4B5563] flex flex-col justify-between"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-[#f3f4f6] dark:bg-[#20232A] text-[#111] dark:text-[#D1D5DB] flex items-center justify-center">
            <CategoryIcon type={category.icon} />
          </div>
          <h3 className="text-base font-bold text-[#111] dark:text-white">
            {category.title}
          </h3>
        </div>
        <div className="flex flex-wrap gap-2 pt-1">
          {category.skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1.5 bg-[#f9fafb] dark:bg-[#0F1013] border border-[#e5e7eb] dark:border-[#2E3238] rounded-lg text-xs font-medium text-[#4b5563] dark:text-[#D1D5DB] transition-all duration-150 hover:border-[#111] dark:hover:border-white hover:text-[#111] dark:hover:text-white cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Skills() {
  const ref = useReveal()
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="reveal mb-12">
          <p className="text-xs uppercase tracking-widest text-[#6b7280] dark:text-[#9CA3AF] font-semibold mb-2">
            Skills
          </p>
          <h2 className="text-3xl font-bold text-[#111] dark:text-white">
            Tech Stack &amp; Expertise
          </h2>
          <p className="text-sm text-[#4b5563] dark:text-[#D1D5DB] mt-2">
            Core technical pillars across cloud engineering, security defense, and software development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {skillCategories.map((cat, i) => (
            <SkillCard key={cat.title} category={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
