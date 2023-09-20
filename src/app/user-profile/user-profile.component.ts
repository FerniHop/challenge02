import { Component } from '@angular/core';
class User {
  name: string = 'Doe';
  firstName: string = 'John';
  age: number = 25;
  quote: string = '';
  photo: string = 'https://randomuser.me/api/portraits/lego/2.jpg';
}
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})

export class UserProfileComponent {
  user: User = new User();
  ageHidden: boolean = false;

  buttonAge(){
    this.ageHidden = !this.ageHidden;
  }
}
