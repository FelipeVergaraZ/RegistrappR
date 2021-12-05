import { Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import * as Bounce from 'bounce.js';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  NombreU: string;
  code: any;

  constructor(private activeRoute: ActivatedRoute,private router: Router, private barcodeScanner: BarcodeScanner) {
    this.activeRoute.queryParamMap.subscribe(params=>{
      if(this.router.getCurrentNavigation().extras.state){
        this.NombreU=this.router.getCurrentNavigation().extras.state.NombreU;
      }
    });
  }

  volver(){
    this.router.navigate(['/home']);
  }

  scan(){
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData, this.code);
      this.code = barcodeData.text;
    }).catch(err => {
        console.log('Error', err);
    });
  }

  ngOnInit() {
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  @ViewChild('bouncebtn', { read: ElementRef })bouncebtn: ElementRef;

  bounce() {
    const bounce = new Bounce();
    bounce
      .translate({
        from: { x: -300, y: 0 },
        to: { x: 0, y: 0 },
        duration: 600,
        stiffness: 4
      })
      .scale({
        from: { x: 1, y: 1 },
        to: { x: 0.1, y: 2.3 },
        easing: 'sway',
        duration: 800,
        delay: 65,
        stiffness: 2
      })
      .scale({
        from: { x: 1, y: 1 },
        to: { x: 5, y: 1 },
        easing: 'sway',
        duration: 300,
        delay: 30,
      })
      .applyTo(this.bouncebtn.nativeElement);
  }
}
