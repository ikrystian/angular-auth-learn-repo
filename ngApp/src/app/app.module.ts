import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RegisterComponent } from './views/register/register.component';
import { LoginComponent } from './views/login/login.component';
import { EventsComponent } from './views/events/events.component';
import { SpecialEventsComponent } from './views/special-events/special-events.component';
import { AuthService } from './services/authorization/auth.service';
import { EventService } from './services/event/event.service';
import { AuthGuard } from './services/authorization/auth.guard';
import { TokenInterceptorService} from './services/token-interceptor/token-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    EventsComponent,
    SpecialEventsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [AuthService, EventService, AuthGuard, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
