import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'docs-format',
  templateUrl: './format.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormatComponent {}
