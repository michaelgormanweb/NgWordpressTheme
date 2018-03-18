import { Injectable } from '@angular/core';
import { App } from '../models/app.model';

@Injectable()
export class AppService {
  private appInfo: App;

  constructor() { }

  public getBasicSiteInfo() {
    // DOSTUFF
  }

}
