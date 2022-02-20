import { Component, OnInit } from '@angular/core';
import {ComplaintService} from "../../services/complaint.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-add-complaint-form',
  templateUrl: './add-complaint-form.component.html',
  styleUrls: ['./add-complaint-form.component.css']
})
export class AddComplaintFormComponent implements OnInit {
  public complaintForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    location: new FormControl(''),
    category: new FormControl(0)
  });
  public category: any = 0;
  public formFields: any = [
    {
      label: "Complaint title",
      id: "title",
    },
    {
      label: "Description",
      id: "description",
    },
    {
      label:"Location",
      id: "location",
    },
  ];

  constructor(public complaintService: ComplaintService) { }

  ngOnInit(): void {
  }

  async create() {
    await this.complaintService.handleAddNewComplaint(this.complaintForm.value);
  }

  changeCategory() {
    this.complaintForm.patchValue({
      category: parseInt(this.category)
    })
  }
}
