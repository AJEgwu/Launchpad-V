import { useStore } from '../../store/useStore'
import Card from '../Card'
import Badge from '../Badge'
import Button from '../Button'
import { getNextSteps } from '../../utils/matching'

const RoadmapView = () => {
  const { roadmap, updateMilestoneStatus } = useStore()

  if (!roadmap) {
    return (
      <div className="p-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-6xl mb-4">🗺️</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            No Roadmap Yet
          </h2>
          <p className="text-gray-600">
            Complete onboarding to generate your personalized career roadmap.
          </p>
        </div>
      </div>
    )
  }

  const nextSteps = getNextSteps(roadmap)

  // Calculate overall progress
  let totalMilestones = 0
  let completedMilestones = 0
  roadmap.phases.forEach(phase => {
    totalMilestones += phase.milestones.length
    completedMilestones += phase.milestones.filter(m => m.status === 'completed').length
  })
  const overallProgress = totalMilestones > 0 ? Math.round((completedMilestones / totalMilestones) * 100) : 0

  return (
    <div className="p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Your Career Roadmap
          </h1>
          <p className="text-gray-600">
            Follow this personalized plan to achieve your career goals
          </p>
        </div>

        {/* Progress Overview */}
        <Card>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-gray-900">Overall Progress</h3>
            <span className="text-2xl font-bold text-primary">{overallProgress}%</span>
          </div>
          <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-500"
              style={{ width: `${overallProgress}%` }}
            />
          </div>
          <div className="flex items-center gap-6 mt-4 text-sm">
            <div>
              <span className="text-gray-600">Completed:</span>
              <span className="font-semibold text-gray-900 ml-2">{completedMilestones}</span>
            </div>
            <div>
              <span className="text-gray-600">Total:</span>
              <span className="font-semibold text-gray-900 ml-2">{totalMilestones}</span>
            </div>
          </div>
        </Card>

        {/* Target Roles */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Target Roles</h3>
          <div className="flex flex-wrap gap-2">
            {roadmap.tracks.map(track => (
              <Badge key={track} variant="primary" size="lg">
                {track}
              </Badge>
            ))}
          </div>
        </div>

        {/* Next Steps */}
        {nextSteps.length > 0 && (
          <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/20">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span>🎯</span>
              Next Steps
            </h3>
            <div className="space-y-3">
              {nextSteps.map((step, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 bg-white rounded-lg"
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    step.type === 'continue' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700'
                  }`}>
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900">
                      {step.type === 'continue' ? 'Continue: ' : 'Start: '}
                      {step.milestone.name}
                    </div>
                    <div className="text-sm text-gray-600">{step.phase}</div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        )}

        {/* Phases */}
        <div className="space-y-8">
          {roadmap.phases.map((phase, phaseIndex) => (
            <PhaseCard
              key={phase.id}
              phase={phase}
              phaseIndex={phaseIndex}
              onMilestoneStatusChange={updateMilestoneStatus}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

const PhaseCard = ({ phase, phaseIndex, onMilestoneStatusChange }) => {
  const completedCount = phase.milestones.filter(m => m.status === 'completed').length
  const progress = Math.round((completedCount / phase.milestones.length) * 100)

  return (
    <Card className="border-2 border-gray-200">
      <div className="mb-6">
        <div className="flex items-start justify-between mb-2">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="text-3xl font-bold text-primary">
                {phaseIndex + 1}
              </span>
              <h3 className="text-2xl font-bold text-gray-900">
                {phase.name}
              </h3>
            </div>
            <p className="text-gray-600">{phase.timeline}</p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-gray-900">{progress}%</div>
            <div className="text-sm text-gray-500">
              {completedCount}/{phase.milestones.length} completed
            </div>
          </div>
        </div>
        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mt-3">
          <div
            className="h-full bg-primary transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="space-y-4">
        {phase.milestones.map(milestone => (
          <MilestoneCard
            key={milestone.id}
            milestone={milestone}
            phaseId={phase.id}
            onStatusChange={onMilestoneStatusChange}
          />
        ))}
      </div>
    </Card>
  )
}

const MilestoneCard = ({ milestone, phaseId, onStatusChange }) => {
  const statusConfig = {
    not_started: {
      label: 'Not Started',
      color: 'bg-gray-200 text-gray-700',
      icon: '○',
      nextStatus: 'in_progress',
      nextLabel: 'Start'
    },
    in_progress: {
      label: 'In Progress',
      color: 'bg-primary text-white',
      icon: '◐',
      nextStatus: 'completed',
      nextLabel: 'Complete'
    },
    completed: {
      label: 'Completed',
      color: 'bg-green-500 text-white',
      icon: '✓',
      nextStatus: 'in_progress',
      nextLabel: 'Undo'
    }
  }

  const config = statusConfig[milestone.status]

  return (
    <div className={`
      p-6 rounded-xl border-2 transition-all duration-200
      ${milestone.status === 'completed' ? 'bg-green-50 border-green-200' :
        milestone.status === 'in_progress' ? 'bg-primary/5 border-primary/30' :
        'bg-white border-gray-200'}
    `}>
      <div className="flex items-start gap-4">
        <div className={`w-10 h-10 rounded-full ${config.color} flex items-center justify-center text-lg font-bold flex-shrink-0`}>
          {config.icon}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-4 mb-3">
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-1">
                {milestone.name}
              </h4>
              <p className="text-gray-600 text-sm">
                {milestone.description}
              </p>
            </div>
            <Button
              size="sm"
              variant={milestone.status === 'completed' ? 'ghost' : 'primary'}
              onClick={() => onStatusChange(phaseId, milestone.id, config.nextStatus)}
            >
              {config.nextLabel}
            </Button>
          </div>

          {/* Skills */}
          {milestone.skills && milestone.skills.length > 0 && (
            <div className="mb-3">
              <div className="text-xs font-semibold text-gray-700 mb-2">Skills:</div>
              <div className="flex flex-wrap gap-2">
                {milestone.skills.map(skill => (
                  <Badge key={skill} variant="default" size="sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Projects */}
          {milestone.projects && milestone.projects.length > 0 && (
            <div className="mb-3">
              <div className="text-xs font-semibold text-gray-700 mb-2">Projects:</div>
              <ul className="text-sm text-gray-600 space-y-1">
                {milestone.projects.map((project, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>{project}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Resources */}
          {milestone.resources && milestone.resources.length > 0 && (
            <div className="mb-3">
              <div className="text-xs font-semibold text-gray-700 mb-2">Resources:</div>
              <div className="flex flex-wrap gap-2">
                {milestone.resources.map((resource, idx) => (
                  <span key={idx} className="text-sm text-secondary hover:underline cursor-pointer">
                    {resource}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Sponsor Tags */}
          {milestone.sponsorTags && milestone.sponsorTags.length > 0 && (
            <div>
              <div className="text-xs font-semibold text-gray-700 mb-2">Sponsor Aligned:</div>
              <div className="flex flex-wrap gap-2">
                {milestone.sponsorTags.map(tag => (
                  <Badge key={tag} variant="sponsor" size="sm">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default RoadmapView
