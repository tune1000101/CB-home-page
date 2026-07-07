import { chromium } from 'playwright';
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium', args: ['--use-gl=swiftshader', '--enable-webgl', '--ignore-gpu-blocklist'] });
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
await page.goto('http://localhost:5180', { waitUntil: 'networkidle' });
await page.waitForTimeout(1500);
const S = '/tmp/claude-0/-home-user-CB-home-page/f4c80ba2-2a98-57de-93e7-8d8ddb5b0833/scratchpad';
await page.locator('#booking').scrollIntoViewIfNeeded();
await page.waitForTimeout(800);
await page.locator('#booking button:not([disabled])', { hasText: /^20$/ }).first().click();
await page.waitForTimeout(400);
await page.locator('#booking button', { hasText: '2:00 PM' }).click();
await page.waitForTimeout(400);
await page.fill('#booking input[aria-label="Name"]', 'Test');
await page.fill('#booking input[aria-label="Email"]', 't@t.com');
await page.getByRole('button', { name: 'Request Meeting' }).click();
await page.waitForTimeout(500);
await page.screenshot({ path: `${S}/p-booking-done.png` });

const mob = await browser.newPage({ viewport: { width: 390, height: 844 } });
await mob.goto('http://localhost:5180', { waitUntil: 'networkidle' });
await mob.waitForTimeout(1500);
await mob.evaluate(() => {
  [...document.querySelectorAll('h2')].find(e => e.textContent.includes('What Our Clients Say'))?.scrollIntoView({ block: 'start' });
});
await mob.waitForTimeout(2000);
await mob.screenshot({ path: `${S}/p-mob-gallery.png` });
await browser.close();
