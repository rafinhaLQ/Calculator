import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator-body',
  template: `
    <div class="calculators-body">
      <h2 class="title">RAFINHALQ'S CALCULATOR</h2>
      <app-display></app-display>
      <app-buttons></app-buttons>
    </div>
  `,
  styleUrls: ['./calculator-body.component.css']
})
export class CalculatorBodyComponent {

}
