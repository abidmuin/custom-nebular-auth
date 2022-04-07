import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NbLayoutModule, NbThemeModule, NbUserModule} from '@nebular/theme';
import {NbEvaIconsModule} from '@nebular/eva-icons';
import {HttpClientModule} from "@angular/common/http";
import {DashboardComponent} from './dashboard/dashboard.component';
import {NbAuthModule, NbAuthSimpleToken, NbPasswordAuthStrategy} from "@nebular/auth";
import {baseUrl, dashboard, login} from "../environments/environment";
import {AuthGuardService} from "./shared/auth-guard.service";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({name: 'default'}),
    NbLayoutModule,
    NbEvaIconsModule,
    HttpClientModule,
    NbUserModule,
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'email',
          token: {
            class: NbAuthSimpleToken,
            key: 'data.token'
          },

          baseEndpoint: `${baseUrl}`,
          login: {
            endpoint: `${login}`,
            method: 'post',

            redirect: {
              success: `${dashboard}`,
              failure: null // stay on the same page
            }
          }
        })
      ],
      forms: {},
    })
  ],
  providers: [
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
