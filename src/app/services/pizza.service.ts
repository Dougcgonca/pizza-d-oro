import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';

@Injectable()
export class PizzaService {
  constructor(private httpClient: HttpClient) {}

  private url = 'http://localhost:3000';

  getPizzas() {
    return this.httpClient.get<Observable<string[]>>(`${this.url}/pizzas`).pipe(
      catchError((error) => {
        throw error;
      })
    );
  }
}
