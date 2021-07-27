import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datatypes',
  templateUrl: './datatypes.component.html',
  styleUrls: ['./datatypes.component.css']
})
export class DatatypesComponent implements OnInit {

  //declaring variable

  name:string="Sam";
  age:number;
  hobbies:string[];
  marks:Array<number>;
  Istrue:boolean;
  tupleval:[string,number,boolean];
  dynamicvalue:any;
  student:any;

  picture;

  constructor() {

      this.age=30;
      this.hobbies=["Playing","Singing"];
      this.marks=[90,78,65];
      this.Istrue=false;
      this.tupleval=["Pune",1000,true];
      this.dynamicvalue=80;
      this.student={fathername:"John",Address:"DMA Road,Pune-36"}
      this.picture="assets/images/toycar.jpg";
   }

  ngOnInit(): void {
  }

}
