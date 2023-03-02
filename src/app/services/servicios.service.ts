import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Servicios } from '../modelo/servicios';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  constructor(private httpClient:HttpClient) { }

  borrarServicios(id:Number) {
    const Url="https://cvmark-back-production.up.railway.app/api/servicios/delete/";
    return this.httpClient.delete<Number>(Url+id);
  }
  editarServicios(servicios:Servicios):Observable<any> {
    const Url="https://cvmark-back-production.up.railway.app/api/servicios/edit/";
    return this.httpClient.put<Servicios>(Url+servicios.id, servicios);
  }
  recuperarServicios(id:Number) {
    const Url="https://cvmark-back-production.up.railway.app/api/servicios/";
    return this.httpClient.get<Servicios>(Url+id);
  }
  cargarServicios(servicios:Servicios):Observable<any>{
    const Url="https://cvmark-back-production.up.railway.app/api/servicios/nuevo/";
    return this.httpClient.post<Servicios>(Url, servicios);
     }
}
