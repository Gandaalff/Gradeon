import test from '@playwright/test';
import { expect } from '@playwright/test';
test('isNavbarVisible', async ({ page }) => {
  await page.goto('/app/home');
  await expect(page.getByText('menuaccount_circle')).toBeVisible();
});
