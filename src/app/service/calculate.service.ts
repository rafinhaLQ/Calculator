import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculateService {
  private _displayedNumber: string = '0';
  private _memory!: string;
  private _operator: string = '';
  private _justOperated: boolean = false;

  public getDisplayedNumber(): string {
    return this._displayedNumber;
  }

  public clearDisplayedNumber() {
    if (this._justOperated) {
      this._operator = '';
      this._justOperated = false;
    } else
      this._displayedNumber = '0';
  }

  public addDisplayedNumber(value: string): string {
    if (this._justOperated) {
      this._justOperated = false;
      this._memory = this._displayedNumber;
      return this._displayedNumber = value;
    }
    if (this._displayedNumber == '0')
      return this._displayedNumber = value;
    if (this._displayedNumber.length < 8)
      return this._displayedNumber += value;
    return '';
  }

  public clearAll() {
    this._displayedNumber = '0';
    this._memory = '';
    this._operator = ''
  }

  public setOperator(value: string) {
    this._operator = value;
    this._memory = this._displayedNumber;
    this._justOperated = true;
  }

  public equals() {
    let operationResult!: number;
    if (this._operator == '/') {
      operationResult = parseInt(this._memory) / parseInt(this._displayedNumber);
    } else if (this._operator == '-') {
      operationResult = parseInt(this._memory) - parseInt(this._displayedNumber);
    } else if (this._operator == '+') {
      operationResult = parseInt(this._memory) + parseInt(this._displayedNumber);
    }
    let sizeCheck = operationResult.toString();
    this._displayedNumber = sizeCheck.length > 8 ? 'ERR' : sizeCheck;
  }

}
