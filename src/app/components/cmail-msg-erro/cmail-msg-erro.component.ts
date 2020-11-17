import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cmail-msg-erro',
  templateUrl: './cmail-msg-erro.component.html',
  styles: [
  ]
})
export class CmailMsgErroComponent implements OnInit {

  @Input() msg: string;

  constructor() { }

  ngOnInit(): void {
  }

}
