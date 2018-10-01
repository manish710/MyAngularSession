import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyFirstApp';
}

@Component({
  selector : 'app-root1',
  template : `<h1>{{mymsg}}</h1>`,
  styles : ['h1{color : blue}']
})

export class AppComponent1 {
  mymsg = 'My AppComponent1 Msg ....!';
}
