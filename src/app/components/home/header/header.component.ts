import { Component, OnInit } from '@angular/core';
import {ComplaintService} from "../../../services/complaint.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public complaintService: ComplaintService) { }

  ngOnInit(): void {
  }

}
