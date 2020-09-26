import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor( private spinner: NgxSpinnerService  ) { }

  ngOnInit(): void {
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 500);

  }

}
