import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'order/:id', loadChildren: './order/order.module#OrderPageModule' },
  { path: 'coffee-list', loadChildren: './coffee-list/coffee-list.module#CoffeeListPageModule' },
  { path: 'showorder', loadChildren: './showorder/showorder.module#ShoworderPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
