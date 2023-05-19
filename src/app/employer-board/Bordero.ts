export class Bordero{
  id?:any    ;
  
  
  date_j_actual?:Date;
  reference?:Date;
  

  paiement?:
    {
      id?:any;
      montant?:number;
      
      datepay?:Date;
      
    
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
}