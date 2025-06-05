import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AbstractMenuListenRouterChanges } from '../../utilis/abstract-menu-listen-router-changes';
import { LOGO_TYPE } from '../../../../core/ui/utilis/logo-type.helper';
import { MenuCollapse } from '../../services/menu-collapse';
import { Logo } from '../../../../core/ui/logo/logo';
import { NgClass } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { MatNavList, MatListItem } from '@angular/material/list';
import { MatDrawer, MatDrawerContainer } from '@angular/material/sidenav';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'pr-mobile-side-menu',
  imports: [
    MatDrawer,
    MatDrawerContainer,
    MatIcon,
    Logo,
    MatNavList,
    MatListItem,
    MatButtonModule,
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
  protected menuConfig = [
    {
      name: 'Home',
      icon: 'home',
      path: '/app/home',
    },
    {
      name: 'Grades',
      icon: 'leaderboard',
      path: '/app/grades',
    },
  ];
}
