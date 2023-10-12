import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ProductListComponent } from './product-list/product-list.component'
import { ProductDetailComponent } from './product-detail/product-detail.component'
import { ProductCreateComponent } from './product-create/product-create.component'
import { HomeComponent } from './home/home.component'
import { HeaderComponent } from './header/header.component'
import { HttpClientModule } from '@angular/common/http'

@NgModule({
    declarations: [
        AppComponent,
        ProductListComponent,
        ProductDetailComponent,
        ProductCreateComponent,
        HomeComponent,
        HeaderComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
