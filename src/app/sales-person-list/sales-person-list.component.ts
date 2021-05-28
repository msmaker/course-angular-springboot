import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  // create an array of objects

  salesPersonList: SalesPerson[] = [
    new SalesPerson("Marco", "Silva", "marcosilva.tec@hotmail.com", 90000),
    new SalesPerson("Ale", "Silva", "ale@hotmail.com", 50000),
    new SalesPerson("Daya", "Silva", "dayana@gmail.com", 60000),
    new SalesPerson("Aline", "Silva", "aline@hotmail.com", 45000)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
