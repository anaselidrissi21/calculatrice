import { Component } from '@angular/core';

@Component({
selector: 'app-calculator',
templateUrl: './calculator.component.html',
styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
firstNumber: string = '';
secondNumber: string = '';
operator: string = '';
result: string = '0';
waitingForSecondNumber: boolean = false;

appendNumber(number: string) {
    if (this.waitingForSecondNumber) {
      this.secondNumber += number;
      this.result = this.secondNumber;
    } else {
      this.firstNumber += number;
      this.result = this.firstNumber;
    }
  }

  setOperation(operator: string) {
    if (this.firstNumber === '') return;
    this.operator = operator;
    this.waitingForSecondNumber = true;
    this.result = this.operator;
  }

  appendDot() {
    if (this.waitingForSecondNumber) {
      if (this.secondNumber.includes('.')) return;
      this.secondNumber += '.';
      this.result = this.secondNumber;
    } else {
      if (this.firstNumber.includes('.')) return;
      this.firstNumber += '.';
      this.result = this.firstNumber;
    }
  }

  clear() {
    this.firstNumber = '';
    this.secondNumber = '';
    this.operator = '';
    this.result = '0';
    this.waitingForSecondNumber = false;
  }

  calculate() {
    let computation: number;
    const prev = parseFloat(this.firstNumber);
    const current = parseFloat(this.secondNumber);
    if (isNaN(prev) || isNaN(current)) return;

    switch (this.operator) {
      case '+':
        computation = prev + current;
        break;
      case '-':
        computation = prev - current;
        break;
      case '*':
        computation = prev * current;
        break;
      case '/':
        computation = prev / current;
        break;
      default:
        return;
    }

    this.result = computation.toString();
    this.firstNumber = this.result;
    this.operator = '';
    this.secondNumber = '';
    this.waitingForSecondNumber = false;
  }
}

