import { Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from 'src/app/_services/client.service';
import { FactureService } from 'src/app/_services/facture.service';
import { Client } from '../Client';
import { Facture } from '../Facture';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { PaiementService } from 'src/app/_services/paiement.service';
import { PaiementParEsp } from '../PaiementParEsp';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-paiementparespece',
  templateUrl: './paiementparespece.component.html',
  styleUrls: ['./paiementparespece.component.css']
})
export class PaiementparespeceComponent implements OnInit {
  constructor(private tokenStorage: TokenStorageService,private paiementservice:PaiementService,private clientservice:ClientService, private factureservice:FactureService,private elementRef: ElementRef,private router:Router,
    private route: ActivatedRoute,private auth:AuthService)  { }
    paiement: PaiementParEsp=new PaiementParEsp();
id:any
  ngOnInit(): void {
    this.getTutorial(this.route.snapshot.paramMap.get('id'));
    this.getpay(this.route.snapshot.paramMap.get('id'))
    console.log(this.paiementParesp)
    this.getcassier(this.tokenStorage.getUser().id)


  }
  detail(usr:any){
    this.paiement=usr;

   }

   recu=true;
  submitted = false;
  facture : any;
  paiementParesp:any
  clint:Client=new Client()
  useer:Client=new Client

  agen: Facture = new Facture();
    useer1:Facture=new Facture;
    caissier:any;
    getcassier(id: any) {
      this.auth.getcaiiser(id)
        .subscribe(
          data => {
            this.caissier = data;
            console.log(data);
          },
          error => {
            console.log(error);
          });
    }

    getTutorial(id: any) {
      this.factureservice.get(id)
        .subscribe(
          data => {
            this.facture = data;
            console.log(data);
          },
          error => {
            console.log(error);
          });
    }
    getpay(id: any) {
      this.paiementservice.getesp(id)
        .subscribe(
          data => {
            this.paiementParesp = data;
            this.recu=true;
            console.log(data);
          },
          error => {
            this.recu=false;
            console.log(error);
          });
    }


    payer(){

     this.paiement.caissier=this.caissier;
      this.paiement.facture=this.facture;
      this.paiement.datepay=new Date();
      this.paiementservice
      .paiementCarte(this.paiement).subscribe(data => {
        console.log(data)
        this.submitted=true;
      },
      error => console.log(error));

    }


    newEmployee(): void {
      this.submitted = false;
      this.paiement = new PaiementParEsp();
    }

    save() {
      this.paiementservice
      .createpayesp(this.paiement).subscribe(data => {
        console.log(data)
        this.paiement = new PaiementParEsp();

      },
      error => console.log(error));
    }
    onSubmit() {
      this.submitted = true;
      this.save();
      this.reloadPage();
      this.recu=true;
    }
    reloadPage(): void {
      setTimeout(() => {
        window.location.reload();
    }, 1000);}
}
