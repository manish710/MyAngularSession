import { Component } from '@angular/core';

@Component({
selector : 'app-mynew-msg',
template : `<h2>{{ mynewmsg }}</h2>`,
styles : ['h2{color : red}']
})

export class MyNewMessageComponent {
    mynewmsg = 'My New Msg ......!@#';
}
