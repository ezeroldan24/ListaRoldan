import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaDeAlumnosComponent } from './lista-de-alumnos/lista-de-alumnos.component';
import { ColoresDirective } from './directives/colores.directive';

@NgModule({
  declarations: [
    AppComponent,
    ListaDeAlumnosComponent,
    ColoresDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
