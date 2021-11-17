import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoService } from './services/demo/demo.service';
import { ClientPageComponent } from './views/components/clients/client-page/client-page.component';
import { ClientFormComponent } from './views/components/clients/client-form/client-form.component';
import { SearchFormComponent } from './views/components/search/search-form/search-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ClientPageComponent,
    ClientFormComponent,
    SearchFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor(public demoservice: DemoService) {
    this.demoservice.printHello();
  }
}
