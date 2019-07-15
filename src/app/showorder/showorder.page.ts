import { Component, OnInit } from '@angular/core';
import { CoffeeService } from '../coffee.service';

@Component({
  selector: 'app-showorder',
  templateUrl: './showorder.page.html',
  styleUrls: ['./showorder.page.scss'],
})
export class ShoworderPage implements OnInit {
  
  ListOrder;
  constructor(public coffeeService:CoffeeService) {
    this.ListOrder= this.coffeeService.getMyOrder()

   }







  ngOnInit() {
  }

}
