import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';

import { FormsModule } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';
import { NotfoundComponent } from './core/notfound/notfound.component';

import { ListsuggestionComponent } from './core/list-suggestion/list-suggestion.component';
import { provideHttpClient, withFetch } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    NotfoundComponent,
    ListsuggestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,   
    CommonModule, 
     
  ],
   providers: [
    provideClientHydration(),
    provideHttpClient(withFetch()),
  DatePipe ],
    
  bootstrap: [AppComponent]
})
export class AppModule { }