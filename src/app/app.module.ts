import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { DynamiceditComponent } from './Features/dynamicedit/dynamicedit.component';
import { UserModule } from './Features/user/user.module';

@NgModule({
  declarations: [AppComponent, DynamiceditComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule, UserModule],
  exports: [SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
