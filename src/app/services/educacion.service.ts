import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EducacionFormulario } from '../modelo/educacion-formulario';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  constructor(private httpClient:HttpClient) { }

  borrarEducacion(id:Number) {
    const Url="https://cvmark-back-production.up.railway.app/api/educacion/delete/";
    return this.httpClient.delete<Number>(Url+id);
  }
  editarEducacion(educacionFormulario:EducacionFormulario):Observable<any> {
    const Url="https://cvmark-back-production.up.railway.app/api/educacion/edit/";
    return this.httpClient.put<EducacionFormulario>(Url+educacionFormulario.id, educacionFormulario);
  }
  recuperarEducacion(id:Number) {
    const Url="https://cvmark-back-production.up.railway.app/api/educacion/";
    return this.httpClient.get<EducacionFormulario>(Url+id);
  }
  cargarEducacion(educacionFormulario:EducacionFormulario):Observable<any>{
    const Url="https://cvmark-back-production.up.railway.app/api/educacion/nuevo/";
    return this.httpClient.post<EducacionFormulario>(Url, educacionFormulario);
     }
}
