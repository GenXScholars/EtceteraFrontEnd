import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-databundle',
  templateUrl: './databundle.component.html',
  styleUrls: ['./databundle.component.scss']
})
export class DatabundleComponent implements OnInit {

  constructor( private spinner: NgxSpinnerService ) { }

  ngOnInit() {
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 500);
  }

}
