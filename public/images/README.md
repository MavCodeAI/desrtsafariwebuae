# Local Images Setup

This directory is for hosting local images instead of using external URLs (Pexels).

## Directory Structure

```text
public/images/
├── gallery/
│   ├── adventure/
│   ├── landscape/
│   ├── activities/
│   ├── camping/
│   ├── dining/
│   ├── entertainment/
│   ├── culture/
│   └── vip/
├── packages/
├── blog/
├── hero/
└── logos/
```

## Image Guidelines

### File Naming

- Use lowercase letters and hyphens: `dune-bashing-adventure.jpg`
- Include descriptive names for SEO
- No spaces or special characters

### Image Specifications

- **Gallery Images**: 1200x800px (3:2 ratio)
- **Package Images**: 800x600px (4:3 ratio)
- **Blog Images**: 1200x630px (1.91:1 ratio for social sharing)
- **Hero Images**: 1920x1080px (16:9 ratio)

### File Formats

- **Photos**: Use `.webp` for better compression, fallback to `.jpg`
- **Graphics**: Use `.png` for transparency
- **Icons**: Use `.svg` for scalability

### Optimization

- Compress images before uploading
- Use WebP format when possible
- Include alt text descriptions
- Maintain consistent aspect ratios

## Usage Example

```tsx
import Image from 'next/image';

<Image
  src="/images/gallery/adventure/dune-bashing.jpg"
  alt="Dune bashing adventure in Dubai desert"
  width={1200}
  height={800}
  priority
/>
```

## Migration from Pexels

To replace Pexels URLs with local images:

1. Download appropriate images from Pexels (with license)
2. Optimize and resize according to specifications
3. Place in appropriate subdirectory
4. Update data files to use local paths
5. Test all image loads

## Next Steps

1. Create subdirectories for each category
2. Add optimized images
3. Update JSON data files
4. Test performance improvements
