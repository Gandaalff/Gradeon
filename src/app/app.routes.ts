import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'app',
    loadComponent: () => import('./features/layout/view/layout/layout'),
    children: [
      {
        path: 'home',
        loadComponent: () => import('./features/home/views/home/home'),
      },
      {
        path: 'grades',
        loadComponent: () =>
          import('./features/grades/views/grades-list/grades-list'),
      },
    ],
  },
  {
    path: '',
    redirectTo: 'app/home',
    pathMatch: 'full',
  },
];
