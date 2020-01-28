import { Cliente } from "../Cliente";
import { Component, OnInit, Input } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { ClienteListComponent } from '../cliente-list/cliente-list.component';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-cliente-details',
  templateUrl: './cliente-details.component.html',
  styleUrls: ['./cliente-details.component.css']
})
export class ClienteDetailsComponent implements OnInit {

  id: number;
  cliente: Cliente;



  constructor(private route: ActivatedRoute,private router: Router,
    private clienteService: ClienteService) { }

  ngOnInit() {
    this.cliente = new Cliente();



    this.id = this.route.snapshot.params['id'];
    
    this.clienteService.getCliente(this.id)
      .subscribe(data => {
        console.log(data)
        this.cliente = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['clientes']);
  }
}