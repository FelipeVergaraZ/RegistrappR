import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, ActivatedRouteSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

  constructor(private router: Router){}

  canLoad(){
    const isAuthenticated = !!(+localStorage.getItem('authenticated'));

    if (isAuthenticated){
      return true;
    } else {
      const navigation = this.router.getCurrentNavigation();
      console.log('nav: ', navigation);

      let url ='/';
      if (navigation){
        url = navigation.extractedUrl.toString();
      }

      console.log('got url: ', url);


      this.router.navigateByUrl('/');
      return false;
    }
  }
}
