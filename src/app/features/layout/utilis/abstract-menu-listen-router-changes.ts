import { Directive, inject, DestroyRef, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router } from '@angular/router';

@Directive()
export abstract class AbstractMenuListenRouterChanges {
  protected readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);
  protected activatedRoute = signal<string>('');

  constructor() {
    this.listenOnRouteChanges();
  }

  private listenOnRouteChanges(): void {
    this.router.events.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.activatedRoute.set(event.urlAfterRedirects);
      }
    });
  }
}
