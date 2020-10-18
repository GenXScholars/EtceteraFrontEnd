import { Injectable } from '@angular/core';
import { ApiEndpointsService } from '../services/api-endpoints.service.service';

@Injectable({
  providedIn: 'root'
})
export class IBEDCService {

  constructor( private apiEndpoint : ApiEndpointsService ) { }

  public getAccountDetails(){
    return this.apiEndpoint.createUrl("ibedc/getAcctDetails", true)
  }

  public getDealerBalance(){
    return this.apiEndpoint.createUrl("ibedc/getOurBalance", true)
  }

  public getUserTransactions(){
    return this.apiEndpoint.createUrl("ibedc/getUserTransactions", true)
  }

  public rechargeMeter(){
    return this.apiEndpoint.createUrl("ibedc/rechargeMeter", true)
  }
}
