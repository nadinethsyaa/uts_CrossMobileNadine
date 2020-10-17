import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { Cpu } from 'src/app/cpu.model';
import { HomeService } from 'src/app/home/home.service';

@Component({
  selector: 'app-edit-cpu',
  templateUrl: './edit-cpu.page.html',
  styleUrls: ['./edit-cpu.page.scss'],
})
export class EditCpuPage implements OnInit {
  form: FormGroup;
  cpuDetail: Cpu;
  constructor(
      private activatedRoute: ActivatedRoute,
      private homeService: HomeService,
      private router: Router,
      private alertController: AlertController,
      private toastController: ToastController
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      id: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      merek: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      model: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      foto: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      base_clock: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      boost_clock: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      jumlah_core: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }) ,
      thread: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      harga: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      stok: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
    });

    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('id'))
      {
        return;
      }
      const id = paramMap.get('id');
      this.cpuDetail = this.homeService.getCpu(id);
    });
  }

  saveUpdates(){
    const id = this.form.value.id;
    const merek = this.form.value.merek;
    const model = this.form.value.model;
    const foto = this.form.value.foto;
    const base_clock = this.form.value.base_clock;
    const boost_clock = this.form.value.boost_clock;
    const jumlah_core = this.form.value.jumlah_core;
    const thread = this.form.value.thread;
    const harga = this.form.value.harga;
    const stok = this.form.value.stok;
    this.homeService.editCpu(id, merek, model, foto, base_clock, boost_clock, jumlah_core, thread, harga, stok);
  }

  async saveAlert() {
    const alert = await this.alertController.create({
      header: 'Update Item',
      message: 'You will make some changes, do you want to continue?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Continue',
          handler: () => {
            this.saveUpdates();
            this.presentToast();
            this.router.navigate(['/admin']);
          }
        }
      ]
    });

    await alert.present();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Item was successfully updated!',
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }
}
