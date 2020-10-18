import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class Constants {
    public readonly LIVE_API_ENDPOINT: string = 'api.vinebill.com';  //live api endpoint
    public readonly DEV_API_ENDPOINT: string = 'http://localhost:8080/api/v1'; // test endpoint
}
