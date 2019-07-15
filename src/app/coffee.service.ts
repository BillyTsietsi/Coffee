import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {

 
  Price : number = 0;
  ItemPrice: number =0;
  MyCoffee = [
    {id: '1',coffeName:  'CAPPUCCINO',price: '45',quantity : 0,pic : '/assets/Cappuccino.jpg'},
    {id: '2',coffeName:  'ESPRESSO',price: '30',quantity : 0,pic : '/assets/espresso.jpg'},
    {id: '3',coffeName:  'LATTE',price: '28',quantity : 0,pic : '/assets/lattes.jpg'},
    {id: '4',coffeName:  'MACCHIATO',price: '35',quantity : 0,pic : '/assets/MACCHIATO.jpg'}
  ]
  MyOrder = []

  constructor() { }

  addOrder(coId,cName,milk,suger,guantity,price,itemPrice){
    

    this.MyOrder.push({id:coId,coffeeName:cName,newMilk:milk,newSuger:suger,Newquantity:guantity,NewPrice:price,NewItemPrice:itemPrice})
    console.log("My Order = " +this.MyOrder);

   
   }


   

  getMyCoffee() {

    return this.MyCoffee;
}
getMyOrder() {

  return this.MyOrder;
}

getID(id){
  for (let i = 0; i => this.MyCoffee.length; i++) {
   if(this.MyCoffee[i].id === id) {

 return this.MyCoffee[i];
   }
  }
}

quantity_inc(coffeeList){
  
    coffeeList.quantity++
    this.Price += coffeeList.price 
    coffeeList.ItemPrice = coffeeList.price * coffeeList.quantity
  
   }

   quantity_dec(coffeeList){

    if(coffeeList.quantity == 0){
      return alert("Please add Your Coffee ")
    }
    coffeeList.quantity--
    //this.Price -= coffeeList.price
    coffeeList.ItemPrice= coffeeList.price * coffeeList.quantity
      
}

countPrice(){
  this.Price = 0;

   for(let p of this.MyCoffee){
     this.Price += +p.price*p.quantity

   }
}



}
