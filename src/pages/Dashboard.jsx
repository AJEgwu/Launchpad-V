import { Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom'
import { useStore } from '../store/useStore'
import {
  FiZap,
  FiMap,
  FiMessageCircle,
  FiTarget,
  FiMic,
  FiAward,
  FiBarChart2,
  FiSettings,
  FiLogOut,
  FiChevronRight
} from 'react-icons/fi'
import RoadmapView from '../components/dashboard/RoadmapView'
import CareerCopilot from '../components/dashboard/CareerCopilot'
import AIInterviewStudio from '../components/interview/AIInterviewStudio'
import Opportunities from '../components/dashboard/Opportunities'
import Portfolio from '../components/dashboard/Portfolio'
import Analytics from '../components/dashboard/Analytics'
import Settings from '../components/dashboard/Settings'

const Dashboard = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { profile, roadmap, reset } = useStore()

  const currentPath = location.pathname.split('/').pop() || 'roadmap'

  const handleLogout = () => {
    if (confirm('Are you sure you want to start over? This will clear all your data.')) {
      reset()
      navigate('/')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background-lighter via-white to-background-pale flex">
      {/* Sidebar */}
      <aside className="w-72 bg-white border-r border-background-primary flex flex-col shadow-card">
        {/* Logo */}
        <div className="p-6 border-b border-background-primary">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-card">
              <FiZap className="text-white text-xl" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary">
                LaunchPad
              </h1>
              <p className="text-xs text-neutral-steel">AI Career OS</p>
            </div>
          </div>
        </div>

        {/* Profile Summary */}
        <button
          onClick={() => navigate('/dashboard/portfolio')}
          className="p-6 border-b border-background-primary w-full hover:bg-background-primary transition-all text-left group"
        >
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-white text-xl font-bold shadow-card group-hover:scale-105 transition-transform">
              {profile?.name?.[0]?.toUpperCase() || 'S'}
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-semibold text-neutral-darkest truncate">
                {profile?.name || 'Student'}
              </div>
              <div className="text-xs text-neutral-steel truncate">
                {profile?.major || 'Exploring'}
              </div>
            </div>
            <FiChevronRight className="text-neutral-steel group-hover:text-primary group-hover:translate-x-1 transition-all" />
          </div>
        </button>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {navItems.map(item => {
            const isActive = currentPath === item.path
            const Icon = item.icon
            return (
              <button
                key={item.path}
                onClick={() => navigate(`/dashboard/${item.path}`)}
                className={`
                  w-full flex items-center gap-3 px-4 py-3 rounded-xl
                  transition-all duration-200 text-left group
                  ${isActive
                    ? 'bg-primary text-white shadow-card'
                    : 'text-neutral-steel hover:bg-background-primary'
                  }
                `}
              >
                <Icon className={`text-xl ${isActive ? 'text-white' : 'text-neutral-slate group-hover:text-primary'}`} />
                <span className="font-medium">{item.label}</span>
                {isActive && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-white"></div>}
              </button>
            )
          })}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-background-primary space-y-2">
          <button
            onClick={() => navigate('/dashboard/settings')}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-neutral-steel hover:bg-background-primary transition-all text-left group"
          >
            <FiSettings className="text-xl text-neutral-slate group-hover:text-primary transition-colors" />
            <span className="font-medium">Settings</span>
          </button>
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-neutral-steel hover:bg-status-error/10 hover:text-status-error transition-all text-left group"
          >
            <FiLogOut className="text-xl text-neutral-slate group-hover:text-status-error transition-colors" />
            <span className="font-medium">Start Over</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard/roadmap" />} />
          <Route path="/roadmap" element={<RoadmapView />} />
          <Route path="/copilot" element={<CareerCopilot />} />
          <Route path="/interview" element={<AIInterviewStudio />} />
          <Route path="/opportunities" element={<Opportunities />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </main>
    </div>
  )
}

const navItems = [
  { path: 'roadmap', label: 'My Roadmap', icon: FiMap },
  { path: 'copilot', label: 'Career Copilot', icon: FiMessageCircle },
  { path: 'opportunities', label: 'Opportunities', icon: FiTarget },
  { path: 'interview', label: 'Interview Studio', icon: FiMic },
  { path: 'portfolio', label: 'Portfolio', icon: FiAward },
  { path: 'analytics', label: 'Analytics', icon: FiBarChart2 }
]

export default Dashboard
