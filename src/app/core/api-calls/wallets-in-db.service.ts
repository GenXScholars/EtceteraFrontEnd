import { Injectable } from '@angular/core';
import { ApiEndpointsService } from '../services/api-endpoints.service.service';

@Injectable({
  providedIn: 'root'
})
export class WalletsInDbService {

  constructor( private apiEndpoint : ApiEndpointsService ) { }

  public getAllWalletsFrmDb(){
    return this.apiEndpoint.createUrl("walletInDb", true)
  }

  public getAwalletById( id:String ){
    return this.apiEndpoint.createUrlWithPathVariables("walletInDb", [id])
  }

  public deleteAWallet( id: String ){
    return this.apiEndpoint.createUrlWithPathVariables("walletInDb", [id])
  }
}
