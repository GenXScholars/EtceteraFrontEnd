import { Injectable } from '@angular/core';
import { ApiEndpointsService } from '../services/api-endpoints.service.service';

@Injectable({
  providedIn: 'root'
})
export class MobileDataService {

  constructor( private apiEndpoint : ApiEndpointsService ) { }

  public getMtnData(){
    return this.apiEndpoint.createUrl("data/recharge", true)
  }

  public bulkMtnRecharge(){
    return this.apiEndpoint.createUrl("data/bulk-recharge")
  }

  public setHourlyMtnDataRecharge(){
    return this.apiEndpoint.createUrl("data/hourly-recuring", true)
  }

  public setDailyMtnDataRecharge(){
    return this.apiEndpoint.createUrl("data/daily-recuring", true)
  }

  public setWeeklyMtnDataRecharge(){
    return this.apiEndpoint.createUrl("data/weekly-recuring")
  }

  public setMonthlyMtnDataRecharge(){
    return this.apiEndpoint.createUrl("data/monthly-recuring")
  }

  public checkDataRechargeStatus(){
    return this.apiEndpoint.createUrl("data/status", true)
  }

  public cancelRecurringMtnData(){
    return this.apiEndpoint.createUrl("data/cancel-recuring", true)
  }

  public getAmountToPay(){
    return this.apiEndpoint.createUrl("data/get-amount-to-pay", true)
  }
}
