import { Injectable } from '@angular/core';
import { ApiEndpointsService } from '../services/api-endpoints.service.service';

@Injectable({
  providedIn: 'root'
})
export class EKEDCService {

  constructor( private apiEndpoint : ApiEndpointsService ) { }

  public getAccountDetails(){
    return this.apiEndpoint.createUrl("ekdc/getAcctDetails", true)
  }

  public getDealerBalance(){
    return this.apiEndpoint.createUrl("ekdc/getOurBalance", true)
  }

  public getUserTransactions(){
    return this.apiEndpoint.createUrl("ekdc/getAllTransaction", true)
  }

  public getATransaction(){
    return this.apiEndpoint.createUrl("ekedc/getSingleTransaction", true)
  }

  public rechargeMeter(){
    return this.apiEndpoint.createUrl("ekdc/rechargeMeter", true)
  }
}
