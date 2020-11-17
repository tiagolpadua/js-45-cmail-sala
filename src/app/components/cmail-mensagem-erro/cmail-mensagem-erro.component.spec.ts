import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmailMensagemErroComponent } from './cmail-mensagem-erro.component';

describe('CmailMensagemErroComponent', () => {
  let component: CmailMensagemErroComponent;
  let fixture: ComponentFixture<CmailMensagemErroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmailMensagemErroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmailMensagemErroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
