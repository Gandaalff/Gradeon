import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatDrawer, MatDrawerContainer } from '@angular/material/sidenav';
import { Logo } from '../../../../core/ui/logo/logo';
import { MatListItem, MatNavList } from '@angular/material/list';
import { MenuCollapse } from '../../services/menu-collapse';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AbstractMenuListenRouterChanges } from '../../utilis/abstract-menu-listen-router-changes';
import { MENU_CONFIG } from '../../utilis/menu-config.helper';
import { LOGO_TYPE } from '../../../../core/utilis/logo-type.helper';

@Component({
  selector: 'pr-side-menu',
  imports: [
    Logo,
    MatDrawer,
    MatDrawerContainer,
    MatIcon,
    MatListItem,
    MatNavList,
    NgClass,
    RouterLink,
  ],
  templateUrl: './side-menu.html',
  styleUrl: './side-menu.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideMenu extends AbstractMenuListenRouterChanges {
  protected readonly menuCollapseService = inject(MenuCollapse);
  protected logoTypeEnum = LOGO_TYPE;
  protected menuConfig = MENU_CONFIG;
}
