import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
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
import { AutenticacaoComponent } from './autenticacao/autenticacao.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
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
import { AutenticaInterceptor } from './autentica.interceptor';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';

const routes: Routes = [
  { path: 'principal', component: PrincipalComponent },
  { path: 'cadastrarAtendimento', component: CadastrarAtendimentoComponent },
  { path: 'listarAtendimento', component: ListarAtendimentoComponent },
  { path: 'editarAtendimento/:id', component: EditarAtendimentoComponent},
  { path: 'detalharAtendimento/:id', component: DetalharAtendimentoComponent },
  { path: 'autenticacao', component : AutenticacaoComponent},
  { path: '', redirectTo: '/autenticacao', pathMatch: 'full' },
];
@NgModule({
  declarations: [
    AppComponent,
    CadastrarAtendimentoComponent,
    DetalharAtendimentoComponent,
    EditarAtendimentoComponent,
    ListarAtendimentoComponent,
    PrincipalComponent,
    AutenticacaoComponent,
    LoadingSpinnerComponent
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
    provideAnimationsAsync(),
    {provide: HTTP_INTERCEPTORS, useClass: AutenticaInterceptor, multi : true}
  
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],

  bootstrap: [AppComponent]
  
})
export class AppModule { }
