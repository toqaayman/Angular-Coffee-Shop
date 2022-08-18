import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { HttpHeaders } from '@angular/common/http';
import { pipe,map,tap ,Observable} from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm!: FormGroup

  constructor(private formbuilder: FormBuilder,private http: HttpClient, private router: Router,private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      email: [''],
      password: ['', Validators.required]
    })
  }
  loginApi(){
  return  this.http.post("https://coffeerest-skeleton.herokuapp.com/user/v1/login",
      this.loginForm.value
    ,{observe: 'response', responseType: 'text'})
  }
  login(){

      this.loginApi().subscribe((res:any)=>{
       console.log(res.body)
        localStorage.setItem("token",res.body);
          alert('Login Succesful');
          this.loginForm.reset()
        this.authService.login();
      },err=>{
        console.log(err)
        alert("Something went wrong")
      })
  }
}
