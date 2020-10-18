import { Injectable } from '@angular/core';
import { ApiEndpointsService } from '../services/api-endpoints.service.service';

@Injectable({
  providedIn: 'root'
})
export class FundWalletsFirstbnkService {

  constructor( private apiEndpoint : ApiEndpointsService ) { }

  public initiatePayment(){
    return this.apiEndpoint.createUrl("firstbnk/initiate", true)
  }

  public validatePayment(){
    return this.apiEndpoint.createUrl("firstbnk/validate", true)
  }

  public verifyPayment(){
    return this.apiEndpoint.createUrl("firstbnk/verify", true)
  }
}
