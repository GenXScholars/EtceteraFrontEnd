import { Injectable } from '@angular/core';
import { QueryStringParameters } from 'src/app/shared/classes/query-string-parameters';
import { ApiEndpointsService } from '../services/api-endpoints.service.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor( private apiEndpoint : ApiEndpointsService ) { }

  public signUpAdmin(){
    return this.apiEndpoint.createUrl("admin/sign-up", true)
  }

  public loginAdmin(){
    return this.apiEndpoint.createUrl("admin/login", true)
  }

  public getAllAdmins(){
    return this.apiEndpoint.createUrl("admin/get-all", true)
  }

  public deleteAnAdmin( id: String ){
    return this.apiEndpoint.createUrlWithPathVariables("admin", [id])
  }

  public getASingleAdmin( id : String){
    return this.apiEndpoint.createUrlWithPathVariables("admin", [id])
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
