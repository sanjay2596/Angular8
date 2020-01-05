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
  public myId ="myTestId";
  public isDisabled ="true"
  public siteUrl =window.location.href;
  public successClass= "text-success";
  public hasError =false;
  public isSpecial = true;
  public messageClasses = {
      "text-success": !this.hasError,
      "text-warning": this.hasError,
      "text-special": this.isSpecial
  }
  public highlightcolor = "orange"
  constructor() { }

  ngOnInit() {
  }

  greetUser(){
    return "Hello" + this.name;
  }

}
