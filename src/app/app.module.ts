import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountsComponent } from './accounts/accounts.component';
import { AddAccountComponent } from './add-account/add-account.component';
import { DisplayAccountComponent } from './display-account/display-account.component';
import { FormsModule } from '@angular/forms';
import { AccountService } from './Services/account.service';
import { LoggingService } from './Services/logging.service';

@NgModule({
  declarations: [
    AppComponent,
    AccountsComponent,
    AddAccountComponent,
    DisplayAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AccountService,LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
