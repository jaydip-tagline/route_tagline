import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
export interface Login {
  email: string;
  password: string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  login!: FormGroup;
  isSubmitted = false;
  loginData: Login[] = [];

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.loginForm();
  }
  loginForm() {
    this.login = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  get formControls() {
    return this.login.controls;
  }

  onSubmit(): void {
    if (this.login.invalid) {
      this.isSubmitted = true;
      return;
    } else {
      let data = {
        id: this.loginData.length + 1,
        ...this.login.value,
      };
      this.loginData.push(data);
      localStorage.setItem('email', this.login.value.email);
      this.router.navigate(['/home']);
      this.isSubmitted = false;
    }
    this.login.reset();
  }
}
