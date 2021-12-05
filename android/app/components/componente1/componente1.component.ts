/* eslint-disable eqeqeq */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/quotes */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APIClientService } from 'src/app/services/apiclient.service';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.scss'],
})
export class Componente1Component implements OnInit {
  user: any;
  users: any;
  posts: any;

  post: any={
    userId:null,
    Id:null,
    title:"",
    body:""
  };

  constructor(private router: Router, private api: APIClientService) { }

  ngOnInit() {}

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
