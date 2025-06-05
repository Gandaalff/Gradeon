import { Component, input } from '@angular/core';
import { LOGO_TYPE } from '../utilis/logo-type.helper';

@Component({
  selector: 'ws-logo',
  templateUrl: './logo.html',
  styleUrl: './logo.scss',
})
export class Logo {
  public logoType = input<LOGO_TYPE>(LOGO_TYPE.BRAND_LOGO);
  protected logoTypeEnum = LOGO_TYPE;
}
