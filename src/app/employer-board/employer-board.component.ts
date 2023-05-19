import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employer-board',
  templateUrl: './employer-board.component.html',
  styleUrls: ['./employer-board.component.css']
})
export class EmployerBoardComponent implements OnInit {
  constructor(@Inject(DOCUMENT) private document: Document,private tokenstorage:TokenStorageService,private route:Router) { }
    roles?: string[];
    codeagence?:string[];
  username?: string;
  isLoggedIn = false;
  ngOnInit()  {
    this.isLoggedIn = !!this.tokenstorage.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenstorage.getUser();

      this.username = user.username;
       this.roles=user.roles;
       this.codeagence=user.codeagence;



    }
  }



  sidebarToggle()
  {
    //toggle sidebar function
    this.document.body.classList.toggle('toggle-sidebar');
  }

  lougout(){
    this.tokenstorage.signOut();
    this.route.navigateByUrl('/loginemployer')
  }
}
