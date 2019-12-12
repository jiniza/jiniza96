import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { InternshipService } from './internship.service';

@Component({
  selector: 'app-internship',
  templateUrl: './internship.component.html',
  styleUrls: ['./internship.component.css']
})
export class InternshipComponent implements OnInit
{
  year : number;
  internshipTypeList : string[];
  successMessage : string;
  errorMessage : string;
  internshipApplicationForm : FormGroup;
  
  constructor(private fb:FormBuilder,private service:InternshipService)
  { }

  ngOnInit()
  {
    
    this.internshipTypeList = ["S3","S6","W3","W6"];
    this.year = new Date().getFullYear();

    // Your Code Goes Here
    this.internshipApplicationForm = this.fb.group({
      internName : ["",[Validators.required,Validators.pattern("^([A-Z]{1}[a-z]{2})(([a-z]+)?( [A-Z]{1})?)(([a-z]+)?( [A-Z]{1})?)([a-z]+)?")]],
      gender : ["",[Validators.required]],
      email : ["",[Validators.required,Validators.email]],
      mobileNumber : ["",[Validators.required,Validators.pattern("[0-9]{10}")]],
      internshipType : ["",[Validators.required]]
    })

    // Your Code Goes Here

    
    this.onChange();
  }

  apply()
  {
    // Your Code Goes Here
    this.successMessage=null;
    this.errorMessage=null;
    this.service.apply(this.internshipApplicationForm.value).subscribe(
      response=>{
        
        this.successMessage=response.message;
      },
      error=>{
        
        this.errorMessage=error.error.message;
      }

    )
  }

  onChange()
  {
    this.internshipApplicationForm.valueChanges.subscribe(() => {this.successMessage = null; this.errorMessage = null});
  }
}