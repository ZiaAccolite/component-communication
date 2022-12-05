import { Component, OnInit } from '@angular/core';
import { VENDORS } from 'src/app/modules/vendor/mock-vendors';
import { Vendor } from '../vendor';
import {Output,EventEmitter} from '@angular/core';
@Component({
  selector: 'app-active-vendor',
  templateUrl: './active-vendor.component.html',
  styleUrls: ['./active-vendor.component.scss']
})
export class ActiveVendorComponent implements OnInit {

  constructor() { }
  vendors=VENDORS;

  @Output() newVendorEvent=new EventEmitter<Vendor>();

  addNewBlockedVendor(value: Vendor){
    this.vendors=this.vendors.filter((val)=>val.id!==value.id)
    this.newVendorEvent.emit(value);

  }


  ngOnInit(): void {
  }
  
//was used on displaying in console.
  // blockedVendorList:Array<Vendor>=[];
  // onSelect( data: Vendor){
  //   this.blockedVendorList.push(data);
  //   console.log(this.blockedVendorList);
  //   console.log(data);

  // }
}
