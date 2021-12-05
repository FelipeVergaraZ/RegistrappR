import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ToastController} from '@ionic/angular';


@Component({
  selector: 'app-recover',
  templateUrl: './recover.page.html',
  styleUrls: ['./recover.page.scss'],
})
export class RecoverPage implements OnInit {
  [x: string]: any;

  constructor(private router: Router, public toastController: ToastController){}

  volver(){
    this.router.navigate(['/home']);
  }
  enviocuenta(){
    this.presentToast();
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Te hemos enviado un correo electrónico con instrucciones para volver a establecer tu contraseña.',
      duration: 5000
    });
    toast.present();
  }

  ngOnInit() {
  }

}
