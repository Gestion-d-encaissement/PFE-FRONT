export class Paiement {

  id?:any;
  montant?:number;
  numcheq?:any;
  datepay?:Date;
  idesp?:any;

  facture?:
    {
      id?:any;
      montantfact?:number;
      periode?:string;
      etat?:string;
      datelimit?:Date;

    };
    caissier?:{
      id?:number;
      nom?:string;
      agence?:{
        codeAgence?:any;
      }
    };
    idagent?: {
      id?:number;
      nom?:string;
      agence?:{
        codeAgence?:any;
      }
    };
    monttotal?:any;





}
