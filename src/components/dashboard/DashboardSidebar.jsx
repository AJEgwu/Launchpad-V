/**
 * Dashboard Sidebar - Rebuilt to match SVG design specifications
 * Width: 250px
 * Logo: Comfortaa, 12.78px (#2982a1)
 * Nav Items: 44px height, 10px 16px padding, 9.51px font, Myriad Pro
 * Active: #2982a1 color, #f0f9fa background, 6px radius
 */

import { useNavigate, useLocation } from 'react-router-dom'
import { useStore } from '../../store/useStore'
import {
  FiMap,
  FiMessageCircle,
  FiTarget,
  FiMic,
  FiAward,
  FiBarChart2,
  FiSettings
} from 'react-icons/fi'

const DashboardSidebar = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { profile } = useStore()

  const currentPath = location.pathname.split('/').pop() || 'roadmap'

  // Navigation items from SVG spec
  const navItems = [
    { path: 'roadmap', label: 'My Road Map', icon: FiMap },
    { path: 'copilot', label: 'Career Copilot', icon: FiMessageCircle },
    { path: 'opportunities', label: 'Opportunities', icon: FiTarget },
    { path: 'interview', label: 'Interview Studio', icon: FiMic },
    { path: 'portfolio', label: 'Portfolio', icon: FiAward },
    { path: 'analytics', label: 'Analytics', icon: FiBarChart2 },
    { path: 'settings', label: 'Settings', icon: FiSettings }
  ]

  return (
    <aside
      className="h-screen flex flex-col bg-white"
      style={{
        width: '250px',  // Exact from SVG spec
        borderRight: '1px solid #e5e5e5'
      }}
    >
      {/* Logo Section */}
      <div
        className="px-6 py-5 border-b"
        style={{ borderColor: '#e5e5e5' }}
      >
        <h1
          className="leading-tight"
          style={{
            fontFamily: 'var(--font-primary)',
            fontSize: '0.799rem',  // 12.78px
            color: 'var(--primary-500)',
            fontWeight: 'normal'
          }}
        >
          LaunchPad
        </h1>
      </div>

      {/* User Profile Section */}
      <div
        className="px-6 py-5 border-b"
        style={{ borderColor: '#e5e5e5' }}
      >
        <div className="flex items-center gap-3">
          {/* Avatar */}
          <div
            className="rounded-full flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-[var(--primary-500)] to-[var(--primary-300)] text-white font-medium leading-none"
            style={{
              width: '48px',
              height: '48px',
              fontFamily: 'var(--font-primary)',
              fontSize: '1.125rem'
            }}
          >
            {profile?.name?.[0]?.toUpperCase() || 'A'}
          </div>

          {/* User Info */}
          <div className="flex-1 min-w-0">
            <p
              className="truncate leading-tight"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.594rem',  // 9.51px
                color: 'var(--neutral-800)',
                fontWeight: 500
              }}
            >
              {profile?.name || 'Alex Johnson'}
            </p>
            <p
              className="truncate leading-tight mt-0.5"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.498rem',  // 7.96px
                color: 'var(--neutral-500)'
              }}
            >
              {profile?.major || 'Computer Science'}
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 px-4 py-4 overflow-y-auto">
        <div className="space-y-1">
          {navItems.map((item) => {
            const isActive = currentPath === item.path
            const Icon = item.icon

            return (
              <button
                key={item.path}
                onClick={() => navigate(`/dashboard/${item.path}`)}
                className="w-full flex items-center gap-3 transition-all"
                style={{
                  height: '44px',  // Exact from SVG spec
                  padding: '10px 16px',  // Exact from SVG spec
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.594rem',  // 9.51px
                  color: isActive ? 'var(--primary-500)' : 'var(--neutral-500)',
                  backgroundColor: isActive ? '#f0f9fa' : 'transparent',
                  borderRadius: '6px',  // Exact from SVG spec
                  fontWeight: isActive ? 500 : 400,
                  textAlign: 'left'
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor = '#f0f9fa'
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor = 'transparent'
                  }
                }}
              >
                <Icon
                  className="flex-shrink-0"
                  style={{
                    fontSize: '1rem',
                    color: isActive ? 'var(--primary-500)' : 'var(--neutral-400)'
                  }}
                />
                <span className="flex-1">{item.label}</span>
              </button>
            )
          })}
        </div>
      </nav>
    </aside>
  )
}

export default DashboardSidebar
