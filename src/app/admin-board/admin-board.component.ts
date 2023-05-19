import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-board',
  templateUrl: './admin-board.component.html',
  styleUrls: ['./admin-board.component.css']
})
export class AdminBoardComponent implements OnInit {
  constructor(@Inject(DOCUMENT) private document: Document,private tokenstorage:TokenStorageService,private route:Router) { }
    roles?: string[];
  username?: string;
  isLoggedIn = false;
  ngOnInit()  {
    this.isLoggedIn = !!this.tokenstorage.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenstorage.getUser();

      this.username = user.username;
       this.roles=user.roles;



    }
  }



  sidebarToggle()
  {
    //toggle sidebar function
    this.document.body.classList.toggle('toggle-sidebar');
  }

  lougout(){
    this.tokenstorage.signOut();
    this.route.navigateByUrl('/home')
  }
}
