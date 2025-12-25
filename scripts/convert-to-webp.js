const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

// Configuration
const IMAGE_QUALITY = 80;
const IMAGES_DIR = path.join(__dirname, '../public/images/destinations');

// Statistics
let stats = {
    totalProcessed: 0,
    totalConverted: 0,
    totalSkipped: 0,
    totalErrors: 0,
    savedBytes: 0
};

/**
 * Convert a single JPG image to WebP format
 */
async function convertToWebP(inputPath, outputPath) {
    try {
        const inputStats = await fs.stat(inputPath);
        const inputSize = inputStats.size;

        await sharp(inputPath)
            .webp({ quality: IMAGE_QUALITY })
            .toFile(outputPath);

        const outputStats = await fs.stat(outputPath);
        const outputSize = outputStats.size;
        const savedBytes = inputSize - outputSize;
        const savedPercent = ((savedBytes / inputSize) * 100).toFixed(1);

        console.log(`✓ Converted: ${path.basename(inputPath)}`);
        console.log(`  Size: ${formatBytes(inputSize)} → ${formatBytes(outputSize)} (${savedPercent}% reduction)`);

        stats.totalConverted++;
        stats.savedBytes += savedBytes;

        return { success: true, savedBytes };
    } catch (error) {
        console.error(`✗ Error converting ${path.basename(inputPath)}:`, error.message);
        stats.totalErrors++;
        return { success: false, error: error.message };
    }
}

/**
 * Process all images in a directory
 */
async function processDirectory(dirPath) {
    try {
        const entries = await fs.readdir(dirPath, { withFileTypes: true });

        for (const entry of entries) {
            const fullPath = path.join(dirPath, entry.name);

            if (entry.isDirectory()) {
                // Recursively process subdirectories
                await processDirectory(fullPath);
            } else if (entry.isFile()) {
                const ext = path.extname(entry.name).toLowerCase();

                // Only process JPG/JPEG files
                if (ext === '.jpg' || ext === '.jpeg') {
                    stats.totalProcessed++;

                    // Generate output path
                    const baseName = path.basename(entry.name, ext);
                    const outputPath = path.join(dirPath, `${baseName}.webp`);

                    // Check if WebP already exists
                    try {
                        await fs.access(outputPath);
                        console.log(`⊘ Skipped: ${entry.name} (WebP already exists)`);
                        stats.totalSkipped++;
                    } catch {
                        // WebP doesn't exist, convert it
                        await convertToWebP(fullPath, outputPath);
                    }
                }
            }
        }
    } catch (error) {
        console.error(`Error processing directory ${dirPath}:`, error.message);
    }
}

/**
 * Format bytes to human-readable format
 */
function formatBytes(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

/**
 * Print final statistics
 */
function printStats() {
    console.log('\n' + '='.repeat(60));
    console.log('CONVERSION SUMMARY');
    console.log('='.repeat(60));
    console.log(`Total JPG files found:     ${stats.totalProcessed}`);
    console.log(`Successfully converted:    ${stats.totalConverted}`);
    console.log(`Skipped (already exists):  ${stats.totalSkipped}`);
    console.log(`Errors:                    ${stats.totalErrors}`);
    console.log(`Total space saved:         ${formatBytes(stats.savedBytes)}`);
    console.log('='.repeat(60) + '\n');
}

/**
 * Main execution
 */
async function main() {
    console.log('Starting image conversion to WebP format...\n');
    console.log(`Source directory: ${IMAGES_DIR}`);
    console.log(`Quality setting: ${IMAGE_QUALITY}%\n`);

    try {
        // Check if source directory exists
        await fs.access(IMAGES_DIR);

        // Process all images
        await processDirectory(IMAGES_DIR);

        // Print statistics
        printStats();

        if (stats.totalConverted > 0) {
            console.log('✓ Conversion completed successfully!');
            console.log('\nNext steps:');
            console.log('1. Review the converted WebP images');
            console.log('2. Update image references in your code (.jpg → .webp)');
            console.log('3. Test the website to ensure images load correctly');
            console.log('4. Optionally remove original JPG files after verification\n');
        } else if (stats.totalSkipped > 0) {
            console.log('ℹ All images already converted to WebP format.');
        } else {
            console.log('⚠ No JPG images found to convert.');
        }

    } catch (error) {
        console.error('Fatal error:', error.message);
        process.exit(1);
    }
}

// Run the script
main();
