import MilestoneNode from './MilestoneNode'
import ProgressBar from '../ProgressBar'

/**
 * PhaseCard - Represents a phase segment in the roadmap timeline
 * Rebuilt to match SVG design specifications
 * Gradient background, 16px radius, 24px padding
 * Compact fonts and spacing
 */
const PhaseCard = ({
  phase,
  phaseIndex,
  isCompact = false,
  onMilestoneSelect,
  onMilestoneStatusChange,
  selectedMilestoneId = null
}) => {
  // Calculate phase progress
  const completedCount = phase.milestones.filter(m => m.status === 'completed').length
  const progress = phase.milestones.length > 0
    ? Math.round((completedCount / phase.milestones.length) * 100)
    : 0

  // Determine phase styling - SVG specifications with gradients
  const getPhaseStyle = () => {
    if (progress === 100) {
      return {
        background: 'linear-gradient(180deg, #ffffff 0%, #e8f7e8 100%)',
        borderColor: '#6acc79',  // var(--success-500)
        borderWidth: '2px'
      }
    }
    if (progress > 0) {
      return {
        background: 'linear-gradient(180deg, #ffffff 0%, #f0f9fa 100%)',
        borderColor: '#2982a1',  // var(--primary-500)
        borderWidth: '2px'
      }
    }
    return {
      background: '#ffffff',
      borderColor: '#d3d5d6',  // var(--neutral-200)
      borderWidth: '1px'
    }
  }

  const phaseStyle = getPhaseStyle()

  if (isCompact) {
    // Compact view: Circle nodes in a row
    return (
      <div className="relative flex-shrink-0 w-auto">
        {/* Phase Card - Compact with gradient */}
        <div
          className="p-4 rounded-2xl shadow-md transition-all"
          style={{
            ...phaseStyle,
            border: `${phaseStyle.borderWidth} solid ${phaseStyle.borderColor}`,
            minWidth: '280px'
          }}
        >
          {/* Phase Number and Title */}
          <div className="flex items-start gap-2 mb-3">
            <div
              className="flex-shrink-0 rounded-full text-white flex items-center justify-center"
              style={{
                width: '32px',
                height: '32px',
                backgroundColor: 'var(--primary-500)',
                fontFamily: 'var(--font-primary)',
                fontSize: 'var(--text-sm)',  // 9.51px
                fontWeight: 'bold',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }}
            >
              {phaseIndex + 1}
            </div>
            <div className="flex-1 min-w-0">
              <h3
                className="leading-tight mb-0.5"
                style={{
                  fontFamily: 'var(--font-primary)',
                  fontSize: 'var(--text-sm)',  // 9.51px
                  color: 'var(--neutral-800)',
                  fontWeight: '500'
                }}
              >
                {phase.name}
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'var(--text-3xs)',  // 6.38px
                  color: 'var(--neutral-500)'
                }}
              >
                {phase.timeline}
              </p>
            </div>
          </div>

          {/* Progress */}
          <div className="mb-3">
            <div className="flex items-center justify-between mb-1">
              <span
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'var(--text-3xs)',  // 6.38px
                  color: 'var(--neutral-500)',
                  fontWeight: '500'
                }}
              >
                Progress
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-primary)',
                  fontSize: 'var(--text-xs)',  // 7.96px
                  color: 'var(--neutral-800)',
                  fontWeight: 'bold'
                }}
              >
                {progress}%
              </span>
            </div>
            <ProgressBar current={completedCount} total={phase.milestones.length} />
          </div>

          {/* Milestones as circles */}
          <div className="flex flex-wrap gap-2">
            {phase.milestones.map(milestone => (
              <MilestoneNode
                key={milestone.id}
                milestone={milestone}
                phaseId={phase.id}
                isCompact={true}
                onSelect={onMilestoneSelect}
                onStatusChange={onMilestoneStatusChange}
                isSelected={selectedMilestoneId === milestone.id}
              />
            ))}
          </div>
        </div>

        {/* Connecting line to next phase - 2-3px from SVG */}
        <div
          className="absolute top-1/2 -right-6 w-6"
          style={{
            height: '3px',
            backgroundColor: phaseStyle.borderColor,
            transform: 'translateY(-50%)'
          }}
        />
      </div>
    )
  }

  // Detailed view: Full card with milestone list - SVG specifications
  return (
    <div className="relative flex-shrink-0" style={{ width: '320px' }}>
      {/* Phase Card - 16px radius, 24px padding, gradient from SVG */}
      <div
        className="p-6 rounded-2xl shadow-lg transition-all"
        style={{
          ...phaseStyle,
          border: `${phaseStyle.borderWidth} solid ${phaseStyle.borderColor}`
        }}
      >
        {/* Phase Header */}
        <div className="mb-4">
          <div className="flex items-start gap-3 mb-2">
            <div
              className="flex-shrink-0 rounded-full text-white flex items-center justify-center"
              style={{
                width: '40px',
                height: '40px',
                backgroundColor: 'var(--primary-500)',
                fontFamily: 'var(--font-primary)',
                fontSize: 'var(--text-lg)',  // 15.49px
                fontWeight: 'bold',
                boxShadow: '0 2px 6px rgba(0,0,0,0.15)'
              }}
            >
              {phaseIndex + 1}
            </div>
            <div className="flex-1 min-w-0">
              <h3
                className="leading-tight mb-1"
                style={{
                  fontFamily: 'var(--font-primary)',
                  fontSize: 'var(--text-lg)',  // 15.49px
                  color: 'var(--neutral-800)',
                  fontWeight: '500'
                }}
              >
                {phase.name}
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'var(--text-xs)',  // 7.96px
                  color: 'var(--neutral-500)'
                }}
              >
                {phase.timeline}
              </p>
            </div>
          </div>

          {/* Goal/Description */}
          {phase.goal && (
            <p
              className="mt-2 pl-13"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--text-2xs)',  // 6.64px
                color: 'var(--neutral-500)',
                lineHeight: '1.5'
              }}
            >
              {phase.goal}
            </p>
          )}
        </div>

        {/* Progress Bar */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-1.5">
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--text-xs)',  // 7.96px
                color: 'var(--neutral-500)',
                fontWeight: '500'
              }}
            >
              Progress
            </span>
            <span
              style={{
                fontFamily: 'var(--font-primary)',
                fontSize: 'var(--text-sm)',  // 9.51px
                color: 'var(--neutral-800)',
                fontWeight: 'bold'
              }}
            >
              {progress}%
            </span>
          </div>
          <ProgressBar current={completedCount} total={phase.milestones.length} />
          <div
            className="mt-1.5"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-3xs)',  // 6.38px
              color: 'var(--neutral-500)'
            }}
          >
            {completedCount} / {phase.milestones.length} completed
          </div>
        </div>

        {/* Milestones */}
        <div className="space-y-1.5">
          <div
            className="mb-2"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-3xs)',  // 6.38px
              color: 'var(--neutral-500)',
              fontWeight: '500'
            }}
          >
            Milestones:
          </div>
          {phase.milestones.map(milestone => (
            <MilestoneNode
              key={milestone.id}
              milestone={milestone}
              phaseId={phase.id}
              isCompact={false}
              onSelect={onMilestoneSelect}
              onStatusChange={onMilestoneStatusChange}
              isSelected={selectedMilestoneId === milestone.id}
            />
          ))}
        </div>
      </div>

      {/* Connecting line to next phase - 3px from SVG */}
      <div
        className="absolute top-1/2 -right-8 w-8"
        style={{
          height: '3px',
          backgroundColor: phaseStyle.borderColor,
          transform: 'translateY(-50%)'
        }}
      />
    </div>
  )
}

export default PhaseCard
