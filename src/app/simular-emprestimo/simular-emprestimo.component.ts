import { Component, OnInit } from '@angular/core';
import { EmprestimoService } from '../emprestimo.service';
import { Emprestimo } from "../Emprestimo";
import { Router } from '@angular/router';


@Component({
  selector: 'app-simular-emprestimo',
  templateUrl: './simular-emprestimo.component.html',
  styleUrls: ['./simular-emprestimo.component.css']
})
export class SimularEmprestimoComponent implements OnInit {

  emprestimo: Emprestimo = new Emprestimo();
  submitted = false;

  constructor(private emprestimoService: EmprestimoService,
    private router: Router) { }

  ngOnInit() {
  }

  newEmprestimo(): void {
    this.submitted = false;
    this.emprestimo = new Emprestimo();
  }

  save() {
    this.emprestimoService.createEmprestimo(this.emprestimo)
      .subscribe(data => console.log(data), error => console.log(error));
    this.emprestimo = new Emprestimo();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/emprestimos']);
  }


}
