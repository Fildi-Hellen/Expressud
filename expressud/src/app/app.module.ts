import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import  {HomeComponent} from './components/home/home.component';
import { InstagramComponent } from './components/instagram/instagram.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { BannerComponent } from './components/banner/banner.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { ProductComponent } from './components/product/product.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BusComponent } from './shared/courier/bus/bus.component';
import { PharmacyComponent } from './shared/Components/pharmacy/pharmacy.component';
import { GroceryComponent } from './shared/local-Market/grocery/grocery.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {VgCoreModule} from '@videogular/ngx-videogular/core';
import {VgControlsModule} from '@videogular/ngx-videogular/controls';
import {VgOverlayPlayModule} from '@videogular/ngx-videogular/overlay-play';
import {VgBufferingModule} from '@videogular/ngx-videogular/buffering';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FaqComponent } from './help/faq/faq.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatExpansionModule } from '@angular/material/expansion';
import { PrivacyPolicyComponent } from './help/privacy-policy/privacy-policy.component';
import { ContactComponent } from './components/contact/contact.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { ContactService } from './contact.service';
import { AboutUsComponent } from './about/about-us/about-us.component';
import { AboutUsContentComponent } from './about/about-us-content/about-us-content.component';
import { AboutUsDescriptionComponent } from './about/about-us-description/about-us-description.component';
import { AboutUsTitleComponent } from './about/about-us-title/about-us-title.component';
import { FormComponent } from './shared/courier/form/form.component';
import { ServiceSectionComponent } from './shared/courier/service-section/service-section.component';
import { HeroCourierComponent } from './shared/courier/hero-courier/hero-courier.component';
import { FoodPageComponent } from './pages/food-page/food-page.component';
import { ResturantsComponent } from './components/partials/resturants/resturants.component';
import { LocalMarketComponent } from './shared/local-Market/local-market/local-market.component';
import { ToastrModule } from 'ngx-toastr';
import { InputContainerComponent } from './components/partials/input-container/input-container.component';
import { InputValidationComponent } from './components/partials/input-validation/input-validation.component';
import { TextInputComponent } from './components/partials/text-input/text-input.component';
import { DefaultButtonComponent } from './components/partials/default-button/default-button.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { LoadingComponent } from './components/partials/loading/loading.component';
import { CheckoutPageComponent } from './pages/checkout-page/checkout-page.component';
import { OrderItemsListComponent } from './components/partials/order-items-list/order-items-list.component';
import { MapComponent } from './components/partials/map/map.component';
import { PaymentPageComponent } from './pages/payment-page/payment-page.component';
import { PaypalButtonComponent } from './components/partials/paypal-button/paypal-button.component';
import { StarRatingComponent } from './components/partials/star-rating/star-rating.component';
import { OrderTrackPageComponent } from './pages/order-track-page/order-track-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { NotFoundComponent } from './components/partials/not-found/not-found.component';
import { SearchComponent } from './components/partials/search/search.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { TagsComponent } from './components/partials/tags/tags.component';
import { RealEstatesComponent } from './shared/homes/real-estates/real-estates.component';
import { SweetsComponent } from './shared/local-Market/sweets/sweets.component';
import { HairComponent } from './shared/Components/hair/hair.component';
import { FurnituresComponent } from './shared/homes/furnitures/furnitures.component';
import { CosmeticComponent } from './shared/Components/cosmetic/cosmetic.component';
import { BakeryComponent } from './shared/Components/bakery/bakery.component';
import { BoutiqueComponent } from './shared/Components/boutique/boutique.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { LoadingInterceptor } from './Shared1/interceptors/loading.interceptor';
import { TitleComponent } from './components/partials/title/title.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { AddressComponent } from './components/address/address.component';
import { BlogComponent } from './Blog/blog/blog.component';
import { BlogDetailsComponent } from './Blog/blog-details/blog-details.component';
import { CreateBlogComponent } from './Blog/create-blog/create-blog.component';
import { EditBlogComponent } from './Blog/edit-blog/edit-blog.component';
import { AlcoholsComponent } from './shared/Components/alcohols/alcohols.component';
;




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    HeroComponent,
    BannerComponent,
    CategoriesComponent,
    InstagramComponent,
    ProductComponent,
    NavbarComponent,
    FooterComponent,
    BusComponent,
    PharmacyComponent,
    GroceryComponent,
    FaqComponent,
    PrivacyPolicyComponent,
   ContactComponent,
   AboutUsComponent,
   AboutUsContentComponent,
   AboutUsDescriptionComponent,
   AboutUsTitleComponent,
   FormComponent,
   ServiceSectionComponent,
  HeroCourierComponent,
  NotFoundComponent,
  SearchComponent,
  TagsComponent,
  FoodPageComponent,
  CartPageComponent,
 ResturantsComponent,
  LocalMarketComponent,
  LoginPageComponent,
    InputContainerComponent,
    InputValidationComponent,
    TextInputComponent,
    DefaultButtonComponent,
    RegisterPageComponent,
    LoadingComponent,
    CheckoutPageComponent,
    OrderItemsListComponent,
    MapComponent,
    PaymentPageComponent,
    PaypalButtonComponent,
    OrderTrackPageComponent,
    StarRatingComponent,
    SweetsComponent,
    HairComponent,
    FurnituresComponent,
    CosmeticComponent,
    BakeryComponent,
    RealEstatesComponent,
    BoutiqueComponent,
    TitleComponent,
    LandingPageComponent,
    AddressComponent,
    BlogComponent,
    BlogDetailsComponent,
    CreateBlogComponent,
    EditBlogComponent,
    AlcoholsComponent,
    MapComponent

  ],

  imports: [
     BrowserModule,
     BrowserAnimationsModule,
     NgbModule,
     BrowserModule,
     AppRoutingModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
     VgBufferingModule,
     SlickCarouselModule,
     HttpClientModule,
     BrowserAnimationsModule,
     MatExpansionModule,
     FontAwesomeModule,
     ReactiveFormsModule,
     FormsModule,
     ToastrModule.forRoot({
      timeOut:3000,
      positionClass:'toast-bottom-right',
      newestOnTop:false
    })
  
     
    
  ],
  providers: [
    provideAnimationsAsync(),
    ContactService,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    {provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi: true },
    {provide:HTTP_INTERCEPTORS, useClass:LoadingInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
