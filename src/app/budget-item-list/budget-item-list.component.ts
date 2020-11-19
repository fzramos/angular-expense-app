import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

// Import for the Budget Item Model
import { BudgetItem } from '../shared/budget-item';

// TODO Add modal functioanlity for update

@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.scss']
})
export class BudgetItemListComponent implements OnInit {

  @Input() budgetItems: BudgetItem[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
