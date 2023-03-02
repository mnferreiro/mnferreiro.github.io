import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Formulario } from '../modelo/formulario';


@Injectable({
  providedIn: 'root'
})
export class ContactoService {


  constructor(private httpClient:HttpClient) {

    }

  CargarMensaje(formulario:Formulario):Observable<any>{
    const Url="https://cvmark-back-production.up.railway.app/api/formulario";
     return this.httpClient.post<Formulario>(Url, formulario);
     }
  borrarMensaje(id:Number) {
    const Url="https://cvmark-back-production.up.railway.app/api/delete/";
    return this.httpClient.delete<Number>(Url+id);
    }
  }
