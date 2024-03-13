import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import  {HomeComponent} from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
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
import { RealEstatesComponent } from './shared/homes/real-estates/real-estates.component';
import { PharmacyComponent } from './shared/Components/pharmacy/pharmacy.component';
import { GroceryComponent } from './shared/local-Market/grocery/grocery.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'; 
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
import { IonicModule } from '@ionic/angular';
import { AboutUsComponent } from './about/about-us/about-us.component';
import { AboutUsContentComponent } from './about/about-us-content/about-us-content.component';
import { AboutUsDescriptionComponent } from './about/about-us-description/about-us-description.component';
import { AboutUsTitleComponent } from './about/about-us-title/about-us-title.component';
import { FormComponent } from './shared/courier/form/form.component';
import { ServiceSectionComponent } from './shared/courier/service-section/service-section.component';
import { HeroCourierComponent } from './shared/courier/hero-courier/hero-courier.component';
import { NotFoundComponent } from './food/not-found/not-found.component';
import { SearchComponent } from './food/search/search.component';
import { TagsComponent } from './food/tags/tags.component';
import { FoodPageComponent } from './food/food-page/food-page.component';
import { CartPageComponent } from './food/cart-page/cart-page.component';
import { ResturantsComponent } from './food/resturants/resturants.component';
import { LocalMarketComponent } from './shared/local-Market/local-market/local-market.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    HeroComponent,
    BannerComponent,
    BlogComponent,
    CategoriesComponent,
    InstagramComponent,
    ProductComponent,
    NavbarComponent,
    FooterComponent,
    BusComponent,
    RealEstatesComponent,
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
  LocalMarketComponent

  ],

  imports: [
     BrowserModule,
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
     IonicModule.forRoot()
     
    
  ],
  providers: [
    provideAnimationsAsync(),
    ContactService,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
