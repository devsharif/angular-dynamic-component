import { Component, Input, OnInit } from '@angular/core';
import { Order } from 'src/app/model/Order';

@Component({
  selector: 'app-component-five',
  templateUrl: './component-five.component.html',
  styleUrls: ['./component-five.component.scss']
})
export class ComponentFiveComponent implements OnInit {

  @Input() order: Order;
  constructor() { }

  ngOnInit(): void {
  }

}
