import { Injectable } from '@angular/core';
import { QueryStringParameters } from 'src/app/shared/classes/query-string-parameters';
import { ApiEndpointsService } from '../services/api-endpoints.service.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor( private apiEndpoint : ApiEndpointsService ) { }

  public signUpAdmin(){
    this.apiEndpoint.createUrl("admin/sign-up", true)
  }

  public loginAdmin(){
    this.apiEndpoint.createUrl("admin/login", true)
  }

  public getAllAdmins(){
    this.apiEndpoint.createUrl("admin/get-all", true)
  }

  public deleteAnAdmin( id: String ){
    this.apiEndpoint.createUrlWithPathVariables("admin", [id])
  }

  public getASingleAdmin( id : String){
    this.apiEndpoint.createUrlWithPathVariables("admin", [id])
  }
  public upDateAnAdmin(
    id : string
  ): string {
    return this.apiEndpoint.createUrlWithQueryParameters(
      "admin",
      (qs: QueryStringParameters) => {
        qs.push("id", id);
      }
    );
  }
}
