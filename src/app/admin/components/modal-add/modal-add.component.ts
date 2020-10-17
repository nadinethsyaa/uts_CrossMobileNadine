import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ModalController, ToastController } from '@ionic/angular';
import { Cpu } from 'src/app/cpu.model';
import { Gpu } from 'src/app/gpu.model';
import { HomeService } from 'src/app/home/home.service';
import { Mboard } from 'src/app/mboard.model';
import { Ram } from 'src/app/ram.model';

@Component({
  selector: 'app-modal-add',
  templateUrl: './modal-add.component.html',
  styleUrls: ['./modal-add.component.scss'],
})
export class ModalAddComponent implements OnInit {
  type: string = null;
  addItem: FormGroup;
  counter: number;
  CPUs: Cpu[];
  GPUs: Gpu[];
  motherboards: Mboard[];
  RAMs: Ram[];
  constructor(
      private modalController: ModalController,
      private homeService: HomeService,
      private toastController: ToastController
  ) { }

  ionViewWillEnter() {
    this.CPUs = this.homeService.getAllCpus();
    this.GPUs = this.homeService.getAllGpus();
    this.motherboards = this.homeService.getAllMboard();
    this.RAMs = this.homeService.getAllRam();
  }

  ngOnInit() {
    // this.lastId = this.barangService.getAllBarang().length;
    this.addItem = new FormGroup({
      foto: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      type: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required],
      }),
      merek: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      model: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      harga: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      stok: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      base_clock: new FormControl(null, {
        updateOn: 'change',
      }),
      boost_clock: new FormControl(null, {
        updateOn: 'change',
      }),
      jumlah_core: new FormControl(null, {
        updateOn: 'change',
      }),
      thread: new FormControl(null, {
        updateOn: 'change',
      }),
      chipset: new FormControl(null, {
        updateOn: 'change',
      }),
      untuk_merek: new FormControl(null, {
        updateOn: 'change',
      }),
      speed: new FormControl(null, {
        updateOn: 'change',
      }),
      ukuran: new FormControl(null, {
        updateOn: 'change',
      })
    });
  }

  onCancel(){
    this.modalController.dismiss(null, 'cancel');
  }

  // tslint:disable-next-line:max-line-length variable-name
  addCPU(id: string, merek: string, model: string, foto: string, base_clock: string, boost_clock: string, jumlah_core: string, thread: string, harga: string, stok: string){
    this.CPUs.push({id, merek, model, foto, base_clock, boost_clock, jumlah_core, thread, harga, stok });
    console.log(this.CPUs);
  }

  addGPU(id: string, merek: string, model: string, foto: string, harga: string, stok: string){
    this.GPUs.push({id, merek, model, foto, harga, stok });
    console.log(this.GPUs);
  }

  // tslint:disable-next-line:variable-name
  addMotherboard(id: string, merek: string, model: string, foto: string, chipset: string, untuk_merek: string, harga: string, stok: string){
    this.motherboards.push({id, merek, model, foto, chipset, untuk_merek, harga, stok });
    console.log(this.motherboards);
  }

  addRAM(id: string, merek: string, model: string, foto: string, speed: string, ukuran: string, harga: string, stok: string){
    this.RAMs.push({id, merek, model, foto, speed, ukuran, harga, stok });
    console.log(this.RAMs);
  }

  add(){
    if (this.type === 'CPU') {
      this.counter = this.homeService.getAllCpus().length + 1;
      const id = ('c' + this.counter);
      const merek = this.addItem.value.merek;
      const model = this.addItem.value.model;
      const foto = this.addItem.value.foto;
      const harga = this.addItem.value.harga;
      const stok = this.addItem.value.stok;
      const base_clock = this.addItem.value.base_clock;
      const boost_clock = this.addItem.value.boost_clock;
      const jumlah_core = this.addItem.value.jumlah_core;
      const thread = this.addItem.value.thread;

      this.homeService.addCpu(id, merek, model, foto, base_clock, boost_clock, jumlah_core, thread, harga, stok);
      // tslint:disable-next-line:max-line-length
      this.modalController.dismiss({message: 'New item added!', id, merek, model, foto, base_clock, boost_clock, jumlah_core, thread, harga, stok}, 'confirm');
      this.presentToast();
    }
    if (this.type === 'GPU') {
      this.counter = this.homeService.getAllGpus().length + 1;
      const id = ('g' + this.counter);
      const merek = this.addItem.value.merek;
      const model = this.addItem.value.model;
      const foto = this.addItem.value.foto;
      const harga = this.addItem.value.harga;
      const stok = this.addItem.value.stok;

      this.homeService.addGpu(id, merek, model, foto, harga, stok);
      this.modalController.dismiss({message: 'New item added!', id, merek, model, foto, harga, stok}, 'confirm');
      this.presentToast();
    }
    if (this.type === 'motherboard') {
      this.counter = this.homeService.getAllMboard().length + 1;
      const id = ('m' + this.counter);
      const merek = this.addItem.value.merek;
      const model = this.addItem.value.model;
      const foto = this.addItem.value.foto;
      const harga = this.addItem.value.harga;
      const stok = this.addItem.value.stok;
      const chipset = this.addItem.value.chipset;
      const untuk_merek = this.addItem.value.untuk_merek;

      this.homeService.addMboard(id, merek, model, foto, chipset, untuk_merek, harga, stok);
      this.modalController.dismiss({message: 'New item added!', id, merek, model, foto, chipset, untuk_merek, harga, stok}, 'confirm');
      this.presentToast();
    }
    if (this.type === 'RAM') {
      this.counter = this.homeService.getAllRam().length + 1;
      const id = ('r' + this.counter);
      const merek = this.addItem.value.merek;
      const model = this.addItem.value.model;
      const foto = this.addItem.value.foto;
      const harga = this.addItem.value.harga;
      const stok = this.addItem.value.stok;
      const speed = this.addItem.value.speed;
      const ukuran = this.addItem.value.ukuran;

      this.homeService.addRAM(id, merek, model, foto, speed, ukuran, harga, stok);
      this.modalController.dismiss({message: 'New item added!', id, merek, model, foto, speed, ukuran, harga, stok}, 'confirm');
      this.presentToast();
    }
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: ('Item successfully added!'),
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }
}
