import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-complaint-form',
  templateUrl: './add-complaint-form.component.html',
  styleUrls: ['./add-complaint-form.component.css']
})
export class AddComplaintFormComponent implements OnInit {
  public category = 0;
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

  constructor() { }

  ngOnInit(): void {
  }

}
