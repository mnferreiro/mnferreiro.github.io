import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Datos } from '../modelo/datos';


@Injectable({
  providedIn: 'root'
})
export class DatosService {

  constructor(private httpClient:HttpClient) { }

  borrarDatos(id:Number) {
    const Url="https://cvmark-back-production.up.railway.app/api/datos/delete/";
    return this.httpClient.delete<Number>(Url+id);
  }
  editarDatos(datos:Datos):Observable<any> {
    const Url="https://cvmark-back-production.up.railway.app/api/datos/edit/";
    return this.httpClient.put<Datos>(Url+datos.id, datos);
  }
  recuperarDatos(id:Number) {
    const Url="https://cvmark-back-production.up.railway.app/api/datos/";
    return this.httpClient.get<Datos>(Url+id);
  }
  cargarDatos(datos:Datos):Observable<any>{
    const Url="https://cvmark-back-production.up.railway.app/api/datos/nuevo/";
    return this.httpClient.post<Datos>(Url, datos);
     }
}
