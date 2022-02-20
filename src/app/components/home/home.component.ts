import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ComplaintService} from "../../services/complaint.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public complaintService: ComplaintService, public router: Router) { }

  ngOnInit(): void {
    if (this.complaintService.nearService.accountId !== '') {
      this.router.navigate(['dashboard']);
    }
  }
}
