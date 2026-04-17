import { test, expect } from '@playwright/test';

test.describe('Automation Workflow Templates homepage', () => {
  test('page loads with headline visible', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('h1')).toContainText(/automate|code|business/i);
  });

  test('email form is present', async ({ page }) => {
    await page.goto('/');
    const emailInput = page.locator('input[type="email"]').first();
    await expect(emailInput).toBeVisible();
  });

  test('email form submits and shows success', async ({ page }) => {
    await page.route('**/api/waitlist', (route) =>
      route.fulfill({ status: 200, body: JSON.stringify({ ok: true }), contentType: 'application/json' })
    );

    await page.goto('/');
    const emailInput = page.locator('input[type="email"]').first();
    await emailInput.fill('test@example.com');

    await Promise.any([
      page.click('input[type="submit"]').catch(() => {}),
      page.click('button[type="submit"]').catch(() => {}),
    ]);

    // Success: "You're on the list! 🎉"
    await expect(page.locator('text=/on the list/i').first()).toBeVisible({ timeout: 8_000 });
  });

  test('workflow tool names are visible', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('text=/n8n|make|zapier/i').first()).toBeVisible();
  });

  test('page has no 4xx internal links', async ({ page }) => {
    await page.goto('/');
    const links = await page.locator('a[href^="/"]').all();
    const hrefs = await Promise.all(links.map((l) => l.getAttribute('href')));
    for (const href of hrefs) {
      if (!href) continue;
      const res = await page.request.get(href);
      expect(res.status(), `Broken link: ${href}`).toBeLessThan(400);
    }
  });
});
