import { Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom'
import { useStore } from '../store/useStore'
import RoadmapView from '../components/dashboard/RoadmapView'
import CareerCopilot from '../components/dashboard/CareerCopilot'
import InterviewStudio from '../components/dashboard/InterviewStudio'
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
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="text-3xl">🚀</div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">LaunchPad</h1>
              <p className="text-xs text-gray-500">AI Career OS</p>
            </div>
          </div>
        </div>

        {/* Profile Summary */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-xl">
              {profile?.name?.[0]?.toUpperCase() || '👤'}
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-semibold text-gray-900 truncate">
                {profile?.name || 'Student'}
              </div>
              <div className="text-xs text-gray-500 truncate">
                {profile?.major || 'Exploring'}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-1">
          {navItems.map(item => {
            const isActive = currentPath === item.path
            return (
              <button
                key={item.path}
                onClick={() => navigate(`/dashboard/${item.path}`)}
                className={`
                  w-full flex items-center gap-3 px-4 py-3 rounded-lg
                  transition-all duration-200 text-left
                  ${isActive
                    ? 'bg-primary text-white shadow-sm'
                    : 'text-gray-700 hover:bg-gray-100'
                  }
                `}
              >
                <span className="text-xl">{item.icon}</span>
                <span className="font-medium">{item.label}</span>
              </button>
            )
          })}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200 space-y-2">
          <button
            onClick={() => navigate('/dashboard/settings')}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors text-left"
          >
            <span className="text-xl">⚙️</span>
            <span className="font-medium">Settings</span>
          </button>
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors text-left"
          >
            <span className="text-xl">🚪</span>
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
          <Route path="/interview" element={<InterviewStudio />} />
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
  { path: 'roadmap', label: 'My Roadmap', icon: '🗺️' },
  { path: 'copilot', label: 'Career Copilot', icon: '💬' },
  { path: 'opportunities', label: 'Opportunities', icon: '🎯' },
  { path: 'interview', label: 'Interview Studio', icon: '🎤' },
  { path: 'portfolio', label: 'Portfolio', icon: '🏆' },
  { path: 'analytics', label: 'Analytics', icon: '📊' }
]

export default Dashboard
