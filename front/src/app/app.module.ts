import { NgModule,
    CUSTOM_ELEMENTS_SCHEMA 
} from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

import { ProductListComponent } from './product-list/product-list.component'
import { FilterComponent } from './product-list/filter/filter.component'
import { ProductComponent } from './product-list/product/product.component'

import { ProductDetailComponent } from './product-detail/product-detail.component'
import { ProductCreateComponent } from './product-create/product-create.component'
import { HomeComponent } from './home/home.component'
import { HeaderComponent } from './header/header.component'
import { HttpClientModule } from '@angular/common/http'

import { DataViewModule } from 'primeng/dataview'
import { RatingModule } from 'primeng/rating'
import { ButtonModule } from 'primeng/button'
import { TagModule } from 'primeng/tag'
import { BadgeModule } from 'primeng/badge'
import { ToastModule } from 'primeng/toast'
import { RippleModule } from 'primeng/ripple'

@NgModule({
    declarations: [
        AppComponent,
        ProductListComponent,
        FilterComponent,
        ProductComponent,
        ProductDetailComponent,
        ProductCreateComponent,
        HomeComponent,
        HeaderComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpClientModule,
        DataViewModule,
        RatingModule,
        ButtonModule,
        TagModule,
        BadgeModule,
        ToastModule,
        RippleModule
    ],
    providers: [],
    bootstrap: [AppComponent],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class AppModule { }
