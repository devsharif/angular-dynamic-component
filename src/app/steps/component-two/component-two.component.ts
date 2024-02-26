import { Component, Input, OnInit } from '@angular/core';
import { Order } from 'src/app/model/Order';

@Component({
  selector: 'app-component-two',
  templateUrl: './component-two.component.html',
  styleUrls: ['./component-two.component.scss']
})
export class ComponentTwoComponent implements OnInit {

  @Input() order: Order;
  constructor() { }

  ngOnInit(): void {
  }

}
