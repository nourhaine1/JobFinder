export class Company{
    company_id:number;
    company_name:String;
		secteur:string ;
		description:String;
		website:String;
		email:String;
		location:String;
		logo:String ;
     constructor( company_id:number,company_name:String, secteur:string,description:String,website:String,
                email:String,
                location:String,
                logo:String ){
                    this.company_id=company_id;
                    this.company_name=company_name;
                    this.email=email;
                    this.logo=logo;
                    this.location=location;
                    this.description=description;
                    this.secteur=secteur;
                    this.website=website;

                }

}