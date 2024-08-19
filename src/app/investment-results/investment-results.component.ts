import { CommonModule } from '@angular/common';
import { Component, SimpleChanges } from '@angular/core';
import { Input } from '@angular/core';
import { CurrenecyValuePipe } from '../currenecy-value.pipe';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CommonModule, CurrenecyValuePipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {

  @Input() finalInvestmentsObj: { yearlyDataObj: { [key: number]: number[] } } = { yearlyDataObj: {} };
  
  ngOnInit() {
    console.log(`Initial investment data: ${JSON.stringify(this.finalInvestmentsObj)}`);
  }

  sortedData: { key: number; value: number[] }[] = [];

  ngOnChanges() {
    // Convert object to array and sort it by key
    this.sortedData = Object.entries(this.finalInvestmentsObj.yearlyDataObj)
      .map(([key, value]) => ({ key: Number(key), value }))
      .sort((a, b) => a.key - b.key); // Sort by key (year) to make sure that everything is organised in the rght order
  }

}
