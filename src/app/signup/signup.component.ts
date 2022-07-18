import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  public signupForm:any;
  mobileError:any;

  constructor(
    private http : HttpClient,
    private router:Router,
    private fb: FormBuilder
    ) {}

  ngOnInit() {
    this.signupForm = this.fb.group({
      fullname:new FormControl('',[Validators.required]),
      email: new FormControl('',Validators.required),
      password: new FormControl('',[Validators.minLength(5)]),
      mobile: new FormControl('',[Validators.minLength(10), Validators.maxLength(10), Validators.pattern(/^[0-9]+$/)])
      })
    }
  
  signUp(){
  this.http.post<any>("http://localhost:8000/signupUsers",this.signupForm.value)
  .subscribe(res=>{
    alert("signup succesfull");
    this.signupForm.reset();
    this.router.navigate(['login']);
  },err=>{
    alert("somthing went wrong");
  })
  
  }

  checkMobileNumber() {
    console.log(this.signupForm.controls['mobile'], this.signupForm.get('mobile'));
    if(this.signupForm.get('mobile').errors) {
      if(this.signupForm.get('mobile').errors.maxlength) {
        this.mobileError = 'You exceeded 10 digit requirement';
      } else if(this.signupForm.get('mobile').errors.minlength) {
        this.mobileError = 'Minimum 10 digit required';
      }else if(this.signupForm.get('mobile').errors.pattern) {
        this.mobileError = 'Only number allowed';
      }
    }
    // if(this.signupForm.controls['mobile'].value && this.signupForm.controls['mobile'].value.length >10) {
    //   const value = this.signupForm.controls['mobile'].value.slice(0,10);
    //   this.signupForm.get('mobile').setValue(value);
    // }
  }
  
  
}
