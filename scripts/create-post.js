#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(prompt) {
  return new Promise((resolve) => {
    rl.question(prompt, resolve);
  });
}

async function createPost() {
  console.log('📝 Create New Blog Post\n');
  
  const title = await question('Post title: ');
  const summary = await question('Summary (1-2 sentences): ');
  const tags = await question('Tags (comma-separated): ');
  const coverImage = await question('Cover image URL (optional): ');
  
  const slug = title.toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .trim();
  
  const date = new Date().toISOString().split('T')[0];
  
  const frontmatter = `---
title: "${title}"
date: "${date}"
summary: "${summary}"
tags: [${tags.split(',').map(tag => `"${tag.trim()}"`).join(', ')}]
cover: "${coverImage || '/images/journal/default.jpg'}"
published: true
---

# ${title}

Write your content here...

## Section 1

Your thoughts and ideas...

## Section 2

More content...

---

*What are your thoughts on this topic? I'd love to hear from you.*`;

  const filename = `${slug}.mdx`;
  const filepath = path.join(__dirname, '..', 'content', 'journal', filename);
  
  // Ensure directory exists
  const dir = path.dirname(filepath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  fs.writeFileSync(filepath, frontmatter);
  
  console.log(`\n✅ Post created: ${filename}`);
  console.log(`📁 Location: ${filepath}`);
  console.log(`\n🚀 Next steps:`);
  console.log(`1. Edit the file to add your content`);
  console.log(`2. Add a cover image to public/images/journal/`);
  console.log(`3. Your post will appear on the site automatically!`);
  
  rl.close();
}

createPost().catch(console.error);
