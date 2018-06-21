import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from '../app.module';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {

  onWordChange(IdentityNo:string){
    var Firstsix = IdentityNo.substring(0,6);
    var year = parseInt(Firstsix.substring(0,2));
    var current = new Date();
    
    if(year>10){
    var years = 1900 + year;
    }else{
    var years = 2000 + year;
    } 
    
    var validage = current.getFullYear() - years;
    
    if(validage<19){
      alert('Under age.You are not allow to register.');
      this.router.navigate(['/']);
      }    
    }

 
  onUpload(){
   
  }

  constructor(private router: Router, private http: HttpClient) { }
  confirmationString:string = "New Product Added";
  isAdded: boolean = false;
  productsObj:object = {}; 
  
  addNewProduct = function(product, value, valid) {
    this.productObj = {  
      "First_Name": product.First_Name,
      "Last_Name": product.Last_Name,
      "Nationality": product.Nationality,
      "Identity_No": product.Identity_No,
      "Birthdate": product.Birthdate,
      "Contact_No": product.Contact_No,
      "Address": product.Address,
      "City": product.City,
      "State": product.State,
      "Post_Code": product.Post_Code,
      "Country": product.Country,
      "Email": product.Email,
      "Bank_Account": product.Bank_Account,
      "Issue_Bank": product.Issue_Bank,
      "Attachment": product.Attachment
    }
  
    this.http.post("http://localhost:3000/products/", this.productObj).subscribe((res:Response) => {
      this.isAdded = true;
      this.router.navigate(['/']);
    })

  }

  ngOnInit () {  }


}
