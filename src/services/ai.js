import OpenAI from 'openai'

class AIService {
  constructor() {
    this.client = null
    this.demoMode = true
  }

  initialize(apiKey) {
    if (apiKey && apiKey.trim()) {
      this.client = new OpenAI({
        apiKey: apiKey,
        dangerouslyAllowBrowser: true
      })
      this.demoMode = false
      console.log('✅ AI Service: Real API mode enabled with key:', apiKey.substring(0, 10) + '...')
    } else {
      this.demoMode = true
      console.log('⚠️ AI Service: Demo mode enabled (no API key)')
    }
  }

  async generateRoadmap(profile) {
    if (this.demoMode) {
      return this.generateMockRoadmap(profile)
    }

    const systemPrompt = `You are LaunchPad AI, a career advisor for students. Generate a detailed, personalized career roadmap based on the student's profile. Return ONLY valid JSON with no additional text.

The JSON should have this structure:
{
  "tracks": ["array of target roles"],
  "phases": [{
    "id": "phase-1",
    "name": "Phase name",
    "timeline": "e.g., Semester 1 or Fall 2024",
    "milestones": [{
      "id": "milestone-1",
      "name": "Milestone name",
      "description": "What to do",
      "skills": ["skills to learn"],
      "projects": ["project ideas"],
      "resources": ["learning resources"],
      "status": "not_started",
      "sponsorTags": ["relevant sponsors"]
    }]
  }]
}`

    const userPrompt = `Generate a career roadmap for:
Major: ${profile.major}
Interests: ${profile.interests.join(', ')}
Current Skills: ${profile.currentSkills.join(', ') || 'None listed'}
Experience: ${profile.experienceLevel}
Timeline: ${profile.graduationTimeline}
Target Roles: ${profile.targetRoles.join(', ')}
Constraints: ${JSON.stringify(profile.constraints)}

Create 3-4 phases with 2-4 milestones each. Be specific and actionable.`

    try {
      console.log('🤖 Calling OpenAI API for roadmap generation...')
      const response = await this.client.chat.completions.create({
        model: 'gpt-4',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userPrompt }
        ],
        temperature: 0.7,
      })

