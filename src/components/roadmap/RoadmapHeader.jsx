import { useState } from 'react'
import { useStore } from '../../store/useStore'
import { USER_TYPE_INFO } from '../../config/userTypes'
import Badge from '../Badge'
import Button from '../Button'
import { FiRefreshCw, FiEdit3, FiGrid, FiList } from 'react-icons/fi'

/**
 * RoadmapHeader - Header component for the roadmap view
 * Rebuilt to match SVG design specifications
 * Title: "Here's your Roadmap" (34.74px, Comfortaa)
 * Compact spacing and small fonts throughout
 */
const RoadmapHeader = ({
  overallProgress = 0,
  selectedRole = null,
  viewMode = 'detailed',
  onViewModeChange,
  onRegenerate,
  onRefine
}) => {
  const { profile, roadmap } = useStore()
  const [isRegenerating, setIsRegenerating] = useState(false)

  const userTypeInfo = profile?.userType ? USER_TYPE_INFO[profile.userType] : null
  const displayRole = selectedRole || roadmap?.tracks?.[0] || 'Career Track'

  const handleRegenerate = async () => {
    setIsRegenerating(true)
    try {
      await onRegenerate?.()
    } finally {
      setIsRegenerating(false)
    }
  }

  return (
    <div
      className="bg-white border-b sticky top-0 z-10"
      style={{
        borderColor: 'var(--neutral-200)',
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
      }}
    >
      <div className="max-w-7xl mx-auto px-8 py-5">
        {/* Top Row: Title and Controls */}
        <div className="flex items-start justify-between gap-6 mb-3">
          {/* Left: Title */}
          <div className="flex-1 min-w-0">
            <h1
              className="leading-tight"
              style={{
                fontFamily: 'var(--font-primary)',
                fontSize: 'var(--text-6xl)',  // 34.74px - exact SVG spec
                color: 'var(--neutral-800)',
                fontWeight: 'normal'
              }}
            >
              Here's your Roadmap
            </h1>
          </div>

          {/* Right: Controls - Compact */}
          <div className="flex items-center gap-2 flex-shrink-0">
            {/* View Mode Toggle */}
            <div
              className="flex items-center gap-0.5 p-0.5 rounded-lg"
              style={{ backgroundColor: 'var(--primary-50)' }}
            >
              <button
                onClick={() => onViewModeChange?.('detailed')}
                className={`px-2 py-1.5 rounded-md transition-all ${
                  viewMode === 'detailed'
                    ? 'bg-white shadow-sm'
                    : ''
                }`}
                style={{
                  color: viewMode === 'detailed' ? 'var(--neutral-800)' : 'var(--neutral-500)'
                }}
                title="Detailed view"
              >
                <FiList size={14} />
              </button>
              <button
                onClick={() => onViewModeChange?.('compact')}
                className={`px-2 py-1.5 rounded-md transition-all ${
                  viewMode === 'compact'
                    ? 'bg-white shadow-sm'
                    : ''
                }`}
                style={{
                  color: viewMode === 'compact' ? 'var(--neutral-800)' : 'var(--neutral-500)'
                }}
                title="Compact view"
              >
                <FiGrid size={14} />
              </button>
            </div>

            {/* Refine Button */}
            {onRefine && (
              <Button
                variant="secondary"
                size="md"
                onClick={onRefine}
                className="flex items-center gap-1.5"
              >
                <FiEdit3 size={10} />
                Refine
              </Button>
            )}

            {/* Regenerate Button */}
            {onRegenerate && (
              <Button
                variant="primary"
                size="md"
                onClick={handleRegenerate}
                disabled={isRegenerating}
                className="flex items-center gap-1.5"
              >
                <FiRefreshCw size={10} className={isRegenerating ? 'animate-spin' : ''} />
                {isRegenerating ? 'Regenerating...' : 'Regenerate'}
              </Button>
            )}
          </div>
        </div>

        {/* Bottom Row: Badges and Progress */}
        <div className="flex items-center gap-2 flex-wrap">
          {/* User Type Badge */}
          {userTypeInfo && (
            <Badge variant="default" size="md">
              {userTypeInfo.icon} {userTypeInfo.label}
            </Badge>
          )}

          {/* Role Badges - Small pill badges from SVG spec */}
          {roadmap?.tracks && roadmap.tracks.length > 0 && (
            <>
              {roadmap.tracks.map((track, index) => (
                <Badge
                  key={track}
                  variant={track === selectedRole ? 'primary' : 'default'}
                  size="md"
                >
                  {track}
                </Badge>
              ))}
            </>
          )}

          {/* Progress Indicator - Large percentage from SVG */}
          <div className="ml-auto flex items-center gap-2">
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--text-xs)',  // 7.96px
                color: 'var(--neutral-500)'
              }}
            >
              Overall Progress:
            </span>
            <span
              style={{
                fontFamily: 'var(--font-primary)',
                fontSize: 'var(--text-2xl)',  // 19.30px
                color: 'var(--primary-500)',
                fontWeight: 'bold'
              }}
            >
              {overallProgress}%
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RoadmapHeader
