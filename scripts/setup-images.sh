#!/bin/bash

# Image setup script for John Owolabi's personal site
# This script helps organize images from Instagram

echo "Setting up image directories..."

# Create directories
mkdir -p public/images/{journal,highlights,portrait,little-world}

echo "Image directories created!"
echo ""
echo "Next steps:"
echo "1. Download images from your Instagram (@johnowolabi_)"
echo "2. Save them to the appropriate directories:"
echo "   - Portrait: public/images/portrait.jpg"
echo "   - Journal covers: public/images/journal/[post-name].jpg"
echo "   - Highlights: public/images/highlights/[category]-*.jpg"
echo "   - Little world: public/images/little-world/[item-name].jpg"
echo ""
echo "3. Update the MDX files to reference your actual images"
echo "4. Optimize images for web (recommended: 80-85% quality, max 800px width)"
echo ""
echo "Current placeholder images will be replaced with your actual content."
