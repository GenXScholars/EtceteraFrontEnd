import { Injectable } from '@angular/core';
import { ApiEndpointsService } from '../services/api-endpoints.service.service';

@Injectable({
  providedIn: 'root'
})
export class IKEDCService {

  constructor( private apiEndpoint : ApiEndpointsService ) { }

  public getAccountDetails(){
    return this.apiEndpoint.createUrl("ikedc/getAcctDetails", true)
  }

  public getDealerBalance(){
    return this.apiEndpoint.createUrl("ikedc/getOurBalance", true)
  }

  public getUserTransactions(){
    return this.apiEndpoint.createUrl("ikedc/getAllTransaction", true)
  }

  public rechargeMeter(){
    return this.apiEndpoint.createUrl("ikedc/rechargeMeter", true)
  }
}
