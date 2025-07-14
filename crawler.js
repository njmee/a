import { chromium } from 'playwright';

export default async function crawl(url) {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto(url, { timeout: 15000 });
  await page.waitForTimeout(3000);

  const name = await page.title();
  const email = await page.evaluate(() => {
    const m = document.querySelector("a[href^='mailto']");
    return m ? m.href.replace('mailto:', '') : null;
  });
  const image = await page.evaluate(() => {
    const img = document.querySelector('img');
    return img ? img.src : null;
  });

  await browser.close();
  return { name, email, image };
}