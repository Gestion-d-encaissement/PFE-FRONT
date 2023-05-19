import { Component, ElementRef, ViewChild } from '@angular/core';
import { Facture } from '../Facture';
import { Client } from '../Client';
import { ClientService } from 'src/app/_services/client.service';
import { FactureService } from 'src/app/_services/facture.service';
import { Router } from '@angular/router';
import   { jsPDF } from 'jspdf';

import html2canvas from 'html2canvas';
@Component({
  selector: 'app-lisfacture',
  templateUrl: './lisfacture.component.html',
  styleUrls: ['./lisfacture.component.css']
})
export class LisfactureComponent {
  @ViewChild('content')
  searchText:any;

  content!: ElementRef;
  datafacture:any
  factures?: Facture[]= []  ;
  clients?: Client[]= []  ;
  fact: Facture = new Facture();
  submitted = false;
   clint:Client=new Client()
  useer:Client=new Client

  agen: Facture = new Facture();
    useer1:Facture=new Facture

    todayNumber: number = Date.now();
  todayDate : Date = new Date();
  todayString : string = new Date().toDateString();
  todayISOString : string = new Date().toISOString();

  constructor(private clientservice:ClientService, private factureservice:FactureService,private elementRef: ElementRef,private router:Router)  { }

detail(usr:any,usr1:any){
    this.useer=usr;
    this.useer1=usr1;

   }

  public openPDF(): void {
    let DATA: any = document.getElementById('htmlData');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 2;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('Factures.pdf');
    });
  }

  newEmployee(): void {
    this.submitted = false;
    this.fact = new Facture();
  }

  save() {
    this.factureservice
    .createfacture(this.fact).subscribe(data => {
      console.log(data)
      this.fact = new Facture();

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


  ngOnInit(): void {

  this.getfacture();

      //let resp=this.factureservice.getAllfacture();
    // resp.subscribe((data)=>this.datafacture=data);


    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "../assets/js/main.js";
    this.elementRef.nativeElement.appendChild(s);
    this.getClient();
  }

  private getfacture(){
    this.factureservice.getFactureList().subscribe(data => {
      this.factures = data;
      console.log(data )
    });
  }
  private getClient(){
    this.clientservice.getClientList().subscribe(data => {
      this.clients = data;
      console.log(data )
    });
  }
}
