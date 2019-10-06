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
  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {

  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }
  openModal2(template: TemplateRef<any>) {
    this.modalRef2 = this.modalService.show(template, { class: 'second' });
  }
  closeFirstModal() {
    if (!this.modalRef) {
      return;
    }

    this.modalRef.hide();
    this.modalRef = null;
  }
}