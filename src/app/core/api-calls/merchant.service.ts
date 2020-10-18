import { Injectable } from '@angular/core';
import { QueryStringParameters } from 'src/app/shared/classes/query-string-parameters';
import { ApiEndpointsService } from '../services/api-endpoints.service.service';

@Injectable({
  providedIn: 'root'
})
export class MerchantService {
  constructor( private apiEndpoint : ApiEndpointsService ) { }

  public signUpMerchant(){
    return this.apiEndpoint.createUrl("merchant/sign-up", true)
  }

  public loginMerchant(){
    return this.apiEndpoint.createUrl("merchant/login", true)
  }

  public getAllMerchants(){
    return this.apiEndpoint.createUrl("merchant/get-all", true)
  }

  public deleteAMerchant( id: String ){
    return this.apiEndpoint.createUrlWithPathVariables("merchant", [id])
  }

  public getASingleMerchant( id : String){
    return this.apiEndpoint.createUrlWithPathVariables("merchant", [id])
  }

  public getCurrentMerchant( id: String ){
    return this.apiEndpoint.createUrlWithPathVariables("merchant/current", [id])
  }
  public upDateAMerchant(
    id : string
  ): string {
    return this.apiEndpoint.createUrlWithQueryParameters(
      "merchant",
      (qs: QueryStringParameters) => {
        qs.push("id", id);
      }
    );
  }
}
