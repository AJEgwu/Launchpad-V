# GitHub Pages Deployment Guide

## 🚀 Deploy Your App to GitHub Pages

Your app is configured to deploy to GitHub Pages with your OpenAI API key. Follow these steps:

## Step 1: Add OpenAI API Key to GitHub Secrets

1. Go to your GitHub repository
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Name: `OPENAI_API_KEY`
5. Value: Your OpenAI API key (starts with `sk-proj-...`)
6. Click **Add secret**

## Step 2: Enable GitHub Pages

1. In your repository, go to **Settings** → **Pages**
2. Under **Build and deployment**:
   - Source: **GitHub Actions**
3. Save

## Step 3: Deploy

Your app will automatically deploy when you push to `main` or `master` branch:

```bash
git add .
git commit -m "Deploy to GitHub Pages"
git push origin master
```

The workflow will:
- Build your React app
- Inject the API key from GitHub secrets
- Deploy to GitHub Pages

Your site will be available at:
`https://YOUR_USERNAME.github.io/Launchpad-V/`

## Step 4: Manual Deployment (Optional)

You can also trigger deployment manually:
1. Go to **Actions** tab
2. Click **Deploy to GitHub Pages** workflow
3. Click **Run workflow**

---

## 🔒 Security Configuration (IMPORTANT)

Since your API key will be embedded in client-side JavaScript, **anyone can extract it**. Set these limits to protect yourself:

### OpenAI Dashboard Security Setup

1. **Go to OpenAI Platform**: https://platform.openai.com/

2. **Set Monthly Spending Limit**:
   - Settings → Organization → Billing → Limits
   - **Hard limit**: $10/month (or your budget)
   - **Soft limit**: $5/month (for email alerts)
   - Click **Save**

3. **Set Rate Limits** (if available):
   - Limit requests per minute
   - Limit requests per day

4. **Monitor Usage**:
   - Check usage at: https://platform.openai.com/usage
   - Review daily for unexpected spikes

5. **Enable Email Alerts**:
   - Settings → Organization → Billing
   - Enable spending threshold alerts

### API Key Best Practices

✅ **Do**:
- Set spending limits (Step 2 above)
- Monitor usage regularly
- Rotate your API key monthly
- Use the cheapest models that work (gpt-4o-mini, whisper-1, tts-1)

❌ **Don't**:
- Share your repository URL with untrusted people
- Leave the app running unmonitored
- Ignore usage spikes

### If Key Gets Compromised

1. **Immediately revoke** the key at: https://platform.openai.com/api-keys
2. **Create a new key**
3. **Update GitHub secret** with new key
4. **Redeploy** your app

---

## 🎯 Current API Usage

Your app uses OpenAI for:
- **TTS (Text-to-Speech)**: AI interviewer voice (~$0.015 per 1K characters)
- **Whisper (Speech-to-Text)**: Transcribe your answers (~$0.006 per minute)

**Example costs**:
- 10-minute interview ≈ $0.10-0.20
- 100 interviews ≈ $10-20

With a $10/month limit, you can support ~50-100 interview sessions.

---

## 🐛 Troubleshooting

### Build Fails
- Check that `OPENAI_API_KEY` secret is set correctly
- Verify the secret name matches exactly (case-sensitive)

### Site Doesn't Load
- Verify GitHub Pages source is set to "GitHub Actions"
- Check the Actions tab for build errors
- Wait 2-3 minutes after first deployment

### API Calls Fail
- Open browser DevTools → Console
- Check for API errors
- Verify your OpenAI account has credits

### API Key Visible in Browser
- This is expected with client-side deployment
- Follow security steps above to limit exposure

---

## 📊 Monitor Your Deployment

After deploying:

1. **Check Actions**: https://github.com/YOUR_USERNAME/Launchpad-V/actions
2. **View Site**: https://YOUR_USERNAME.github.io/Launchpad-V/
3. **Monitor API Usage**: https://platform.openai.com/usage

---

## 🔄 Update Your Site

To deploy changes:

```bash
git add .
git commit -m "Update app"
git push origin master
```

The site will automatically rebuild and redeploy in 2-3 minutes.

---

## 📝 Notes

- Your API key is injected at **build time** and becomes part of your JavaScript bundle
- Anyone can view it by inspecting your deployed site's network requests
- This is acceptable for demos, hackathons, or personal projects with spending limits
- For production apps with real users, use a backend (Vercel, Netlify Functions, etc.)
