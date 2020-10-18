import { Injectable } from '@angular/core';
import { ApiEndpointsService } from '../services/api-endpoints.service.service';

@Injectable({
  providedIn: 'root'
})
export class DSTVService {

  constructor( private apiEndpoint : ApiEndpointsService ) { }

  public rechargeDstv(){
    return this.apiEndpoint.createUrl("data/recharge", true)
  }

  public bulkDstvRecharge(){
    return this.apiEndpoint.createUrl("data/bulk-recharge")
  }

  public validateDstvRecharge(){
    return this.apiEndpoint.createUrl("data/bulk-recharge")
  }

  public setHourlyDstvRecharge(){
    return this.apiEndpoint.createUrl("data/hourly-recuring", true)
  }

  public setDailyDstvRecharge(){
    return this.apiEndpoint.createUrl("data/daily-recuring", true)
  }

  public setWeeklyDstvRecharge(){
    return this.apiEndpoint.createUrl("data/weekly-recuring")
  }

  public setMonthlyDstvRecharge(){
    return this.apiEndpoint.createUrl("data/monthly-recuring")
  }

  public checkDstvRechargeStatus(){
    return this.apiEndpoint.createUrl("data/status", true)
  }

  public cancelRecurringAirtime(){
    return this.apiEndpoint.createUrl("data/cancel-recuring", true)
  }

  public getAmountToPay(){
    return this.apiEndpoint.createUrl("data/get-amount-to-pay", true)
  }
}
