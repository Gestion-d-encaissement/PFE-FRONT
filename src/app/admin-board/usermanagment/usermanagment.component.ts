import { Component, ElementRef, OnInit } from '@angular/core';
import { User } from './User';
import { UsersService } from 'src/app/_services/users.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';



@Component({
  selector: 'app-usermanagment',
  templateUrl: './usermanagment.component.html',
  styleUrls: ['./usermanagment.component.css']
})
export class UsermanagmentComponent implements OnInit {
  searchTerm = '';
   term = '';
   searchText:any;
  submitted = false;
  submitted2 = false;
  role:any
  datauser:any
  oneuser:any
  search=false;

  users?: User[]= []  ;
  useer:User=new User
  title = '';
   constructor( private userservice:UsersService,private elementRef: ElementRef,private router:Router)  { }
 detail(usr:any){
  this.useer=usr;

 }
 edit(useerr:User){
  this.useer.id=useerr.id
  this.useer.username=useerr.username
  this.useer.nom=useerr.nom

 }
 searchTitle(id:any)  {


  this.userservice.get(id)
    .subscribe(
      data => {
        this.search=true;
        this.oneuser = data;

        console.log(data);
      },
      error => {
        this.search=false;
        console.log(error);
      });
}
  ngOnInit() {
    this.getusers();

    let resp=this.userservice.getAllusers2();
    resp.subscribe((data)=>this.datauser=data);

    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "../assets/js/main.js";
    this.elementRef.nativeElement.appendChild(s);
  }
  private getusers(){
    this.userservice.getUsersList().subscribe(data => {
      this.users = data;
    });
  }




    deleteuser(id: number){
      console.log('rzeg')
      this.submitted=true;
        this. reloadPage()
      this.userservice.deleteUser(id).subscribe( data => {



      })
    }
    updateuser( ){
      this.userservice.updateUser2(  this.useer).subscribe((resp)=>{
        this.submitted2=true;
        this. reloadPage()
      },(err)=>{
        console.log(err)
      });
     }
    reloadPage(): void {
      setTimeout(() => {
        window.location.reload();
    }, 3000);}


	}


