import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CallbackComponent } from './callback/callback.component';
import { MenuComponent } from './menu/menu.component';
import { ContactComponent } from './contact/contact.component';
import { AgreementComponent } from './agreement/agreement.component';
import { SuggestComponent } from './suggest/suggest.component';
import { FaqComponent } from './faq/faq.component';

@NgModule({
  declarations: [
    AppComponent,
    CallbackComponent,
    MenuComponent,
    ContactComponent,
    AgreementComponent,
    SuggestComponent,
    FaqComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
