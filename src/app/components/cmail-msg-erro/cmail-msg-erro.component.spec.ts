import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmailMsgErroComponent } from './cmail-msg-erro.component';

describe('CmailMsgErroComponent', () => {
  let component: CmailMsgErroComponent;
  let fixture: ComponentFixture<CmailMsgErroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmailMsgErroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmailMsgErroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
