import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'demo-disabling',
  templateUrl: './disabling.component.html',
  styles: `
    .mat-mdc-form-field {
      display: block;
      width: max-content;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisablingComponent {}
