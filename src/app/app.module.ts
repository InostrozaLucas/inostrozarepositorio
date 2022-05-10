import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoApComponent } from './components/logo-ap/logo-ap.component';
import { RrssComponent } from './components/rrss/rrss.component';
import { AcercadeComponent } from './components/acercade/acercade.component';
import { ImagenfondoComponent } from './components/imagenfondo/imagenfondo.component';
import { ExperiencialaboralComponent } from './components/experiencialaboral/experiencialaboral.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoApComponent,
    RrssComponent,
    AcercadeComponent,
    ImagenfondoComponent,
    ExperiencialaboralComponent,
    EducacionComponent,
    HabilidadesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
