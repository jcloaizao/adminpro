import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { SettingService } from '../../services/services.index';

@Component({
  selector: 'app-acount-settings',
  templateUrl: './acount-settings.component.html',
  styles: []
})
export class AcountSettingsComponent implements OnInit {

  constructor( @Inject(DOCUMENT) private _document, public _settingService: SettingService  ) {

  }

  ngOnInit() {
    this.colocarCheck();
  }

  cambiarcolor(tema: string, link: any) {
    this.aplicarCheck(link);
    this._settingService.AplicatTema(tema);
  }

  aplicarCheck(link: any) {

    // tslint:disable-next-line:prefer-const
    let selectores: any = document.getElementsByClassName('selector');
    // tslint:disable-next-line:prefer-const
    for (let ref of  selectores) {
      ref.classList.remove('working');
    }
    link.classList.add('working');
  }

  colocarCheck() {

    // tslint:disable-next-line:prefer-const
    let selectores: any = document.getElementsByClassName('selector');
    let tema = this._settingService.ajustes.tema;

    // tslint:disable-next-line:prefer-const
    for (let ref of  selectores) {

      if ( ref.getAttribute('data-theme') === tema) {
        ref.classList.add('working');
        break;
      }
    }

  }

}
