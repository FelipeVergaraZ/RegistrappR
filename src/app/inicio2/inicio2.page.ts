/* eslint-disable prefer-const */
/* eslint-disable eqeqeq */
/* eslint-disable @typescript-eslint/semi */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/naming-convention */
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { APIClientService } from '../services/apiclient.service';

@Component({
  selector: 'app-inicio2',
  templateUrl: './inicio2.page.html',
  styleUrls: ['./inicio2.page.scss'],
})
export class Inicio2Page{
  user: any;
  users: any;
  posts: any;

  post: any={
    userId:null,
    Id:null,
    title:"",
    body:""
  };

  constructor(private router: Router, private api: APIClientService) {
    this.router.navigate(['inicio2/alumnos'])
}
  segmentChanged($event){
    console.log($event)
    let direccion=$event.detail.value
    this.router.navigate(['inicio2/'+direccion])
  }


  ionViewWillEnter(){
    this.getUsuarios();
    this.getPosts();

  }
  getPosts() {
    this.api.getPosts().subscribe((data)=>{
      this.posts=data;
      this.posts.reverse();
    });
  }

  getUsuarios() {
    this.api.getUsuarios().subscribe((data)=>{
      this.users=data;
    });
  }

  getUsuario(userId) {
    this.api.getUsuario(userId).subscribe((data)=>{
      this.user=data;
    });
  }

  guardarPost(){
    if(this.post.userId==null){
      if(this.user==undefined){
        console.log("Seleccione un usuario");
        return;
      }
      this.post.userId=this.user.id;
      this.api.createPost(this.post).subscribe(
        ()=>{
          console.log("Creado correctamente");
          this.getPosts();
        },
        error=>{
          console.log("Error "+error);
        }
      );
    }
    else{
      this.api.updatePost(this.post.id,this.post).subscribe(
        ()=>{
          console.log("Actualizado Correctamente");
          this.getPosts();
        },
        error=>{
          console.log("Error "+error);
        }
        );
    }
  }

  volver(){
    this.router.navigate(['/home']);
  }
}
