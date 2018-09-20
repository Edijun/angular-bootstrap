import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../service/customer.service';
import { Customer } from '../../model/customer';

@Component({
  selector: 'app-inquiry',
  templateUrl: './inquiry.component.html',
  providers: [CustomerService]
})
export class InquiryComponent implements OnInit {

  constructor(private customerService: CustomerService) { }

  customers: Customer[];

  ngOnInit() {
    this.subscribeCustomers();
  }

  subscribeCustomers(): any {
    this.customerService.getCustomers().subscribe(
      customers => {
        this.customers = customers;
      }
    );
  }

}
