import { experiences } from '../data/content'
import { useReveal } from '../hooks/useReveal'

function ExpCard({ exp, index }) {
  const ref = useReveal()
  return (
    <div
      ref={ref}
      className="reveal flex flex-col sm:flex-row gap-3 sm:gap-6"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="text-xs font-mono font-medium text-[#6b7280] dark:text-[#9CA3AF] min-w-[130px] pt-1.5 shrink-0">
        {exp.date}
      </div>
      <div className="bg-white dark:bg-[#16181D] border border-[#e5e7eb] dark:border-[#2E3238] rounded-2xl p-6 flex-1 transition-all duration-200 hover:border-[#aaa] dark:hover:border-[#4B5563] hover:translate-x-1">
        <h3 className="text-base font-bold text-[#111] dark:text-white mb-1">
          {exp.role}
        </h3>
        <p className="text-xs font-medium text-[#6b7280] dark:text-[#9CA3AF] mb-3">
          {exp.org}
        </p>
        <p className="text-sm text-[#4b5563] dark:text-[#D1D5DB] leading-relaxed">
          {exp.description}
        </p>
      </div>
    </div>
  )
}

export default function Experience() {
  const ref = useReveal()
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div ref={ref} className="reveal mb-12">
          <p className="text-xs uppercase tracking-widest text-[#6b7280] dark:text-[#9CA3AF] font-semibold mb-2">
            Experience
          </p>
          <h2 className="text-3xl font-bold text-[#111] dark:text-white">
            Where I've Contributed
          </h2>
          <p className="text-sm text-[#4b5563] dark:text-[#D1D5DB] mt-2">
            Academic leadership, corporate design internships, cloud mentoring, and national cybersecurity competitions.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          {experiences.map((exp, i) => (
            <ExpCard key={exp.role} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
