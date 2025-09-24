import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faArrowRight, faEye,faEyeSlash, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  faEye:IconDefinition = faEye;
  faEyeSlash:IconDefinition = faEyeSlash;
  faArrowRight:IconDefinition = faArrowRight;
  showPassword:boolean = false;
  loginForm:FormGroup = new FormGroup({});

  constructor(private fb:FormBuilder) { }
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  showPasswordtoggle() {
    this.showPassword = !this.showPassword;
  }

  onsubmit() {
    console.log(this.loginForm.value);
  }
}
