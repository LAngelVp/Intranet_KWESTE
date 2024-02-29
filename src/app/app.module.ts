import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './componentes/Navigation-Bar/navigation-bar/navigation-bar.component';
import { FooterComponent } from './componentes/Footer-Web/footer/footer.component';
import { CarrusselNovedadesComponent } from './componentes/carrussel-novedades/carrussel-novedades.component';
import { RouterModule } from '@angular/router';
import { ConcesionariosComponent } from './componentes/concesionarios/concesionarios.component';
import { Metodologia5sComponent } from './componentes/metodologia5s/metodologia5s.component';
import { RepositorioTQCComponent } from './componentes/repositorio-tqc/repositorio-tqc.component';
import { HomeComponent } from './componentes/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    FooterComponent,
    CarrusselNovedadesComponent,
    ConcesionariosComponent,
    Metodologia5sComponent,
    RepositorioTQCComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'concesionarios', component : ConcesionariosComponent},
      {path: 'metodologia-5s', component : Metodologia5sComponent},
      {path: 'repositorioTQC', component: RepositorioTQCComponent},
      {path : '', redirectTo: '', pathMatch: 'full'}
    ])
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
