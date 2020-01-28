import { Component, OnInit } from '@angular/core';
import { Observable, from } from "rxjs";
import { EmprestimoService } from '../emprestimo.service';
import { Router } from '@angular/router';
import { Emprestimo } from "../Emprestimo";

@Component({
  selector: 'app-simular-list',
  templateUrl: './simular-list.component.html',
  styleUrls: ['./simular-list.component.css']
})
export class SimularListComponent implements OnInit {
  emprestimos: Observable<Emprestimo[]>;

  constructor(private emprestimoService: EmprestimoService,
    
    private router: Router) { }


  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.emprestimos = this.emprestimoService.getEmprestimosList();
  }


}
