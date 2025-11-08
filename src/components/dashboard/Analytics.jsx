import Card from '../Card'
import Badge from '../Badge'

// Mock data for analytics demo
const mockAnalyticsData = {
  totalStudents: 1247,
  activeStudents: 892,
  completionRate: 67,
  avgRoadmapProgress: 58,
  popularRoles: [
    { role: 'Software Engineer', count: 487, percentage: 39 },
    { role: 'Data Analyst', count: 312, percentage: 25 },
    { role: 'Cybersecurity', count: 186, percentage: 15 },
    { role: 'Product Manager', count: 149, percentage: 12 },
    { role: 'UX Designer', count: 113, percentage: 9 }
  ],
  topMissingSkills: [
    { skill: 'Cloud Computing', count: 523, percentage: 42 },
    { skill: 'System Design', count: 487, percentage: 39 },
    { skill: 'Data Structures & Algorithms', count: 456, percentage: 37 },
    { skill: 'SQL', count: 398, percentage: 32 },
    { skill: 'Machine Learning', count: 367, percentage: 29 }
  ],
  sponsorEngagement: [
    { sponsor: 'Fidelity', interactions: 342, applications: 89 },
    { sponsor: 'Verizon', interactions: 298, applications: 76 },
    { sponsor: 'PepsiCo', interactions: 267, applications: 63 },
    { sponsor: "McDonald's", interactions: 234, applications: 58 },
    { sponsor: 'Toyota', interactions: 198, applications: 47 },
    { sponsor: 'American Airlines', interactions: 176, applications: 41 }
  ],
  timeToFirstMilestone: {
    avg: '4.2 days',
    median: '3 days'
  },
  interviewPractice: {
    totalSessions: 3421,
    avgScore: 72,
    mostPracticedRole: 'Software Engineer'
  }
}

