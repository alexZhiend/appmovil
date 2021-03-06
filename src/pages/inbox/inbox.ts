import { NuevocorreoPage } from './../nuevocorreo/nuevocorreo';
import { Correos } from './../../providers/correos/correos';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { CorreoPage } from './../correo/correo';

@IonicPage()
@Component({
  selector: 'page-inbox',
  templateUrl: 'inbox.html',
})
export class InboxPage {

listaCorreos:Object;
correoPage = CorreoPage;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public correos:Correos,
              public modalCtrl:ModalController) 
              {
                this.listaCorreos=correos.lista;
  }

verCorreo(correo){
  this.navCtrl.push(this.correoPage, correo);
}

nuevoCorreo(){
  let modal = this.modalCtrl.create(NuevocorreoPage, {tipo:'nuevo correo', correo: ''});
modal.present();
}

}
