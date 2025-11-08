/**
 * Landing Page - Rebuilt to match SVG design specifications
 * Navigation: Logo (Comfortaa 12.78px), nav items, compact buttons
 * Hero: Precise typography, compact spacing
 * Features: 3-column grid, 12px radius cards
 */

import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import Card from '../components/Card'
import Badge from '../components/Badge'
import {
  FiZap,
  FiMap,
  FiMessageCircle,
  FiTarget,
  FiMic,
  FiBarChart2,
  FiAward,
  FiArrowRight,
  FiStar,
  FiTrendingUp,
  FiUsers
} from 'react-icons/fi'
import sponsorsData from '../data/sponsors.json'

const Landing = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen" style={{ background: 'var(--gradient-bg)' }}>
      {/* Header - Exact SVG specifications */}
      <header
        className="px-6 py-4 backdrop-blur-sm bg-white/90 border-b sticky top-0 z-50"
        style={{ borderColor: 'var(--neutral-200)' }}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <h1
              className="leading-tight"
              style={{
                fontFamily: 'var(--font-primary)',
                fontSize: 'var(--text-base)',  // 12.78px
                color: 'var(--primary-500)',
                fontWeight: 'normal'
              }}
            >
              LaunchPad
            </h1>

            {/* Navigation Links - from SVG spec */}
            <nav className="hidden md:flex items-center gap-6">
              {['AI Roadmap Insights', 'How It Works', 'Career Chatbot', 'AI Interview Studio', "FAQ's"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="transition-colors"
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 'var(--text-xs)',  // 7.96px
                    color: 'var(--neutral-500)'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary-500)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--neutral-500)'}
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <Button variant="text" size="md" onClick={() => navigate('/onboarding')}>
              Log In
            </Button>
            <Button variant="primary" size="md" onClick={() => navigate('/onboarding')}>
              Create Your Account
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section - Compact, precise typography */}
      <main className="px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text */}
            <div className="space-y-5">
              {/* Badge */}
              <Badge variant="primary" size="md">
                <FiStar size={10} style={{ marginRight: '4px' }} />
                AI-Powered Career Platform
              </Badge>

              {/* Main Heading - Using design token sizes */}
              <h2
                className="leading-tight"
                style={{
                  fontFamily: 'var(--font-primary)',
                  fontSize: 'var(--text-6xl)',  // 34.74px
                  color: 'var(--neutral-800)',
                  fontWeight: 'normal',
                  lineHeight: '1.2'
                }}
              >
                Launch Your
                <br />
                <span style={{ color: 'var(--primary-500)' }}>Tech Career</span>
                <br />
                With Confidence
              </h2>

              {/* Subtitle - Small, precise */}
              <p
                className="max-w-xl"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'var(--text-md)',  // 10px
                  color: 'var(--neutral-500)',
                  lineHeight: '1.6'
                }}
              >
                Transform "I want a tech career" into a clear, personalized roadmap.
                Get AI-powered guidance, skill recommendations, and direct pathways
                to internships at top companies.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => navigate('/onboarding')}
                >
                  Start Your Journey <FiArrowRight size={10} style={{ marginLeft: '4px' }} />
                </Button>
                <Button
                  variant="secondary"
                  size="md"
                  onClick={() => {
                    document.getElementById('features')?.scrollIntoView({
                      behavior: 'smooth'
                    })
                  }}
                >
                  Learn More
                </Button>
              </div>

              {/* Stats - Compact */}
              <div className="flex items-center gap-6 pt-4">
                <div className="space-y-1">
                  <div
                    style={{
                      fontFamily: 'var(--font-primary)',
                      fontSize: 'var(--text-2xl)',  // 19.30px
                      color: 'var(--success-500)',
                      fontWeight: 'bold'
                    }}
                  >
                    100%
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 'var(--text-xs)',  // 7.96px
                      color: 'var(--neutral-500)'
                    }}
                  >
                    Free Forever
                  </div>
                </div>
                <div className="w-px h-10" style={{ backgroundColor: 'var(--neutral-200)' }}></div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <FiTrendingUp size={16} style={{ color: 'var(--primary-500)' }} />
                    <span
                      style={{
                        fontFamily: 'var(--font-primary)',
                        fontSize: 'var(--text-2xl)',  // 19.30px
                        color: 'var(--neutral-800)',
                        fontWeight: 'bold'
                      }}
                    >
                      AI
                    </span>
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 'var(--text-xs)',  // 7.96px
                      color: 'var(--neutral-500)'
                    }}
                  >
                    Powered
                  </div>
                </div>
                <div className="w-px h-10" style={{ backgroundColor: 'var(--neutral-200)' }}></div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <FiUsers size={16} style={{ color: 'var(--primary-500)' }} />
                    <span
                      style={{
                        fontFamily: 'var(--font-primary)',
                        fontSize: 'var(--text-2xl)',  // 19.30px
                        color: 'var(--neutral-800)',
                        fontWeight: 'bold'
                      }}
                    >
                      6+
                    </span>
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 'var(--text-xs)',  // 7.96px
                      color: 'var(--neutral-500)'
                    }}
                  >
                    Partners
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Interactive Preview - Compact Card */}
            <div className="relative">
              <Card variant="default" padding="md">
                <div className="space-y-4">
                  {/* User Profile Mock */}
                  <div
                    className="flex items-center gap-3 p-3 rounded-lg"
                    style={{ backgroundColor: 'var(--primary-50)' }}
                  >
                    <div
                      className="rounded-full flex items-center justify-center text-white leading-none"
                      style={{
                        width: '40px',
                        height: '40px',
                        backgroundColor: 'var(--primary-500)',
                        fontFamily: 'var(--font-primary)',
                        fontSize: 'var(--text-lg)'
                      }}
                    >
                      A
                    </div>
                    <div className="flex-1">
                      <div className="h-2 rounded-full w-3/4 mb-2" style={{ backgroundColor: 'var(--neutral-200)' }}></div>
                      <div className="h-2 rounded-full w-1/2" style={{ backgroundColor: 'var(--neutral-100)' }}></div>
                    </div>
                  </div>

                  {/* Progress Steps */}
                  <div className="space-y-2">
                    <div
                      className="flex items-center gap-2 p-2 rounded-lg border"
                      style={{ backgroundColor: 'var(--success-500)/10', borderColor: 'var(--success-500)/20' }}
                    >
                      <div
                        className="rounded-full flex items-center justify-center text-white leading-none"
                        style={{
                          width: '28px',
                          height: '28px',
                          backgroundColor: 'var(--success-500)',
                          fontSize: 'var(--text-xs)',
                          fontFamily: 'var(--font-primary)'
                        }}
                      >
                        ✓
                      </div>
                      <div className="h-2 rounded-full flex-1" style={{ backgroundColor: 'var(--success-500)/20' }}></div>
                    </div>
                    <div
                      className="flex items-center gap-2 p-2 rounded-lg border"
                      style={{ backgroundColor: 'var(--primary-50)', borderColor: 'var(--primary-500)/20' }}
                    >
                      <div
                        className="rounded-full flex items-center justify-center text-white leading-none animate-pulse"
                        style={{
                          width: '28px',
                          height: '28px',
                          backgroundColor: 'var(--primary-500)',
                          fontSize: 'var(--text-xs)',
                          fontFamily: 'var(--font-primary)'
                        }}
                      >
                        •
                      </div>
                      <div className="h-2 rounded-full flex-1" style={{ backgroundColor: 'var(--primary-500)/20' }}></div>
                    </div>
                    <div
                      className="flex items-center gap-2 p-2 rounded-lg border"
                      style={{ backgroundColor: 'var(--neutral-50)', borderColor: 'var(--neutral-200)' }}
                    >
                      <div
                        className="rounded-full flex items-center justify-center leading-none"
                        style={{
                          width: '28px',
                          height: '28px',
                          backgroundColor: 'var(--neutral-200)',
                          color: 'var(--neutral-500)',
                          fontSize: 'var(--text-xs)',
                          fontFamily: 'var(--font-primary)'
                        }}
                      >
                        ○
                      </div>
                      <div className="h-2 rounded-full flex-1" style={{ backgroundColor: 'var(--neutral-200)' }}></div>
                    </div>
                  </div>

                  {/* Progress Card */}
                  <div
                    className="rounded-lg p-4 border"
                    style={{ backgroundColor: 'var(--primary-50)', borderColor: 'var(--primary-500)/20' }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <FiTarget size={14} style={{ color: 'var(--primary-500)' }} />
                      <div className="h-2 rounded-full w-32" style={{ backgroundColor: 'var(--primary-500)/30' }}></div>
                    </div>
                    <div className="space-y-1.5">
                      <div className="h-1.5 rounded-full w-full" style={{ backgroundColor: 'var(--neutral-200)' }}></div>
                      <div className="h-1.5 rounded-full w-2/3" style={{ backgroundColor: 'var(--primary-500)' }}></div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Decorative elements - subtle */}
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full blur-2xl animate-pulse" style={{ backgroundColor: 'var(--primary-500)/10' }}></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full blur-2xl animate-pulse" style={{ backgroundColor: 'var(--primary-300)/10', animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </main>

      {/* Features Section - Compact with exact Card component */}
      <section
        id="features"
        className="px-6 py-16 bg-white border-y"
        style={{ borderColor: 'var(--neutral-200)' }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            {/* Section Badge */}
            <div className="mb-4">
              <Badge variant="primary" size="md">
                <FiStar size={10} style={{ marginRight: '4px' }} />
                Platform Features
              </Badge>
            </div>

            {/* Section Title */}
            <h3
              style={{
                fontFamily: 'var(--font-primary)',
                fontSize: 'var(--text-5xl)',  // 24px
                color: 'var(--neutral-800)',
                fontWeight: 'normal',
                marginBottom: '12px'
              }}
            >
              Everything You Need to Succeed
            </h3>

            {/* Subtitle */}
            <p
              className="max-w-2xl mx-auto"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--text-md)',  // 10px
                color: 'var(--neutral-500)',
                lineHeight: '1.6'
              }}
            >
              AI-powered tools designed for students like you
            </p>
          </div>

          {/* Features Grid - 3 columns, using Card component */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((feature, index) => (
              <Card
                key={index}
                variant="default"
                padding="md"
                className="group transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                {/* Icon */}
                <div
                  className="flex items-center justify-center mb-4 rounded-lg group-hover:scale-105 transition-transform"
                  style={{
                    width: '48px',
                    height: '48px',
                    backgroundColor: 'var(--primary-50)'
                  }}
                >
                  <feature.icon size={20} style={{ color: 'var(--primary-500)' }} />
                </div>

                {/* Title */}
                <h4
                  className="mb-2"
                  style={{
                    fontFamily: 'var(--font-primary)',
                    fontSize: 'var(--text-xl)',  // 16px
                    color: 'var(--neutral-800)',
                    fontWeight: 'normal'
                  }}
                >
                  {feature.title}
                </h4>

                {/* Description */}
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 'var(--text-xs)',  // 7.96px
                    color: 'var(--neutral-500)',
                    lineHeight: '1.6'
                  }}
                >
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors Section - Compact */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          {/* Section Badge */}
          <div className="mb-4">
            <Badge variant="primary" size="md">
              <FiUsers size={10} style={{ marginRight: '4px' }} />
              Trusted Partners
            </Badge>
          </div>

          {/* Section Title */}
          <h3
            style={{
              fontFamily: 'var(--font-primary)',
              fontSize: 'var(--text-4xl)',  // 23.53px
              color: 'var(--neutral-800)',
              fontWeight: 'normal',
              marginBottom: '8px'
            }}
          >
            Partnering With Leading Companies
          </h3>

          {/* Subtitle */}
          <p
            className="mb-10 max-w-2xl mx-auto"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-md)',  // 10px
              color: 'var(--neutral-500)',
              lineHeight: '1.6'
            }}
          >
            Direct pathways to internships and opportunities at top organizations
          </p>

          {/* Sponsors Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 items-center">
            {sponsors.map((sponsor, index) => (
              <Card
                key={index}
                variant="default"
                padding="sm"
                className="group transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
              >
                <div className="h-12 mb-2 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <img
                    src={sponsor.logo}
                    alt={`${sponsor.name} logo`}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 'var(--text-2xs)',  // 6.64px
                    color: 'var(--neutral-500)',
                    fontWeight: '500'
                  }}
                >
                  {sponsor.name}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Compact */}
      <section className="px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <div
            className="relative rounded-xl p-10 md:p-12 text-white overflow-hidden"
            style={{
              background: 'var(--primary-500)',
              boxShadow: '0 4px 12px rgba(41, 130, 161, 0.2)'
            }}
          >
            {/* Decorative background */}
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '24px 24px'
            }}></div>

            <div className="relative z-10 text-center">
              <h3
                className="mb-4"
                style={{
                  fontFamily: 'var(--font-primary)',
                  fontSize: 'var(--text-5xl)',  // 24px
                  fontWeight: 'normal',
                  color: 'white'
                }}
              >
                Ready to Launch Your Career?
              </h3>
              <p
                className="mb-8 max-w-2xl mx-auto opacity-95"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'var(--text-md)',  // 10px
                  lineHeight: '1.6'
                }}
              >
                Join thousands of students building their tech careers with AI-powered guidance
              </p>
              <Button
                variant="secondary"
                size="md"
                onClick={() => navigate('/onboarding')}
                className="group"
              >
                Get Started for Free <FiArrowRight size={10} style={{ marginLeft: '4px' }} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Compact */}
      <footer
        className="px-6 py-10 text-white border-t"
        style={{
          backgroundColor: 'var(--neutral-800)',
          borderColor: 'var(--neutral-700)'
        }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center space-y-3">
            {/* Logo */}
            <h1
              style={{
                fontFamily: 'var(--font-primary)',
                fontSize: 'var(--text-xl)',  // 16px
                color: 'var(--primary-500)',
                fontWeight: 'normal'
              }}
            >
              LaunchPad
            </h1>

            {/* Tagline */}
            <p
              className="max-w-md"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--text-xs)',  // 7.96px
                color: 'var(--neutral-400)',
                lineHeight: '1.5'
              }}
            >
              Empowering students to launch meaningful tech careers with AI-powered guidance
            </p>

            {/* Copyright */}
            <div
              className="pt-3 border-t w-full"
              style={{
                borderColor: 'var(--neutral-700)',
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--text-3xs)',  // 6.38px
                color: 'var(--neutral-400)'
              }}
            >
              © 2025 LaunchPad. Built for students, by students.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

const features = [
  {
    icon: FiMap,
    title: 'AI Roadmap Builder',
    description: 'Get a personalized, semester-by-semester plan tailored to your goals, skills, and constraints.'
  },
  {
    icon: FiMessageCircle,
    title: 'Career Copilot',
    description: 'Chat with AI for instant career advice, role explanations, and guidance on your next steps.'
  },
  {
    icon: FiTarget,
    title: 'Smart Matching',
    description: 'Discover internships and opportunities with clear fit scores and skill gap analysis.'
  },
  {
    icon: FiMic,
    title: 'Interview Studio',
    description: 'Practice with AI-generated interview questions and get detailed feedback on your answers.'
  },
  {
    icon: FiBarChart2,
    title: 'Skills Tracker',
    description: 'Build verified skills with recommended courses, certifications, and projects.'
  },
  {
    icon: FiAward,
    title: 'Portfolio Builder',
    description: 'Generate a shareable portfolio showcasing your skills, projects, and readiness.'
  }
]

const sponsors = sponsorsData.sponsors

export default Landing
