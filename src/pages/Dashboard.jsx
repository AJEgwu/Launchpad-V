import { Routes, Route, Navigate } from 'react-router-dom'
import DashboardSidebar from '../components/dashboard/DashboardSidebar'
import DashboardHeader from '../components/dashboard/DashboardHeader'
import RoadmapView from '../components/dashboard/RoadmapView'
import CareerCopilot from '../components/dashboard/CareerCopilot'
import AIInterviewStudio from '../components/interview/AIInterviewStudio'
import Opportunities from '../components/dashboard/Opportunities'
import Portfolio from '../components/dashboard/Portfolio'
import Analytics from '../components/dashboard/Analytics'
import Settings from '../components/dashboard/Settings'

const Dashboard = () => {
  return (
    <div className="min-h-screen flex" style={{ background: 'var(--gradient-bg)' }}>
      {/* Sidebar - Exact SVG specifications */}
      <DashboardSidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Optional Header - can be added per page */}
        {/* <DashboardHeader title="Page Title" subtitle="Subtitle" /> */}

        {/* Page Content */}
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
    </div>
  )
}

export default Dashboard
