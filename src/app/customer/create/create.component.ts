import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../service/customer.service';
import { Customer } from '../../model/customer';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  providers: [CustomerService]
})
export class CreateComponent implements OnInit {

  constructor(private customerService: CustomerService) { }

  customers: Customer[];

  ngOnInit() {
  }

  subscribeCustomers(): any {
    this.customerService.getCustomers().subscribe(
      customers => {
        this.customers = customers;
      }
    );
  }

}
