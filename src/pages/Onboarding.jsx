import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useStore } from '../store/useStore'
import { aiService } from '../services/ai'
import {
  FiZap,
  FiUser,
  FiBookOpen,
  FiHeart,
  FiCode,
  FiClock,
  FiMapPin,
  FiBriefcase,
  FiLoader,
  FiArrowRight
} from 'react-icons/fi'
import Button from '../components/Button'
import Input from '../components/Input'
import Select from '../components/Select'
import ProgressBar from '../components/ProgressBar'
import skillsData from '../data/skills.json'

const Onboarding = () => {
  const navigate = useNavigate()
  const { setProfile, setRoadmap, settings } = useStore()
  const [currentStep, setCurrentStep] = useState(1)
  const [isGenerating, setIsGenerating] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    major: '',
    interests: [],
    currentSkills: [],
    experienceLevel: '',
    graduationTimeline: '',
    location: '',
    constraints: {
      timeAvailability: '',
      budget: ''
    },
    targetRoles: []
  })

  const totalSteps = 7

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleConstraintChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      constraints: { ...prev.constraints, [field]: value }
    }))
  }

  const handleMultiSelect = (field, value) => {
    setFormData(prev => {
      const current = prev[field]
      if (current.includes(value)) {
        return { ...prev, [field]: current.filter(v => v !== value) }
      } else {
        return { ...prev, [field]: [...current, value] }
      }
    })
  }

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async () => {
    setIsGenerating(true)

    // Initialize AI service
    aiService.initialize(settings.apiKey)

    // Create profile
    const profile = {
      id: `student-${Date.now()}`,
      ...formData,
      createdAt: new Date().toISOString()
    }

    // Generate roadmap
    try {
      const roadmap = await aiService.generateRoadmap(profile)
      setProfile(profile)
      setRoadmap(roadmap)
      navigate('/dashboard')
    } catch (error) {
      console.error('Error generating roadmap:', error)
      alert('Failed to generate roadmap. Please try again.')
      setIsGenerating(false)
    }
  }

  const isStepValid = () => {
    switch (currentStep) {
      case 1: return formData.name.trim() !== ''
      case 2: return formData.major.trim() !== ''
      case 3: return formData.interests.length > 0
      case 4: return true // Skills are optional
      case 5: return formData.experienceLevel !== ''
      case 6: return formData.graduationTimeline !== '' && formData.location !== ''
      case 7: return formData.targetRoles.length > 0 || true // Can be "not sure"
      default: return false
    }
  }

  const roleOptions = Object.keys(skillsData).map(key => ({
    value: key,
    label: skillsData[key].role
  }))

  const stepIcons = [FiUser, FiBookOpen, FiHeart, FiCode, FiClock, FiMapPin, FiBriefcase]
  const StepIcon = stepIcons[currentStep - 1]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-white to-accent-cream/30">
      {/* Header */}
      <header className="px-6 py-6 backdrop-blur-sm bg-white/70 border-b border-gray-200/50">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-lg">
              <FiZap className="text-white text-xl" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              LaunchPad
            </h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-6 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Progress */}
          <ProgressBar current={currentStep} total={totalSteps} className="mb-12" />

          {/* Form Card */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
            {/* Step Icon */}
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center">
                <StepIcon className="text-primary text-3xl" />
              </div>
            </div>

            {/* Step 1: Name */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div className="text-center">
                  <h2 className="text-4xl font-bold text-gray-900 mb-3">
                    Welcome! Let's get started.
                  </h2>
                  <p className="text-gray-600 text-lg">
                    First, what should we call you?
                  </p>
                </div>
                <Input
                  label="Your Name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder="e.g., Alex Johnson"
                  required
                  autoFocus
                />
              </div>
            )}

            {/* Step 2: Major */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div className="text-center">
                  <h2 className="text-4xl font-bold text-gray-900 mb-3">
                    What are you studying?
                  </h2>
                  <p className="text-gray-600 text-lg">
                    Tell us your major or area of study.
                  </p>
                </div>
                <Input
                  label="Major / Area of Study"
                  value={formData.major}
                  onChange={(e) => handleInputChange('major', e.target.value)}
                  placeholder="e.g., Computer Science, Business, Engineering"
                  required
                />
              </div>
            )}

            {/* Step 3: Interests */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div className="text-center">
                  <h2 className="text-4xl font-bold text-gray-900 mb-3">
                    What interests you?
                  </h2>
                  <p className="text-gray-600 text-lg">
                    Select all that apply. We'll use this to personalize your roadmap.
                  </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {interestOptions.map(interest => (
                    <button
                      key={interest}
                      onClick={() => handleMultiSelect('interests', interest)}
                      className={`
                        p-4 rounded-xl border-2 transition-all duration-200 text-left
                        ${formData.interests.includes(interest)
                          ? 'border-primary bg-primary/5 shadow-sm'
                          : 'border-gray-200 hover:border-primary/50'
                        }
                      `}
                    >
                      <span className="font-medium">{interest}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 4: Current Skills */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <div className="text-center">
                  <h2 className="text-4xl font-bold text-gray-900 mb-3">
                    Any skills already?
                  </h2>
                  <p className="text-gray-600 text-lg">
                    Select what you're already comfortable with. It's okay if none apply!
                  </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {skillOptions.map(skill => (
                    <button
                      key={skill}
                      onClick={() => handleMultiSelect('currentSkills', skill)}
                      className={`
                        p-4 rounded-xl border-2 transition-all duration-200 text-left
                        ${formData.currentSkills.includes(skill)
                          ? 'border-secondary bg-secondary/5 shadow-sm'
                          : 'border-gray-200 hover:border-secondary/50'
                        }
                      `}
                    >
                      <span className="font-medium text-sm">{skill}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 5: Experience Level */}
            {currentStep === 5 && (
              <div className="space-y-6">
                <div className="text-center">
                  <h2 className="text-4xl font-bold text-gray-900 mb-3">
                    What's your experience level?
                  </h2>
                  <p className="text-gray-600 text-lg">
                    This helps us calibrate your roadmap.
                  </p>
                </div>
                <div className="space-y-3">
                  {experienceLevels.map(level => (
                    <button
                      key={level.value}
                      onClick={() => handleInputChange('experienceLevel', level.value)}
                      className={`
                        w-full p-6 rounded-xl border-2 transition-all duration-200 text-left
                        ${formData.experienceLevel === level.value
                          ? 'border-primary bg-primary/5 shadow-sm'
                          : 'border-gray-200 hover:border-primary/50'
                        }
                      `}
                    >
                      <div className="font-bold text-lg mb-1">{level.label}</div>
                      <div className="text-sm text-gray-600">{level.description}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 6: Timeline & Location */}
            {currentStep === 6 && (
              <div className="space-y-6">
                <div className="text-center">
                  <h2 className="text-4xl font-bold text-gray-900 mb-3">
                    Timeline and location
                  </h2>
                  <p className="text-gray-600 text-lg">
                    Help us understand your context.
                  </p>
                </div>
                <Select
                  label="When do you graduate?"
                  value={formData.graduationTimeline}
                  onChange={(e) => handleInputChange('graduationTimeline', e.target.value)}
                  options={timelineOptions}
                  required
                />
                <Input
                  label="Where are you located?"
                  value={formData.location}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                  placeholder="e.g., Atlanta, GA or Remote"
                  required
                />
                <div className="space-y-4 pt-4">
                  <p className="font-medium text-gray-700">Any constraints we should know about?</p>
                  <Select
                    label="Time Availability"
                    value={formData.constraints.timeAvailability}
                    onChange={(e) => handleConstraintChange('timeAvailability', e.target.value)}
                    options={timeAvailabilityOptions}
                    placeholder="Select your availability"
                  />
                  <Select
                    label="Budget Considerations"
                    value={formData.constraints.budget}
                    onChange={(e) => handleConstraintChange('budget', e.target.value)}
                    options={budgetOptions}
                    placeholder="Select your budget preference"
                  />
                </div>
              </div>
            )}

            {/* Step 7: Target Roles */}
            {currentStep === 7 && (
              <div className="space-y-6">
                <div className="text-center">
                  <h2 className="text-4xl font-bold text-gray-900 mb-3">
                    What roles interest you?
                  </h2>
                  <p className="text-gray-600 text-lg">
                    Select one or more. Not sure? We'll recommend options for you!
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {roleOptions.map(role => (
                    <button
                      key={role.value}
                      onClick={() => handleMultiSelect('targetRoles', role.value)}
                      className={`
                        p-6 rounded-xl border-2 transition-all duration-200 text-left
                        ${formData.targetRoles.includes(role.value)
                          ? 'border-primary bg-primary/5 shadow-sm'
                          : 'border-gray-200 hover:border-primary/50'
                        }
                      `}
                    >
                      <div className="font-bold text-lg">{role.label}</div>
                      <div className="text-sm text-gray-600 mt-1">
                        {skillsData[role.value].description}
                      </div>
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => handleInputChange('targetRoles', ['SWE'])}
                  className="w-full p-4 rounded-xl border-2 border-dashed border-gray-300 hover:border-primary/50 transition-colors text-gray-600"
                >
                  I'm not sure yet - recommend for me!
                </button>
              </div>
            )}

            {/* Navigation */}
            <div className="flex items-center justify-between mt-12 pt-8 border-t border-gray-200">
              <Button
                variant="ghost"
                onClick={handleBack}
                disabled={currentStep === 1}
              >
                ← Back
              </Button>

              {currentStep < totalSteps ? (
                <Button
                  onClick={handleNext}
                  disabled={!isStepValid()}
                >
                  Next →
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  disabled={!isStepValid() || isGenerating}
                  className="group"
                >
                  {isGenerating ? (
                    <>
                      <FiLoader className="mr-2 animate-spin" />
                      Generating Your Roadmap...
                    </>
                  ) : (
                    <>
                      Generate Roadmap
                      <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

const interestOptions = [
  'AI / Machine Learning',
  'Web Development',
  'Mobile Apps',
  'Data & Analytics',
  'Cybersecurity',
  'Cloud / DevOps',
  'Product Management',
  'UX / Design',
  'Fintech',
  'Gaming',
  'Robotics',
  'Social Impact'
]

const skillOptions = [
  'Python',
  'JavaScript',
  'Java',
  'C++',
  'HTML/CSS',
  'React',
  'SQL',
  'Git',
  'Data Structures',
  'Algorithms',
  'Linux',
  'Excel'
]

const experienceLevels = [
  {
    value: 'beginner',
    label: 'Beginner',
    description: 'Just starting out, little to no prior experience'
  },
  {
    value: 'intermediate',
    label: 'Intermediate',
    description: 'Some coursework or projects, building confidence'
  },
  {
    value: 'advanced',
    label: 'Advanced',
    description: 'Strong foundation, ready for challenging opportunities'
  }
]

const timelineOptions = [
  { value: 'less-than-1-year', label: 'Less than 1 year' },
  { value: '1-year', label: '1 year' },
  { value: '2-years', label: '2 years' },
  { value: '3-years', label: '3 years' },
  { value: '4-plus-years', label: '4+ years' },
  { value: 'graduated', label: 'Already graduated' }
]

const timeAvailabilityOptions = [
  { value: 'full-time', label: 'Full-time (30+ hours/week)' },
  { value: 'part-time', label: 'Part-time (15-30 hours/week)' },
  { value: 'limited', label: 'Limited (5-15 hours/week)' },
  { value: 'minimal', label: 'Minimal (Less than 5 hours/week)' },
  { value: 'flexible', label: 'Flexible - varies by week' }
]

const budgetOptions = [
  { value: 'free-only', label: 'Free resources only' },
  { value: 'minimal', label: 'Minimal budget (up to $50)' },
  { value: 'moderate', label: 'Moderate budget ($50-$200)' },
  { value: 'flexible', label: 'Flexible budget' },
  { value: 'employer-sponsored', label: 'Employer or school sponsored' }
]

export default Onboarding
