import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './componentes/Navigation-Bar/navigation-bar/navigation-bar.component';
import { FooterComponent } from './componentes/Footer-Web/footer/footer.component';
import { CarrusselNovedadesComponent } from './componentes/carrussel-novedades/carrussel-novedades.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    FooterComponent,
    CarrusselNovedadesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
