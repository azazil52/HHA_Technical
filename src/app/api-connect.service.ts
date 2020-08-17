import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';

@Injectable()
export class ApiConnectService {

  constructor(public http:HttpClient) { 
    console.log('Data Retreaval Service connected...');
  }


  getAlaskaInfo(){
    // Testing for client retreaval
    // This link works for the invoice service not the login service 
  	return this.http.get(' https://dashboard.healthit.gov/api/open-api.php?source=hospital-mu-public-health-measures.csv');
  }
}
