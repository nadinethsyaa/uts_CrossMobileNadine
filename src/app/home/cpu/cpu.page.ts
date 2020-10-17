import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cpu } from 'src/app/cpu.model';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-cpu',
  templateUrl: './cpu.page.html',
  styleUrls: ['./cpu.page.scss'],
})
export class CpuPage implements OnInit {
  cpu: Cpu;
  constructor(
      private homeService: HomeService,
      private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('id'))
      {
        return;
      }
      const id = paramMap.get('id');
      this.cpu = this.homeService.getCpu(id);
    });
  }

}
