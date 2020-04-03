import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(
    private httpClient: HttpClient
  ) { }

  callHttpPost(url: string, payload: any) {
    console.log(url, payload);
    return this.httpClient.post(url, payload);
  }

  callHttpPut(url: string, payload: any) {
    return this.httpClient.put(url, payload);
  }

  callHttpGet(url: string, payload: any) {
    return this.httpClient.get(url);
  }

}
