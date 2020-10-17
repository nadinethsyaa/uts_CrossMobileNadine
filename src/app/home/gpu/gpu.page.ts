import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Gpu } from 'src/app/gpu.model';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-gpu',
  templateUrl: './gpu.page.html',
  styleUrls: ['./gpu.page.scss'],
})
export class GpuPage implements OnInit {
  gpu: Gpu;
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
      this.gpu = this.homeService.getGpu(id);
    });
  }

}
