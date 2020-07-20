import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { MustMatch } from '../../helpers/must-match.validator';
import { AuthService } from 'src/app/shared/services/auth.service';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  private registerForm: FormGroup

  constructor(
    private _formBuilder: FormBuilder,
    private _authService: AuthService,
    
  ) { }

  

  ngOnInit() {
    this.registerForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['',[ Validators.required,Validators.minLength(6),Validators.maxLength(10)] ],
      // name: ['',[Validators.required,Validators.pattern('[a-zA-Z][a-zA-Z ]+')],],
      // confirmPassword: ['', Validators.required]
    },
    // {validators: MustMatch('password','confirmPassword')}
    );
  }

  get form() { return this.registerForm.controls; }

  signup() {
    if (this.registerForm.invalid) {
      return;
    }
    this._authService.signup(this.registerForm.get('email').value, this.registerForm.get('password').value).subscribe();
  }

    

  

}
