import { Component, OnInit } from '@angular/core';
import { Vendor } from './vendor';
@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.scss']
})
export class VendorComponent implements OnInit {

  constructor() { }
  
  currentItem='Television';
  blockedVendorList:Array<Vendor>=[];
  addToBlockedVendorList(newItem:Vendor){
      console.log("oauauu")
      console.log(newItem);
      const checkIfPresent=this.blockedVendorList.some((item)=>item.id===newItem.id)
      if(checkIfPresent)
      alert("already blocked")
      else
      this.blockedVendorList.push(newItem);
      console.log(this.blockedVendorList);
  }
  // addToBlockedVendorList(newItem:string){
  //   console.log(newItem);
  // }

  ngOnInit(): void {
  }

}
