import { Injectable } from '@angular/core';
// import Classes
import { UrlBuilder } from '../../shared/classes/url-builder';
import { QueryStringParameters } from '../../shared/classes/query-string-parameters';
// import Constants
import { Constants } from 'src/app/config/constants';
@Injectable()
export class ApiEndpointsService {
  constructor(
    // Inject Constants
    private constants: Constants
  ) { }
  /* #region URL CREATOR */
  // URL
  private createUrl(
    action: string,
    isMockAPI: boolean = false
  ): string {
    const urlBuilder: UrlBuilder = new UrlBuilder(
      isMockAPI ? this.constants.DEV_API_ENDPOINT :
      this.constants.LIVE_API_ENDPOINT,
      action
    );
    return urlBuilder.toString();
  }
  // URL WITH QUERY PARAMS
  private createUrlWithQueryParameters(
    action: string,
    queryStringHandler?:
      (queryStringParameters: QueryStringParameters) => void
  ): string {
    const urlBuilder: UrlBuilder = new UrlBuilder(
      this.constants.LIVE_API_ENDPOINT,
      action
    );
    // Push extra query string params
    if (queryStringHandler) {
      queryStringHandler(urlBuilder.queryString);
    }
    return urlBuilder.toString();
  }

  // URL WITH PATH VARIABLES
  private createUrlWithPathVariables(
    action: string,
    pathVariables: any[] = []
  ): string {
    let encodedPathVariablesUrl: string = '';
    // Push extra path variables
    for (const pathVariable of pathVariables) {
      if (pathVariable !== null) {
        encodedPathVariablesUrl +=
          `/${encodeURIComponent(pathVariable.toString())}`;
      }
    }
    const urlBuilder: UrlBuilder = new UrlBuilder(
      this.constants.LIVE_API_ENDPOINT,
      `${action}${encodedPathVariablesUrl}`
    );
    return urlBuilder.toString();
  }
  /* #endregion */
}
