import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastrarAtendimentoComponent } from './cadastrar-atendimento/cadastrar-atendimento.component';
import { DetalharAtendimentoComponent } from './detalhar-atendimento/detalhar-atendimento.component';
import { EditarAtendimentoComponent } from './editar-atendimento/editar-atendimento.component';
import { ListarAtendimentoComponent } from './listar-atendimento/listar-atendimento.component';
import { PrincipalComponent } from './principal/principal.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'principal', component: PrincipalComponent },
  { path: 'cadastrarAtendimento', component: CadastrarAtendimentoComponent },
  { path: 'listarAtendimento', component: ListarAtendimentoComponent },
  { path: 'editarAtendimento/:id', component: EditarAtendimentoComponent},
  { path: 'detalharAtendimento/:id', component: DetalharAtendimentoComponent },
  { path: '', redirectTo: '/principal', pathMatch: 'full' },
];
@NgModule({
  declarations: [
    AppComponent,
    CadastrarAtendimentoComponent,
    DetalharAtendimentoComponent,
    EditarAtendimentoComponent,
    ListarAtendimentoComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatRadioModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    provideAnimationsAsync()
  
  ],

  bootstrap: [AppComponent]
  
})
export class AppModule { }
