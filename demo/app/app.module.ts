import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MockHttpModule } from '../../src/mock.module';

import { AppComponent } from './app.component';
import { UserService } from './shared/services/user.service';
import { CustomErrorHandler } from  '../../src/error/error.module';

export class CustomErrorLogService implements ErrorLogService{

}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MockHttpModule,
    CustomErrorHandler.forRoot({
      errorLogService : {provide: ErrorLogService, useClass: CustomErrorLogService}
    })
  ],
   providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
