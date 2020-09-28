import { Injectable } from '@angular/core';
import { ApiEndpointsService } from '../services/api-endpoints.service.service';

@Injectable({
  providedIn: 'root'
})
export class FundWalletsFirstbnkService {

  constructor( private apiEndpoint : ApiEndpointsService ) { }

  public initiatePayment(){
    this.apiEndpoint.createUrl("firstbnk/initiate", true)
  }

  public validatePayment(){
    this.apiEndpoint.createUrl("firstbnk/validate", true)
  }

  public verifyPayment(){
    this.apiEndpoint.createUrl("firstbnk/verify", true)
  }
}
