import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarModule } from 'ng-sidebar';



import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ShopComponent } from './shop/shop.component';
import { AboutComponent } from './about/about.component';

const appRoutes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'shop', component: ShopComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ShopComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      //{ enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
