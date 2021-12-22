import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  stuffedArray: number[] = [];
  destuffedArray: number[] = [];
  userInput: number[]= [1,1,1,1,1,1];

  ngOnInit(): void {
    this.printStuffedBit();
  }
  
  printStuffedBit(): void {
    let i = 0,j = 0;
    let count = 1;
    while(i < this.userInput.length) {
      if (this.userInput[i] == 1) {
        this.stuffedArray[j] = this.userInput[i];
        for (let k = i + 1; this.userInput[k] == 1 && k < this.userInput.length && count < 5; k++) {
          j++;
          this.stuffedArray[j] = this.userInput[k];
          count++;
          if (count == 5) {
              j = j + 1;
              this.stuffedArray[j] = 0;
          }
          i = k;
        }
      }
      else {
        this.stuffedArray[j] = this.userInput[i];
      }
      i++;
      j++;
    }
    console.log(this.stuffedArray)
    this.printDestuffedBit()
  }

  printDestuffedBit(): void {
    let i=0, j=0, count=1;
    while (i < this.stuffedArray.length) {
        if (this.stuffedArray[i] == 1) {
            this.destuffedArray[j] = this.stuffedArray[i];
            for (let k = i + 1; k < this.stuffedArray.length && this.stuffedArray[k] == 1 && count < 5; k++) {
                j++;
                this.destuffedArray[j] = this.stuffedArray[k];
                count++;
                if (count == 5) {
                    k++;
                }
                i = k;
              }
            }
        else {
            this.destuffedArray[j] = this.stuffedArray[i];
          }
        i++;
        j++;
      }
    console.log(this.destuffedArray)
    }
}
