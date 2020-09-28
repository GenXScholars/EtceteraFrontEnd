import { Injectable } from '@angular/core';
import { ApiEndpointsService } from '../services/api-endpoints.service.service';

@Injectable({
  providedIn: 'root'
})
export class FundWalletsProvidusBnkService {

  constructor( private apiEndpoint : ApiEndpointsService ) { }

  public initiatePayment(){
    this.apiEndpoint.createUrl("providusbnk/initiate", true)
  }

  public validatePayment(){
    this.apiEndpoint.createUrl("providusbnk/validate", true)
  }

  public verifyPayment(){
    this.apiEndpoint.createUrl("providusbnk/verify", true)
  }
}
