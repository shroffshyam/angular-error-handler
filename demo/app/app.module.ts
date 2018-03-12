import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MockHttpModule } from '../../src/mock.module';

import { AppComponent } from './app.component';
import { UserService } from './shared/services/user.service';
import { CustomErrorModule } from  '../../src/error/error.module';
import { ErrorLogService } from '../../src/error/error-log.service';

export class CustomErrorLogService extends ErrorLogService{

}



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MockHttpModule,
    CustomErrorModule.forRoot()
  ],
   providers: [
    UserService,
    {provide: ErrorLogService, useClass: CustomErrorLogService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }




// @NgModule({
//   declarations: [
//     AppComponent
//   ],
//   imports: [
//     BrowserModule,
//     FormsModule,
//     MockHttpModule,
//     CustomErrorModule
//     // CustomErrorHandler.forRoot({
//     //   errorLogService : {provide: ErrorLogService, useClass: CustomErrorLogService}
//     // })
//   ],
//    providers: [
//     UserService
//   ],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
