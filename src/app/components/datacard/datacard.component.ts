import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-datacard',
  templateUrl: './datacard.component.html',
  styleUrls: ['./datacard.component.scss']
})
export class DatacardComponent implements OnInit {

  constructor( private spinner: NgxSpinnerService ) { }

  ngOnInit(): void {
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 500);
  }

}
