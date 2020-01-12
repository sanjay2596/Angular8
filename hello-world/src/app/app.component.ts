import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public colors= {
    "color1":"orange",
    "color2":"red",
    "color3":"green",
    "color4":"blue",
    "color5":"pink"
  };
  public amount = 5.678;
  public date = new Date();
  public message ="Hello world of PROGRAMMERS";
  constructor(){}
  ngOnInit(){

  }
}
