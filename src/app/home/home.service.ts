import { Injectable } from '@angular/core';
import {Cpu} from '../cpu.model';
import {Gpu} from '../gpu.model';
import {Mboard} from '../mboard.model';
import {Ram} from '../ram.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private cpus: Cpu[] = [
    {
      id: 'c1',
      foto: 'https://www.amd.com/system/files/2020-09/616656-amd-ryzen-9-5000-series-PIB-1260x709_0.png',
      merek: 'AMD',
      model: 'Ryzen 9 5950X',
      base_clock: '3.7',
      boost_clock: '4.8',
      jumlah_core: '12',
      thread: '24',
      harga: '12.599.000',
      stok: '24',
    },
    {
      id: 'c2',
      foto: 'https://images-na.ssl-images-amazon.com/images/I/61kUC-u0TrL._AC_SL1500_.jpg',
      merek: 'Intel',
      model: 'Core i9-10980XE Extreme Edition Processor',
      base_clock: '3.0',
      boost_clock: '4.8',
      jumlah_core: '18',
      thread: '36',
      harga: '16.400.000',
      stok: '24',
    },
  ];

  private gpus: Gpu[] = [
    {
      id: 'g1',
      foto: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2019/6/14/6178778/6178778_6a5f5876-9d7f-4df1-971b-be12a10acb7b_1001_1001.jpg',
      merek: 'NVIDIA',
      model: '4G DDR5 GTX1050Ti Computer GPU PCI-E 3.0 PC High Speed Desktop Office',
      harga: '3.350.000',
      stok: '53'
    },
    {
      id: 'g2',
      foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTw-BIliKB3nZlSoMyGvUcfmIqJQKOl70VLRA&usqp=CAU',
      merek: 'NVIDIA',
      model: '550ti GPU 2GB gddr5 128bit',
      harga: '1.453.000',
      stok: '21'
    },
  ];

  private mboards: Mboard[] = [
    {
      id: 'm1',
      foto: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2018/4/3/14823098/14823098_6976dbef-e282-4fd2-b55f-874367e7dfba_800_800.jpg',
      merek: 'Intel',
      model: 'Motherboard Intel Socket LGA 1155 H61 OEM',
      chipset: 'Intel',
      untuk_merek: 'Intel',
      harga: '355.000',
      stok: '74'
    },
    {
      id: 'm2',
      foto: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2019/10/18/2436980/2436980_c398ed70-69b7-418b-a74a-5574c69c56d5_700_700',
      merek: 'Samsung',
      model: 'Motherboard LGA1155 H61S1 Sandy Bridge',
      chipset: 'AMD B450 Chipset',
      untuk_merek: 'Ryzen 7',
      harga: '1.999.000',
      stok: '24'
    }
  ];

  private rams: Ram[] = [
    {
      id: 'r1',
      foto: 'https://ecs7.tokopedia.net/img/cache/700/VqbcmM/2020/10/6/a0f8dd2d-2e5d-4919-bf2f-ffa3d769a4a7.jpg',
      merek: 'Corsair',
      model: 'VENGEANCE RGB PRO',
      speed: '3200',
      ukuran: '16',
      harga: '1.549.000',
      stok: '93'
    },
    {
      id: 'r2',
      foto: 'https://ecs7-p.tokopedia.net/img/cache/200-square/product-1/2020/8/29/8832893/8832893_f2c36a8f-faef-45e2-8f3c-a250d2c3ff28_700_700',
      merek: 'T-Force',
      model: 'Team Delta RGB Memory',
      speed: '3600',
      ukuran: '16',
      harga: '1.549.000',
      stok: '93'
    },
  ];

  constructor() { }

  getAllCpus(){
    return[...this.cpus];
  }
  getAllGpus(){
    return[...this.gpus];
  }
  getAllMboard(){
    return[...this.mboards];
  }
  getAllRam(){
    return[...this.rams];
  }
  getCpu(id: string) {
    return {...this.cpus.find(cpu => {
        return cpu.id === id;
      })};
  }

  getGpu(id: string) {
    return {...this.gpus.find(gpu => {
        return gpu.id === id;
      })};
  }

  getMboard(id: string) {
    return {...this.mboards.find(mboard => {
        return mboard.id === id;
      })};
  }

  getRam(id: string) {
    return {...this.rams.find(ram => {
        return ram.id === id;
      })};
  }

  deleteCpu(id: string) {
    this.cpus = this.cpus.filter(cpu => {
      return cpu.id !== id;
    });
  }

  deleteGPU(id: string) {
    this.gpus = this.gpus.filter(gpu => {
      return gpu.id !== id;
    });
  }

  deleteMotherboard(id: string) {
    this.mboards = this.mboards.filter(mboard => {
      return mboard.id !== id;
    });
  }

  deleteRam(id: string) {
    this.rams = this.rams.filter(ram => {
      return ram.id !== id;
    });
  }

  // tslint:disable-next-line:max-line-length
  editCpu(id: string, merek: string, model: string, foto: string, baseclock: string, boostclock: string, jumlahcore: string, thread: string, harga: string, stok: string){
    this.cpus.find(item => item.id === id).id = id;
    this.cpus.find(item => item.id === id).merek = merek;
    this.cpus.find(item => item.id === id).model = model;
    this.cpus.find(item => item.id === id).foto = foto;
    this.cpus.find(item => item.id === id).base_clock = baseclock;
    this.cpus.find(item => item.id === id).boost_clock = boostclock;
    this.cpus.find(item => item.id === id).jumlah_core = jumlahcore;
    this.cpus.find(item => item.id === id).thread = thread;
    this.cpus.find(item => item.id === id).harga = harga;
    this.cpus.find(item => item.id === id).stok = stok;
  }

  editGpu(id: string, merek: string, model: string, foto: string, harga: string, stok: string){
    this.gpus.find(item => item.id === id).id = id;
    this.gpus.find(item => item.id === id).merek = merek;
    this.gpus.find(item => item.id === id).model = model;
    this.gpus.find(item => item.id === id).foto = foto;
    this.gpus.find(item => item.id === id).harga = harga;
    this.gpus.find(item => item.id === id).stok = stok;
  }

  editMboard(id: string, merek: string, model: string,  foto: string, chipset: string, untukMerek: string, harga: string, stok: string){
    this.mboards.find(item => item.id === id).id = id;
    this.mboards.find(item => item.id === id).merek = merek;
    this.mboards.find(item => item.id === id).model = model;
    this.mboards.find(item => item.id === id).foto = foto;
    this.mboards.find(item => item.id === id).chipset = chipset;
    this.mboards.find(item => item.id === id).untuk_merek = untukMerek;
    this.mboards.find(item => item.id === id).harga = harga;
    this.mboards.find(item => item.id === id).stok = stok;
  }

  editRam(id: string, merek: string, model: string, foto: string, ukuran: string, speed: string, harga: string, stok: string){
    this.rams.find(item => item.id === id).id = id;
    this.rams.find(item => item.id === id).merek = merek;
    this.rams.find(item => item.id === id).model = model;
    this.rams.find(item => item.id === id).foto = foto;
    this.rams.find(item => item.id === id).ukuran = ukuran;
    this.rams.find(item => item.id === id).speed = speed;
    this.rams.find(item => item.id === id).harga = harga;
    this.rams.find(item => item.id === id).stok = stok;
  }

  // tslint:disable-next-line:max-line-length variable-name
  addCpu(id: string, merek: string, model: string, foto: string, base_clock: string, boost_clock: string, jumlah_core: string, thread: string, harga: string, stok: string){
    this.cpus.push({id, merek, model, foto, base_clock, boost_clock, jumlah_core, thread, harga, stok });
    console.log(this.cpus);
  }

  addGpu(id: string, merek: string, model: string, foto: string, harga: string, stok: string){
    this.gpus.push({id, merek, model, foto, harga, stok });
    console.log(this.gpus);
  }

  // tslint:disable-next-line:variable-name
  addMboard(id: string, merek: string, model: string, foto: string, chipset: string, untuk_merek: string, harga: string, stok: string){
    this.mboards.push({id, merek, model, foto, chipset, untuk_merek, harga, stok });
    console.log(this.mboards);
  }

  addRAM(id: string, merek: string, model: string, foto: string, speed: string, ukuran: string, harga: string, stok: string){
    this.rams.push({id, merek, model, foto, speed, ukuran, harga, stok });
    console.log(this.rams);
  }




}
