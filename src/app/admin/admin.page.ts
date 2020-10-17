import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, IonItemSliding, ModalController, ToastController } from '@ionic/angular';
import { Cpu } from '../cpu.model';
import { Gpu } from '../gpu.model';
import { HomeService } from '../home/home.service';
import { Mboard } from '../mboard.model';
import { Ram } from '../ram.model';
import { ModalAddComponent } from './components/modal-add/modal-add.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  cpus: Cpu[];
  gpus: Gpu[];
  mboards: Mboard[];
  rams: Ram[];
  constructor(
      private homeService: HomeService,
      private activatedRoute: ActivatedRoute,
      private router: Router,
      private alertController: AlertController,
      private toastController: ToastController,
      private modalController: ModalController) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.cpus = this.homeService.getAllCpus();
    this.gpus = this.homeService.getAllGpus();
    this.mboards = this.homeService.getAllMboard();
    this.rams = this.homeService.getAllRam();
  }

  async addModal(){
    const modal = await this.modalController.create({
      component: ModalAddComponent
    });

    modal.onDidDismiss().then(resultData => {
      const role = resultData.role;
      if (role !== 'cancel'){
        const check = resultData.data.id;
        if (check.substring(0, 1) === 'c')
        {
          const id = resultData.data.id;
          const merek = resultData.data.merek;
          const model = resultData.data.model;
          const foto = resultData.data.foto;
          const harga = resultData.data.harga;
          const stok = resultData.data.stok;
          const base_clock = resultData.data.base_clock;
          const boost_clock = resultData.data.boost_clock;
          const jumlah_core = resultData.data.jumlah_core;
          const thread = resultData.data.thread;
          this.addCPU(id, merek, model, foto, base_clock, boost_clock, jumlah_core, thread, harga, stok);
        }
        if (check.substring(0, 1) === 'g')
        {
          const id = resultData.data.id;
          const merek = resultData.data.merek;
          const model = resultData.data.model;
          const foto = resultData.data.foto;
          const harga = resultData.data.harga;
          const stok = resultData.data.stok;
          this.addGPU(id, merek, model, foto, harga, stok);
        }
        if (check.substring(0, 1) === 'm')
        {
          const id = resultData.data.id;
          const merek = resultData.data.merek;
          const model = resultData.data.model;
          const foto = resultData.data.foto;
          const harga = resultData.data.price;
          const stok = resultData.data.stok;
          const chipset = resultData.data.chipset;
          const untuk_merek = resultData.data.untuk_merek;
          this.addMotherboard(id, merek, model, foto, chipset, untuk_merek, harga, stok);
        }
        if (check.substring(0, 1) === 'r')
        {
          const id = resultData.data.id;
          const merek = resultData.data.merek;
          const model = resultData.data.model;
          const foto = resultData.data.foto;
          const harga = resultData.data.harga;
          const stok = resultData.data.stok;
          const speed = resultData.data.speed;
          const ukuran = resultData.data.ukuran;
          this.addRAM(id, merek, model, foto, speed, ukuran, harga, stok);
        }
      }
    });

    return await modal.present();
  }

  deleteCPU(id: string) {
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

  deleteRAM(id: string) {
    this.rams = this.rams.filter(ram => {
      return ram.id !== id;
    });
  }


  deleteC(CPU: Cpu, slidingCPU: IonItemSliding) {
    slidingCPU.close();
    this.deleteAlertCPU(CPU.id, CPU.merek, CPU.model);
  }

  deleteG(GPU: Gpu, slidingGPU: IonItemSliding) {
    slidingGPU.close();
    this.deleteAlertGPU(GPU.id, GPU.merek, GPU.model);
  }

  deleteM(Motherboard: Mboard, slidingMotherboard: IonItemSliding) {
    slidingMotherboard.close();
    this.deleteAlertMotherboard(Motherboard.id, Motherboard.merek, Motherboard.model);
  }

  deleteR(RAM: Ram, slidingRAM: IonItemSliding) {
    slidingRAM.close();
    this.deleteAlertRAM(RAM.id, RAM.merek, RAM.model);
  }

  editC(CPU: Cpu, slidingCPU: IonItemSliding) {
    slidingCPU.close();
    this.router.navigate(['admin/edit-cpu/', CPU.id]);
  }

  editG(GPU: Gpu, slidingGPU: IonItemSliding) {
    slidingGPU.close();
    this.router.navigate(['admin/edit-gpu/', GPU.id]);
  }

  editM(Motherboard: Mboard, slidingMotherboard: IonItemSliding) {
    slidingMotherboard.close();
    this.router.navigate(['admin/edit-motherboard/', Motherboard.id]);
  }

  editR(RAM: Ram, slidingRAM: IonItemSliding) {
    slidingRAM.close();
    this.router.navigate(['admin/edit-ram/', RAM.id]);
  }

  // tslint:disable-next-line:variable-name max-line-length
  addCPU(id: string, merek: string, model: string, foto: string, base_clock: string, boost_clock: string, jumlah_core: string, thread: string, harga: string, stok: string){
    this.cpus.push({id, merek, model, foto, base_clock, boost_clock, jumlah_core, thread, harga, stok });
    console.log(this.cpus);
  }

  addGPU(id: string, merek: string, model: string, foto: string, harga: string, stok: string){
    this.gpus.push({id, merek, model, foto, harga, stok });
    console.log(this.gpus);
  }

  // tslint:disable-next-line:variable-name
  addMotherboard(id: string, merek: string, model: string, foto: string, chipset: string, untuk_merek: string, harga: string, stok: string){
    this.mboards.push({id, merek, model, foto, chipset, untuk_merek, harga, stok });
    console.log(this.mboards);
  }

  addRAM(id: string, merek: string, model: string, foto: string, speed: string, ukuran: string, harga: string, stok: string){
    this.rams.push({id, merek, model, foto, speed, ukuran, harga, stok });
    console.log(this.rams);
  }

  async deleteAlertCPU(id, brand, model) {
    const alert = await this.alertController.create({
      header: 'Delete Item',
      subHeader: (brand + ' ' + model),
      message: 'Do you really want to delete this item?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Delete',
          handler: () => {
            this.deleteCPU(id);
            this.homeService.deleteCpu(id);
            this.presentToast(brand, model);
          }
        }
      ]
    });

    await alert.present();
  }

  async deleteAlertGPU(id, brand, model) {
    const alert = await this.alertController.create({
      header: 'Delete Item',
      subHeader: (brand + ' ' + model),
      message: 'Do you really want to delete this item?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Delete',
          handler: () => {
            this.deleteGPU(id);
            this.homeService.deleteGPU(id);
            this.presentToast(brand, model);
          }
        }
      ]
    });

    await alert.present();
  }
  async deleteAlertMotherboard(id, brand, model) {
    const alert = await this.alertController.create({
      header: 'Delete Item',
      subHeader: (brand + ' ' + model),
      message: 'Do you really want to delete this item?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Delete',
          handler: () => {
            this.deleteMotherboard(id);
            this.homeService.deleteMotherboard(id);
            this.presentToast(brand, model);
          }
        }
      ]
    });

    await alert.present();
  }
  async deleteAlertRAM(id, brand, model) {
    const alert = await this.alertController.create({
      header: 'Delete Item',
      subHeader: (brand + ' ' + model),
      message: 'Do you really want to delete this item?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Delete',
          handler: () => {
            this.deleteRAM(id);
            this.homeService.deleteRam(id);
            this.presentToast(brand, model);
          }
        }
      ]
    });

    await alert.present();
  }

  async presentToast(brand, model) {
    const toast = await this.toastController.create({
      message: (brand + ' ' + model + ' removed from item list.'),
      duration: 2000,
      color: 'warning'
    });
    toast.present();
  }
}
