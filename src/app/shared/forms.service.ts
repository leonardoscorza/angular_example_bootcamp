import { Injectable } from '@angular/core';
// Incluimos o URLSearchParams para nos permitir passar parâmetros na chamada GET
import { Http, URLSearchParams } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Angular2TokenService, A2tUiModule} from 'angular2-token';

@Injectable()
export class FormsService {
  private url: string = 'http://localhost:3000/api/v1/forms';

  constructor(private http: Http, private _tokenService: Angular2TokenService) { }

  // Esse método será atualizado para utilizar a autenticação
  //  getForms(){
  //    return this.http.get(this.url)
  //      .map(res => res.json());
  //  }

  getForms(){
    return this._tokenService.get('forms')
      .map(res => res.json());
  }


  getForm(id){
    return this.http.get(this.url + '/' + id)
      .map(res => res.json());
  }
}