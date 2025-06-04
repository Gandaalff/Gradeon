import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Navbar } from '../../ui/navbar/navbar';
import { SideMenu } from '../../ui/side-menu/side-menu';
import { RouterOutlet } from '@angular/router';
import { MobileSideMenu } from '../../ui/mobile-side-menu/mobile-side-menu';

@Component({
  selector: 'pr-layout',
  imports: [Navbar, SideMenu, RouterOutlet, MobileSideMenu],
  templateUrl: './layout.html',
  styleUrls: ['./layout.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class LayoutComponent {}
