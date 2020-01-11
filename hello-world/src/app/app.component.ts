import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public colors= ["orange","red","green","blue","pink"];
  constructor(){}
  ngOnInit(){

  }
}
