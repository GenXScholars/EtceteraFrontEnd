import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-gotv',
  templateUrl: './gotv.component.html',
  styleUrls: ['./gotv.component.scss']
})
export class GotvComponent implements OnInit {

  constructor( private spinner: NgxSpinnerService ) { }

  ngOnInit(): void {
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 500);

  }

}
