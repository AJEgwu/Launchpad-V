/**
 * Career Match Panel Component
 * Compact panel showing top role matches
 * Can be integrated into Onboarding completion, Roadmap, or Opportunities
 */

import { useEffect, useState } from 'react'
import { useStore } from '../../store/useStore'
import { getTopRoleMatches, calculateAIRoleMatches } from '../../utils/roleMatching'
import { getRoleProfile } from '../../config/roleProfiles'
import { aiService } from '../../services/ai'
import RoleMatchCard from './RoleMatchCard'
import Card from '../Card'
import { FiTarget, FiTrendingUp } from 'react-icons/fi'

const CareerMatchPanel = ({ limit = 3, showTitle = true, compact = false }) => {
  const { profile, resumeData, roleMatches, setRoleMatches, settings } = useStore()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // Calculate role matches if profile exists
    if (profile && roleMatches.length === 0) {
      calculateMatches()
    }
  }, [profile, resumeData])

  const calculateMatches = async () => {
    setLoading(true)

    // Initialize AI service first
    console.log('🔧 Initializing AI service...')
    aiService.initialize(settings.apiKey)
    console.log('✅ AI service initialized, demo mode:', aiService.demoMode)

    try {
      // Combine profile with resume data for matching
      const enrichedProfile = {
        ...profile,
        resumeData
      }

      console.log('🔍 Profile for matching:', {
        name: enrichedProfile.name,
        skills: enrichedProfile.currentSkills?.length || 0,
        interests: enrichedProfile.interests?.length || 0,
        resumeSkills: enrichedProfile.resumeData?.parsed?.normalizedSkills?.length || 0,
        experienceLevel: enrichedProfile.experienceLevel
      })

      // Use AI-powered matching for better scores
      console.log('🤖 Starting AI-powered role matching...')
      const matches = await calculateAIRoleMatches(enrichedProfile)

      console.log('✅ AI matches received:', matches.length, 'matches')
      console.log('🎯 Match scores:', matches.map(m => `${m.roleName}: ${m.score}%`))

      setRoleMatches(matches)
    } catch (error) {
      console.error('❌ AI matching error:', error)
      console.error('Error details:', error.message, error.stack)

      // Fallback to algorithmic matching
      console.warn('⚠️ Falling back to algorithmic matching')
      const enrichedProfile = {
        ...profile,
        resumeData
      }
      const fallbackMatches = getTopRoleMatches(enrichedProfile, limit)
      console.log('📊 Fallback matches:', fallbackMatches.map(m => `${m.roleName}: ${m.score}%`))
      setRoleMatches(fallbackMatches)
    } finally {
      setLoading(false)
    }
  }

  if (!profile) {
    return null
  }

  if (loading) {
    return (
      <Card>
        <div className="flex items-center justify-center p-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          <p className="ml-3 text-neutral-steel">Calculating your role matches...</p>
        </div>
      </Card>
    )
  }

  // Compact view for headers/sidebars
  if (compact) {
    const topMatch = roleMatches[0]
    if (!topMatch) return null

    const roleProfile = getRoleProfile(topMatch.roleId)
    if (!roleProfile) return null

    return (
      <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center text-xl font-bold">
            {topMatch.score}%
          </div>
          <div className="flex-1">
            <p className="text-sm text-neutral-steel mb-1">Top Match</p>
            <p className="font-bold text-neutral-darkest">{roleProfile.name}</p>
          </div>
          <FiTarget className="text-2xl text-primary" />
        </div>
      </Card>
    )
  }

  // Full view - Rebuilt to match SVG specifications
  // 3-column grid, "We Found 3 Matches!", centered layout
  return (
    <div className="space-y-6">
      {showTitle && (
        <div className="text-center">
          {/* Header - "We Found 3 Matches!" from SVG spec */}
          <h2
            className="mb-2"
            style={{
              fontFamily: 'var(--font-primary)',
              fontSize: 'var(--text-6xl)',  // 34.74px - exact SVG spec
              color: 'var(--neutral-800)',
              fontWeight: 'normal'
            }}
          >
            We Found {roleMatches.length} Match{roleMatches.length !== 1 ? 'es' : ''}!
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-md)',  // 10px
              color: 'var(--neutral-500)'
            }}
          >
            Based on your profile, skills, and experience
          </p>
        </div>
      )}

      {roleMatches.length === 0 ? (
        <Card variant="default" padding="lg">
          <div className="text-center p-8">
            <FiTarget size={48} style={{ margin: '0 auto 16px', color: 'var(--neutral-300)' }} />
            <h3
              className="mb-2"
              style={{
                fontFamily: 'var(--font-primary)',
                fontSize: 'var(--text-xl)',  // 16px
                color: 'var(--neutral-800)'
              }}
            >
              No matches calculated yet
            </h3>
            <p
              className="mb-4"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--text-md)',  // 10px
                color: 'var(--neutral-500)'
              }}
            >
              Complete your profile to see personalized role recommendations
            </p>
            <button
              onClick={calculateMatches}
              className="rounded-lg transition-colors"
              style={{
                padding: '8px 16px',
                backgroundColor: 'var(--primary-500)',
                color: 'white',
                fontFamily: 'var(--font-primary)',
                fontSize: 'var(--text-2xs)',  // 6.64px
                border: 'none',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
            >
              Calculate Matches
            </button>
          </div>
        </Card>
      ) : (
        /* 3-column grid from SVG spec - equal width, 20px gap */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {roleMatches.slice(0, limit).map((match, index) => (
            <RoleMatchCard
              key={match.roleId}
              match={match}
              rank={index + 1}
            />
          ))}
        </div>
      )}

      {roleMatches.length > limit && (
        <p
          className="text-center"
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--text-xs)',  // 7.96px
            color: 'var(--neutral-500)'
          }}
        >
          Showing top {limit} of {roleMatches.length} matches
        </p>
      )}
    </div>
  )
}

export default CareerMatchPanel
