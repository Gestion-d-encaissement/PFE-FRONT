export class PaiementParcarte {

  id?:any;
  montant?:number;
  idtransaction?:any;
  datepay?:Date;
  numcarte?:string;

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
    };






}
