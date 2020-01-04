import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-test',
  selector: '.app-test',
  // selector: '[app-test]',
  // templateUrl: './test.component.html',
  template:'<div>This is inline template instead of external template file</div>',
  // styleUrls: ['./test.component.css']
  styles:[`
    div{
        color:red
    }
  `]
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
