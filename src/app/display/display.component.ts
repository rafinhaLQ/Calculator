import { Component } from '@angular/core';
import { CalculateService } from '../service/calculate.service';

@Component({
  selector: 'app-display',
  template: `
    <div class="display">
      {{ getDisplayedNumber() }}
    </div>
  `,
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {
  constructor(private service: CalculateService) {}

  public getDisplayedNumber(): string {
    return this.service.getDisplayedNumber();
  }
}
