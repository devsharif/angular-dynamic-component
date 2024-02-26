import { Component, Input, OnInit } from '@angular/core';
import { Order } from 'src/app/model/Order';

@Component({
  selector: 'app-component-three',
  templateUrl: './component-three.component.html',
  styleUrls: ['./component-three.component.scss']
})
export class ComponentThreeComponent implements OnInit {

  @Input() order: Order;
  constructor() { }

  ngOnInit(): void {
  }

}
