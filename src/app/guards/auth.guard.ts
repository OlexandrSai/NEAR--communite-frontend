import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {ComplaintService} from "../services/complaint.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private complaintService: ComplaintService) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let loggedIn = this.complaintService.nearService.wallet.getAccountId() !== '';

    if (!loggedIn) {
      this.router.navigate(['']);
    }

    return loggedIn;
  }
}
