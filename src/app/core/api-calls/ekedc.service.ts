import { Injectable } from '@angular/core';
import { ApiEndpointsService } from '../services/api-endpoints.service.service';

@Injectable({
  providedIn: 'root'
})
export class EKEDCService {

  constructor( private apiEndpoint : ApiEndpointsService ) { }

  public getAccountDetails(){
    this.apiEndpoint.createUrl("ekdc/getAcctDetails", true)
  }

  public getDealerBalance(){
    this.apiEndpoint.createUrl("ekdc/getOurBalance", true)
  }

  public getUserTransactions(){
    this.apiEndpoint.createUrl("ekdc/getAllTransaction", true)
  }

  public getATransaction(){
    this.apiEndpoint.createUrl("ekedc/getSingleTransaction", true)
  }

  public rechargeMeter(){
    this.apiEndpoint.createUrl("ekdc/rechargeMeter", true)
  }
}
