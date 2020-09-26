import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-dstv',
  templateUrl: './dstv.component.html',
  styleUrls: ['./dstv.component.scss']
})
export class DstvComponent implements OnInit {

  constructor( private spinner: NgxSpinnerService ) { }

  ngOnInit(): void {
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 500);
  }

}
