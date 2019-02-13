import { Component, OnInit, TemplateRef} from '@angular/core';
import { loginSlide, logoSlide, inputShows, moviesFadeIn } from './../../animations/animations';
import { Router } from '@angular/router';
import { CinemaService } from '../../services/cinema.service';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [loginSlide, logoSlide, inputShows, moviesFadeIn]
})
export class LoginComponent implements OnInit {
  state = 'inactive'

  msgs: Array<String> = [];
  
  loginForm = new FormGroup({
    username : new FormControl('', [
      Validators.required,
      Validators.minLength(5)
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ])
  })

  // getters

  get username() {
    return this.loginForm.get('username');
  }
  get password() {
    return this.loginForm.get('password');
  }
  
  get unMinLength() {
    return this.loginForm.get('username').errors.minlength.requiredLength
  }
  get pwMinLength() {
    return this.loginForm.get('password').errors.minlength.requiredLength
  }

  constructor(
    private router: Router,
    private cinema: CinemaService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
  }

  toggleState(form) {
    if (this.state === 'inactive') {
      this.state = 'active';
    } else {
     if (this.loginForm.valid) {
       localStorage.setItem('movhunter-token', this.username.value);
       this.toastr.success(`Welcome ${this.username.value}`)
       this.router.navigate(['/']);
     } else {
       this.toastr.info('Please check all the fields and try again!','Form appears to be invalid');
     }
    }
  }
}
