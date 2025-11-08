import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useStore = create(
  persist(
    (set, get) => ({
      // Student Profile
      profile: null,
      setProfile: (profile) => set({ profile }),

      // Roadmap
      roadmap: null,
      setRoadmap: (roadmap) => set({ roadmap }),

      // Update milestone status
      updateMilestoneStatus: (phaseId, milestoneId, status) => {
        const roadmap = get().roadmap
        if (!roadmap) return

        const updatedRoadmap = {
          ...roadmap,
          phases: roadmap.phases.map(phase =>
            phase.id === phaseId
              ? {
                  ...phase,
                  milestones: phase.milestones.map(milestone =>
                    milestone.id === milestoneId
                      ? { ...milestone, status }
                      : milestone
                  )
                }
              : phase
          )
        }
        set({ roadmap: updatedRoadmap })
      },

      // Chat history
      chatHistory: [],
      addChatMessage: (message) => set(state => ({
        chatHistory: [...state.chatHistory, message]
      })),
      clearChatHistory: () => set({ chatHistory: [] }),

      // Interview sessions
      interviewSessions: [],
      addInterviewSession: (session) => set(state => ({
        interviewSessions: [...state.interviewSessions, session]
      })),

      // Portfolio data
      portfolio: {
        completedProjects: [],
        skills: [],
        readinessScores: {},
        customProjects: [],
        githubUrl: '',
        linkedinUrl: '',
        resumeUrl: '',
        portfolioUrl: ''
      },
      updatePortfolio: (portfolio) => set({ portfolio }),

      // Add completed project
      addCompletedProject: (project) => set(state => ({
        portfolio: {
          ...state.portfolio,
          completedProjects: [...state.portfolio.completedProjects, project]
        }
      })),

      // Add custom project
      addCustomProject: (project) => set(state => ({
        portfolio: {
          ...state.portfolio,
          customProjects: [...state.portfolio.customProjects, project]
        }
      })),

      // Remove custom project
      removeCustomProject: (index) => set(state => ({
        portfolio: {
          ...state.portfolio,
          customProjects: state.portfolio.customProjects.filter((_, i) => i !== index)
        }
      })),

      // Update profile links
      updateProfileLinks: (links) => set(state => ({
        portfolio: {
          ...state.portfolio,
          ...links
        }
      })),

      // Settings
      settings: {
        apiKey: import.meta.env.VITE_OPENAI_API_KEY || '',
        demoMode: !import.meta.env.VITE_OPENAI_API_KEY // Auto-disable demo mode if env key exists
      },
      updateSettings: (settings) => set(state => ({
        settings: { ...state.settings, ...settings }
      })),

      // Reset all data
      reset: () => set({
        profile: null,
        roadmap: null,
        chatHistory: [],
        interviewSessions: [],
        portfolio: {
          completedProjects: [],
          skills: [],
          readinessScores: {},
          customProjects: [],
          githubUrl: '',
          linkedinUrl: '',
          resumeUrl: '',
          portfolioUrl: ''
        }
      }),
    }),
    {
      name: 'launchpad-storage',
      version: 1,
    }
  )
)

export { useStore }
