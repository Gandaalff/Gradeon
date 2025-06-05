import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'pr-welcome-message',
  imports: [MatCardModule],
  templateUrl: './welcome-message.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WelcomeMessage {}
