export class User {
  id?: any;
  username?: string;
  codeagence?: string;
  nom?: string;
  prenom?: string;
  matricule?: string;

  isActiveByStatuts?: boolean;

  roles?: {
    name?: string  ;
  };

  agence?: {
    id?:any
    codeAgence?: any;
    designation?: string;
    adress?: string;
  };
}
