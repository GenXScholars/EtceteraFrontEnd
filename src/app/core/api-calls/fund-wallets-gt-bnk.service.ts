import { Injectable } from '@angular/core';
import { ApiEndpointsService } from '../services/api-endpoints.service.service';

@Injectable({
  providedIn: 'root'
})
export class FundWalletsGtBnkService {

  constructor( private apiEndpoint : ApiEndpointsService ) { }

  public initiatePayment(){
    return this.apiEndpoint.createUrl("gt/initiate", true)
  }

  public validatePayment(){
    return this.apiEndpoint.createUrl("gt/validate", true)
  }

  public verifyPayment(){
    return this.apiEndpoint.createUrl("gt/verify", true)
  }
}
