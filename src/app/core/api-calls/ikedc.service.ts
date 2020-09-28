import { Injectable } from '@angular/core';
import { ApiEndpointsService } from '../services/api-endpoints.service.service';

@Injectable({
  providedIn: 'root'
})
export class IKEDCService {

  constructor( private apiEndpoint : ApiEndpointsService ) { }

  public getAccountDetails(){
    this.apiEndpoint.createUrl("ikedc/getAcctDetails", true)
  }

  public getDealerBalance(){
    this.apiEndpoint.createUrl("ikedc/getOurBalance", true)
  }

  public getUserTransactions(){
    this.apiEndpoint.createUrl("ikedc/getAllTransaction", true)
  }

  public rechargeMeter(){
    this.apiEndpoint.createUrl("ikedc/rechargeMeter", true)
  }
}
