import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import  {HomeComponent} from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { BlogComponent } from './components/blog/blog.component';
import { InstagramComponent } from './components/instagram/instagram.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { BannerComponent } from './components/banner/banner.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { ProductComponent } from './components/product/product.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ResturantsComponent } from './shared/resturants/resturants.component';
import { BusComponent } from './shared/bus/bus.component';
import { RealEstatesComponent } from './shared/real-estates/real-estates.component';
import { PharmacyComponent } from './shared/pharmacy/pharmacy.component';
import { GroceryComponent } from './shared/grocery/grocery.component';
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



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    HeroComponent,
    BannerComponent,
    BlogComponent,
    CategoriesComponent,
    ContactComponent,
    InstagramComponent,
    ProductComponent,
    NavbarComponent,
    AboutUsComponent,
    FooterComponent,
    ResturantsComponent,
    BusComponent,
    RealEstatesComponent,
    PharmacyComponent,
    GroceryComponent,
    FaqComponent,
    PrivacyPolicyComponent

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
     MatExpansionModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
