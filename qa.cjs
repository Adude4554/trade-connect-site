const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    executablePath: 'C:\\Users\\adude\\AppData\\Local\\ms-playwright\\chromium-1234\\chrome-win64\\chrome.exe',
    headless: true,
    args: ['--no-sandbox']
  });
  const page = await browser.newPage();
  const errors = [];
  page.on('pageerror', err => errors.push(err.message));

  const pages = [
    { name: 'home', url: 'https://adude4554.github.io/trade-connect-site/' },
    { name: 'services', url: 'https://adude4554.github.io/trade-connect-site/#/services' },
    { name: 'about', url: 'https://adude4554.github.io/trade-connect-site/#/about' },
    { name: 'projects', url: 'https://adude4554.github.io/trade-connect-site/#/projects' },
    { name: 'contact', url: 'https://adude4554.github.io/trade-connect-site/#/contact' },
    { name: 'quote', url: 'https://adude4554.github.io/trade-connect-site/#/quote' },
    { name: 'areas', url: 'https://adude4554.github.io/trade-connect-site/#/areas' },
    { name: 'service-detail', url: 'https://adude4554.github.io/trade-connect-site/#/services/structural-maintenance' },
  ];

  // Desktop screenshots
  await page.setViewportSize({ width: 1920, height: 1080 });
  for (const p of pages) {
    await page.goto(p.url, { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(3000);
    await page.screenshot({ path: `screenshots/baseline-${p.name}-desktop.png`, fullPage: true });
    console.log(`Desktop: ${p.name}`);
  }

  // Mobile screenshots
  await page.setViewportSize({ width: 390, height: 844 });
  for (const p of [pages[0], pages[1], pages[5]]) {
    await page.goto(p.url, { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(2000);
    await page.screenshot({ path: `screenshots/baseline-${p.name}-mobile.png`, fullPage: true });
    console.log(`Mobile: ${p.name}`);
  }

  // Check all images on home page
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto(pages[0].url, { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(2000);
  
  const imgs = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('img')).map(img => ({
      src: img.src.substring(0, 80),
      w: img.naturalWidth,
      h: img.naturalHeight,
      ok: img.complete && img.naturalWidth > 0
    }));
  });
  
  const links = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('a[href]')).map(a => ({
      text: a.textContent.trim().substring(0, 40),
      href: a.getAttribute('href')
    }));
  });

  console.log('\n=== IMAGES ===');
  imgs.forEach(i => console.log(`${i.ok ? 'OK' : 'BROKEN'} ${i.w}x${i.h} ${i.src}`));
  
  console.log('\n=== LINKS ===');
  links.forEach(l => console.log(`${l.text} -> ${l.href}`));
  
  console.log('\n=== ERRORS ===');
  console.log(errors.length ? errors.join('\n') : 'None');

  await browser.close();
  console.log('\nDone!');
})().catch(e => { console.error('FATAL:', e.message); process.exit(1); });
