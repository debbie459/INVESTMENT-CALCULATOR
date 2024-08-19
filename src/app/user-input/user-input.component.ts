import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent {

  @Output() emittedValues = new EventEmitter

  initialInvestment: number = 0 ;
  annualInvestment: number  = 0;
  returnOnInvestment: number = 0 ;
  durationOfInvestment: number = 0;
  investedCapital: number = 0;
  totalInterest: number = 0;
  yearlyInterest: number = 0;
  investmentValue: number = 0;
  yearlyDataObj : {[key:number] : number[]} = {};
  year : number = 0;
  
  calculateInvestment() {

    console.log("Initial Investment:", this.initialInvestment, "type:", typeof this.initialInvestment);
    console.log("Annual Investment:", this.annualInvestment, "type:", typeof this.annualInvestment);
    console.log("Return on Investment:", this.returnOnInvestment, "type:", typeof this.returnOnInvestment);
    console.log("Duration of Investment:", this.durationOfInvestment, "type:", typeof this.durationOfInvestment);
  
    
    for (let i=0; i<this.durationOfInvestment;i++){

      this.year = i+1
      if (this.year === 1){
        this.investedCapital = this.initialInvestment + this.annualInvestment;
        this.yearlyInterest = (this.initialInvestment * this.returnOnInvestment * (this.durationOfInvestment/12)) / 100; 
        this.totalInterest += this.yearlyInterest;
        this.investmentValue = this.investedCapital + this.yearlyInterest
      }else{
        
        this.investedCapital += this.annualInvestment
        
        this.yearlyInterest = (this.investmentValue * this.returnOnInvestment * (this.durationOfInvestment/12)) / 100;

        this.totalInterest += this.yearlyInterest 
        
        this.investmentValue = this.investedCapital + this.totalInterest;
      
      }

      
      this.yearlyDataObj[this.year] = [this.year,this.investedCapital,this.totalInterest,this.yearlyInterest,this.investmentValue] //push the data to the object 

    }

    console.log(`The invested capital: ${this.investedCapital}, totalInterest: ${this.totalInterest}, yearly interest: ${this.yearlyInterest}, investment value: ${this.investmentValue}`);

    // Emit the calculated values
    this.emittedValues.emit({
      yearlyDataObj : this.yearlyDataObj
    });

    this.clearInputField()

  }


  clearInputField = ()=>{
    this.initialInvestment = 0
    this.annualInvestment = 0
    this.durationOfInvestment = 0
    this.returnOnInvestment = 0
  }
}
  
 
