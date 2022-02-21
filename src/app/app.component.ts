import {Component, OnInit} from '@angular/core';
import {Router, RoutesRecognized} from "@angular/router";

export enum Layouts {
  Default,
  Main,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'NEAR--communite-frontend';
  Layouts = Layouts;
  layout: Layouts = Layouts.Default;
  isCreate: any = false;

  constructor(private router: Router) {}

  // We can't use `ActivatedRoute` here since we are not within a `router-outlet` context yet.
  ngOnInit() {
    this.router.events.subscribe((data: any) => {
      if (data instanceof RoutesRecognized) {
        this.layout = data.state?.root?.firstChild?.data['layout'];
        this.isCreate = data.state?.root?.firstChild?.data['isCreate'];
      }
    });
  }
}
