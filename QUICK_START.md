# Quick Start Guide

## 🚀 **Deploy Your Site (15 minutes)**

1. **Push to GitHub:**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/johnowolabi.com
git push -u origin main
```

2. **Deploy to Vercel:**
- Go to vercel.com
- Connect your GitHub repo
- Deploy automatically
- Get your live URL!

## 📝 **Write Your First Post**

```bash
node scripts/create-post.js
```

Follow the prompts, then edit the generated file.

## 📧 **Set Up Email Newsletter**

1. Sign up at buttondown.email
2. Get your API key
3. Add to `.env.local`:
```
BUTTONDOWN_API_KEY=your_key_here
```

## 💬 **Enable Comments**

1. Go to giscus.app
2. Connect your GitHub repo
3. Update repo details in `components/ui/comments.tsx`

## 🎯 **You're Live!**

Your minimal, beautiful personal site is now:
- ✅ Hosted on Vercel
- ✅ Email newsletter ready
- ✅ Comments enabled
- ✅ Easy content creation
- ✅ Professional domain ready

**Total setup time: ~1 hour**
**Monthly cost: $0-5**
