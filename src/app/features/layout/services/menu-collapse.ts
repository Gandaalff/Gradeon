import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MenuCollapse {
  public isMenuCollapsed = signal<boolean>(true);
}
