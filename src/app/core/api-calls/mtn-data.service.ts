import { Injectable } from '@angular/core';
import { ApiEndpointsService } from '../services/api-endpoints.service.service';

@Injectable({
  providedIn: 'root'
})
export class MobileDataService {

  constructor( private apiEndpoint : ApiEndpointsService ) { }

  public getMtnData(){
    this.apiEndpoint.createUrl("data/recharge", true)
  }

  public bulkMtnRecharge(){
    this.apiEndpoint.createUrl("data/bulk-recharge")
  }

  public setHourlyMtnDataRecharge(){
    this.apiEndpoint.createUrl("data/hourly-recuring", true)
  }

  public setDailyMtnDataRecharge(){
    this.apiEndpoint.createUrl("data/daily-recuring", true)
  }

  public setWeeklyMtnDataRecharge(){
    this.apiEndpoint.createUrl("data/weekly-recuring")
  }

  public setMonthlyMtnDataRecharge(){
    this.apiEndpoint.createUrl("data/monthly-recuring")
  }

  public checkDataRechargeStatus(){
    this.apiEndpoint.createUrl("data/status", true)
  }

  public cancelRecurringMtnData(){
    this.apiEndpoint.createUrl("data/cancel-recuring", true)
  }

  public getAmountToPay(){
    this.apiEndpoint.createUrl("data/get-amount-to-pay", true)
  }
}
