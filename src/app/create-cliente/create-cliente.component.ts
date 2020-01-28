import { ClienteService } from '../cliente.service';
import { Cliente } from "../Cliente";
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-cliente',
  templateUrl: './create-cliente.component.html',
  styleUrls: ['./create-cliente.component.css']
})
export class CreateClienteComponent implements OnInit {

  cliente: Cliente = new Cliente();
  submitted = false;

  constructor(private clienteService: ClienteService,
    private router: Router) { }

  ngOnInit() {
  }

  newCliente(): void {
    this.submitted = false;
    this.cliente = new Cliente();
  }

  save() {
    this.clienteService.createCliente(this.cliente)
      .subscribe(data => console.log(data), error => console.log(error));
    this.cliente = new Cliente();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/clientes']);
  }
}
