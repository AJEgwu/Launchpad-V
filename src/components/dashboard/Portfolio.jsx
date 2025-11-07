import { useStore } from '../../store/useStore'
import { calculateReadinessScore, getCompletedSkills } from '../../utils/matching'
import Card from '../Card'
import Badge from '../Badge'
import skillsData from '../../data/skills.json'

const Portfolio = () => {
  const { profile, roadmap, interviewSessions } = useStore()

  if (!profile || !roadmap) {
    return (
      <div className="p-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-6xl mb-4">🏆</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Portfolio Not Available
          </h2>
          <p className="text-gray-600">
            Complete your onboarding to generate your portfolio.
          </p>
        </div>
      </div>
    )
  }

  const completedMilestones = roadmap.phases.flatMap(phase =>
    phase.milestones.filter(m => m.status === 'completed')
  )

  const completedSkills = getCompletedSkills(roadmap)
  const allSkills = [...new Set([...profile.currentSkills, ...completedSkills])]

  // Calculate readiness scores for each target role
  const readinessScores = profile.targetRoles.map(role => ({
    role,
    score: calculateReadinessScore(profile, roadmap, role)
  }))

  const avgInterviewScore = interviewSessions.length > 0
    ? Math.round(interviewSessions.reduce((sum, s) => sum + s.averageScore, 0) / interviewSessions.length)
    : 0

  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Portfolio 🏆
          </h1>
          <p className="text-gray-600">
            Your shareable career profile showcasing skills, progress, and readiness
          </p>
        </div>

        {/* Profile Card */}
        <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/20">
          <div className="flex items-start gap-6">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center text-4xl font-bold flex-shrink-0">
              {profile.name[0].toUpperCase()}
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                {profile.name}
              </h2>
              <p className="text-lg text-gray-700 mb-3">
                {profile.major} • {profile.experienceLevel.charAt(0).toUpperCase() + profile.experienceLevel.slice(1)} Level
              </p>
              <div className="flex flex-wrap gap-2">
                {profile.targetRoles.map(role => (
                  <Badge key={role} variant="primary" size="lg">
                    {skillsData[role]?.role || role}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </Card>

        {/* Readiness Scores */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">Career Readiness</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {readinessScores.map(({ role, score }) => (
              <Card key={role} className="bg-white">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-bold text-gray-900">
                    {skillsData[role]?.role || role}
                  </h4>
                  <span className={`text-2xl font-bold ${
                    score >= 80 ? 'text-green-600' :
                    score >= 60 ? 'text-yellow-600' :
                    score >= 40 ? 'text-orange-600' :
                    'text-red-600'
                  }`}>
                    {score}%
                  </span>
                </div>
                <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${
                      score >= 80 ? 'bg-green-500' :
                      score >= 60 ? 'bg-yellow-500' :
                      score >= 40 ? 'bg-orange-500' :
                      'bg-red-500'
                    }`}
                    style={{ width: `${score}%` }}
                  />
                </div>
                <p className="text-xs text-gray-600 mt-2">
                  {score >= 80 ? 'Ready to apply!' :
                   score >= 60 ? 'Making good progress' :
                   score >= 40 ? 'Keep building skills' :
                   'Just getting started'}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Skills */}
        <Card>
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Skills ({allSkills.length})
          </h3>
          <div className="flex flex-wrap gap-2">
            {allSkills.map(skill => (
              <Badge
                key={skill}
                variant={completedSkills.includes(skill) ? 'success' : 'default'}
                size="md"
              >
                {completedSkills.includes(skill) && '✓ '}
                {skill}
              </Badge>
            ))}
          </div>
        </Card>

        {/* Completed Milestones */}
        <Card>
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Completed Milestones ({completedMilestones.length})
          </h3>
          {completedMilestones.length === 0 ? (
            <p className="text-gray-600">
              No milestones completed yet. Start working on your roadmap!
            </p>
          ) : (
            <div className="space-y-3">
              {completedMilestones.map((milestone, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-4 bg-green-50 rounded-lg border border-green-200"
                >
                  <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center flex-shrink-0">
                    ✓
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-gray-900">{milestone.name}</div>
                    <div className="text-sm text-gray-600">{milestone.description}</div>
                    {milestone.skills && milestone.skills.length > 0 && (
                      <div className="flex flex-wrap gap-1 mt-2">
                        {milestone.skills.map(skill => (
                          <Badge key={skill} variant="success" size="sm">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </Card>

        {/* Projects */}
        <Card>
          <h3 className="text-xl font-bold text-gray-900 mb-4">Projects</h3>
          {completedMilestones.length === 0 ? (
            <p className="text-gray-600">
              Complete milestones to build your project portfolio.
            </p>
          ) : (
            <div className="space-y-3">
              {completedMilestones
                .filter(m => m.projects && m.projects.length > 0)
                .flatMap(m => m.projects)
                .map((project, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-gray-50 rounded-lg border border-gray-200"
                  >
                    <div className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span className="text-gray-700">{project}</span>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </Card>

        {/* Interview Performance */}
        {interviewSessions.length > 0 && (
          <Card>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Interview Practice
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  {interviewSessions.length}
                </div>
                <div className="text-sm text-gray-600">Sessions Completed</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className={`text-3xl font-bold mb-1 ${
                  avgInterviewScore >= 80 ? 'text-green-600' :
                  avgInterviewScore >= 60 ? 'text-yellow-600' :
                  'text-orange-600'
                }`}>
                  {avgInterviewScore}%
                </div>
                <div className="text-sm text-gray-600">Average Score</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  {interviewSessions.reduce((sum, s) => sum + s.results.length, 0)}
                </div>
                <div className="text-sm text-gray-600">Questions Answered</div>
              </div>
            </div>
          </Card>
        )}

        {/* Share Card */}
        <Card className="bg-gradient-to-r from-primary to-secondary text-white">
          <div className="text-center py-6">
            <h3 className="text-2xl font-bold mb-2">Share Your Portfolio</h3>
            <p className="mb-6 opacity-90">
              Showcase your progress to recruiters and mentors
            </p>
            <button
              onClick={() => alert('Sharing functionality would be implemented in production')}
              className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Generate Share Link
            </button>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default Portfolio
