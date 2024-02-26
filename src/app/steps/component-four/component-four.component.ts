import { Component, Input, OnInit } from '@angular/core';
import { Order } from 'src/app/model/Order';

@Component({
  selector: 'app-component-four',
  templateUrl: './component-four.component.html',
  styleUrls: ['./component-four.component.scss']
})
export class ComponentFourComponent implements OnInit {

  @Input() order: Order;
  constructor() { }

  ngOnInit(): void {
  }

}
