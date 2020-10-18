import { Injectable } from '@angular/core';
import { ApiEndpointsService } from '../services/api-endpoints.service.service';

@Injectable({
  providedIn: 'root'
})
export class EEDCService {

  constructor( private apiEndpoint : ApiEndpointsService ) { }

  public getAccountDetails(){
    return this.apiEndpoint.createUrl("eedc/getAcctDetails", true)
  }

  public getDealerBalance(){
    return this.apiEndpoint.createUrl("eedc/getOurBalance", true)
  }

  public getATransaction(){
    return this.apiEndpoint.createUrl("eedc/getATransaction", true)
  }

  public rechargeMeter(){
    return this.apiEndpoint.createUrl("eedc/rechargeMeter", true)
  }
}
