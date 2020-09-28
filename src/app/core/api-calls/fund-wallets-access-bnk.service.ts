import { Injectable } from '@angular/core';
import { ApiEndpointsService } from '../services/api-endpoints.service.service';

@Injectable({
  providedIn: 'root'
})
export class FundWalletsAccessBnkService {

  constructor( private apiEndpoint : ApiEndpointsService ) { }

  public initiatePayment(){
    this.apiEndpoint.createUrl("accessbnk/initiate", true)
  }

  public validatePayment(){
    this.apiEndpoint.createUrl("accessbnk/validate", true)
  }

  public verifyPayment(){
    this.apiEndpoint.createUrl("accessbnk/verify", true)
  }
}
