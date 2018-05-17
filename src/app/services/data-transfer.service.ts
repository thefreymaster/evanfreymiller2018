import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable()
export class DataTransferService {

  movies = [];
  currentBigScreenObject;
  checked = false;
  error = false;
  firstSearch = false;
  currentlyRegistering = false;
  amazonItems = {};


  loadingBigScreenItem = false;
  perviousScrollY = 0;
  movieListShowFrame: string;
  appOpenLogged: boolean = false;
  loading: boolean = true;



  

  constructor(private http: HttpClient, private router: Router) { 

  }

  

  
}
