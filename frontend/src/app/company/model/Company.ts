
export class Company{
    company_id:number;
    company_name:String;
		secteur:string ;
		description:String;
		website:String;
		email:String;
		location:String;
		logo:File |null;
    constructor(
    company_id: number,
    company_name: String,
    secteur: string,
    description: String,
    website: String,
    email: String,
    location: String,
    logo: File 
  ) {
    this.company_id = company_id;
    this.company_name = company_name;
    this.email = email;
    this.location = location;
    this.description = description;
    this.secteur = secteur;
    this.website = website;
    this.logo =logo
  }

}