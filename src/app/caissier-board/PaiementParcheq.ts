export class PaiementParcheq {

  id?:any;
  montant?:number;
  numcheq?:any;
  datepay?:Date;
  rip?:any;
  rib?:any;
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
