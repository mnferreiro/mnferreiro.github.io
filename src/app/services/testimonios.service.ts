import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Testimonios } from '../modelo/testimonios';

@Injectable({
  providedIn: 'root'
})
export class TestimoniosService {

  constructor(private httpClient:HttpClient) { }

  borrarTestimonios(id:Number) {
    const Url="https://cvmark-back-production.up.railway.app/api/testimonio/delete/";
    return this.httpClient.delete<Number>(Url+id);
  }
  editarTestimonios(testimonios:Testimonios):Observable<any> {
    const Url="https://cvmark-back-production.up.railway.app/api/testimonio/edit/";
    return this.httpClient.put<Testimonios>(Url+testimonios.id, testimonios);
  }
  recuperarTestimonios(id:Number) {
    const Url="https://cvmark-back-production.up.railway.app/api/testimonio/";
    return this.httpClient.get<Testimonios>(Url+id);
  }
  cargarTestimonios(testimonios:Testimonios):Observable<any>{
    const Url="https://cvmark-back-production.up.railway.app/api/testimonio/nuevo/";
    return this.httpClient.post<Testimonios>(Url, testimonios);
     }
}
