import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../moduls/user';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

url;
  
  constructor(private _http:HttpClient) {
      this.url = "https://gorest.co.in/public/v2/users"
   }

  usuarioServicio(): Observable<Users[]>{
    return this._http.get<Users[]>(this.url);
  }

}
