import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const SOURCE_DIR = 'public/image/hero-section-slides';
const LOGO_SOURCE = 'public/image/Logo/tanzania wisdom safaris.png';
const TARGET_DIR = 'public/images/hero';
const LOGO_TARGET_DIR = 'public/images';

const MAPPINGS = [
    { src: 'african-safari-adventure-with-elephants-and-vehicl-2024-09-19-03-38-27-utc.jpg', dest: 'slide-1.webp' }, // Welcome
    { src: 'african-safari-botswana-2025-03-31-05-37-38-utc.jpg', dest: 'slide-2.webp' }, // Kilimanjaro (Placeholder)
    { src: 'hot-air-balloon-in-maasai-mara-national-reserve-k-2024-11-28-17-44-40-utc.jpg', dest: 'slide-3.webp' }, // Serengeti
    { src: 'aerial-beach-and-coconut-trees-on-a-calm-island-in-2025-03-13-00-27-31-utc.jpg', dest: 'slide-4.webp' }, // Zanzibar
];

async function processImages() {
    if (!fs.existsSync(TARGET_DIR)) fs.mkdirSync(TARGET_DIR, { recursive: true });
    if (!fs.existsSync(LOGO_TARGET_DIR)) fs.mkdirSync(LOGO_TARGET_DIR, { recursive: true });

    // Process Slides
    for (const { src, dest } of MAPPINGS) {
        const sourcePath = path.join(SOURCE_DIR, src);
        const destPath = path.join(TARGET_DIR, dest);

        if (fs.existsSync(sourcePath)) {
            console.log(`Processing ${src} -> ${dest}...`);
            await sharp(sourcePath)
                .resize(1920, 1080, { fit: 'cover' }) // Optimize for Hero
                .webp({ quality: 80 })
                .toFile(destPath);
        } else {
            console.warn(`Warning: Source file not found: ${src}`);
        }
    }

    // Process Logo
    if (fs.existsSync(LOGO_SOURCE)) {
        console.log('Processing Logo...');
        await sharp(LOGO_SOURCE)
            .resize(null, 200, { fit: 'contain' }) // Resize height to 200px max, maintain aspect ratio
            .webp({ quality: 100 })
            .toFile(path.join(LOGO_TARGET_DIR, 'logo.webp'));
    } else {
        console.warn('Warning: Logo file not found.');
    }

    console.log('Done.');
}

processImages().catch(console.error);
