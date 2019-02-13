import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(
    public router: Router
  ) {}


  canActivate(): boolean {
    const isAuthenticated = this.isAuthenticated();
    if (!isAuthenticated) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }

  public isAuthenticated() {
    const token = localStorage.getItem('movhunter-token');
    return token;
  }
}
