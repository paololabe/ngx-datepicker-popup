import { BsDropdownDirective } from 'ngx-bootstrap/ng2-bootstrap';
import { BsDropdownContainerComponent } from 'ngx-bootstrap/dropdown';
import { Input, Output, ViewChild } from '@angular/core';
import { Component, OnInit, EventEmitter } from '@angular/core';

import * as moment from 'moment';

@Component({
  selector: 'date-popup',
  templateUrl: './date-popup.component.html',
  styleUrls: ['./date-popup.component.css']
})
export class DatePopupComponent implements OnInit {

  @ViewChild(BsDropdownDirective) dpdown: BsDropdownDirective;

  @Input() name: string;
  @Input() placeholder: string;
  @Input() dt: Date;
  @Output() dtChange= new EventEmitter<Date>();

  

  constructor() { }

  ngOnInit() {
  //this.dt=this.date;
}

  changed(selectedValue){
    console.log(selectedValue);
  }

  selected(selectedValue){
    
    console.log("selected",selectedValue);
    let m=moment(selectedValue);
    let d=new Date(m.utc().format());
    this.dtChange.emit(d);
    this.hide();
  }
  hide(){
    this.dpdown.hide();
  }

}