import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

constructor(private http: HttpClient) {}

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
    if (!this.firstNumber || !this.secondNumber || !this.operator) {
      this.result = 'Error! Missing input';
      return;
    }

    const num1 = parseFloat(this.firstNumber);
    const num2 = parseFloat(this.secondNumber);
    const operator = this.operator;
    let url = `http://localhost:8080/api/`;

    switch (operator) {
      case '+':
        url += `add?num1=${num1}&num2=${num2}`;
        break;
      case '-':
        url += `subtract?num1=${num1}&num2=${num2}`;
        break;
      case '*':
        url += `multiply?num1=${num1}&num2=${num2}`;
        break;
      case '/':
        url += `divide?num1=${num1}&num2=${num2}`;
        break;
      default:
        this.result = 'Error! Invalid operator.';
        return;
    }

    this.http.get(url).subscribe(
      (response: any) => {
        this.result = response.toString();
        this.firstNumber = this.result;
        this.operator = '';
        this.secondNumber = '';
        this.waitingForSecondNumber = false;
      },
      (error) => {
        this.result = 'Error! ' + error.message;
      }
    );
  }
}


