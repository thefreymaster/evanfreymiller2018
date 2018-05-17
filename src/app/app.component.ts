import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MediaService } from './services/media.service';
import { DataTransferService } from './services/data-transfer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private mediaService: MediaService, private service: DataTransferService, private router: Router) {
    
  }


}
