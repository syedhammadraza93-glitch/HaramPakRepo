import { chromium } from 'playwright';
import { join } from 'path';

const pages = [
  { path: '/', name: '01-homepage' },
  { path: '/about', name: '02-about' },
  { path: '/umrah', name: '03-umrah-packages' },
  { path: '/hajj', name: '04-hajj-services' },
  { path: '/hotels', name: '05-hotels' },
  { path: '/flights', name: '06-flights' },
  { path: '/services', name: '07-other-services' },
  { path: '/gallery', name: '08-gallery' },
  { path: '/contact', name: '09-contact' },
];

const baseURL = 'http://localhost:3000';
const outputDir = '/cursor/stores/self/media';

async function takeScreenshots() {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 },
  });
  const page = await context.newPage();

  console.log('Starting screenshot capture...\n');

  for (const { path, name } of pages) {
    try {
      const url = `${baseURL}${path}`;
      console.log(`Navigating to ${url}...`);
      
      await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
      
      // Wait a bit for images to load
      await page.waitForTimeout(2000);
      
      const filename = `${name}.png`;
      const filepath = join(outputDir, filename);
      
      console.log(`Taking screenshot: ${filename}`);
      await page.screenshot({ 
        path: filepath, 
        fullPage: true,
        timeout: 30000
      });
      
      console.log(`✓ Saved: ${filepath}\n`);
    } catch (error) {
      console.error(`✗ Error capturing ${name}:`, error.message, '\n');
    }
  }

  await browser.close();
  console.log('Screenshot capture complete!');
}

takeScreenshots().catch(console.error);
