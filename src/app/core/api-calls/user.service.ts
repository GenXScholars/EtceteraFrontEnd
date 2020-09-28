import { Injectable } from '@angular/core';
import { QueryStringParameters } from 'src/app/shared/classes/query-string-parameters';
import { ApiEndpointsService } from "../services/api-endpoints.service.service"

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private apiEndpoint : ApiEndpointsService ) { }

  public signUpUser(){
    this.apiEndpoint.createUrl("user/sign-up", true)
  }

  public loginUser(){
    this.apiEndpoint.createUrl("user/login", true)
  }

  public getAllUsers(){
    this.apiEndpoint.createUrl("user/get-all", true)
  }

  public deleteAUser( id: String ){
    this.apiEndpoint.createUrlWithPathVariables("user", [id])
  }

  public getASingleUser( id : String){
    this.apiEndpoint.createUrlWithPathVariables("user", [id])
  }

  public getCurrentUser( id: String ){
    this.apiEndpoint.createUrlWithPathVariables("user/current", [id])
  }
  public upDateAUser(
    id : string
  ): string {
    return this.apiEndpoint.createUrlWithQueryParameters(
      "user",
      (qs: QueryStringParameters) => {
        qs.push("id", id);
      }
    );
  }
}
