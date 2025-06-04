import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
} from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatDrawer, MatDrawerContainer } from '@angular/material/sidenav';
import { Logo } from '../../../../core/ui/logo/logo';
import { LOGO_TYPE } from '../../../../core/ui/utilis/logo-type.helper';
import { MatListItem, MatNavList } from '@angular/material/list';
import { MenuCollapse } from '../../services/menu-collapse';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AbstractMenuListenRouterChanges } from '../../utilis/abstract-menu-listen-router-changes';

@Component({
  selector: 'pr-side-menu',
  imports: [
    MatDrawer,
    MatDrawerContainer,
    MatIcon,
    Logo,
    MatNavList,
    MatListItem,
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
