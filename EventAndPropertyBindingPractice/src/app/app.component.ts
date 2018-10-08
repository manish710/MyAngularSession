import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EventAndPropertyBindingPractice';

  cityList: string[] = ["Pune","Mumbai","Surat"]

  cityObjList = [
    {
      "code":"PN",
      "desc":"Pune"
    },
    {
      "code":"MB",
      "desc":"Mumbai"
    },
    {
      "code":"SRT",
      "desc":"Surat"
    }
  ];

  friendsList: string[] = ["Manish","Harshit","Nand"];

  selectedCity : string = '';
  
  addFriend(friendName: string) {
    this.friendsList.push(friendName);
  }

  delete(idx: number): void {
    this.friendsList.splice(idx, 1);
  }

  SetSelectedCity(city: string): void{
    this.selectedCity = city;
  }

}
