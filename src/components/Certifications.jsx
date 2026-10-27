import { useState } from 'react'
import { certifications } from '../data/content'
import { useReveal } from '../hooks/useReveal'
import CredentialModal from './CredentialModal'

const categories = [
  { id: 'all', label: 'All', count: 18 },
  { id: 'gcp', label: 'Google Cloud', count: 2 },
  { id: 'cybersecurity', label: 'Cybersecurity', count: 10 },
  { id: 'dicoding', label: 'Dicoding', count: 6 },
]

function CredentialCard({ cert, index, onPreview }) {
  const ref = useReveal()
  const isBadge = cert.type === 'badge'

  return (
    <div
      ref={ref}
      className="reveal flex flex-col justify-between bg-white dark:bg-[#16181D] border border-[#e5e7eb] dark:border-[#2E3238] rounded-2xl overflow-hidden transition-all duration-250 hover:border-[#aaa] dark:hover:border-[#4B5563] hover:shadow-lg dark:hover:shadow-black/50 group"
      style={{ transitionDelay: `${(index % 6) * 40}ms` }}
    >
      <div>
        {/* Certificate / Badge Preview Banner with Elegant Gradient Overlay (No Blur) */}
        <div
          onClick={() => onPreview(cert)}
          className="relative h-44 sm:h-48 w-full bg-[#f9fafb] dark:bg-[#0E1014] overflow-hidden border-b border-[#e5e7eb] dark:border-[#2E3238] cursor-pointer flex items-center justify-center p-3 select-none"
        >
          {/* Main Sharp Image (No Blur) */}
          <img
            src={cert.image}
            alt={cert.name}
            className={`w-full h-full object-contain transition-transform duration-250 ease-out group-hover:scale-[1.03] ${
              isBadge ? 'max-h-36 max-w-[144px]' : 'max-h-40'
            }`}
            loading="lazy"
            onError={(e) => {
              e.target.style.display = 'none'
              e.target.nextSibling.style.display = 'flex'
            }}
          />
          <div className="hidden items-center justify-center w-full h-full text-[#6b7280] dark:text-[#9CA3AF]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="16" rx="2" />
            </svg>
          </div>

          {/* Elegant Gradient Overlay (Smooth fade on hover) */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-250 pointer-events-none"></div>

          {/* Quick Preview Pill Button */}
          <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-black/70 text-white text-[11px] font-medium flex items-center gap-1.5 opacity-85 group-hover:opacity-100 transition-opacity duration-200 shadow-sm pointer-events-none">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            <span>Preview</span>
          </div>

          {/* Type Pill (Top Left) */}
          <div className="absolute top-3 left-3 px-2 py-0.5 rounded-md bg-white/95 dark:bg-[#16181D]/95 border border-[#e5e7eb] dark:border-[#2E3238] text-[10px] font-mono uppercase font-semibold text-[#374151] dark:text-[#D1D5DB] shadow-sm">
            {cert.type}
          </div>
        </div>

        {/* Certificate Card Content */}
        <div className="p-5">
          <div className="flex items-center justify-between text-xs text-[#6b7280] dark:text-[#9CA3AF] mb-1.5">
            <span className="font-medium text-[#4b5563] dark:text-[#D1D5DB]">{cert.provider}</span>
            <span className="font-mono">{cert.year}</span>
          </div>

          <h4
            onClick={() => onPreview(cert)}
            className="text-base font-bold text-[#111] dark:text-white leading-snug cursor-pointer hover:text-sky-500 dark:hover:text-sky-400 transition-colors line-clamp-2 mb-2"
          >
            {cert.name}
          </h4>
        </div>
      </div>

      {/* Action Footer */}
      <div className="px-5 pb-5 pt-0">
        <div className="flex items-center gap-2 pt-3 border-t border-[#f3f4f6] dark:border-[#20232A]">
          <button
            onClick={() => onPreview(cert)}
            className="flex-1 py-2 px-3 rounded-xl text-xs font-semibold bg-[#f3f4f6] dark:bg-[#20232A] text-[#111] dark:text-white hover:bg-[#e5e7eb] dark:hover:bg-[#2A2E38] transition-colors cursor-pointer text-center"
          >
            Full Preview
          </button>
          <a
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-2 px-3 rounded-xl text-xs font-semibold border border-[#e5e7eb] dark:border-[#2E3238] text-[#4b5563] dark:text-[#D1D5DB] hover:text-[#111] dark:hover:text-white hover:border-[#aaa] dark:hover:border-[#4B5563] transition-colors cursor-pointer text-center flex items-center justify-center gap-1.5"
          >
            <span>Verify</span>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Certifications() {
  const ref = useReveal()
  const [activeTab, setActiveTab] = useState('all')
  const [showAll, setShowAll] = useState(false)
  const [selectedCert, setSelectedCert] = useState(null)

  const filtered = certifications.filter((cert) => {
    if (activeTab === 'all') return true
    return cert.category === activeTab
  })

  // Show 6 initially, or all if showAll is true
  const displayed = showAll ? filtered : filtered.slice(0, 6)

  return (
    <section id="certifications" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="reveal mb-10">
          <p className="text-xs uppercase tracking-widest text-[#6b7280] dark:text-[#9CA3AF] font-semibold mb-2">
            Certifications
          </p>
          <h2 className="text-3xl font-bold text-[#111] dark:text-white">
            Recognized Credentials
          </h2>
          <p className="text-sm text-[#4b5563] dark:text-[#D1D5DB] mt-2">
            18 professional certifications &amp; badges ordered from newest to oldest, verifiable on official issuers.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveTab(cat.id)
                setShowAll(false)
              }}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-150 cursor-pointer flex items-center gap-2 ${
                activeTab === cat.id
                  ? 'bg-[#111] dark:bg-white text-white dark:text-[#0f0f0f] shadow-sm'
                  : 'bg-white dark:bg-[#16181D] text-[#6b7280] dark:text-[#9CA3AF] border border-[#e5e7eb] dark:border-[#2E3238] hover:text-[#111] dark:hover:text-white'
              }`}
            >
              <span>{cat.label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  activeTab === cat.id
                    ? 'bg-white/20 dark:bg-black/20 text-white dark:text-[#0f0f0f]'
                    : 'bg-[#f0f0f0] dark:bg-[#20232A] text-[#6b7280] dark:text-[#9CA3AF]'
                }`}
              >
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayed.map((cert, i) => (
            <CredentialCard
              key={cert.id}
              cert={cert}
              index={i}
              onPreview={setSelectedCert}
            />
          ))}
        </div>

        {/* Show More / Show Less Toggle */}
        {filtered.length > 6 && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-2.5 rounded-xl border border-[#e5e7eb] dark:border-[#2E3238] bg-white dark:bg-[#16181D] text-xs font-semibold text-[#111] dark:text-white hover:border-[#aaa] dark:hover:border-[#4B5563] transition-all cursor-pointer inline-flex items-center gap-2"
            >
              <span>
                {showAll
                  ? 'Show less'
                  : `Show all ${filtered.length} credentials in this category`}
              </span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className={`transition-transform duration-200 ${showAll ? 'rotate-180' : ''}`}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
          </div>
        )}
      </div>

      {/* Modal Popup */}
      <CredentialModal
        credential={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </section>
  )
}
