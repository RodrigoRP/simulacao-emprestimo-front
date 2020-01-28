import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmprestimoService {

  private baseUrl = 'http://localhost:8080/api/v1/emprestimos';

  constructor(private http: HttpClient) { }

  createEmprestimo(emprestimo: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, emprestimo);
  }

  getEmprestimosList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }


}

