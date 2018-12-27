import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class SampleService {

  constructor(private http: HttpClient) { }

}
