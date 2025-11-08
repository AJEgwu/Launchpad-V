/**
 * Role Match Card Component
 * Displays a single role match with score, skills, and actions
 */

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useStore } from '../../store/useStore'
import { getRoleProfile } from '../../config/roleProfiles'
import { requestRoleExplainerVideo, initializeVideoService } from '../../services/videoGeneration'
import Button from '../Button'
import Card from '../Card'
import Badge from '../Badge'
import VideoPlayer from './VideoPlayer'
import { FiMessageCircle, FiVideo, FiChevronDown, FiChevronUp } from 'react-icons/fi'

const RoleMatchCard = ({ match, rank }) => {
  const navigate = useNavigate()
  const { profile, addVideoRequest, videoGenerationRequests, chatHistory, addChatMessage, settings } = useStore()
  const [expanded, setExpanded] = useState(false)
  const [generatingVideo, setGeneratingVideo] = useState(false)
  const [showVideo, setShowVideo] = useState(false)

  const roleProfile = getRoleProfile(match.roleId)

  if (!roleProfile) return null

  // Match level styling
  const matchLevelColors = {
    'excellent': 'from-green-500 to-emerald-500',
    'good': 'from-blue-500 to-cyan-500',
    'fair': 'from-yellow-500 to-orange-500',
    'needs-development': 'from-gray-500 to-slate-500'
  }

  const matchLevelBg = {
    'excellent': 'bg-green-50 border-green-200',
    'good': 'bg-blue-50 border-blue-200',
    'fair': 'bg-yellow-50 border-yellow-200',
    'needs-development': 'bg-background-primary border-background-primary'
  }

  const handleAskCopilot = () => {
    // Pre-fill Career Copilot with role-specific question
    const message = {
      role: 'user',
      content: `Tell me more about the ${roleProfile.name} role. Based on my profile, what should I focus on to prepare for this career path?`
    }

    addChatMessage(message)
    navigate('/dashboard/copilot')
  }

  const handleGenerateVideo = async () => {
    setGeneratingVideo(true)

    try {
      // Initialize video service with API key
      initializeVideoService(settings.apiKey)

      const videoResult = await requestRoleExplainerVideo(match.roleId, profile)
      addVideoRequest(match.roleId, videoResult)

      console.log('✅ Video generated:', videoResult)
      setShowVideo(true) // Show the video player
    } catch (error) {
      console.error('Video generation error:', error)
      alert('Failed to generate video. Please try again.')
    } finally {
      setGeneratingVideo(false)
    }
  }

  // Get video data for this role
  const videoData = videoGenerationRequests[match.roleId]
  const hasVideo = !!videoData

  return (
    <Card variant="default" padding="md" className="hover:shadow-lg transition-shadow">
      <div className="space-y-4">
        {/* Role Title - Comfortaa 16px from SVG */}
        <div className="text-center">
          <h3
            className="mb-2"
            style={{
              fontFamily: 'var(--font-primary)',
              fontSize: 'var(--text-xl)',  // 16px - exact SVG spec
              color: 'var(--neutral-800)',
              fontWeight: 'normal'
            }}
          >
            {roleProfile.name}
          </h3>
        </div>

        {/* Large Match Percentage - 21.97px number + 13.78px % symbol from SVG */}
        <div className="text-center">
          <div className="flex items-baseline justify-center">
            <span
              style={{
                fontFamily: 'var(--font-primary)',
                fontSize: 'var(--text-3xl)',  // 21.12px (closest to 21.97px)
                color: 'var(--primary-500)',
                fontWeight: 'bold',
                lineHeight: '1'
              }}
            >
              {match.score}
            </span>
            <span
              style={{
                fontFamily: 'var(--font-primary)',
                fontSize: 'var(--text-base)',  // 12.78px (closest to 13.78px)
                color: 'var(--primary-500)',
                fontWeight: 'bold',
                lineHeight: '1',
                marginLeft: '2px'
              }}
            >
              %
            </span>
          </div>
          <p
            className="mt-1"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-3xs)',  // 6.38px
              color: 'var(--neutral-500)'
            }}
          >
            Match
          </p>
        </div>

        {/* Skills - Small badge pills (6.64px font) from SVG */}
        <div>
          <p
            className="mb-2 text-center"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-3xs)',  // 6.38px
              color: 'var(--neutral-500)',
              fontWeight: '500'
            }}
          >
            Key Skills
          </p>
          <div className="flex flex-wrap gap-1 justify-center">
            {/* Show top matched skills */}
            {match.matchedSkills.slice(0, 4).map(skill => (
              <Badge key={skill} variant="success" size="md">
                {skill}
              </Badge>
            ))}
            {/* Show a few gap skills */}
            {match.gapSkills.slice(0, 2).map(skill => (
              <Badge key={skill} variant="warning" size="md">
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        {/* Get My Roadmap Button - Small from SVG */}
        <div className="text-center">
          <Button
            onClick={() => navigate('/dashboard/roadmap')}
            variant="primary"
            size="md"
            className="w-full"
          >
            Get My Roadmap
          </Button>
        </div>

        {/* Optional: Expand for details */}
        <div className="text-center border-t pt-3" style={{ borderColor: 'var(--neutral-200)' }}>
          <button
            onClick={() => setExpanded(!expanded)}
            className="transition-colors"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-3xs)',  // 6.38px
              color: 'var(--primary-500)',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '4px 8px'
            }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'}
            onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
          >
            {expanded ? 'Show Less ▲' : 'View Details ▼'}
          </button>
        </div>

        {/* Expanded Details - Compact */}
        {expanded && (
          <div className="space-y-3 pt-3 border-t" style={{ borderColor: 'var(--neutral-200)' }}>
            {/* Description */}
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--text-2xs)',  // 6.64px
                color: 'var(--neutral-500)',
                lineHeight: '1.5'
              }}
            >
              {roleProfile.summary}
            </p>

            {/* Matched Skills */}
            {match.matchedSkills.length > 0 && (
              <div>
                <div
                  className="mb-1"
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 'var(--text-3xs)',  // 6.38px
                    color: 'var(--neutral-800)',
                    fontWeight: '500'
                  }}
                >
                  ✅ Your Matching Skills
                </div>
                <div className="flex flex-wrap gap-1">
                  {match.matchedSkills.map(skill => (
                    <Badge key={skill} variant="success" size="md">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Gap Skills */}
            {match.gapSkills.length > 0 && (
              <div>
                <div
                  className="mb-1"
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 'var(--text-3xs)',  // 6.38px
                    color: 'var(--neutral-800)',
                    fontWeight: '500'
                  }}
                >
                  📚 Skills to Develop
                </div>
                <div className="flex flex-wrap gap-1">
                  {match.gapSkills.map(skill => (
                    <Badge key={skill} variant="warning" size="md">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="flex gap-2">
              <Button onClick={handleAskCopilot} variant="secondary" size="md" className="flex-1">
                <FiMessageCircle size={10} style={{ marginRight: '4px' }} />
                Ask Copilot
              </Button>
              <Button
                onClick={() => {
                  if (hasVideo) {
                    setShowVideo(!showVideo)
                  } else {
                    handleGenerateVideo()
                  }
                }}
                variant="secondary"
                size="md"
                disabled={generatingVideo}
                className="flex-1"
              >
                <FiVideo size={10} style={{ marginRight: '4px' }} />
                {generatingVideo ? '...' : hasVideo ? (showVideo ? 'Hide' : 'Show') : 'Video'}
              </Button>
            </div>

            {/* Video Player */}
            {showVideo && hasVideo && (
              <div className="pt-2">
                <VideoPlayer
                  videoData={videoData}
                  roleName={roleProfile.name}
                  onClose={() => setShowVideo(false)}
                />
              </div>
            )}
          </div>
        )}
      </div>
    </Card>
  )
}

export default RoleMatchCard
