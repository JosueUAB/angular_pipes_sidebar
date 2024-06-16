import { Routes } from '@angular/router';
import { GatosComponent } from './gatos/gatos.component';
import { PreciosComponent } from './precios/precios.component';
import { FotosComponent } from './fotos/fotos.component';
import { MayminComponent } from './maymin/maymin.component';
import { FechaComponent } from './fecha/fecha.component';

export const routes: Routes = [

  {path:'gatos',component:GatosComponent},
  {path:'precios',component:PreciosComponent},
  {path:'fotos',component:FotosComponent},
  {path:'maymin',component:MayminComponent},
  {path:'fecha',component:FechaComponent},
];
