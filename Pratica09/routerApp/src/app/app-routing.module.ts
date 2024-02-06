import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JReaderComponent } from './jreader/jreader.component';
import { RoteirosComponent } from './roteiros/roteiros.component';
import { SiteuescComponent } from './siteuesc/siteuesc.component';
import { WikiComponent } from './wiki/wiki.component';

const routesAPP: Routes = [
  { path: 'jreader', component: JReaderComponent},
  { path: 'roteiros', component: RoteirosComponent},
  { path: 'wiki', component: WikiComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routesAPP)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
