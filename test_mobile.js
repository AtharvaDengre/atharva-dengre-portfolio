const { chromium, devices } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    ...devices['iPhone 14'],
  });
  const page = await context.newPage();

  console.log('Navigating to https://atharvadengre.vercel.app in iPhone 14 browser mode...');
  await page.goto('https://atharvadengre.vercel.app', { waitUntil: 'networkidle' });

  // Check for horizontal overflow
  const overflow = await page.evaluate(() => {
    const scrollWidth = document.documentElement.scrollWidth;
    const clientWidth = document.documentElement.clientWidth;
    return {
      scrollWidth,
      clientWidth,
      hasOverflow: scrollWidth > clientWidth
    };
  });

  console.log('--- MOBILE LAYOUT AUDIT RESULTS ---');
  console.log(`Viewport Width: ${overflow.clientWidth}px`);
  console.log(`Document Scroll Width: ${overflow.scrollWidth}px`);
  console.log(`Horizontal Overflow Detected: ${overflow.hasOverflow ? 'YES (FAIL)' : 'NO (PASS - Clean 100% Mobile Fit)'}`);

  const artifactDir = 'C:\\Users\\athar\\.gemini\\antigravity\\brain\\735249c5-9a17-4f98-8607-16eaa24115f1';

  // Take mobile screenshots
  await page.screenshot({ path: path.join(artifactDir, 'mobile_hero_view.png') });
  console.log('Saved mobile_hero_view.png');

  // Scroll down to command card
  const avatarCard = page.locator('#avatarCard');
  if (await avatarCard.count() > 0) {
    await avatarCard.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await page.screenshot({ path: path.join(artifactDir, 'mobile_card_view.png') });
    console.log('Saved mobile_card_view.png');
  }

  await browser.close();
})();
