// Sanity CMS Setup Script
// Run this to set up a beautiful content management system

const setupInstructions = `
🎯 SANITY CMS SETUP

1. Install Sanity:
   npm install -g @sanity/cli
   npm install @sanity/client @sanity/image-url

2. Create Sanity project:
   sanity init --project-name "john-owolabi-blog" --dataset "production"

3. Configure schema for your content:
   - Journal posts (title, date, content, tags, cover image)
   - Little World entries (title, type, caption, image)
   - About page content
   - Site settings

4. Benefits:
   ✅ Beautiful, distraction-free editor
   ✅ Real-time preview
   ✅ Image optimization
   ✅ Version control
   ✅ Custom fields
   ✅ No coding required for content

5. Workflow:
   - Write in Sanity Studio (localhost:3333)
   - Preview changes in real-time
   - Publish with one click
   - Automatic deployment to your site

COST: Free for 3 users, unlimited API requests
`;

console.log(setupInstructions);
