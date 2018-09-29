import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent, AppComponent1 } from './app.component';
import { MyNewMessageComponent } from './mynew-message/mynew-message.component';

@NgModule({
  declarations: [
    AppComponent,
    AppComponent1,
    MyNewMessageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent, AppComponent1]
})
export class AppModule {

}
