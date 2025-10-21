const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const https = require('https');

async function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filepath, () => {});
      reject(err);
    });
  });
}

async function fetchInstagramImages() {
  console.log('🚀 Starting Instagram image fetch...');
  
  const browser = await puppeteer.launch({ 
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  try {
    const page = await browser.newPage();
    
    // Set user agent to avoid detection
    await page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');
    
    console.log('📱 Navigating to Instagram profile...');
    await page.goto('https://www.instagram.com/johnowolabi_/', { 
      waitUntil: 'networkidle2',
      timeout: 30000 
    });
    
    // Wait for images to load
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    console.log('🖼️ Extracting image URLs...');
    
    // Get image URLs from the page
    const imageUrls = await page.evaluate(() => {
      const images = [];
      const imgElements = document.querySelectorAll('img');
      
      imgElements.forEach((img, index) => {
        if (img.src && img.src.includes('instagram') && !img.src.includes('profile')) {
          // Get high resolution version
          const highResUrl = img.src.replace(/s\d+x\d+/, 's1080x1080');
          images.push({
            url: highResUrl,
            alt: img.alt || `instagram-image-${index}`,
            index: index
          });
        }
      });
      
      return images.slice(0, 12); // Get first 12 images
    });
    
    console.log(`📸 Found ${imageUrls.length} images`);
    
    // Create directories
    const dirs = ['journal', 'highlights', 'portrait', 'little-world'];
    dirs.forEach(dir => {
      const dirPath = path.join(__dirname, '..', 'public', 'images', dir);
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
      }
    });
    
    // Download images
    for (let i = 0; i < imageUrls.length; i++) {
      const image = imageUrls[i];
      const filename = `instagram-${i + 1}.jpg`;
      
      // Categorize images
      let category = 'highlights';
      if (i === 0) category = 'portrait';
      else if (i >= 1 && i <= 3) category = 'journal';
      else if (i >= 4 && i <= 7) category = 'highlights';
      else category = 'little-world';
      
      const filepath = path.join(__dirname, '..', 'public', 'images', category, filename);
      
      try {
        console.log(`⬇️ Downloading ${filename} to ${category}/`);
        await downloadImage(image.url, filepath);
        console.log(`✅ Downloaded ${filename}`);
      } catch (error) {
        console.log(`❌ Failed to download ${filename}:`, error.message);
      }
      
      // Add delay to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
    
    console.log('🎉 Image fetch completed!');
    console.log('\n📁 Images saved to:');
    console.log('   - public/images/portrait/instagram-1.jpg (use as main portrait)');
    console.log('   - public/images/journal/instagram-2.jpg to instagram-4.jpg (blog covers)');
    console.log('   - public/images/highlights/instagram-5.jpg to instagram-8.jpg (category images)');
    console.log('   - public/images/little-world/instagram-9.jpg+ (objects/quotes)');
    
  } catch (error) {
    console.error('❌ Error fetching images:', error.message);
  } finally {
    await browser.close();
  }
}

// Run the script
fetchInstagramImages().catch(console.error);
