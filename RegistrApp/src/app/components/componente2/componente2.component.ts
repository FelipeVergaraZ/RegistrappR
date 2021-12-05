import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.scss'],
})
export class Componente2Component implements OnInit {

  constructor(private activeRoute: ActivatedRoute,private router: Router, public alertController: AlertController) { }


  volver(){
    this.router.navigate(['/home']);
  }

  alerta(){
    this.presentAlert();
  }

    async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Proceda a proyectar el codigo',
      message: `<img src="https://i.imgur.com/L3zbyDr.png" alt="g-maps" style="border-radius: 2px">`,
      buttons: ['OK']
    });

    await alert.present();
  }

  ngOnInit() {
  }

}
