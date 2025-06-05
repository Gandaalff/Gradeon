import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AbstractMenuListenRouterChanges } from '../../utilis/abstract-menu-listen-router-changes';
import { MenuCollapse } from '../../services/menu-collapse';
import { Logo } from '../../../../core/ui/logo/logo';
import { NgClass } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { MatNavList, MatListItem } from '@angular/material/list';
import { MatDrawer, MatDrawerContainer } from '@angular/material/sidenav';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { LOGO_TYPE } from '../../../../core/utilis/logo-type.helper';
import { MENU_CONFIG } from '../../utilis/menu-config.helper';

@Component({
  selector: 'pr-mobile-side-menu',
  imports: [
    Logo,
    MatButtonModule,
    MatDrawer,
    MatDrawerContainer,
    MatIcon,
    MatListItem,
    MatNavList,
    NgClass,
    RouterLink,
  ],
  templateUrl: './mobile-side-menu.html',
  styleUrl: './mobile-side-menu.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MobileSideMenu extends AbstractMenuListenRouterChanges {
  protected readonly menuCollapseService = inject(MenuCollapse);

  protected logoTypeEnum = LOGO_TYPE;
  protected menuConfig = MENU_CONFIG;
}
