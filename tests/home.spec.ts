import test from '@playwright/test';
import { expect } from '@playwright/test';
test('isHomeVisible', async ({ page }) => {
  await page.goto('/app/home');
  await expect(
    page.locator('div').filter({ hasText: 'Welcome to Gradeon – the' }).nth(2)
  ).toBeVisible();
});
