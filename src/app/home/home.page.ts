import { Component, OnInit } from '@angular/core';
import { Cpu } from '../cpu.model';
import { Gpu } from '../gpu.model';
import { Mboard } from '../mboard.model';
import { Ram } from '../ram.model';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  cpus: Cpu[];
  gpus: Gpu[];
  mboards: Mboard[];
  rams: Ram[];
  viewValue: boolean;
  constructor(private homeService: HomeService) {}


  ionViewWillEnter(){
    this.cpus = this.homeService.getAllCpus();
    this.gpus = this.homeService.getAllGpus();
    this.mboards = this.homeService.getAllMboard();
    this.rams = this.homeService.getAllRam();
  }

  ngOnInit(){
  }

  ListOrGrid(){
    this.viewValue = !this.viewValue;
  }
}
