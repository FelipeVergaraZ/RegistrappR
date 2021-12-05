/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  formularioLogin: FormGroup;
  NombreU: any;
  constructor(private router: Router, public fb: FormBuilder, public toastController: ToastController){

    this.formularioLogin = this.fb.group({
      NombreU : new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)

    });
  }


  async logearse(){

    let f =this.formularioLogin.value;
    let usuario = JSON.parse(localStorage.getItem('usuario'));

    // eslint-disable-next-line eqeqeq
    if(usuario.nombre == f.nombre && usuario.password == f.password){
      console.log ('ingresado');
    }else{
      const toast = await this.toastController.create({
        message: 'Los datos no son correctos',
        duration: 5000
      });
      toast.present();
      return;
    }
    let navigationExtra: NavigationExtras={
      state:{NombreU:this.NombreU}
    };
    this.router.navigate(['/inicio'],navigationExtra);
  }
  logearse2(){
    let navigationExtra: NavigationExtras={
      state:{NombreU:this.NombreU}
    };
    this.router.navigate(['/inicio2'],navigationExtra);
  }

  registrar(){
    let navigationExtra: NavigationExtras={
      state:{NombreU:this.NombreU}
    };
    this.router.navigate(['/registrar'],navigationExtra);
  }
  recuperar(){
    this.router.navigate(['/recover']);
  }
  ngOnInit() {

  }



}
