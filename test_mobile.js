const { chromium, devices } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const artifactDir = 'C:\\Users\\athar\\.gemini\\antigravity\\brain\\735249c5-9a17-4f98-8607-16eaa24115f1';

  const viewports = [
    { name: 'iPhone 14', device: devices['iPhone 14'] },
    { name: 'iPhone SE', device: devices['iPhone SE'] },
    { name: 'Pixel 7', device: devices['Pixel 7'] }
  ];

  console.log('==================================================');
  console.log('  COMPREHENSIVE MOBILE BROWSER TESTING AUDIT');
  console.log('==================================================\n');

  for (const item of viewports) {
    const context = await browser.newContext({ ...item.device });
    const page = await context.newPage();

    console.log(`Testing [${item.name}] viewport...`);
    await page.goto('https://atharvadengre.vercel.app', { waitUntil: 'networkidle' });

    // 1. Horizontal Overflow Audit
    const overflow = await page.evaluate(() => {
      const scrollWidth = document.documentElement.scrollWidth;
      const clientWidth = document.documentElement.clientWidth;
      return {
        scrollWidth,
        clientWidth,
        hasOverflow: scrollWidth > clientWidth
      };
    });

    console.log(`  - Viewport Width: ${overflow.clientWidth}px`);
    console.log(`  - Document Scroll Width: ${overflow.scrollWidth}px`);
    console.log(`  - Overflow Result: ${overflow.hasOverflow ? 'FAIL (Horizontal Overflow)' : 'PASS (100% Fit, 0px Overflow)'}`);

    // 2. Element Bounds & Floating Badges Check
    const badgeAudit = await page.evaluate(() => {
      const topBadge = document.querySelector('.badge-top-right');
      const bottomBadge = document.querySelector('.badge-bottom-left');
      const navHeader = document.querySelector('.nav-wrap');
      const hamburger = document.querySelector('.mobile-toggle');

      return {
        topBadgeWidth: topBadge ? topBadge.getBoundingClientRect().width : 0,
        bottomBadgeWidth: bottomBadge ? bottomBadge.getBoundingClientRect().width : 0,
        hamburgerVisible: hamburger ? window.getComputedStyle(hamburger).display !== 'none' : false,
      };
    });

    console.log(`  - Top Floating Badge Width: ${badgeAudit.topBadgeWidth.toFixed(1)}px (Compact: ${badgeAudit.topBadgeWidth < 250 ? 'YES' : 'NO'})`);
    console.log(`  - Bottom Floating Badge Width: ${badgeAudit.bottomBadgeWidth.toFixed(1)}px (Compact: ${badgeAudit.bottomBadgeWidth < 250 ? 'YES' : 'NO'})`);
    console.log(`  - 3-Line Hamburger Menu Visible: ${badgeAudit.hamburgerVisible ? 'YES (PASS)' : 'NO'}`);

    if (item.name === 'iPhone 14') {
      await page.screenshot({ path: path.join(artifactDir, 'mobile_hero_view.png') });
      const avatarCard = page.locator('#avatarCard');
      if (await avatarCard.count() > 0) {
        await avatarCard.scrollIntoViewIfNeeded();
        await page.waitForTimeout(500);
        await page.screenshot({ path: path.join(artifactDir, 'mobile_card_view.png') });
      }
    }

    await context.close();
    console.log('');
  }

  await browser.close();
  console.log('Mobile Testing Audit Completed Successfully!');
})();
