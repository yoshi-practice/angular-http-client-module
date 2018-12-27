import { HttpClientModule, HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class SampleService {

  constructor(private http: HttpClient) { }

  get(): Promise<any>{
    const url = "http://weather.livedoor.com/forecast/webservice/json/v1?city=400040";
    const myParameter = "MyParametorValue";

    return this.http.get(url,{
      
      params: new HttpParams().set("myParameter",myParameter)
    }).toPromise();
  }
}
