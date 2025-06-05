import test from '@playwright/test';
import { expect } from '@playwright/test';
test('isGradesAddWork', async ({ page }) => {
  await page.goto('/app/grades');
  await expect(
    page.locator('div').filter({ hasText: 'Grades listadd' }).nth(2)
  ).toBeVisible();
  await page.getByRole('button').filter({ hasText: 'add' }).click();
  await expect(page.getByRole('heading', { name: 'Add Grade' })).toBeVisible();

  await page.getByRole('textbox', { name: 'Symbolic grade' }).fill('JPT');
  await page.getByLabel('Add Grade').getByText('Minimum percentage').fill('72');
  await page.getByRole('button', { name: 'Save' }).click();
  await expect(page.getByText('The grade has been edited')).toBeVisible();
});
