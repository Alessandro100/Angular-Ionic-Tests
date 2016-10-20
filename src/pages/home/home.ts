import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {Auth, User, UserDetails, IDetailedError} from '@ionic/cloud-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user_model: {email: string, password: string, name: string};

  constructor(public navCtrl: NavController, public auth:Auth, public user:User) {
    this.user_model = {email: "", password: "", name:""};
  }

  newUser(email: string, password: string, name: string){
    let temp_user: UserDetails = {email: email, password: password, name:name};

    this.auth.signup(temp_user).then(() => {
      // `this.user` is now registered
      }, (err: IDetailedError<string[]>) => {
        for (let e of err.details) {
          if (e === 'conflict_email') {
            alert('Email already exists.');
          } else {
            // handle other errors
          }
      }
    });
  }
}
