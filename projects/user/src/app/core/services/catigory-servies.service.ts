import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatigoryServiesService {
  constructor(private http:HttpClient) { }

  getCatigories():Observable<{catigories:string[]}> {
    return this.http.get<{catigories:string[]}>("../../../assets/fakeApi/catigory.json");
  }
}
