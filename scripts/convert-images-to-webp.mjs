import path from "node:path";
import process from "node:process";
import sharp from "sharp";

import fs from "node:fs/promises";

const sourcePaths = process.argv.slice(2);

if (sourcePaths.length === 0) {
  console.error("Usage: npm run images:webp -- <file-or-folder> [...]");
  process.exit(1);
}

async function collectImages(inputPath) {
  const stat = await fs.stat(inputPath);

  if (stat.isFile()) {
    return /\.(png|jpe?g)$/i.test(inputPath) ? [inputPath] : [];
  }

  if (stat.isDirectory()) {
    const entries = await fs.readdir(inputPath, { withFileTypes: true });

    const nested = await Promise.all(
      entries.map((entry) => collectImages(path.join(inputPath, entry.name))),
    );

    return nested.flat();
  }

  return [];
}

for (const sourcePath of sourcePaths) {
  let images = [];

  try {
    images = await collectImages(sourcePath);
  } catch (error) {
    console.error(`Could not read: ${sourcePath}`);
    continue;
  }

  if (images.length === 0) {
    console.log(`No PNG/JPG images found in: ${sourcePath}`);
    continue;
  }

  for (const imagePath of images) {
    const extension = path.extname(imagePath);
    const outputPath = `${imagePath.slice(0, -extension.length)}.webp`;

    await sharp(imagePath)
      .webp({ quality: 90, smartSubsample: true })
      .toFile(outputPath);

    console.log(`${imagePath} -> ${outputPath}`);
  }
}
