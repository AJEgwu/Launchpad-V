/**
 * Dashboard Header - Rebuilt to match SVG design specifications
 * Height: 70px
 * Logo: Comfortaa, 12.78px
 * Background: White
 * Border Bottom: 1px solid #e5e5e5
 */

import { FiSearch, FiBell, FiUser } from 'react-icons/fi'

const DashboardHeader = ({ title, subtitle }) => {
  return (
    <header
      className="bg-white flex items-center justify-between px-6"
      style={{
        height: '70px',  // Exact from SVG spec
        borderBottom: '1px solid #e5e5e5'
      }}
    >
      {/* Left: Page Title */}
      <div>
        {title && (
          <h1
            className="leading-tight"
            style={{
              fontFamily: 'var(--font-primary)',
              fontSize: '1.471rem',  // 23.53px - Section heading size
              color: 'var(--text-primary)',
              fontWeight: 'normal'
            }}
          >
            {title}
          </h1>
        )}
        {subtitle && (
          <p
            className="leading-tight mt-1"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.625rem',  // 10px
              color: 'var(--neutral-500)'
            }}
          >
            {subtitle}
          </p>
        )}
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-4">
        {/* Search */}
        <button
          className="flex items-center justify-center transition-colors rounded-[6px] hover:bg-[#f0f9fa]"
          style={{
            width: '36px',
            height: '36px',
            color: 'var(--neutral-400)'
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary-500)'}
          onMouseLeave={(e) => e.currentTarget.style.color = 'var(--neutral-400)'}
        >
          <FiSearch size={18} />
        </button>

        {/* Notifications */}
        <button
          className="flex items-center justify-center transition-colors rounded-[6px] hover:bg-[#f0f9fa]"
          style={{
            width: '36px',
            height: '36px',
            color: 'var(--neutral-400)'
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary-500)'}
          onMouseLeave={(e) => e.currentTarget.style.color = 'var(--neutral-400)'}
        >
          <FiBell size={18} />
        </button>

        {/* Profile */}
        <button
          className="flex items-center justify-center transition-colors rounded-[6px] hover:bg-[#f0f9fa]"
          style={{
            width: '36px',
            height: '36px',
            color: 'var(--neutral-400)'
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary-500)'}
          onMouseLeave={(e) => e.currentTarget.style.color = 'var(--neutral-400)'}
        >
          <FiUser size={18} />
        </button>
      </div>
    </header>
  )
}

export default DashboardHeader
