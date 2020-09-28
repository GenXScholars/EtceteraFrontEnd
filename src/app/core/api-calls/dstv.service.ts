import { Injectable } from '@angular/core';
import { ApiEndpointsService } from '../services/api-endpoints.service.service';

@Injectable({
  providedIn: 'root'
})
export class DSTVService {

  constructor( private apiEndpoint : ApiEndpointsService ) { }

  public rechargeDstv(){
    this.apiEndpoint.createUrl("data/recharge", true)
  }

  public bulkDstvRecharge(){
    this.apiEndpoint.createUrl("data/bulk-recharge")
  }

  public validateDstvRecharge(){
    this.apiEndpoint.createUrl("data/bulk-recharge")
  }

  public setHourlyDstvRecharge(){
    this.apiEndpoint.createUrl("data/hourly-recuring", true)
  }

  public setDailyDstvRecharge(){
    this.apiEndpoint.createUrl("data/daily-recuring", true)
  }

  public setWeeklyDstvRecharge(){
    this.apiEndpoint.createUrl("data/weekly-recuring")
  }

  public setMonthlyDstvRecharge(){
    this.apiEndpoint.createUrl("data/monthly-recuring")
  }

  public checkDstvRechargeStatus(){
    this.apiEndpoint.createUrl("data/status", true)
  }

  public cancelRecurringAirtime(){
    this.apiEndpoint.createUrl("data/cancel-recuring", true)
  }

  public getAmountToPay(){
    this.apiEndpoint.createUrl("data/get-amount-to-pay", true)
  }
}
