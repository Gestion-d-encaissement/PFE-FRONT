import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AgenceService } from 'src/app/_services/agence.service';
import { Agence } from './Agence';

@Component({
  selector: 'app-agence-managment',
  templateUrl: './agence-managment.component.html',
  styleUrls: ['./agence-managment.component.css']
})
export class AgenceManagmentComponent implements OnInit {
  searchText:any;

  dataagent:any;
  agences?: Agence[]= []  ;
  submitted = false;
  submitted2 = false;

  agencee:Agence=new Agence()
  useer:Agence=new Agence

  agen: Agence = new Agence();
  constructor(private agenceservice:AgenceService ,private router:Router,private elementRef: ElementRef)  { }

  detail(usr:any){
    this.useer=usr;

   }
   edit(useerr:Agence){
    this.useer.id=useerr.id;
    this.useer.codeAgence=useerr.codeAgence;
    this.useer.adresse=useerr.adresse;
    this.useer.designation=useerr.designation

   }
   deleteagence(id: number){
    console.log('rzeg')
    this.submitted=true;
      this. reloadPage()
    this.agenceservice.deleteAgence(id).subscribe( data => {



    })
  }
  updateagence( ){
    this.agenceservice.updateAgence(  this.useer).subscribe((resp)=>{
      this.submitted2=true;
      this. reloadPage()
    },(err)=>{
      console.log(err)
    });
   }
  reloadPage(): void {
    setTimeout(() => {
      window.location.reload();
  }, 1000);}


  ngOnInit(): void {

    let resp=this.agenceservice.getAllagence();
    resp.subscribe((data)=>this.dataagent=data);
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "../assets/js/main.js";
    this.elementRef.nativeElement.appendChild(s);

this.getagence()

}
 private getagence(){
    this.agenceservice.getAgenceList().subscribe(data => {
      this.agences = data;
      console.log(data )
    });
  }

  newEmployee(): void {
    this.submitted = false;
    this.agen = new Agence();
  }

  save() {
    this.agenceservice
    .createagence(this.agen).subscribe(data => {
      console.log(data)
      this.agen = new Agence();

    },
    error => console.log(error));
  }
  onSubmit() {
    this.submitted = true;
    this.save();
    this.reloadPage();
  }

}
