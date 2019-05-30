import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})

export class CustomerComponent implements OnInit {
  [x: string]: any;

  customers: Customer[];
  rows = [];
  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.getCustomers();
    this.rows = this.customers;
  }

  getCustomers() {
    return this.customerService.getCustomers()
      .subscribe(
        customers => {
          this.customers = customers;
          this.rows = customers;
          console.log(this.rows);
        }
      );
  }
}
