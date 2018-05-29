import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.css']
})
export class AccountInfoComponent implements OnInit {

  constructor(public http: HttpClient) { }

  ngOnInit() {
  }
  changeAccountID(newID){
    
    
    localStorage.setItem('accountID', newID);
    setTimeout(() => {
      location.reload();
    }, 200);
  }

  keydownSubmit(event, newID){
    if(event.keyCode == 13) {
    
      localStorage.setItem('accountID', newID);
      setTimeout(() => {
        location.reload();
      }, 200);
    }
  }
  openResume(){
    this.http.get('/resume').subscribe(data => {});
  }
}
