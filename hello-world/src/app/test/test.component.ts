import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl:'./test.component.html',
  // styleUrls: ['./test.component.css']
  styles:[`
    div{
        color:red
    }
  `]
})
export class TestComponent implements OnInit {
  public name ="Arif";
  public siteUrl =window.location.href;
  constructor() { }

  ngOnInit() {
  }

  greetUser(){
    return "Hello" + this.name;
  }

}
