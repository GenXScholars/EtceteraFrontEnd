import { Injectable } from '@angular/core';
import { ApiEndpointsService } from '../services/api-endpoints.service.service';

@Injectable({
  providedIn: 'root'
})
export class FundWalletsAccessBnkService {

  constructor( private apiEndpoint : ApiEndpointsService ) { }

  public initiatePayment(){
    return this.apiEndpoint.createUrl("accessbnk/initiate", true)
  }

  public validatePayment(){
    return this.apiEndpoint.createUrl("accessbnk/validate", true)
  }

  public verifyPayment(){
    return this.apiEndpoint.createUrl("accessbnk/verify", true)
  }
}
