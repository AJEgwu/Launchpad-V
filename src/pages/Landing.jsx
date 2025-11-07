import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'

const Landing = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent-cream to-background">
      {/* Header */}
      <header className="px-6 py-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="text-4xl">🚀</div>
            <h1 className="text-2xl font-bold text-gray-900">LaunchPad</h1>
          </div>
          <Button variant="outline" onClick={() => navigate('/onboarding')}>
            Get Started
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text */}
            <div className="space-y-8">
              <div className="inline-block">
                <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                  AI-Powered Career Platform
                </span>
              </div>

              <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Launch Your
                <span className="text-primary"> Tech Career</span>
                <br />
                With Confidence
              </h2>

              <p className="text-xl text-gray-700 leading-relaxed">
                Transform "I want a tech career" into a clear, personalized roadmap.
                Get AI-powered guidance, skill recommendations, and direct pathways
                to internships at top companies.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  onClick={() => navigate('/onboarding')}
                >
                  Start Your Journey
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => {
                    document.getElementById('features')?.scrollIntoView({
                      behavior: 'smooth'
                    })
                  }}
                >
                  Learn More
                </Button>
              </div>

              <div className="flex items-center gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-gray-900">100%</div>
                  <div className="text-sm text-gray-600">Free Forever</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">AI</div>
                  <div className="text-sm text-gray-600">Powered</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">6+</div>
                  <div className="text-sm text-gray-600">Partner Companies</div>
                </div>
              </div>
            </div>

            {/* Right Column - Illustration */}
            <div className="relative">
              <div className="relative z-10 bg-white rounded-3xl p-8 shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-2xl">
                      👤
                    </div>
                    <div className="flex-1">
                      <div className="h-4 bg-gray-200 rounded-full w-3/4"></div>
                      <div className="h-3 bg-gray-100 rounded-full w-1/2 mt-2"></div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white text-xs">
                        ✓
                      </div>
                      <div className="h-3 bg-green-100 rounded-full flex-1"></div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white text-xs">
                        •
                      </div>
                      <div className="h-3 bg-primary/20 rounded-full flex-1"></div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-gray-400 text-xs">
                        ○
                      </div>
                      <div className="h-3 bg-gray-100 rounded-full flex-1"></div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xl">🎯</span>
                      <div className="h-3 bg-primary/30 rounded-full w-32"></div>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full w-full"></div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent-orange/30 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary/20 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section id="features" className="px-6 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Succeed
            </h3>
            <p className="text-xl text-gray-600">
              AI-powered tools designed for students like you
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl border-2 border-gray-100 hover:border-primary/30 transition-all duration-200 hover:shadow-lg"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="px-6 py-20 bg-gradient-to-br from-background to-accent-cream">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Partnering With Leading Companies
          </h3>
          <p className="text-lg text-gray-600 mb-12">
            Direct pathways to internships and opportunities
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {sponsors.map((sponsor, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-2">{sponsor.icon}</div>
                <div className="text-sm font-semibold text-gray-700">
                  {sponsor.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-12 text-white shadow-2xl">
            <h3 className="text-4xl font-bold mb-4">
              Ready to Launch Your Career?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of students building their tech careers with AI-powered guidance
            </p>
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-primary hover:bg-gray-50"
              onClick={() => navigate('/onboarding')}
            >
              Get Started for Free
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-2xl">🚀</span>
            <span className="font-bold text-lg">LaunchPad</span>
          </div>
          <p className="text-gray-400 text-sm">
            Empowering students to launch meaningful tech careers
          </p>
        </div>
      </footer>
    </div>
  )
}

const features = [
  {
    icon: '🗺️',
    title: 'AI Roadmap Builder',
    description: 'Get a personalized, semester-by-semester plan tailored to your goals, skills, and constraints.'
  },
  {
    icon: '💬',
    title: 'Career Copilot',
    description: 'Chat with AI for instant career advice, role explanations, and guidance on your next steps.'
  },
  {
    icon: '🎯',
    title: 'Smart Matching',
    description: 'Discover internships and opportunities with clear fit scores and skill gap analysis.'
  },
  {
    icon: '🎤',
    title: 'Interview Studio',
    description: 'Practice with AI-generated interview questions and get detailed feedback on your answers.'
  },
  {
    icon: '📊',
    title: 'Skills Tracker',
    description: 'Build verified skills with recommended courses, certifications, and projects.'
  },
  {
    icon: '🏆',
    title: 'Portfolio Builder',
    description: 'Generate a shareable portfolio showcasing your skills, projects, and readiness.'
  }
]

const sponsors = [
  { icon: '🍔', name: "McDonald's" },
  { icon: '🥤', name: 'PepsiCo' },
  { icon: '✈️', name: 'American Airlines' },
  { icon: '💰', name: 'Fidelity' },
  { icon: '🚗', name: 'Toyota' },
  { icon: '📡', name: 'Verizon' }
]

export default Landing
