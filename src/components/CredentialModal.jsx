import { useEffect } from 'react'

export default function CredentialModal({ credential, onClose }) {
  if (!credential) return null

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [onClose])

  const isBadge = credential.type === 'badge'

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md transition-opacity duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] bg-white dark:bg-[#16181D] border border-[#e5e7eb] dark:border-[#2E3238] rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#e5e7eb] dark:border-[#2E3238] bg-[#fafafa] dark:bg-[#111216]">
          <div className="flex items-center gap-2.5">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold tracking-wide uppercase bg-[#f0f0f0] dark:bg-[#20232A] text-[#374151] dark:text-[#D1D5DB] border border-[#e5e7eb] dark:border-[#2E3238]">
              {credential.type}
            </span>
            <span className="text-xs text-[#6b7280] dark:text-[#9CA3AF]">
              {credential.provider} &bull; {credential.year}
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg flex items-center justify-center text-[#6b7280] dark:text-[#9CA3AF] hover:text-[#111] dark:hover:text-white hover:bg-[#e5e7eb] dark:hover:bg-[#20232A] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Content Preview with Ambient Blurred Reflection */}
        <div className="relative flex-1 overflow-y-auto p-6 flex flex-col items-center justify-center bg-[#f5f5f5] dark:bg-[#0E1014] overflow-hidden">
          {/* Ambient blurred reflection behind the certificate */}
          <img
            src={credential.image}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover filter blur-3xl opacity-25 dark:opacity-35 scale-150 select-none pointer-events-none"
          />

          {/* Main Certificate/Badge Frame */}
          <div
            className={`relative z-10 w-full flex items-center justify-center rounded-2xl overflow-hidden border border-[#e5e7eb] dark:border-[#2E3238] bg-white/95 dark:bg-[#16181D]/95 backdrop-blur-xl shadow-2xl p-3 ${
              isBadge ? 'max-w-xs aspect-square p-8' : 'aspect-[16/11] max-w-3xl'
            }`}
          >
            <img
              src={credential.image}
              alt={credential.name}
              className={`w-full h-full object-contain ${isBadge ? 'max-h-60' : 'max-h-[560px]'}`}
              loading="lazy"
              onError={(e) => {
                e.target.style.display = 'none'
                e.target.nextSibling.style.display = 'flex'
              }}
            />
            <div className="hidden flex-col items-center justify-center text-center p-8 text-[#6b7280] dark:text-[#9CA3AF]">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="mb-2 opacity-60">
                <rect x="3" y="4" width="18" height="16" rx="2" />
                <line x1="7" y1="8" x2="17" y2="8" />
                <line x1="7" y1="12" x2="17" y2="12" />
                <line x1="7" y1="16" x2="13" y2="16" />
              </svg>
              <p className="text-xs">Preview image unavailable</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-[#e5e7eb] dark:border-[#2E3238] bg-white dark:bg-[#16181D] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="min-w-0 flex-1 text-center sm:text-left">
            <h4 className="text-base font-bold text-[#111] dark:text-white truncate">
              {credential.name}
            </h4>
            <p className="text-xs text-[#6b7280] dark:text-[#9CA3AF] mt-0.5">
              Official verifiable credential issued by {credential.provider}
            </p>
          </div>
          <a
            href={credential.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-[#111] dark:bg-white text-white dark:text-[#0f0f0f] text-xs font-bold rounded-xl hover:opacity-90 transition-opacity shrink-0 cursor-pointer shadow-sm"
          >
            <span>Verify on Issuer</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}
