import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Pregunta1Service {

  apiRick:string = "https://rickandmortyapi.com/api/episode"
  apiFoto:string = "https://jsonplaceholder.typicode.com/photos"
  constructor(private httpCliente: HttpClient) {

   }

   getAllApiRick():Observable<any>{
    return this.httpCliente.get<any>(this.apiRick).pipe(
      map(response => response.results.filter((location: any) => location.id % 2 == 1)));
   }

   getAllApiFoto():Observable<any>{
    return this.httpCliente.get<any>(this.apiFoto).pipe(
      map(response => response.results.filter((location: any) => location.id % 2 == 1)));
   }
}
