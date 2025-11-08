import { useState } from 'react'
import Badge from '../Badge'
import {
  FiBook,
  FiCode,
  FiAward,
  FiSend,
  FiUsers,
  FiTarget,
  FiCheckCircle,
  FiCircle,
  FiLoader
} from 'react-icons/fi'

/**
 * MilestoneNode - Individual milestone node in the roadmap timeline
 *
 * Displays milestone as a node with:
 * - Status indicator (not started, in progress, completed)
 * - Icon representing category
 * - Hover/click for quick details
 */
const MilestoneNode = ({
  milestone,
  phaseId,
  isCompact = false,
  onSelect,
  onStatusChange,
  isSelected = false
}) => {
  const [isHovered, setIsHovered] = useState(false)

  // Get icon based on milestone type or infer from content
  const getMilestoneIcon = () => {
    const name = milestone.name.toLowerCase()
    const description = (milestone.description || '').toLowerCase()

    // Check for explicit type if added
    if (milestone.type === 'course') return FiBook
    if (milestone.type === 'project') return FiCode
    if (milestone.type === 'certification') return FiAward
    if (milestone.type === 'application') return FiSend
    if (milestone.type === 'networking') return FiUsers
    if (milestone.type === 'interview') return FiTarget

    // Infer from name/description
    if (name.includes('course') || name.includes('learn') || description.includes('course')) return FiBook
    if (name.includes('project') || name.includes('build') || description.includes('project')) return FiCode
    if (name.includes('certif') || name.includes('certificate') || description.includes('certif')) return FiAward
    if (name.includes('apply') || name.includes('application') || description.includes('apply')) return FiSend
    if (name.includes('network') || name.includes('connect') || description.includes('network')) return FiUsers
    if (name.includes('interview') || name.includes('practice') || description.includes('interview')) return FiTarget

    // Default
    return FiTarget
  }

  // Get status configuration - Exact SVG specifications
  // Colors: #30639a (current), #6acc79 (complete), #d3d5d6 (future)
  const getStatusConfig = () => {
    switch (milestone.status) {
      case 'completed':
        return {
          icon: FiCheckCircle,
          bgColor: '#6acc79',  // var(--success-500) from SVG
          borderColor: '#6acc79',
          textColor: '#ffffff',
          ringColor: 'rgba(106, 204, 121, 0.3)',
          dotColor: '#6acc79',
          label: 'Completed'
        }
      case 'in_progress':
        return {
          icon: FiLoader,
          bgColor: '#30639a',  // var(--primary-400) from SVG
          borderColor: '#30639a',
          textColor: '#ffffff',
          ringColor: 'rgba(48, 99, 154, 0.3)',
          dotColor: '#30639a',
          label: 'In Progress'
        }
      case 'not_started':
      default:
        return {
          icon: FiCircle,
          bgColor: '#ffffff',
          borderColor: '#d3d5d6',  // var(--neutral-200) from SVG
          textColor: '#6f7173',  // var(--neutral-500)
          ringColor: 'rgba(211, 213, 214, 0.5)',
          dotColor: '#d3d5d6',
          label: 'Not Started'
        }
    }
  }

  const MilestoneIcon = getMilestoneIcon()
  const statusConfig = getStatusConfig()
  const StatusIcon = statusConfig.icon

  const handleClick = () => {
    onSelect?.(phaseId, milestone.id)
  }

  const handleQuickStatusChange = (e) => {
    e.stopPropagation()
    const nextStatus = milestone.status === 'not_started'
      ? 'in_progress'
      : milestone.status === 'in_progress'
      ? 'completed'
      : 'not_started'
    onStatusChange?.(phaseId, milestone.id, nextStatus)
  }

  if (isCompact) {
    // Compact view: Circle with exact SVG specs (40px diameter, 3px border)
    return (
      <button
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`relative group ${isSelected ? 'ring-4 ring-offset-2' : ''}`}
        style={isSelected ? { '--tw-ring-color': statusConfig.ringColor } : {}}
        title={milestone.name}
      >
        <div
          className="rounded-full transition-all flex items-center justify-center"
          style={{
            width: '40px',
            height: '40px',
            backgroundColor: statusConfig.bgColor,
            border: `3px solid ${statusConfig.borderColor}`,
            color: statusConfig.textColor,
            transform: isHovered ? 'scale(1.1)' : 'scale(1)'
          }}
        >
          <StatusIcon size={16} />
        </div>

        {/* Tooltip on hover */}
        {isHovered && (
          <div
            className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-3 py-2 rounded-lg whitespace-nowrap z-20 shadow-lg"
            style={{
              backgroundColor: 'var(--neutral-800)',
              color: 'white',
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-2xs)',  // 6.64px
              maxWidth: '200px',
              whiteSpace: 'normal'
            }}
          >
            {milestone.name}
            <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent" style={{ borderTopColor: 'var(--neutral-800)' }} />
          </div>
        )}
      </button>
    )
  }

  // Detailed view: Compact card with exact specifications
  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative group w-full text-left ${isSelected ? 'ring-2 ring-offset-2' : ''}`}
      style={isSelected ? { '--tw-ring-color': statusConfig.ringColor } : {}}
    >
      <div
        className="flex items-center gap-2 p-2.5 rounded-lg transition-all duration-200"
        style={{
          backgroundColor: statusConfig.bgColor,
          border: `2px solid ${statusConfig.borderColor}`,
          color: statusConfig.textColor,
          boxShadow: isHovered ? '0 4px 12px rgba(0,0,0,0.15)' : '0 2px 4px rgba(0,0,0,0.1)',
          transform: isHovered ? 'scale(1.02)' : 'scale(1)'
        }}
      >
        {/* Status Icon Circle */}
        <div
          className="flex-shrink-0 rounded-full flex items-center justify-center"
          style={{
            width: '28px',
            height: '28px',
            backgroundColor: milestone.status === 'not_started' ? statusConfig.borderColor : 'rgba(255,255,255,0.2)'
          }}
        >
          <StatusIcon size={14} />
        </div>

        {/* Category Icon */}
        <div className="flex-shrink-0 opacity-70">
          <MilestoneIcon size={12} />
        </div>

        {/* Title */}
        <div className="flex-1 min-w-0">
          <div
            className="truncate"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-xs)',  // 7.96px
              fontWeight: '500'
            }}
          >
            {milestone.name}
          </div>
        </div>

        {/* Quick status change button */}
        <button
          onClick={handleQuickStatusChange}
          className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
          title="Change status"
        >
          <div
            className="w-5 h-5 rounded-full flex items-center justify-center hover:brightness-90"
            style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}
          >
            <span style={{ fontSize: 'var(--text-3xs)' }}>→</span>
          </div>
        </button>
      </div>

      {/* Hover Details Card - Compact */}
      {isHovered && milestone.description && (
        <div
          className="absolute left-0 top-full mt-2 p-3 bg-white rounded-lg z-30 w-72 max-w-sm"
          style={{
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            border: `1px solid ${statusConfig.borderColor}`
          }}
        >
          <div className="space-y-2">
            <div>
              <div
                className="mb-1"
                style={{
                  fontFamily: 'var(--font-primary)',
                  fontSize: 'var(--text-sm)',  // 9.51px
                  color: 'var(--neutral-800)',
                  fontWeight: '500'
                }}
              >
                {milestone.name}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'var(--text-2xs)',  // 6.64px
                  color: 'var(--neutral-500)',
                  lineHeight: '1.5'
                }}
              >
                {milestone.description}
              </div>
            </div>

            {milestone.skills && milestone.skills.length > 0 && (
              <div>
                <div
                  className="mb-1"
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 'var(--text-3xs)',  // 6.38px
                    color: 'var(--neutral-500)',
                    fontWeight: '500'
                  }}
                >
                  Skills:
                </div>
                <div className="flex flex-wrap gap-1">
                  {milestone.skills.slice(0, 5).map(skill => (
                    <Badge key={skill} variant="default" size="md">
                      {skill}
                    </Badge>
                  ))}
                  {milestone.skills.length > 5 && (
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-3xs)', color: 'var(--neutral-400)' }}>
                      +{milestone.skills.length - 5} more
                    </span>
                  )}
                </div>
              </div>
            )}

            <div
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--text-3xs)',  // 6.38px
                color: 'var(--neutral-400)',
                fontStyle: 'italic'
              }}
            >
              Click to view full details
            </div>
          </div>
        </div>
      )}
    </button>
  )
}

export default MilestoneNode
