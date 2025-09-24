import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faArrowRight, faEye, faEyeSlash, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { password } from '../../validators/password.validators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
    faEye:IconDefinition = faEye;
    faEyeSlash:IconDefinition = faEyeSlash;
    faArrowRight:IconDefinition = faArrowRight;
    showPassword:boolean = false;
    showconfirmPassword:boolean = false;
    signupForm:FormGroup = new FormGroup({});

    constructor(private fb:FormBuilder) { }
    ngOnInit(): void {
      this.signupForm = this.fb.group({
        name: ['', [Validators.required,Validators.minLength(6)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required , password(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/)] ],
        ConfirmPassword: ['', [Validators.required,Validators.minLength(6)]],
      });
    }

    showPasswordtoggle() {
      this.showPassword = !this.showPassword;
    }
    showconfirmPasswordtoggle() {
      this.showconfirmPassword = !this.showconfirmPassword;
    }

    getcontrolName(controlName:string) {
      return this.signupForm.get(controlName);
    }

    onsubmit() {
      console.log(this.signupForm.value);
    }
}
