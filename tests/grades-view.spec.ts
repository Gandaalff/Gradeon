import test from '@playwright/test';
import { expect } from '@playwright/test';
test('isGradeViewVisible', async ({ page }) => {
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
  await page
    .getByRole('navigation')
    .locator('mat-list-item')
    .filter({ hasText: 'leaderboardGrades' })
    .click();
  await page.waitForURL(/\/app\/grades/);
  const currentURL = page.url();
  expect(currentURL).toMatch(/\/app\/grades/);
  await expect(
    page.locator('div').filter({ hasText: 'Grades listadd' }).nth(2)
  ).toBeVisible();
});
