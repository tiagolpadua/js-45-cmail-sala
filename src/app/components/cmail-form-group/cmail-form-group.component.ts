import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'cmail-form-group',
  templateUrl: './cmail-form-group.component.html',
  styles: [
  ]
})
export class CmailFormGroupComponent implements OnInit {

  textoDaLabel = '';
  idCampo = '';
  @Input() campo = new FormControl();

  constructor(private elemento: ElementRef) {
  }

  ngOnInit(): void {
    // TODO: Renomar variável para nome diferente de campo
    const elCampo = this.elemento.nativeElement.querySelector('input');
    this.textoDaLabel = elCampo.name.replace(elCampo.name[0], elCampo.name[0].toUpperCase());
    this.idCampo = elCampo.name;
  }
}
