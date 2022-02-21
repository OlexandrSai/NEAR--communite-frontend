import { Component } from '@angular/core';
import {ComplaintService} from "../../services/complaint.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-complaint-form',
  templateUrl: './add-complaint-form.component.html',
  styleUrls: ['./add-complaint-form.component.css']
})
export class AddComplaintFormComponent {
  public complaintForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(2)]),
    description: new FormControl('', [Validators.required, Validators.minLength(5)]),
    location: new FormControl('', [Validators.required, Validators.minLength(3)]),
    category: new FormControl(0, Validators.required)
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

  constructor(public complaintService: ComplaintService, private router: Router) { }

  async create() {
    if(this.complaintForm.valid) {
      await this.complaintService.handleAddNewComplaint(this.complaintForm.value);
      await this.router.navigate(['dashboard']);
    }
  }

  changeCategory() {
    this.complaintForm.patchValue({
      category: parseInt(this.category)
    })
  }

  getError(data: any) {
    return data.required ? "This field required" : `Minimum length is ${data.minlength.requiredLength}`
  }
}
