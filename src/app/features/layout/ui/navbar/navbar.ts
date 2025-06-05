import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatToolbar } from '@angular/material/toolbar';
import { MenuCollapse } from '../../services/menu-collapse';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'pr-navbar',
  imports: [MatIcon, MatIconButton, MatMenuModule, MatToolbar],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Navbar {
  protected readonly menuCollapseService = inject(MenuCollapse);

  protected collapseMenu(): void {
    this.menuCollapseService.isMenuCollapsed.update(isCollapsed => {
      return !isCollapsed;
    });
  }
}
