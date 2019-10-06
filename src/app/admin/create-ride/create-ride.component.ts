import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-create-ride',
  templateUrl: './create-ride.component.html'
})
export class CreateRideComponent implements OnInit {
  mytime: Date = new Date();

  modalRef: BsModalRef | null;
  modalRef2: BsModalRef;
  config = {
    backdrop: true,
    ignoreBackdropClick: true,
    class: 'modal-sm'
  };
  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {

  }

  openModal(template: TemplateRef<any>) {
    this.config.class = "modal-sm";
    this.modalRef = this.modalService.show(template, this.config);
  }
  openModal2(template: TemplateRef<any>) {
    this.config.class = "second";
    this.modalRef2 = this.modalService.show(template, this.config);
  }
  closeFirstModal() {
    if (!this.modalRef) {
      return;
    }

    this.modalRef.hide();
    this.modalRef = null;
  }
}