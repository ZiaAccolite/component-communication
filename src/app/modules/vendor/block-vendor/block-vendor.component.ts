import { Component, Input, OnInit } from '@angular/core';
import { Vendor } from '../vendor';

@Component({
  selector: 'app-block-vendor',
  templateUrl: './block-vendor.component.html',
  styleUrls: ['./block-vendor.component.scss']
})
export class BlockVendorComponent implements OnInit {

  @Input() blockedArray:Array<Vendor>=[];
  constructor() { }

  ngOnInit(): void {
  }

}
