import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { httpInterceptorProviders } from './_helpers/http.interceptor';
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
import html2canvas from 'html2canvas';
import { AgenceManagmentComponent } from './admin-board/agence-managment/agence-managment.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { PaiementparcarteComponent } from './caissier-board/paiementparcarte/paiementparcarte.component';
import { PaiementparchequeComponent } from './caissier-board/paiementparcheque/paiementparcheque.component';
import { PaiementparespeceComponent } from './caissier-board/paiementparespece/paiementparespece.component';
import { LisfactureComponent } from './caissier-board/lisfacture/lisfacture.component';
import { NgxPrintModule } from 'ngx-print';
import { BorderoComponent } from './employer-board/bordero/bordero.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ExportAsModule } from 'ngx-export-as';

@NgModule({
  declarations: [
    AppComponent,
    AdminBoardComponent,
    UsermanagmentComponent,
    AddUserComponent,
    HomeComponent,
    EditUserComponent,
    RegistreadminComponent,
    LogincaissierComponent,
    LoginemployerComponent,
    CaissierBoardComponent,
    EmployerBoardComponent,
    ListFactureComponent,
    AgenceManagmentComponent,
    PaiementparcarteComponent,
    PaiementparchequeComponent,
    PaiementparespeceComponent,
    LisfactureComponent,
    BorderoComponent,

  ],
  imports: [
    BrowserModule,
    ExportAsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule,
    MatProgressSpinnerModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    NgxPrintModule,
    CommonModule,
    BrowserAnimationsModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
