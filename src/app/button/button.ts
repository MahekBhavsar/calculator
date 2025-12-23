import { Component, inject } from '@angular/core';
import { Mathoperation } from '../mathoperation';
import { Result } from '../result/result';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [Result],
  templateUrl: './button.html',
  styleUrl: './button.css'
})
export class Button {
  public calc = inject(Mathoperation);

  number(n: number) {
    if (this.calc.isFinished) {
      this.calc.deleteAll();
    }

    if (this.calc.display === '0') {
      this.calc.display = n.toString();
    } else {
      this.calc.display += n.toString();
    }
  }

  operator(symbol: string) {
    if (this.calc.isFinished) {
      this.calc.deleteAll();
    }

    this.calc.display += ` ${symbol} `;
  }

  equal() {
    if (this.calc.isFinished || this.calc.display === '0') return;

    const result = this.calc.solve();
    this.calc.display = `${this.calc.display} = ${result}`;
    this.calc.isFinished = true;
  }

  clear() {
    this.calc.deleteAll();
  }

  deleteOne() {
    this.calc.deleteOne();
  }
}
