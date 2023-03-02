import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Experiencia } from '../modelo/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  constructor(private httpClient:HttpClient) { }

  
  borrarExperiencia(id:Number) {
    const Url="https://cvmark-back-production.up.railway.app/api/experiencia/delete/";
    return this.httpClient.delete<Number>(Url+id);
  }
  editarExperiencia(experiencia:Experiencia):Observable<any> {
    const Url="https://cvmark-back-production.up.railway.app/api/experiencia/edit/";
    return this.httpClient.put<Experiencia>(Url+experiencia.id, experiencia);
  }
  recuperarExperiencia(id:Number) {
    const Url="https://cvmark-back-production.up.railway.app/api/experiencia/";
    return this.httpClient.get<Experiencia>(Url+id);
  }
  cargarExperiencia(experiencia:Experiencia):Observable<any>{
    const Url="https://cvmark-back-production.up.railway.app/api/experiencia/nuevo/";
    return this.httpClient.post<Experiencia>(Url, experiencia);
     }
}
