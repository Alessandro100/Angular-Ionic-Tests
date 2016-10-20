import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import {CloudSettings, CloudModule} from '@ionic/cloud-angular';

const CLOUDSETTING: CloudSettings ={
  'core':{
    'app_id': '1f45a641'
  }
};

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(CLOUDSETTING)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: []
})
export class AppModule {}
