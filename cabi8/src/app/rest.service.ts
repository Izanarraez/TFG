import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class RestService {

  constructor(private http: HttpClient) { }

  /**
   * get
   */
  public get(url:string) {
    return this.http.get(url); //Hacemos una petición GET al JSON
  }
}
