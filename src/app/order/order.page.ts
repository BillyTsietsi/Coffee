import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,ParamMap} from '@angular/router';
import { CoffeeService } from '../coffee.service';
import { threadId } from 'worker_threads';

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})

export class OrderPage implements OnInit {
  ListCoffe;
  id;
  coffeeList
  cid;
  NewOrder;
  OrderNumber: number =0;
  Price: number =0;
  TotalQuantity: number = 0;
  ListOrder;
  totalprice;
  totPrice;

  constructor(public coffeeService:CoffeeService,public router:ActivatedRoute) { 
    this.ListCoffe= this.coffeeService.getMyCoffee()
    this.ListOrder= this.coffeeService.getMyOrder()
    //this.totPrice = this.coffeeService.countPrice(this.coffeeList)
  }

  addOrder(coId,cName,milk,suger,guantity,price,itemPrice){

    this.coffeeService.addOrder(coId,cName,milk,suger,guantity,price,itemPrice)
 
  }

 
  getID(id) {
    this.coffeeService.getID(id);
  
  }
  
  
  quantity_inc(coffeeList){
    this.coffeeService.quantity_inc(coffeeList);
    
       }
       
  quantity_dec(coffeeList){
    
    this.coffeeService.quantity_dec(coffeeList);
    
       }

    countPrice(){
      this.coffeeService.countPrice();
      console.log("My Total Price = " + this.countPrice());

    }   

  ngOnInit() {

    this.router.paramMap.subscribe(params => {
      this.cid = params.get('id');
      this.coffeeList = this.coffeeService.getID(this.cid);
      console.log(this.coffeeList);
    });
    console.log(this.cid);
    console.log("My coffee = " +this.coffeeList);
  }


  

  
  




}
