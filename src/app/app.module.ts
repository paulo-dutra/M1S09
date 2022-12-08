import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardPersonagemComponent } from './card-personagem/card-personagem.component';
import { FormStorageComponent } from './form-storage/form-storage.component';
import { BuscaComponent } from './busca/busca.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    NavbarComponent,
    CardPersonagemComponent,
    FormStorageComponent,
    BuscaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
