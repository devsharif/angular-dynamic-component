import { Component, Input, OnInit } from '@angular/core';
import { Order } from 'src/app/model/Order';

@Component({
  selector: 'app-component-one',
  templateUrl: './component-one.component.html',
  styleUrls: ['./component-one.component.scss']
})
export class ComponentOneComponent implements OnInit {

  
  // oneorder: Order = new Order()
  constructor() { }

  @Input() order: Order;

  ngOnInit(): void {
    console.log(this.order);
  }

}
