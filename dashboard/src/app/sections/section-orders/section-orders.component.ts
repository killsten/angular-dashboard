import { Component, OnInit } from '@angular/core';
import { Order } from '../../shared/order';
@Component({
  selector: 'app-section-orders',
  templateUrl: './section-orders.component.html',
  styleUrls: ['./section-orders.component.css']
})
export class SectionOrdersComponent implements OnInit {

  orders: Order[] = [
    {id: 1,customer:
           {id: 1, name: 'Main St Bakery', state: 'CO', email: 'mainst@example.com'},
           total: 230, placed: new Date(2019, 10, 1), fulfilled: new Date(2019, 10, 1)},
    {id: 2,customer:
           {id: 1, name: 'Main St Bakery', state: 'CO', email: 'mainst@example.com'},
           total: 230, placed: new Date(2019, 10, 1), fulfilled: new Date(2019, 10, 1)},
    {id: 3,customer:
          {id: 1, name: 'Main St Bakery', state: 'CO', email: 'mainst@example.com'},
          total: 230, placed: new Date(2019, 10, 1), fulfilled: new Date(2019, 10, 1)},
    {id: 4,customer:
          {id: 1, name: 'Main St Bakery', state: 'CO', email: 'mainst@example.com'},
          total: 230, placed: new Date(2019, 10, 1), fulfilled: new Date(2019, 10, 1)},
    {id: 5,customer:
          {id: 1, name: 'Main St Bakery', state: 'CO', email: 'mainst@example.com'},
          total: 230, placed: new Date(2019, 10, 1), fulfilled: new Date(2019, 10, 1)},
  ]

  constructor() { }

  

  ngOnInit() {
  }

}
