import { Injectable } from '@angular/core';
@Injectable()
export class Constants {
    public readonly LIVE_API_ENDPOINT: string = 'api.vinebill.com/api/v1';  //live api endpoint
    public readonly DEV_API_ENDPOINT: string = 'http://localhost/5000'; // test endpoint
}