const Analytics = () => {
  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-neutral-darkest mb-2">
            Analytics Dashboard 📊
          </h1>
          <p className="text-neutral-steel">
            Platform insights for institutional partners and sponsors (Demo View)
          </p>
          <Badge variant="warning" size="sm" className="mt-2">
            Mock Data for Demonstration
          </Badge>
        </div>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-4 gap-6">
          <Card className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">
              {mockAnalyticsData.totalStudents.toLocaleString()}
            </div>
            <div className="text-sm text-neutral-steel">Total Students</div>
          </Card>

          <Card className="text-center">
            <div className="text-4xl font-bold text-secondary mb-2">
              {mockAnalyticsData.activeStudents.toLocaleString()}
            </div>
            <div className="text-sm text-neutral-steel">Active Students</div>
          </Card>

          <Card className="text-center">
            <div className="text-4xl font-bold text-status-success mb-2">
              {mockAnalyticsData.completionRate}%
            </div>
            <div className="text-sm text-neutral-steel">Completion Rate</div>
          </Card>

          <Card className="text-center">
            <div className="text-4xl font-bold text-accent-yellow mb-2">
              {mockAnalyticsData.avgRoadmapProgress}%
            </div>
            <div className="text-sm text-neutral-steel">Avg Roadmap Progress</div>
          </Card>
        </div>

        {/* Popular Roles */}
        <Card>
          <h3 className="text-xl font-bold text-neutral-darkest mb-6">Most Popular Target Roles</h3>
          <div className="space-y-4">
            {mockAnalyticsData.popularRoles.map(role => (
              <div key={role.role}>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-neutral-darkest">{role.role}</span>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-neutral-steel">{role.count} students</span>
                    <span className="text-sm font-bold text-primary">{role.percentage}%</span>
                  </div>
                </div>
                <div className="w-full h-3 bg-background-primary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary"
                    style={{ width: `${role.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Missing Skills */}
        <Card>
          <h3 className="text-xl font-bold text-neutral-darkest mb-4">Top Missing Skills</h3>
          <p className="text-sm text-neutral-steel mb-6">
            Skills students need most to meet role requirements
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {mockAnalyticsData.topMissingSkills.map(item => (
              <div key={item.skill} className="flex items-center gap-4">
                <div className="flex-1">
                  <div className="font-semibold text-neutral-darkest mb-1">{item.skill}</div>
                  <div className="w-full h-2 bg-background-primary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-status-warning"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold text-status-warning">{item.percentage}%</div>
                  <div className="text-xs text-neutral-slate">{item.count}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-background-cream rounded-xl border-2 border-accent-yellow/30">
            <p className="text-sm text-neutral-steel">
              💡 <strong>Insight:</strong> Consider offering workshops or resources for Cloud Computing
              and System Design to address the most common skill gaps.
            </p>
          </div>
        </Card>

        {/* Sponsor Engagement */}
        <Card>
          <h3 className="text-xl font-bold text-neutral-darkest mb-6">Sponsor Engagement</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-background-primary">
                  <th className="text-left py-3 px-4 font-semibold text-neutral-darkest">Sponsor</th>
                  <th className="text-right py-3 px-4 font-semibold text-neutral-darkest">Interactions</th>
                  <th className="text-right py-3 px-4 font-semibold text-neutral-darkest">Applications</th>
                  <th className="text-right py-3 px-4 font-semibold text-neutral-darkest">Conversion</th>
                </tr>
              </thead>
              <tbody>
                {mockAnalyticsData.sponsorEngagement.map(sponsor => (
                  <tr key={sponsor.sponsor} className="border-b border-background-lighter">
                    <td className="py-3 px-4 font-medium text-neutral-darkest">{sponsor.sponsor}</td>
                    <td className="py-3 px-4 text-right text-neutral-steel">{sponsor.interactions}</td>
                    <td className="py-3 px-4 text-right text-neutral-steel">{sponsor.applications}</td>
                    <td className="py-3 px-4 text-right">
                      <Badge variant="success" size="sm">
                        {Math.round((sponsor.applications / sponsor.interactions) * 100)}%
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Interview Practice Stats */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <h3 className="text-xl font-bold text-neutral-darkest mb-4">Interview Practice</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-background-primary rounded-xl border-2 border-primary/20">
                <span className="text-neutral-steel">Total Sessions</span>
                <span className="text-2xl font-bold text-neutral-darkest">
                  {mockAnalyticsData.interviewPractice.totalSessions.toLocaleString()}
                </span>
              </div>
              <div className="flex items-center justify-between p-4 bg-background-primary rounded-xl border-2 border-primary/20">
                <span className="text-neutral-steel">Average Score</span>
                <span className="text-2xl font-bold text-status-success">
                  {mockAnalyticsData.interviewPractice.avgScore}%
                </span>
              </div>
              <div className="flex items-center justify-between p-4 bg-background-primary rounded-xl border-2 border-primary/20">
                <span className="text-neutral-steel">Most Practiced Role</span>
                <Badge variant="primary" size="lg">
                  {mockAnalyticsData.interviewPractice.mostPracticedRole}
                </Badge>
              </div>
            </div>
          </Card>

          <Card>
            <h3 className="text-xl font-bold text-neutral-darkest mb-4">Engagement Metrics</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-background-primary rounded-xl border-2 border-primary/20">
                <span className="text-neutral-steel">Time to First Milestone</span>
                <div className="text-right">
                  <div className="text-2xl font-bold text-neutral-darkest">
                    {mockAnalyticsData.timeToFirstMilestone.avg}
                  </div>
                  <div className="text-xs text-neutral-slate">
                    Median: {mockAnalyticsData.timeToFirstMilestone.median}
                  </div>
                </div>
              </div>
              <div className="p-4 bg-background-primary rounded-xl border-2 border-primary/20 shadow-card">
                <div className="text-sm font-semibold text-neutral-darkest mb-1">
                  Student Satisfaction
                </div>
                <div className="text-3xl font-bold text-primary mb-1">94%</div>
                <div className="text-xs text-neutral-steel">
                  Based on surveys and feedback
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Impact Statement */}
        <Card className="bg-background-primary border-2 border-primary/20 shadow-card-hover">
          <div className="text-center py-6">
            <h3 className="text-2xl font-bold text-neutral-darkest mb-3">
              LaunchPad Impact
            </h3>
            <p className="text-lg text-neutral-steel max-w-3xl mx-auto">
              Students using LaunchPad are <strong className="text-primary">3.2x more likely</strong> to complete career
              development milestones and <strong className="text-primary">2.8x more likely</strong> to apply to internships
              compared to traditional career services.
            </p>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default Analytics
