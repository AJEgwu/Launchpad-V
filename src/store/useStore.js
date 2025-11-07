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
        readinessScores: {}
      },
      updatePortfolio: (portfolio) => set({ portfolio }),

      // Add completed project
      addCompletedProject: (project) => set(state => ({
        portfolio: {
          ...state.portfolio,
          completedProjects: [...state.portfolio.completedProjects, project]
        }
      })),

      // Settings
      settings: {
        apiKey: '',
        demoMode: true
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
          readinessScores: {}
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
