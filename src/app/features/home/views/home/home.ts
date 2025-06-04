import { ChangeDetectionStrategy, Component } from '@angular/core';
import { WelcomeMessage } from "../../ui/welcome-message/welcome-message";

@Component({
  selector: 'pr-home',
  templateUrl: './home.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [WelcomeMessage],
})
export default class Home {}
