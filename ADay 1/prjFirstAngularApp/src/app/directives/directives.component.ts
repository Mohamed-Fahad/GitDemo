import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  constructor() { }

  employee:any[]=[{"name":"Sibi","age":"20","dept":"HR"},
                  {"name":"Bro","age":"20","dept":"Admin"},
                  {"name":"Hawk","age":"20","dept":"UI"}];

  
  cars: any[]=[{"name":"Toyota T1","mfdyear":"2015","color":"Red"},
  {"name":"Hyundai H1","mfdyear":"2018","color":"Blue"},
  {"name":"Mercedes M1","mfdyear":"2019","color":"Green"},
  {"name":"Maserati M2","mfdyear":"2019","color":"Yellow"}];

  ngOnInit(): void {
  }

}
