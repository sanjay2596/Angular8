import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl:'./test.component.html',
  // styleUrls: ['./test.component.css']
  styles:[`
    div{
        color:red
    }
    .text-success{
      color:green
    }
    .text-warning{
      color:red
    }
    .text-info{
      color:gold
    }
    .text-special{
      font-style:italic
    }
  `]
})
export class TestComponent implements OnInit {
  public name ="Arif";
 
  constructor() { }

  ngOnInit() {
  }

 
  logMessage(value){
    console.log(value);
   
  }

}
