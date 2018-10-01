import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent, AppComponent1 } from './app.component';
import { MyNewMessageComponent } from './mynew-message/mynew-message.component';
import {FailureMessageComponent} from './failure-message/failure-message.component';

@NgModule({
  declarations: [
    AppComponent,
    AppComponent1,
    MyNewMessageComponent,
    FailureMessageComponent
   ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent, AppComponent1]
})
export class AppModule {

}
