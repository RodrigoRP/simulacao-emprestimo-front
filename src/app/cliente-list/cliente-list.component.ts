import { ClienteDetailsComponent } from '../cliente-details/cliente-details.component';
import { Observable, from } from "rxjs";
import { ClienteService } from "../cliente.service";
import { Cliente } from "../Cliente";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {
  clientes: Observable<Cliente[]>;

 
  constructor(private clienteService: ClienteService,
   
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.clientes = this.clienteService.getClientesList();
  }

  deleteCliente(id: number) {
    this.clienteService.deleteCliente(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  clienteDetails(id: number){
    this.router.navigate(['details', id]);
  }

  updateCliente(id: number){
    this.router.navigate(['update', id]);
  }
}
