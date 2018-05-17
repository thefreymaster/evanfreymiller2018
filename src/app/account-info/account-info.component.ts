import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.css']
})
export class AccountInfoComponent implements OnInit {

  constructor() { }

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
}
