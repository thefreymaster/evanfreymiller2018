import { Component, OnInit } from '@angular/core';
import { DataTransferService } from '../services/data-transfer.service';
import { Router } from '@angular/router';
import { MediaService } from '../services/media.service';
import { slideInOutAnimation } from '../_animations/slide.animation';



@Component({
  selector: 'app-info',
  animations: [slideInOutAnimation],
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  loading = true;

  constructor(public service: DataTransferService, router: Router, public mediaService: MediaService) {


  }





  position = 'below';

  ngOnInit() {
    setTimeout(() => {
      this.service.loading = false
    }, 4500);
  }




}
