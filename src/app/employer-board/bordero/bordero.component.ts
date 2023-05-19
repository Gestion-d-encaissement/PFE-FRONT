import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/_services/client.service';
import { FactureService } from 'src/app/_services/facture.service';
import { PaiementService } from 'src/app/_services/paiement.service';
import { Bordero } from '../Bordero';
import { Facture } from '../list-facture/Facture';
import { Paiement } from '../Paiement';
import { Somme } from '../Somme';
interface user{
  id:any;

}
interface paye{
  countt:any;
}
@Component({
  selector: 'app-bordero',
  templateUrl: './bordero.component.html',
  styleUrls: ['./bordero.component.css']
})
export class BorderoComponent implements OnInit {
  todayNumber: number = Date.now();
  todayDate : Date = new Date();
  todayString : string = new Date().toDateString();
  todayISOString : string = new Date().toISOString();

  factures?: Facture[]= []  ;
  Bords?: Facture[]= []  ;
   fact: Bordero = new Bordero();
   pay:Paiement[]=[];
   sum: any;
   agent:Paiement[]=[];
   cai:Paiement[]=[];
   submitted = false;
   @ViewChild('content')
   searchText:any;
 count1:any;
 count2:any;
  constructor(private clientservice:ClientService, private factureservice:FactureService,private elementRef: ElementRef,private router:Router,private paiementservice:PaiementService)  { }

  getsumpay(){
    this.paiementservice.gettotal().subscribe(data => {
      this.count2 = data;
      console.log(data )
    });
  }

  save() {
    this.paiementservice
    .createbbordero(this.fact).subscribe(data => {
      console.log(data)
      this.fact = new Bordero();

    },
    error => console.log(error));
  }
  onSubmit() {
    this.submitted = true;
    this.save();
    this.reloadPage();
  }
  reloadPage(): void {
    setTimeout(() => {
      window.location.reload();
  }, 1000);}
  private getpay(){
    this.paiementservice.getallpaiement().subscribe(data => {
      this.pay = data;
      console.log(data )
    });
  }

  private getsum(){
    this.paiementservice.getsumbyagent().subscribe(data => {
      this.sum = data;
      console.log(data )
    });
  }

  getpays(id: any) {
    this.paiementservice.getsum(id)
      .subscribe(
        data => {
          this.count1 = data;

          console.log(data);
        },
        error => {

          console.log(error);
        });
  }

  ngOnInit(): void {

   this.getpay();
   this.getsum();
   this.getsumpay();



      //let resp=this.factureservice.getAllfacture();
    // resp.subscribe((data)=>this.datafacture=data);


    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "../assets/js/main.js";
    this.elementRef.nativeElement.appendChild(s);

  }






}
