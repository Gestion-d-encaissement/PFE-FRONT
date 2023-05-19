import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminBoardComponent } from './admin-board/admin-board.component';
import { UsermanagmentComponent } from './admin-board/usermanagment/usermanagment.component';
import { AddUserComponent } from './admin-board/add-user/add-user.component';
import { HomeComponent } from './home/home.component';
import { EditUserComponent } from './admin-board/edit-user/edit-user.component';
import { RegistreadminComponent } from './registreadmin/registreadmin.component';
import { LogincaissierComponent } from './logincaissier/logincaissier.component';
import { LoginemployerComponent } from './loginemployer/loginemployer.component';
import { CaissierBoardComponent } from './caissier-board/caissier-board.component';
import { EmployerBoardComponent } from './employer-board/employer-board.component';
import { ListFactureComponent } from './employer-board/list-facture/list-facture.component';
import { AgenceManagmentComponent } from './admin-board/agence-managment/agence-managment.component';
import { PaiementparcarteComponent } from './caissier-board/paiementparcarte/paiementparcarte.component';
import { PaiementparchequeComponent } from './caissier-board/paiementparcheque/paiementparcheque.component';
import { PaiementparespeceComponent } from './caissier-board/paiementparespece/paiementparespece.component';
import { LisfactureComponent } from './caissier-board/lisfacture/lisfacture.component';
import { BorderoComponent } from './employer-board/bordero/bordero.component';

const routes: Routes = [
  { path: '',redirectTo: 'home', pathMatch: 'full'},
  { path: 'home',component:HomeComponent},
  { path: 'registreadmin',component:RegistreadminComponent},
  { path: 'logincaissier',component:LogincaissierComponent},

  { path: 'caissier',component:CaissierBoardComponent,children:[
    { path: '',redirectTo: 'listfact', pathMatch: 'full'},
    {path:'paycarte/:id',component:PaiementparcarteComponent},
    {path:'paychq/:id',component:PaiementparchequeComponent},
    {path:'payesp/:id',component:PaiementparespeceComponent},
   
    {path:'listfact',component:LisfactureComponent},]},

  { path: 'loginemployer',component:LoginemployerComponent},


  { path: 'employer',component:EmployerBoardComponent,children:[
    { path: '',redirectTo: 'listfacture', pathMatch: 'full'},
    {path:'listfacture',component:ListFactureComponent},
    {path:'bordero',component:BorderoComponent},
  ]},

  { path: 'admin', component: AdminBoardComponent,children:[

  { path: '',redirectTo: 'users', pathMatch: 'full'},
  {path:'agence',component:AgenceManagmentComponent},
    {path:'users',component:UsermanagmentComponent},
    {path:'adduser',component:AddUserComponent},
    {path:'edituser',component:EditUserComponent}
  ] } ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
