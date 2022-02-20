import {Component, Input, OnInit} from '@angular/core';
import {ComplaintService} from "../../services/complaint.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {
  @Input() isCreate = false;
  constructor(public complaintService: ComplaintService, public router: Router) { }

  ngOnInit(): void {
    this.isCreate = this.router.routerState.snapshot.url === '/create';
  }

}
