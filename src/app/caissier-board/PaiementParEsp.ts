export class PaiementParEsp {

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
    };






}
