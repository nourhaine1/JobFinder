
interface Logo {
    data: Blob; // Using Blob instead of Buffer for frontend representation
    contentType: string;
    filename: string;
  }
export class Company{
    company_id:number;
    company_name:String;
		secteur:string ;
		description:String;
		website:String;
		email:String;
		location:String;
		logo: {
      data: Blob; // Type for Binary.createFromBase64('...') if needed
      contentType: string;
      filename: string;
      base64: string;
    };
    constructor(
    company_id: number,
    company_name: String,
    secteur: string,
    description: String,
    website: String,
    email: String,
    location: String,
    logo: Blob
  ) {
    this.company_id = company_id;
    this.company_name = company_name;
    this.email = email;
    this.location = location;
    this.description = description;
    this.secteur = secteur;
    this.website = website;
    this.logo = {
      data: logo,
      contentType: logo.type,
      filename:'' ,
      base64:''
         };
  }

}