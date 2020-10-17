import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { Gpu } from 'src/app/gpu.model';
import { HomeService } from 'src/app/home/home.service';

@Component({
  selector: 'app-edit-gpu',
  templateUrl: './edit-gpu.page.html',
  styleUrls: ['./edit-gpu.page.scss'],
})
export class EditGpuPage implements OnInit {
  form: FormGroup;
  gpuDetail: Gpu;
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
      this.gpuDetail = this.homeService.getGpu(id);
    });
  }

  saveUpdates(){
    const id = this.form.value.id;
    const merek = this.form.value.merek;
    const model = this.form.value.model;
    const foto = this.form.value.foto;
    const harga = this.form.value.harga;
    const stok = this.form.value.stok;
    this.homeService.editGpu(id, merek, model, foto, harga, stok);
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