      const content = response.choices[0].message.content
      console.log('✅ OpenAI API call successful! Tokens used:', response.usage)
      return JSON.parse(content)
    } catch (error) {
      console.error('❌ OpenAI API Error:', error)
      console.log('⚠️ Falling back to demo mode')
      return this.generateMockRoadmap(profile)
    }
  }

  async chatResponse(messages, context) {
    if (this.demoMode) {
      return this.generateMockChatResponse(messages[messages.length - 1].content)
    }

    const systemPrompt = `You are LaunchPad AI, a friendly career advisor. You help students with:
- Career advice and role explanations
- Skill recommendations and learning paths
- Interview preparation
- Roadmap adjustments

Context about the student:
${JSON.stringify(context, null, 2)}

Be conversational, encouraging, and specific. Reference their roadmap when relevant.`

    try {
      console.log('🤖 Calling OpenAI API for chat response...')
      const response = await this.client.chat.completions.create({
        model: 'gpt-4',
        messages: [
          { role: 'system', content: systemPrompt },
          ...messages
        ],
        temperature: 0.8,
      })

      console.log('✅ OpenAI API call successful! Tokens used:', response.usage)
      return response.choices[0].message.content
    } catch (error) {
      console.error('❌ OpenAI API Error:', error)
      return "I'm having trouble connecting right now. Please check your API key in settings or enable demo mode."
    }
  }

  async generateInterviewQuestions(role, company) {
    if (this.demoMode) {
      return this.generateMockInterviewQuestions(role)
    }

    const prompt = `Generate 6 realistic interview questions for a ${role} intern position${company ? ` at ${company}` : ''}.
Include a mix of:
- 2 behavioral questions
- 2 technical/role-specific questions
- 2 situational questions

Return as a JSON array of strings.`

    try {
      const response = await this.client.chat.completions.create({
        model: 'gpt-4',
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.7,
      })

      const content = response.choices[0].message.content
      return JSON.parse(content)
    } catch (error) {
      console.error('AI Error:', error)
      return this.generateMockInterviewQuestions(role)
    }
  }

  async evaluateAnswer(question, answer) {
    if (this.demoMode) {
      return this.generateMockEvaluation(answer)
    }

    const prompt = `Evaluate this interview answer:
Question: ${question}
Answer: ${answer}

Provide:
1. Score (0-100)
2. Brief feedback (2-3 sentences)
3. 2-3 specific improvement suggestions

Return as JSON:
{
  "score": number,
  "feedback": "string",
  "improvements": ["string", "string", "string"]
}`

    try {
      const response = await this.client.chat.completions.create({
        model: 'gpt-4',
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.7,
      })

      const content = response.choices[0].message.content
      return JSON.parse(content)
    } catch (error) {
      console.error('AI Error:', error)
      return this.generateMockEvaluation(answer)
    }
  }

  // Mock responses for demo mode
  generateMockRoadmap(profile) {
    const targetRole = profile.targetRoles[0] || 'SWE'
    return {
      tracks: profile.targetRoles,
      phases: [
        {
          id: 'phase-1',
          name: 'Foundation Building',
          timeline: 'Semester 1 (Current)',
          milestones: [
            {
              id: 'milestone-1',
              name: 'Master Core Programming',
              description: 'Build strong fundamentals in data structures, algorithms, and problem-solving',
              skills: ['Data Structures', 'Algorithms', 'Problem Solving'],
              projects: ['LeetCode/HackerRank practice', 'Build a personal portfolio website'],
              resources: ['freeCodeCamp', 'CS50 by Harvard'],
              status: 'not_started',
              sponsorTags: []
            },
            {
              id: 'milestone-2',
              name: 'Learn Version Control',
              description: 'Master Git and GitHub for collaboration',
              skills: ['Git', 'GitHub', 'Collaboration'],
              projects: ['Create GitHub profile', 'Contribute to open source'],
              resources: ['GitHub Learning Lab', 'Git documentation'],
              status: 'not_started',
              sponsorTags: []
            }
          ]
        },
        {
          id: 'phase-2',
          name: 'Skill Specialization',
          timeline: 'Semester 2',
          milestones: [
            {
              id: 'milestone-3',
              name: 'Build Real Projects',
              description: 'Create portfolio projects that demonstrate your skills',
              skills: ['Full-stack Development', 'APIs', 'Databases'],
              projects: ['Build a CRUD application', 'Deploy to cloud platform'],
              resources: ['The Odin Project', 'freeCodeCamp projects'],
              status: 'not_started',
              sponsorTags: ['Fidelity', 'McDonald\'s']
            },
            {
              id: 'milestone-4',
              name: 'Get Certified',
              description: 'Earn industry-recognized certifications',
              skills: ['Cloud Computing', 'Professional Development'],
              projects: ['AWS Cloud Practitioner prep', 'Complete online courses'],
              resources: ['AWS Training', 'Coursera'],
              status: 'not_started',
              sponsorTags: ['Verizon', 'Fidelity']
            }
          ]
        },
        {
          id: 'phase-3',
          name: 'Career Preparation',
          timeline: 'Summer',
          milestones: [
            {
              id: 'milestone-5',
              name: 'Interview Prep',
              description: 'Practice technical and behavioral interviews',
              skills: ['Technical Interviews', 'Communication', 'Problem Solving'],
              projects: ['Mock interviews', '100+ coding problems'],
              resources: ['Cracking the Coding Interview', 'Pramp'],
              status: 'not_started',
              sponsorTags: []
            },
            {
              id: 'milestone-6',
              name: 'Apply to Internships',
              description: 'Target roles at sponsor companies and beyond',
              skills: ['Resume Building', 'Networking', 'Applications'],
              projects: ['Attend career fairs', 'Network on LinkedIn'],
              resources: ['LaunchPad Opportunities', 'LinkedIn'],
              status: 'not_started',
              sponsorTags: ['Fidelity', 'PepsiCo', 'Verizon', 'McDonald\'s']
            }
          ]
        }
      ]
    }
  }

  generateMockChatResponse(userMessage) {
    const responses = {
      'what should i': 'Based on your roadmap, I recommend focusing on your current milestone: building core programming skills. Start with data structures and algorithms, as they\'re fundamental for tech interviews. Would you like specific resource recommendations?',
      'difference between': 'Great question! A Data Analyst typically focuses on analyzing existing data to derive insights using SQL, Excel, and visualization tools. A Data Scientist builds predictive models and uses machine learning. Both are excellent career paths with lots of demand!',
      'only 5 hours': 'Absolutely! Let\'s adjust your roadmap to be more realistic. With 5 hours per week, I recommend focusing on one skill at a time. We can extend your timeline and prioritize the most impactful activities. Would you like me to suggest a modified schedule?',
      'default': 'I\'m here to help with your career journey! You can ask me about specific roles, skills to learn, how to adjust your roadmap, or anything else about your tech career path.'
    }

    const lowerMessage = userMessage.toLowerCase()
    for (const [key, response] of Object.entries(responses)) {
      if (lowerMessage.includes(key)) {
        return response
      }
    }
    return responses.default
  }

  generateMockInterviewQuestions(role) {
    const questions = {
      'SWE': [
        'Tell me about a challenging coding project you worked on and how you approached it.',
        'Explain the difference between a stack and a queue, and give examples of when to use each.',
        'How would you debug a program that\'s running slowly?',
        'Describe a time you had to learn a new technology quickly. How did you approach it?',
        'How would you explain APIs to someone non-technical?',
        'Walk me through how you would design a simple e-commerce shopping cart.'
      ],
      'Data': [
        'Tell me about a time you used data to solve a problem or make a decision.',
        'How would you handle missing or inconsistent data in a dataset?',
        'Explain the difference between correlation and causation.',
        'Describe a data analysis project you\'ve worked on. What tools did you use?',
        'How would you present complex data findings to a non-technical audience?',
        'What metrics would you track for a mobile app, and why?'
      ],
      'default': [
        'Tell me about yourself and why you\'re interested in this role.',
        'Describe a challenging situation you faced and how you handled it.',
        'Where do you see yourself in 3-5 years?',
        'Tell me about a time you worked in a team. What was your role?',
        'What are your greatest strengths and areas for improvement?',
        'Why do you want to work at our company?'
      ]
    }

    return questions[role] || questions.default
  }

  generateMockEvaluation(answer) {
    const wordCount = answer.split(' ').length
    let score = 50

    if (wordCount > 30) score += 20
    if (wordCount > 60) score += 10
    if (answer.includes('example') || answer.includes('experience')) score += 10
    if (answer.includes('result') || answer.includes('learned')) score += 10

    return {
      score: Math.min(score, 95),
      feedback: wordCount < 20
        ? 'Your answer is quite brief. Try to provide more detail and specific examples.'
        : 'Good response! You provided relevant information. Consider adding more specific examples to strengthen your answer.',
      improvements: [
        'Use the STAR method (Situation, Task, Action, Result) to structure your response',
        'Include specific metrics or outcomes when possible',
        'Connect your experience to the role requirements'
      ]
    }
  }
}

export const aiService = new AIService()
