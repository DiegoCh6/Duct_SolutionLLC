#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const __dirnameResolved = path.dirname(new URL(import.meta.url).pathname);

async function generateOG() {
  try {
    const width = 1200;
    const height = 630;

    // Brand colors
    const brand = '#5044E5';
    const bg = '#0f172a'; // slate-900

    // Background SVG with subtle gradient and angled accent
    const bgSvg = `<?xml version="1.0" encoding="UTF-8"?>
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${bg}" />
          <stop offset="100%" stop-color="#111827" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#g)"/>
      <path d="M0,630 L0,0 L520,0 L320,630 Z" fill="${brand}" opacity="0.18" />
    </svg>`;

    const bgBuffer = await sharp(Buffer.from(bgSvg))
      .png()
      .toBuffer();

    // Load and resize logo
    const logoPath = path.join(__dirnameResolved, '..', 'src', 'assets', 'logo_duct.png');
    const logo = sharp(logoPath).resize({ width: 280, withoutEnlargement: true }).png();
    const logoMeta = await logo.metadata();
    const logoBuf = await logo.toBuffer();

    // Text overlay via SVG
    const title = 'HVAC Duct Solution LLC';
    const subtitle = 'Installation • Maintenance • Duct Cleaning & Repair';
    const esc = (s) => s
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&apos;');
    const textSvg = `<?xml version="1.0" encoding="UTF-8"?>
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <style>
        .title { fill: #ffffff; font-size: 64px; font-weight: 800; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif; }
        .subtitle { fill: #d1d5db; font-size: 28px; font-weight: 500; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif; }
        .pill { fill: '${brand}'; opacity: 0.22; }
      </style>
      <rect x="560" y="252" rx="12" ry="12" width="560" height="58" class="pill" />
  <text x="560" y="270" class="title">${esc(title)}</text>
  <text x="560" y="340" class="subtitle">${esc(subtitle)}</text>
    </svg>`;

    const textBuf = await sharp(Buffer.from(textSvg)).png().toBuffer();

    // Compose final image
    const outputPath = path.join(__dirnameResolved, '..', 'public', 'og-image.png');
    const logoX = 200 - Math.round((logoMeta.width || 280) / 2);
    const logoY = Math.round(height / 2 - (logoMeta.height || 280) / 2);

    await sharp(bgBuffer)
      .composite([
        { input: logoBuf, left: logoX, top: logoY },
        { input: textBuf, left: 0, top: 0 }
      ])
      .png({ quality: 90 })
      .toFile(outputPath);

    console.log('OG image generated at:', outputPath);
  } catch (err) {
    console.error('Failed to generate OG image:', err);
    process.exit(1);
  }
}

generateOG();
