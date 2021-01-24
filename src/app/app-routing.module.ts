import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GestionComponent } from './pages/gestion/gestion.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ClaseComponent } from './pages/clase/clase.component';
import { DatosComponent } from './pages/datos/datos.component';
import { InfoComponent } from './pages/info/info.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'gestion', component: GestionComponent},
  {path: 'clase', component: ClaseComponent},
  {path: 'datos', component: DatosComponent},
  {path: 'info', component: InfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}
