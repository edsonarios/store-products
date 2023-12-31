import { NgModule,
    CUSTOM_ELEMENTS_SCHEMA 
} from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { FormsModule } from '@angular/forms'

import { ProductListComponent } from './product-list/product-list.component'
import { ShoppingCartComponent } from './product-list/shopping-cart/shopping-cart.component'
import { ProductComponent } from './product-list/product/product.component'

import { ProductDetailComponent } from './product-detail/product-detail.component'
import { ProductCreateComponent } from './product-create/product-create.component'
import { ProductEditComponent } from './product-edit/product-edit.component'
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
import { PaginatorModule } from 'primeng/paginator'
import { MultiSelectModule } from 'primeng/multiselect'
import { PickListModule } from 'primeng/picklist'
import { OrderListModule } from 'primeng/orderlist'
import { InputTextModule } from 'primeng/inputtext'
import { CheckboxModule } from 'primeng/checkbox'
import { RadioButtonModule } from 'primeng/radiobutton'
import { SelectButtonModule } from 'primeng/selectbutton'
import { ImageModule } from 'primeng/image'
import { KeyFilterModule } from 'primeng/keyfilter'
import { ReactiveFormsModule } from '@angular/forms'
import { AutoCompleteModule } from 'primeng/autocomplete'
import { MessageService } from 'primeng/api'
import { ConfirmDialogModule } from 'primeng/confirmdialog'
import { ConfirmationService } from 'primeng/api'
import { SidebarModule } from 'primeng/sidebar'
import { DialogModule } from 'primeng/dialog'

@NgModule({
    declarations: [
        AppComponent,
        ProductListComponent,
        ShoppingCartComponent,
        ProductComponent,
        ProductDetailComponent,
        ProductCreateComponent,
        HomeComponent,
        HeaderComponent,
        ProductEditComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,        
        DataViewModule,
        RatingModule,
        ButtonModule,
        TagModule,
        BadgeModule,
        ToastModule,
        RippleModule,
        PaginatorModule,
        MultiSelectModule,
        PickListModule,
        OrderListModule,
        InputTextModule,
        CheckboxModule,
        RadioButtonModule,
        SelectButtonModule,
        ImageModule,
        KeyFilterModule,
        AutoCompleteModule,
        ConfirmDialogModule,
        SidebarModule,
        DialogModule
    ],
    providers: [
        MessageService,
        ConfirmationService
    ],
    bootstrap: [AppComponent],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class AppModule { }
