import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { FooterComponent } from './components/footer/footer.component';
import { BlogComponent } from './components/blog/blog.component';
import { ProductComponent } from './components/product/product.component';
import { HeroComponent } from './components/hero/hero.component';
import { InstagramComponent } from './components/instagram/instagram.component';
import { BannerComponent } from './components/banner/banner.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { HeaderComponent } from './components/header/header.component';
import { BusComponent } from './shared/bus/bus.component';
import { GroceryComponent } from './shared/grocery/grocery.component';
import { PharmacyComponent } from './shared/pharmacy/pharmacy.component';
import { RealEstatesComponent } from './shared/real-estates/real-estates.component';
import { ResturantsComponent } from './shared/resturants/resturants.component';
import { FaqComponent } from './help/faq/faq.component';
import { PrivacyPolicyComponent } from './help/privacy-policy/privacy-policy.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'contact',component:ContactComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'about-us',component:AboutUsComponent},
  {path:'footer',component:FooterComponent},
  {path:'blog',component:BlogComponent},
  {path:'product',component:ProductComponent},
  {path:'hero',component:HeroComponent},
  {path:'instagram',component:InstagramComponent},
  {path:'banner',component:BannerComponent},
  {path:'categories',component:CategoriesComponent},
  {path:'header',component:HeaderComponent},
  {path:'bus',component:BusComponent},
  {path:'grocery',component:GroceryComponent},
  {path:'pharmacy',component:PharmacyComponent},
  {path:'real-estates',component:RealEstatesComponent},
  {path:'resturants',component:ResturantsComponent},
  {path:'faq',component:FaqComponent},
  {path:'privacy-policy',component:PrivacyPolicyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
