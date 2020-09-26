import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  constructor( private spinner: NgxSpinnerService ) { }

  ngOnInit(): void {
      this.spinner.show();

      setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.spinner.hide();
      }, 500);
  }

}
