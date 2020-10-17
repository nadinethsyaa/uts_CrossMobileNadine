import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ram } from 'src/app/ram.model';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-ram',
  templateUrl: './ram.page.html',
  styleUrls: ['./ram.page.scss'],
})
export class RamPage implements OnInit {
  ram: Ram;
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
      this.ram = this.homeService.getRam(id);
    });
  }

}
