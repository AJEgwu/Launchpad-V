import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'
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
    <div className="min-h-screen bg-gradient-to-br from-background-primary via-white to-background-secondary">
      {/* Header */}
      <header className="px-6 py-6 backdrop-blur-sm bg-white/80 border-b border-background-primary/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-card">
              <FiZap className="text-white text-xl" />
            </div>
            <h1 className="text-2xl font-bold text-primary">
              LaunchPad
            </h1>
          </div>
          <Button variant="outline" onClick={() => navigate('/onboarding')}>
            Get Started <FiArrowRight className="ml-2" />
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Text */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-background-primary text-primary px-4 py-2 rounded-xl text-sm font-semibold border border-primary/20">
                <FiStar className="text-primary" />
                AI-Powered Career Platform
              </div>

              <h2 className="text-6xl lg:text-7xl font-extrabold text-neutral-darkest leading-[1.1] tracking-tight">
                Launch Your
                <br />
                <span className="text-primary"> Tech Career</span>
                <br />
                With Confidence
              </h2>

              <p className="text-xl text-neutral-steel leading-relaxed max-w-xl">
                Transform "I want a tech career" into a clear, personalized roadmap.
                Get AI-powered guidance, skill recommendations, and direct pathways
                to internships at top companies.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  onClick={() => navigate('/onboarding')}
                  className="group shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30 transition-all"
                >
                  Start Your Journey <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
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

              <div className="flex items-center gap-8 pt-6">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <div className="text-3xl font-bold text-status-success">100%</div>
                  </div>
                  <div className="text-sm text-neutral-steel">Free Forever</div>
                </div>
                <div className="w-px h-12 bg-background-primary"></div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <FiTrendingUp className="text-primary text-2xl" />
                    <div className="text-3xl font-bold text-neutral-darkest">AI</div>
                  </div>
                  <div className="text-sm text-neutral-steel">Powered</div>
                </div>
                <div className="w-px h-12 bg-background-primary"></div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <FiUsers className="text-secondary text-2xl" />
                    <div className="text-3xl font-bold text-neutral-darkest">6+</div>
                  </div>
                  <div className="text-sm text-neutral-steel">Partners</div>
                </div>
              </div>
            </div>

            {/* Right Column - Interactive Preview */}
            <div className="relative">
              <div className="relative z-10 bg-white rounded-2xl p-8 shadow-card-hover border border-background-primary/30">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 bg-background-primary rounded-xl border border-primary/10">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg shadow-card">
                      A
                    </div>
                    <div className="flex-1">
                      <div className="h-3 bg-background-secondary rounded-full w-3/4 mb-2"></div>
                      <div className="h-2 bg-background-lighter rounded-full w-1/2"></div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-background-primary rounded-xl border border-status-success/20">
                      <div className="w-8 h-8 rounded-full bg-status-success flex items-center justify-center text-white text-sm font-bold shadow-sm">
                        ✓
                      </div>
                      <div className="h-3 bg-status-success/20 rounded-full flex-1"></div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-background-primary rounded-xl border border-primary/20">
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-sm font-bold shadow-sm animate-pulse">
                        •
                      </div>
                      <div className="h-3 bg-primary/20 rounded-full flex-1"></div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-background-lighter rounded-xl border border-background-secondary">
                      <div className="w-8 h-8 rounded-full bg-background-secondary flex items-center justify-center text-neutral-steel text-sm">
                        ○
                      </div>
                      <div className="h-3 bg-background-secondary rounded-full flex-1"></div>
                    </div>
                  </div>

                  <div className="bg-background-primary rounded-xl p-5 border border-primary/20">
                    <div className="flex items-center gap-3 mb-3">
                      <FiTarget className="text-primary text-xl" />
                      <div className="h-3 bg-primary/30 rounded-full w-40"></div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 bg-background-secondary rounded-full w-full"></div>
                      <div className="h-2 bg-primary rounded-full w-2/3"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section id="features" className="px-6 py-24 bg-white border-y border-background-primary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-background-secondary text-secondary px-4 py-2 rounded-xl text-sm font-semibold mb-6">
              <FiStar className="text-secondary" />
              Platform Features
            </div>
            <h3 className="text-5xl font-bold text-neutral-darkest mb-4">
              Everything You Need to Succeed
            </h3>
            <p className="text-xl text-neutral-steel max-w-2xl mx-auto">
              AI-powered tools designed for students like you
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white p-8 rounded-xl border border-background-primary hover:border-primary/30 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-background-primary rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <feature.icon className="text-primary text-2xl" />
                </div>
                <h4 className="text-xl font-bold text-neutral-darkest mb-3">
                  {feature.title}
                </h4>
                <p className="text-neutral-steel leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="px-6 py-24 bg-gradient-to-br from-background-lighter to-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-background-primary text-primary px-4 py-2 rounded-xl text-sm font-semibold mb-6">
            <FiUsers className="text-primary" />
            Trusted Partners
          </div>
          <h3 className="text-4xl font-bold text-neutral-darkest mb-4">
            Partnering With Leading Companies
          </h3>
          <p className="text-lg text-neutral-steel mb-12 max-w-2xl mx-auto">
            Direct pathways to internships and opportunities at top organizations
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
            {sponsors.map((sponsor, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border border-background-primary hover:border-primary/20 hover:-translate-y-1"
              >
                <div className="h-16 mb-3 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <img
                    src={sponsor.logo}
                    alt={`${sponsor.name} logo`}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div className="text-sm font-semibold text-neutral-steel">
                  {sponsor.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-primary rounded-2xl p-12 md:p-16 text-white shadow-card-hover overflow-hidden">
            {/* Decorative background */}
            <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.5))]"></div>

            <div className="relative z-10 text-center">
              <h3 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Launch Your Career?
              </h3>
              <p className="text-xl mb-10 opacity-95 max-w-2xl mx-auto">
                Join thousands of students building their tech careers with AI-powered guidance
              </p>
              <Button
                size="lg"
                variant="secondary"
                className="shadow-card group"
                onClick={() => navigate('/onboarding')}
              >
                Get Started for Free <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 bg-neutral-darkest text-white border-t border-neutral-dark">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-card">
                <FiZap className="text-white text-xl" />
              </div>
              <span className="font-bold text-xl">LaunchPad</span>
            </div>
            <p className="text-neutral-steel text-sm max-w-md">
              Empowering students to launch meaningful tech careers with AI-powered guidance
            </p>
            <div className="text-neutral-steel text-xs pt-4 border-t border-neutral-dark w-full">
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
