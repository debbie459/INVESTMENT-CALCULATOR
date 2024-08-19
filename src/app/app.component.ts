import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { UserInputComponent } from "./user-input/user-input.component";
import { InvestmentResultsComponent } from "./investment-results/investment-results.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UserInputComponent, InvestmentResultsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  investmentValuesObj : any

  receivedInvestmentValues(event: any){
    this.investmentValuesObj = event
    // console.log(`value received is : ${this.investmentValuesObj}, ${this.investmentValuesObj.investedCapital}, ${this.investmentValuesObj.totalInterest}`)
    
  }
}
