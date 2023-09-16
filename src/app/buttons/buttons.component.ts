import { Component } from '@angular/core';
import { CalculateService } from '../service/calculate.service';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent {
  constructor(private calculateService: CalculateService) {}
  
  public addNumber(value: string) {
    this.calculateService.addDisplayedNumber(value);
  }

  public clearNumber() {
    this.calculateService.clearDisplayedNumber();
  }

  public clearAll() {
    this.calculateService.clearAll();
  }

  public setOperator(value: string) {
    this.calculateService.setOperator(value);
  }

  public equals() {
    this.calculateService.equals();
  }

}
