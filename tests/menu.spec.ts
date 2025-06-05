import test from '@playwright/test';
import { expect } from '@playwright/test';
test('isMenuVisible', async ({ page }) => {
  await page.goto('/app/home');
  await expect(
    page
      .locator('div')
      .filter({ hasText: /^homeleaderboard$/ })
      .nth(1)
  ).toBeVisible();
  await page.getByRole('button').filter({ hasText: 'menu' }).click();
  await expect(
    page
      .locator('div')
      .filter({ hasText: /^homeHomeleaderboardGrades$/ })
      .nth(1)
  ).toBeVisible();
});
