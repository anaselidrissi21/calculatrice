import { Component } from '@angular/core';

@Component({
selector: 'app-calculator',
templateUrl: './calculator.component.html',
styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
firstNumber: number = 0;
secondNumber: number = 0;
operator: string = '';
result: string = '';

calculate() {
    let result: number;
    switch (this.operator) {
      case '+':
        result = this.firstNumber + this.secondNumber;
        break;
      case '-':
        result = this.firstNumber - this.secondNumber;
        break;
      case '*':
        result = this.firstNumber * this.secondNumber;
        break;
      case '/':
        if (this.secondNumber !== 0) {
          result = this.firstNumber / this.secondNumber;
        } else {
          this.result = 'Error! Division by zero.';
          return;
        }
        break;
      default:
        this.result = 'Error! Invalid operator.';
        return;
    }
    this.result = 'Result: ' + result;
  }
}

