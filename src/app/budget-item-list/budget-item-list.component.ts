import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

// Import for the Budget Item Model
import { BudgetItem } from '../shared/budget-item';
import { MatDialog } from '@angular/material/dialog';
import { EditItemModalComponent } from '../edit-item-modal/edit-item-modal.component';
// TODO Add modal functioanlity for update
export interface UpdateEvent{
  old: BudgetItem;
  new: BudgetItem;
}
// takes the old budget item value and what will replace that budget item

@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.scss']
})
export class BudgetItemListComponent implements OnInit {

  @Input() budgetItems: BudgetItem[] = [];

  // Adding Outputs for Updates and Deletes
  @Output() delete: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();
  // Each time we select a delete button, we will talk to Angular and tell it
  // to delete a income or expense budget item

  @Output() update: EventEmitter<UpdateEvent> = new EventEmitter<UpdateEvent>();



  constructor(public dialog: MatDialog) { }

  onDelete(item: BudgetItem){
    this.delete.emit(item);
  }

  // Update Method
  onCardClicked(item: BudgetItem) {
    // Show the Edit Modal from Angular Material
    const dialogref = this.dialog.open(EditItemModalComponent, {
      width: '580px',
      data: item
    })

    // Handle the dialog box after the user clicks away
    dialogref.afterClosed().subscribe(result => {
      if (result){
        this.update.emit({
          old:item,
          new:result
        })
      }
    })

  }

  ngOnInit(): void {
  }

}
