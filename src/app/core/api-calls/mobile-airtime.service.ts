import { Injectable } from '@angular/core';
import { ApiEndpointsService } from '../services/api-endpoints.service.service';

@Injectable({
  providedIn: 'root'
})
export class MobileAirtimeService {

  constructor( private apiEndpoint : ApiEndpointsService ) { }

  public rechargeAirtime(){
    return this.apiEndpoint.createUrl("airtime/recharge", true)
  }

  public bulkAirtimeRecharge(){
    return this.apiEndpoint.createUrl("airtime/bulk-recharge")
  }

  public setHourlyAirtimeRecharge(){
    return this.apiEndpoint.createUrl("airtime/hourly-recuring", true)
  }

  public setDailyAirtimeRecharge(){
    return this.apiEndpoint.createUrl("airtime/daily-recuring", true)
  }

  public setWeeklyAirtimeRecharge(){
    return this.apiEndpoint.createUrl("airtime/weekly-recuring")
  }

  public setMonthlyAirtimeRecharge(){
    return this.apiEndpoint.createUrl("airtime/monthly-recuring")
  }

  public checkAirtimeRechargeStatus(){
    return this.apiEndpoint.createUrl("airtime/status", true)
  }

  public cancelRecurringAirtime(){
    return this.apiEndpoint.createUrl("airtime/cancel-recuring", true)
  }

  public getAmountToPay(){
    return this.apiEndpoint.createUrl("airtime/get-amount-to-pay", true)
  }
}
