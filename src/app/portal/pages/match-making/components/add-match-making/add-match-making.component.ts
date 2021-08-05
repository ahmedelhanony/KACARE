import { Component, OnInit } from '@angular/core';
import {ConfirmationPopupComponent} from "../../../../../Shared/confirmation-popup/confirmation-popup.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-add-match-making',
  templateUrl: './add-match-making.component.html',
  styleUrls: ['./add-match-making.component.scss']
})
export class AddMatchMakingComponent implements OnInit {

  constructor( public dialog: MatDialog ) { }

  ngOnInit(): void {
  }

  done(): void {
    const dialogRef = this.dialog.open(ConfirmationPopupComponent, {
      width: '750px',
      panelClass: ['confirm-popup', 'main-popup'],
      data: {
        title : 'Almost done!',
        message : 'Your match making "Example name" has been submitted Your Information will be reviewed with our team before publishing ',
        confirmText : '',
        moreText : '',
        type : 'done',
        icon : 'verify',
      }
    });

    dialogRef.afterClosed().subscribe(() => {
      // closed
    });
  }

}
