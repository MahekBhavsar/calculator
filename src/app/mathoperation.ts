import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class Mathoperation {
  display = '0';
  isFinished = false;

  solve() {
    try {
      return new Function(`return ${this.display}`)();
    } catch {
      return 'Error';
    }
  }

  // CLEAR ALL (AC)
  deleteAll() {
    this.display = '0';
    this.isFinished = false;
  }

  // DELETE LAST CHARACTER (⌫)
  deleteOne() {
    if (this.isFinished) {
      this.deleteAll();
      return;
    }

    // Remove last character
    this.display = this.display.trimEnd();

    if (this.display.length > 1) {
      this.display = this.display.slice(0, -1);
    } else {
      this.display = '0';
    }
  }
}
