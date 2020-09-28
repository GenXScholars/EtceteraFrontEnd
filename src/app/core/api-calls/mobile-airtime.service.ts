import { Injectable } from '@angular/core';
import { ApiEndpointsService } from '../services/api-endpoints.service.service';

@Injectable({
  providedIn: 'root'
})
export class MobileAirtimeService {

  constructor( private apiEndpoint : ApiEndpointsService ) { }

  public rechargeAirtime(){
    this.apiEndpoint.createUrl("airtime/recharge", true)
  }

  public bulkAirtimeRecharge(){
    this.apiEndpoint.createUrl("airtime/bulk-recharge")
  }

  public setHourlyAirtimeRecharge(){
    this.apiEndpoint.createUrl("airtime/hourly-recuring", true)
  }

  public setDailyAirtimeRecharge(){
    this.apiEndpoint.createUrl("airtime/daily-recuring", true)
  }

  public setWeeklyAirtimeRecharge(){
    this.apiEndpoint.createUrl("airtime/weekly-recuring")
  }

  public setMonthlyAirtimeRecharge(){
    this.apiEndpoint.createUrl("airtime/monthly-recuring")
  }

  public checkAirtimeRechargeStatus(){
    this.apiEndpoint.createUrl("airtime/status", true)
  }

  public cancelRecurringAirtime(){
    this.apiEndpoint.createUrl("airtime/cancel-recuring", true)
  }

  public getAmountToPay(){
    this.apiEndpoint.createUrl("airtime/get-amount-to-pay", true)
  }
}
