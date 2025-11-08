# LaunchPad Setup Guide

## 🔐 Adding Your OpenAI API Key

### Option 1: Local Development (Recommended)

1. **Copy the example environment file:**
   ```bash
   cp .env.example .env
   ```

2. **Edit `.env` and add your API key:**
   ```bash
   VITE_OPENAI_API_KEY=sk-your-actual-api-key-here
   ```

3. **Restart your dev server:**
   ```bash
   npm run dev
   ```

Your API key is now loaded automatically! The `.env` file is git-ignored, so it won't be committed to GitHub.

### Option 2: GitHub Pages Deployment

To deploy to GitHub Pages with your API key hidden:

1. **Go to your GitHub repository settings**
   - Navigate to: `Settings` → `Secrets and variables` → `Actions`

2. **Add a new repository secret:**
   - Click `New repository secret`
   - Name: `OPENAI_API_KEY`
   - Value: `sk-your-actual-api-key-here`
   - Click `Add secret`

3. **Enable GitHub Pages:**
   - Go to `Settings` → `Pages`
   - Source: `GitHub Actions`

4. **Push your code:**
   ```bash
   git add .
   git commit -m "Setup deployment"
   git push
   ```

5. **Your site will auto-deploy!**
   - The GitHub Action will inject your secret API key during build
   - Visit: `https://[your-username].github.io/Launchpad-V/`

## 🔄 How It Works

- **Local:** The `.env` file provides the API key
- **Production:** GitHub Secrets inject the key during deployment
- **Fallback:** Users can still add their own key via Settings UI

## 📝 Notes

- ✅ `.env` is git-ignored (never committed)
- ✅ GitHub Secrets are encrypted and never exposed
- ✅ The key is baked into the build (static site)
- ⚠️ Anyone can view the source of the deployed site, but they'll need to dig through minified code

## 🛡️ Security Consideration

Since this is a client-side app, the API key will be embedded in the JavaScript bundle. For production apps with sensitive keys, consider:
- Using a backend proxy
- Implementing rate limiting
- Using OpenAI's usage limits

For a hackathon/demo project, this approach is perfectly fine!
