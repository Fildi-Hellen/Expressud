import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { BlogComponent } from './components/blog/blog.component';
import { ProductComponent } from './components/product/product.component';
import { HeroComponent } from './components/hero/hero.component';
import { InstagramComponent } from './components/instagram/instagram.component';
import { BannerComponent } from './components/banner/banner.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { HeaderComponent } from './components/header/header.component';
import { BusComponent } from './shared/courier/bus/bus.component';
import { GroceryComponent } from './shared/local-Market/grocery/grocery.component';
import { PharmacyComponent } from './shared/Components/pharmacy/pharmacy.component';
import { FaqComponent } from './help/faq/faq.component';
import { PrivacyPolicyComponent } from './help/privacy-policy/privacy-policy.component';
import { AboutUsComponent } from './about/about-us/about-us.component';
import { AboutUsContentComponent } from './about/about-us-content/about-us-content.component';
import { AboutUsTitleComponent } from './about/about-us-title/about-us-title.component';
import { AboutUsDescriptionComponent } from './about/about-us-description/about-us-description.component';
import { ServiceSectionComponent } from './shared/courier/service-section/service-section.component';
import { FormComponent } from './shared/courier/form/form.component';
import { HeroCourierComponent } from './shared/courier/hero-courier/hero-courier.component';
import { ResturantsComponent } from './components/partials/resturants/resturants.component';
import { LocalMarketComponent } from './shared/local-Market/local-market/local-market.component';
import { NotFoundComponent } from './components/partials/not-found/not-found.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { FoodPageComponent } from './pages/food-page/food-page.component';
import { CheckoutPageComponent } from './pages/checkout-page/checkout-page.component';
import { OrderTrackPageComponent } from './pages/order-track-page/order-track-page.component';
import { PaymentPageComponent } from './pages/payment-page/payment-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { BakeryComponent } from './shared/Components/bakery/bakery.component';
import { HairComponent } from './shared/Components/hair/hair.component';
import { FurnituresComponent } from './shared/homes/furnitures/furnitures.component';
import { SweetsComponent } from './shared/local-Market/sweets/sweets.component';
import { BoutiqueComponent } from './shared/Components/boutique/boutique.component';
import { CosmeticComponent } from './shared/Components/cosmetic/cosmetic.component';
import { RealEstatesComponent } from './shared/homes/real-estates/real-estates.component';
import { AuthGuard } from './auth/guards/auth.guard';



const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'contact',component:ContactComponent},
  {path:'navbar',component:NavbarComponent},
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
  {path:'faq',component:FaqComponent},
  {path:'privacy-policy',component:PrivacyPolicyComponent},
  {path:'about-us',component:AboutUsComponent},
  {path:'about-us-content',component:AboutUsContentComponent},
  {path:'about-us-title',component:AboutUsTitleComponent},
  {path:'about-us-description',component:AboutUsDescriptionComponent},
  {path:'hero-courier',component:HeroCourierComponent},
  {path:'service-section',component:ServiceSectionComponent},
  {path:'form',component:FormComponent},
  {path:'search/:searchTerm', component:ResturantsComponent},
  {path:'tag/:tag', component:ResturantsComponent},
  {path:'cart-page',component:CartPageComponent},
  {path:'not-found',component:NotFoundComponent},
  {path:'lists/id',component:FoodPageComponent},
  {path:'resturants',component:ResturantsComponent},
  {path:'local-market',component:LocalMarketComponent},
  {path:'food/:id', component:FoodPageComponent},
  {path:'cart-page', component: CartPageComponent},
  {path:'login', component: LoginPageComponent},
  {path:'register', component: RegisterPageComponent},
  {path:'bakery',component:BakeryComponent},
  {path:'hair',component:HairComponent},
  {path:'furniture',component:FurnituresComponent},
  {path:'real-estates',component:RealEstatesComponent},
  {path:'sweet',component:SweetsComponent},
  {path:'boutique',component:BoutiqueComponent},
  {path:'cosmetic',component:CosmeticComponent},
  
  {path:'checkout', component: CheckoutPageComponent, canActivate:[AuthGuard]},
  {path:'payment', component: PaymentPageComponent, canActivate:[AuthGuard]},
  {path:'track/:orderId', component: OrderTrackPageComponent, canActivate:[AuthGuard]},

  // { path: 'featured', loadChildren: () => import('./routes/featured/featured.module').then(m => m.FeaturedModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
