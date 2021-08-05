import { Component, OnInit } from '@angular/core';
import {ConfirmationPopupComponent} from "../../../../../Shared/confirmation-popup/confirmation-popup.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-apply-for-application',
  templateUrl: './apply-for-application.component.html',
  styleUrls: ['./apply-for-application.component.scss']
})
export class ApplyForApplicationComponent implements OnInit {

  constructor( public dialog: MatDialog,) { }

  ngOnInit(): void {
  }

  scroll() {
    window.scrollTo({
      top: 100,
      behavior: 'auto'
    });
  }

  done(): void {
    const dialogRef = this.dialog.open(ConfirmationPopupComponent, {
      width: '700px',
      panelClass: ['confirm-popup', 'main-popup'],
      data: {
        title : 'Congratulations!',
        message : 'Your application has been submitted',
        confirmText : '',
        moreText : 'Your Information will be reviewed with our team',
        type : 'done',
        icon : 'done',
      }
    });

    dialogRef.afterClosed().subscribe(() => {
      // closed
    });
  }
}
