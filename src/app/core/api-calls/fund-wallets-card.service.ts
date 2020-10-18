import { Injectable } from '@angular/core';
import { ApiEndpointsService } from '../services/api-endpoints.service.service';

@Injectable({
  providedIn: 'root'
})
export class FundWalletsCardService {

  constructor( private apiEndpoint : ApiEndpointsService ) { }

  public initiatePayment(){
    return this.apiEndpoint.createUrl("wallet/initiatePayment", true)
  }

  public validateNigerianCards(){
    return this.apiEndpoint.createUrl("wallet/validate/NigerianCards", true)
  }

  public validateForeignCards(){
    return this.apiEndpoint.createUrl("wallet/validate/ForeignCards", true)
  }

  public finalValidatePayment(){
    return this.apiEndpoint.createUrl("wallet/payment/validate", true)
  }

  public verifyPayment(){
    return this.apiEndpoint.createUrl("wallet/payment/verify", true)
  }
}
