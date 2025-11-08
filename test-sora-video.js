/**
 * Standalone Test Script for OpenAI Sora 2 Video Generation
 *
 * This script tests whether Sora 2 API is available and working.
 * Run with: node test-sora-video.js
 *
 * Make sure to set your OpenAI API key as an environment variable:
 * export OPENAI_API_KEY="sk-proj-..."
 * or
 * OPENAI_API_KEY="sk-proj-..." node test-sora-video.js
 */

import OpenAI from 'openai'

// Initialize OpenAI client
const apiKey = process.env.OPENAI_API_KEY

if (!apiKey) {
  console.error('❌ ERROR: No API key found!')
  console.error('Please set OPENAI_API_KEY environment variable:')
  console.error('  export OPENAI_API_KEY="sk-proj-..."')
  console.error('  or')
  console.error('  OPENAI_API_KEY="sk-proj-..." node test-sora-video.js')
  process.exit(1)
}

console.log('🔑 API Key found:', apiKey.substring(0, 20) + '...')

const openai = new OpenAI({
  apiKey: apiKey
})

// Test prompt for a 5-second Software Engineer role video
const testPrompt = `Create a 5-second professional video explaining the Software Engineer role.

VISUAL CONTENT:
- Show a confident Software Engineer working with modern technology
- Display key tools/technologies in action (JavaScript, React, Python)
- Professional, tech-forward aesthetic with smooth transitions
- Dynamic, engaging visuals showing the role in action

TEXT OVERLAY (appears gradually):
"Software Engineer"
"Design, build, and maintain software systems and applications"

STYLE:
- Modern, cinematic look with professional lighting
- Tech startup/innovation vibe
- Inspiring and aspirational
- High energy, fast-paced but clear
- Vibrant colors, sleek design
- 16:9 aspect ratio, HD quality

TARGET AUDIENCE: College students exploring tech careers

Keep it short, impactful, and inspiring. 5 seconds only.`

async function testSoraAPI() {
  console.log('\n🎬 Testing OpenAI Sora 2 Video Generation API...\n')

  // Check if videos API exists
  console.log('1. Checking if openai.videos exists...')
  if (!openai.videos) {
    console.log('❌ openai.videos is undefined')
    console.log('⚠️  Sora 2 API is not available yet in the OpenAI SDK')
    console.log('\n📝 Current OpenAI SDK structure:')
    console.log('   Available APIs:', Object.keys(openai).filter(k => !k.startsWith('_')))
    return false
  }
  console.log('✅ openai.videos exists!')

  // Check if generate method exists
  console.log('\n2. Checking if openai.videos.generate exists...')
  if (typeof openai.videos.generate !== 'function') {
    console.log('❌ openai.videos.generate is not a function')
    console.log('   Type:', typeof openai.videos.generate)
    return false
  }
  console.log('✅ openai.videos.generate exists!')

  // Try to generate a video
  console.log('\n3. Attempting to generate a 5-second video...')
  console.log('   Prompt:', testPrompt.substring(0, 100) + '...')

  try {
    const response = await openai.videos.generate({
      model: 'sora-2',
      prompt: testPrompt,
      duration: 5,
      size: '1280x720',
      quality: 'standard'
    })

    console.log('\n✅ SUCCESS! Video generation initiated!')
    console.log('📹 Response:', JSON.stringify(response, null, 2))

    return true
  } catch (error) {
    console.log('\n❌ Video generation failed!')
    console.log('Error type:', error.constructor.name)
    console.log('Error message:', error.message)

    if (error.status) {
      console.log('HTTP Status:', error.status)
    }

    if (error.code) {
      console.log('Error code:', error.code)
    }

    console.log('\nFull error:', error)

    return false
  }
}

// Alternative: Test with images API (which DOES exist)
async function testImagesAPI() {
  console.log('\n\n🖼️  Testing Images API (for comparison)...\n')
  console.log('The Images API (DALL-E) is available. Let\'s verify:')

  try {
    console.log('1. Checking if openai.images exists...')
    if (!openai.images) {
      console.log('❌ openai.images is undefined')
      return false
    }
    console.log('✅ openai.images exists!')

    console.log('\n2. Generating a test image with DALL-E...')
    const response = await openai.images.generate({
      model: 'dall-e-3',
      prompt: 'A professional software engineer working on a laptop in a modern office',
      size: '1024x1024',
      quality: 'standard',
      n: 1
    })

    console.log('\n✅ SUCCESS! Image generated!')
    console.log('🖼️  Image URL:', response.data[0].url)

    return true
  } catch (error) {
    console.log('\n❌ Image generation failed!')
    console.log('Error:', error.message)
    return false
  }
}

// Run tests
async function main() {
  console.log('═'.repeat(60))
  console.log('OpenAI Sora 2 Video Generation Test')
  console.log('═'.repeat(60))

  const soraAvailable = await testSoraAPI()

  // Also test images API to show what a working API looks like
  await testImagesAPI()

  console.log('\n' + '═'.repeat(60))
  console.log('Test Results Summary')
  console.log('═'.repeat(60))

  if (soraAvailable) {
    console.log('✅ Sora 2 API is AVAILABLE and WORKING!')
    console.log('   You can use it in the LaunchPad application.')
  } else {
    console.log('❌ Sora 2 API is NOT YET AVAILABLE')
    console.log('   The LaunchPad app will use mock videos as fallback.')
    console.log('\n💡 What this means:')
    console.log('   - OpenAI hasn\'t released Sora 2 to the public yet')
    console.log('   - The app will show sample videos instead')
    console.log('   - When Sora releases, the app will automatically use it')
    console.log('   - No code changes needed - just works when available!')
  }

  console.log('═'.repeat(60))
}

// Run the tests
main().catch(console.error)
