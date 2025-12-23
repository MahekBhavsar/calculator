import { Component, inject } from '@angular/core';
import { Mathoperation } from '../mathoperation';

@Component({
  selector: 'app-result',
  standalone: true,   // ✅ REQUIRED
  templateUrl: './result.html',
  styleUrl: './result.css',
})
export class Result {
  public calc = inject(Mathoperation); 
}
