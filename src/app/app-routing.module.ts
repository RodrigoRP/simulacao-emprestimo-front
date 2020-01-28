import { ClienteDetailsComponent } from './cliente-details/cliente-details.component';
import { CreateClienteComponent } from './create-cliente/create-cliente.component';
import { SimularEmprestimoComponent } from './simular-emprestimo/simular-emprestimo.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { UpdateClienteComponent } from './update-cliente/update-cliente.component';
import { SimularListComponent } from './simular-list/simular-list.component';


const routes: Routes = [
  { path: '', redirectTo: 'cliente', pathMatch: 'full' },
  { path: 'clientes', component: ClienteListComponent },
  { path: 'add', component: CreateClienteComponent },
  { path: 'simulacao', component: SimularEmprestimoComponent },
  { path: 'listarSimulacao', component: SimularListComponent },
  { path: 'update/:id', component: UpdateClienteComponent },
  { path: 'details/:id', component: ClienteDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }