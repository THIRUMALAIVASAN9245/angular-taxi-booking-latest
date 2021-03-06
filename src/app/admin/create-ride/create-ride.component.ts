import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-ride',
  templateUrl: './create-ride.component.html'
})
export class CreateRideComponent implements OnInit {
  mytime: Date = new Date();
  registerForm: FormGroup;
  submitted = false;
  isBookDetail = false;
  modalRef: BsModalRef | null;
  modalRef2: BsModalRef;
  config = {
    backdrop: true,
    ignoreBackdropClick: true,
    class: 'modal-sm'
  };
  constructor(private router: Router,
    private modalService: BsModalService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      pickupLocation: ['', [Validators.required]],
      dropLocation: ['', [Validators.required]],
      pickupDate: ['', [Validators.required]],
      pickupTime: ['', [Validators.required]],
      amount: ['123', []],
      customerId: ['12345', []],
      employeeId: ['12345', []]
    });
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
      this.router.navigate(['/admin/ride-details']);
      return;
    }

    this.modalRef.hide();
    this.modalRef = null;
  }

  closeFirstModalNavigate() {
    this.router.navigate(['/admin/ride-details']);
    this.modalRef2.hide();
    this.modalRef.hide();
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    this.isBookDetail = false;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    this.isBookDetail = true;
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
  }
}