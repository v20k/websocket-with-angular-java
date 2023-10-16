import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormmComponent } from './formm/formm.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileeComponent } from './profilee/profilee.component';

@NgModule({
  declarations: [AppComponent, FormmComponent, ProfileeComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
