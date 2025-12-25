#!/bin/bash

# Configuration
QUALITY=80
BASE_DIR="public/images/destinations"

# Check if cwebp is available
if ! command -v cwebp &> /dev/null; then
    echo "cwebp could not be found. Please install it."
    exit 1
fi

# Loop through each destination directory
for dir in "$BASE_DIR"/*/; do
    if [ -d "$dir" ]; then
        dest_name=$(basename "$dir")
        echo "----------------------------------------"
        echo "Processing directory: $dest_name"
        echo "----------------------------------------"
        
        count=1
        # Find all jpg, jpeg, png files and sort them
        find "$dir" -maxdepth 1 -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) | sort | while read -r img; do
            # Skip files that were already converted (have the pattern destination-N.webp)
            if [[ "$img" =~ .webp$ ]]; then
                continue
            fi

            output_file="$dir/${dest_name}-${count}.webp"
            
            echo "Converting: $(basename "$img") -> $(basename "$output_file")"
            
            # Use cwebp to resize and convert
            # -resize 1920 0: Resizes to 1920 width, keeping aspect ratio
            # -q 80: Quality
            # -m 6: Method 6 for best compression but slower
            cwebp -q "$QUALITY" -m 6 -resize 1920 0 "$img" -o "$output_file"
            
            if [ $? -eq 0 ]; then
                echo "Success: $output_file"
                # Optionally remove the original if you are brave
                # rm "$img"
            else
                echo "Error converting $img"
            fi
            
            ((count++))
        done
    fi
done

echo "----------------------------------------"
echo "All images processed!"
echo "----------------------------------------"
