import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { HomeService } from 'src/app/home/home.service';
import { Mboard } from 'src/app/mboard.model';

@Component({
  selector: 'app-edit-mboard',
  templateUrl: './edit-mboard.page.html',
  styleUrls: ['./edit-mboard.page.scss'],
})
export class EditMotherboardPage implements OnInit {
  form: FormGroup;
  motherboardDetail: Mboard;
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
      chipset: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      untuk_merek: new FormControl(null, {
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
      this.motherboardDetail = this.homeService.getMboard(id);
    });
  }

  saveUpdates(){
    const id = this.form.value.id;
    const merek = this.form.value.merek;
    const model = this.form.value.model;
    const foto = this.form.value.foto;
    const chipset = this.form.value.chipset;
    const untuk_merek = this.form.value.untuk_merek;
    const harga = this.form.value.harga;
    const stok = this.form.value.stok;
    this.homeService.editMboard(id, merek, model, foto, chipset, untuk_merek, harga, stok);
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
