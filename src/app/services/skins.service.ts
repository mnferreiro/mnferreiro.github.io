import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { skinsFormulario } from '../modelo/skinsFormulario';

@Injectable({
  providedIn: 'root'
})
export class SkinsService {

  constructor(private httpClient:HttpClient) { }


borrarSkins(id:Number) {
  const Url="https://cvmark-back-production.up.railway.app/api/skins/delete/";
  return this.httpClient.delete<Number>(Url+id);
}
editarSkins(skinsformulario:skinsFormulario):Observable<any> {
  const Url="https://cvmark-back-production.up.railway.app/api/skins/edit/";
  return this.httpClient.put<skinsFormulario>(Url+skinsformulario.id, skinsformulario);
}
recuperarSkins(id:Number) {
  const Url="https://cvmark-back-production.up.railway.app/api/skins/";
  return this.httpClient.get<skinsFormulario>(Url+id);
}
cargarSkins(skinsformulario:skinsFormulario):Observable<any>{
  const Url="https://cvmark-back-production.up.railway.app/api/skins/nuevo/";
  return this.httpClient.post<skinsFormulario>(Url, skinsformulario);
   }
  }
