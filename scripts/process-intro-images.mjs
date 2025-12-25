import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const SOURCE_DIR = 'public/image/hero-section-slides';
const TARGET_DIR = 'public/images/intro';

const MAPPINGS = [
    // Using the lions image for the Safari card
    {
        src: 'a-safari-vehicle-and-passengers-close-to-lions-dri-2025-04-05-05-02-33-utc.jpg',
        dest: 'safari-card.webp'
    },
    // Reusing the slide-2 mapping source for Kili card (assuming it's the mountain/scenic one)
    {
        src: 'african-safari-botswana-2025-03-31-05-37-38-utc.jpg',
        dest: 'kilimanjaro-card.webp'
    },
    // Day Trips Card 
    {
        src: 'Bespoke_65.JPG',
        dest: 'day-trips-card.webp'
    },
    // Destinations Card
    {
        src: 'tourists-exploring-ngorongoro-crater-in-tanzania-2025-08-10-10-46-48-utc.jpg',
        dest: 'destinations-card.webp'
    }
];

async function processIntroImages() {
    if (!fs.existsSync(TARGET_DIR)) fs.mkdirSync(TARGET_DIR, { recursive: true });

    for (const { src, dest } of MAPPINGS) {
        const sourcePath = path.join(SOURCE_DIR, src);
        const destPath = path.join(TARGET_DIR, dest);

        if (fs.existsSync(sourcePath)) {
            console.log(`Processing ${src} -> ${dest}...`);
            await sharp(sourcePath)
                .resize(800, 800, { fit: 'cover' }) // Square-ish or tall focus
                .webp({ quality: 80 })
                .toFile(destPath);
        } else {
            console.warn(`Warning: Source file not found: ${src}`);
        }
    }
    console.log('Intro images done.');
}

processIntroImages().catch(console.error);
