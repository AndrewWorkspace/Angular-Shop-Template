import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  user: Object = {};

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private _authService: AuthService

  ) { }



  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['',[ Validators.required] ],
    });
  }

  get form() { return this.loginForm.controls; }

  login(formValue) {
    this._authService.login(formValue.email, formValue.password).subscribe();
  }

}
