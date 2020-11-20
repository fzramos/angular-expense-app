import { Component, Inject, OnInit } from '@angular/core';
import { BudgetItem } from '../shared/budget-item';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-item-modal',
  templateUrl: './edit-item-modal.component.html',
  styleUrls: ['./edit-item-modal.component.scss']
})
export class EditItemModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditItemModalComponent>, 
    @Inject(MAT_DIALOG_DATA) public item: BudgetItem) { }
    // this injects the form with the old data of what 
    // list item is being updated

  ngOnInit(): void {
  }

  // onSubmitted method 
  onSubmitted(updatedItem: BudgetItem){
    this.dialogRef.close(updatedItem)
  }

}
