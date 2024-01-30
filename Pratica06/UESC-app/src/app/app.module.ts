import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DestaquesComponent } from './destaques/destaques.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { ServicosComponent } from './servicos/servicos.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { ContainerMenuNoticiasDestaquesComponent } from './container-menu-noticias-destaques/container-menu-noticias-destaques.component';
import { ContainerServicosResultadosComponent } from './container-servicos-resultados/container-servicos-resultados.component';

@NgModule({
  declarations: [
    AppComponent,
    DestaquesComponent,
    NoticiasComponent,
    ServicosComponent,
    ResultadosComponent,
    ContainerMenuNoticiasDestaquesComponent,
    ContainerServicosResultadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
