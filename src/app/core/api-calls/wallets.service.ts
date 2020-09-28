import { Injectable } from '@angular/core';
import { QueryStringParameters } from 'src/app/shared/classes/query-string-parameters';
import { ApiEndpointsService } from '../services/api-endpoints.service.service';

@Injectable({
  providedIn: 'root'
})
export class WalletsService {

  constructor( private apiEndpoint : ApiEndpointsService ) { }

  public createWallet(){
    this.apiEndpoint.createUrl("wallet/create", true)
  }

  public setWalletPin(){
    this.apiEndpoint.createUrl("wallet/setPin", true)
  }

  public setWalletPassword(){
    this.apiEndpoint.createUrl("wallet/setPassword", true)
  }

  public getAllWalletTransactions(){
    this.apiEndpoint.createUrl("wallet/transactions", true)
  }

  public getAWallet( ){
    this.apiEndpoint.createUrl("wallet/getUser", true)
  }

  public getAWalletBalance(id: String){
    this.apiEndpoint.createUrlWithPathVariables("wallet/get-balance", [id])
  }

  public transferFromWallettoBank(){
    this.apiEndpoint.createUrl("wallet/TransferToBank", true)
  }

  public creditWallet(){
    this.apiEndpoint.createUrl("wallet/credit", true)
  }

  public debitAWallet(){
    this.apiEndpoint.createUrl("wallet/debit", true)
  }

  public getAllWallets(){
    this.apiEndpoint.createUrl("wallet/credit", true)
  }
}
