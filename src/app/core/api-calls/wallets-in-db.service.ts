import { Injectable } from '@angular/core';
import { ApiEndpointsService } from '../services/api-endpoints.service.service';

@Injectable({
  providedIn: 'root'
})
export class WalletsInDbService {

  constructor( private apiEndpoint : ApiEndpointsService ) { }

  public getAllWalletsFrmDb(){
    this.apiEndpoint.createUrl("walletInDb", true)
  }

  public getAwalletById( id:String ){
    this.apiEndpoint.createUrlWithPathVariables("walletInDb", [id])
  }

  public deleteAWallet( id: String ){
    this.apiEndpoint.createUrlWithPathVariables("walletInDb", [id])
  }
}
