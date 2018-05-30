import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from '../app.module';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { formValidate } from '../validators/formValidators';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
  
  Country='3';
  
isTrue= true;

  constructor(private router: Router, private http: Http) { }
  confirmationString:string = "New Product Added";
  isAdded: boolean = false;
  productsObj:object = {}; 
  
  addNewProduct = function(product, value, valid) {
    this.productObj = {  
      "First_Name": product.First_Name,
      "Last_Name": product.Last_Name,
      "Nationality": product.Nationality,
      "Identity_No": product.Identity_No, formValidate,
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
  
  ngOnInit() {
  }

}
