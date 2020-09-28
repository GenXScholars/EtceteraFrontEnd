import { Injectable } from '@angular/core';
import { QueryStringParameters } from 'src/app/shared/classes/query-string-parameters';
import { ApiEndpointsService } from '../services/api-endpoints.service.service';

@Injectable({
  providedIn: 'root'
})
export class CreditCardsServicesService {

  constructor( private apiEndpoint : ApiEndpointsService ) { }

  public createCreditCard(){
    this.apiEndpoint.createUrl("creditCards/create", true)
  }

  public getAllCards(){
    this.apiEndpoint.createUrl("creditCards/get-all", true)
  }

  public deleteACard( cardHolderName: String ){
    this.apiEndpoint.createUrlWithPathVariables("creditCards", [cardHolderName])
  }

  public getASingleCard( cardNumber : String){
    this.apiEndpoint.createUrlWithPathVariables("creditCards", [cardNumber])
  }

  public upDateACard(
    cardHolderName : string
  ): string {
    return this.apiEndpoint.createUrlWithQueryParameters(
      "creditCards",
      (qs: QueryStringParameters) => {
        qs.push("cardHolderName", cardHolderName);
      }
    );
  }
}
