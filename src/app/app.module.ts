import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
import { APP_ROUTES } from './app.route';

// Modulos
import { PagesModule } from './pages/pages.module';

// Temporal
import { FormsModule } from '@angular/forms';

// Servicios
import { SettingsService } from './services/service.index';

// Componenetes
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule,
    FormsModule
  ],
  providers: [SettingsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
