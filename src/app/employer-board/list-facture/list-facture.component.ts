import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FactureService } from 'src/app/_services/facture.service';
import { Facture } from './Facture';
import { ClientService } from 'src/app/_services/client.service';
import { Client } from './Client';
import   { jsPDF } from 'jspdf';

import html2canvas from 'html2canvas';
import {
  ExportAsService,
  ExportAsConfig,
  SupportedExtensions,
} from 'ngx-export-as';
@Component({
  selector: 'app-list-facture',
  templateUrl: './list-facture.component.html',
  styleUrls: ['./list-facture.component.css']
})
export class ListFactureComponent implements OnInit{
  downloadAs: SupportedExtensions = 'png';
  exportAsConfig: ExportAsConfig = {
    type: 'xlsx', // the type you want to download
    elementIdOrContent: 'sampleTable', // the id of html/table element
  };

  @ViewChild('content')
  searchText:any;
count:any;
  content!: ElementRef;
  datafacture:any
  factures?: Facture[]= []  ;
  clients?: Client[]= []  ;
  fact: Facture = new Facture();
  submitted = false;
  todayNumber: number = Date.now();
  todayDate : Date = new Date();
  todayString : string = new Date().toDateString();
  todayISOString : string = new Date().toISOString();
  constructor(private exportAsService: ExportAsService ,private clientservice:ClientService, private factureservice:FactureService,private elementRef: ElementRef,private router:Router)  { }


  export() {
    this.exportAsConfig.type = this.downloadAs;
    // download the file using old school javascript method
    this.exportAsService
      .save(this.exportAsConfig, 'ListFacture')
      .subscribe(() => {
        // save started
      });
    // get the data as base64 or json object for json type - this will be helpful in ionic or SSR
    this.exportAsService.get(this.exportAsConfig).subscribe((content) => {
      console.log(content);
    });
  }



  public openPDF(): void {
    let DATA: any = document.getElementById('htmlData');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 1;
      PDF.addImage(FILEURI, 'PNG', 5, position, fileWidth, fileHeight);
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
this.getsumpay();
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
  getsumpay(){
    this.factureservice.getsumpay().subscribe(data => {
      this.count = data;
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
