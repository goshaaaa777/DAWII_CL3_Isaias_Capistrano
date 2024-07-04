import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Pregunta2Service {
  apiFoto:string = "https://jsonplaceholder.typicode.com/photos"

  constructor(private httpCliente: HttpClient) { }

  getAllApiFoto():Observable<any>{
    return this.httpCliente.get<any>(this.apiFoto).pipe(
      map(response => response.filter((location: any) => location.title.toLowerCase().startsWith('a') ||
      location.title.toLowerCase().startsWith('r') || location.title.toLowerCase().startsWith('s'))));
   }

}
