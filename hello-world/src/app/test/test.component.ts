import { Component, OnInit ,Input, Output , EventEmitter} from '@angular/core';



@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  @Input('parentData') public colors;

  @Output() public childEvent = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }
  fireEvent(){
    this.childEvent.emit("Hey Dude, WhatsUp!");
  }



}
