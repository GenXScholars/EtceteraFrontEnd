import { Injectable } from '@angular/core';
import { ApiEndpointsService } from '../services/api-endpoints.service.service';

@Injectable({
  providedIn: 'root'
})
export class GuestPaymentServicesService {

  constructor( private apiEndpoint : ApiEndpointsService ) { }

  public guestPayment(){
    return this.apiEndpoint.createUrl("guest/pay", true)
  }
  public verifyPayment(){
    return this.apiEndpoint.createUrl("guest/verifyPayment", true)
  }
}
