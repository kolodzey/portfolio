const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

// Define the root input and output directories
const inputRoot = path.join(__dirname, "../../public");
const outputRoot = path.join(__dirname, "../../public");

// Function to process images recursively
const processImages = (inputDir, outputDir) => {
  // Ensure the output directory exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Read all files and directories in the current input directory
  fs.readdirSync(inputDir).forEach((file) => {
    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(outputDir, `${path.parse(file).name}.webp`);

    // Check if it's a file or directory
    if (fs.lstatSync(inputPath).isDirectory()) {
      // Recursively process subdirectories
      processImages(inputPath, path.join(outputDir, path.basename(file)));
    } else if (
      [".jpg", ".jpeg", ".png"].includes(path.extname(file).toLowerCase())
    ) {
      // Skip conversion if the .webp file already exists
      if (fs.existsSync(outputPath)) {
        console.log(`Skipped (already exists): ${outputPath}`);
      } else {
        // Process image files
        sharp(inputPath)
          .webp({ quality: 80 })
          .toFile(outputPath)
          .then(() => console.log(`Converted: ${inputPath} -> ${outputPath}`))
          .catch((err) =>
            console.error(`Error converting ${inputPath}:`, err.message)
          );
      }
    }
  });
};

// Start processing images
processImages(inputRoot, outputRoot);

console.log("Image conversion to WebP completed.");
