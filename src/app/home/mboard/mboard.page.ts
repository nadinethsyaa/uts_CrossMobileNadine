import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../home.service';
import { Mboard } from '../../mboard.model';

@Component({
  selector: 'app-mboard',
  templateUrl: './mboard.page.html',
  styleUrls: ['./mboard.page.scss'],
})
export class MboardPage implements OnInit {
  mboard: Mboard;
  constructor(
      private activatedRoute: ActivatedRoute,
      private homeService: HomeService
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('id'))
      {
        return;
      }
      const id = paramMap.get('id');
      this.mboard = this.homeService.getMboard(id);
    });
  }

}
