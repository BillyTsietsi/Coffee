import { Component, OnInit } from '@angular/core';
import { CoffeeService } from '../coffee.service';

@Component({
  selector: 'app-coffee-list',
  templateUrl: './coffee-list.page.html',
  styleUrls: ['./coffee-list.page.scss'],
})
export class CoffeeListPage implements OnInit {
  ListCoffee;
  constructor( public coffeeService:CoffeeService) {
    this.ListCoffee= this.coffeeService.getMyCoffee()

   }

  ngOnInit() {
  }

}
