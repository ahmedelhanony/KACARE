import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AddMatchMakingComponent} from "../add-match-making/add-match-making.component";
import {ConfirmationPopupComponent} from "../../../../../Shared/confirmation-popup/confirmation-popup.component";

@Component({
  selector: 'app-my-match-making',
  templateUrl: './my-match-making.component.html',
  styleUrls: ['./my-match-making.component.scss']
})
export class MyMatchMakingComponent implements OnInit {
  companies = [
    {
      name: 'Organization Name',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
      email: 'Email@companyname.com.sa',
      technology: 'Solar Cooling',
      role:'Off Takers'
    },
    {
      name: 'Organization Name',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
      email: 'Email@companyname.com.sa',
      technology: 'Solar Cooling',
      role:'Off Takers'
    },

  ]
  constructor( public dialog: MatDialog ) { }

  ngOnInit(): void {
  }

  edit(): void {
    const dialogRef = this.dialog.open(AddMatchMakingComponent, {
      width: '750px',
      panelClass: 'main-popup',
    });

    dialogRef.afterClosed().subscribe(() => {
      // closed
    });
  }

  delete(): void {
    const dialogRef = this.dialog.open(ConfirmationPopupComponent, {
      width: '700px',
      panelClass: ['confirm-popup', 'main-popup'],
      data: {
        title : 'Delete Match',
        message : 'Are you sure you want delete',
        confirmText : 'match making example name',
        moreText : '',
        type : 'delete',
        icon : 'delete-match',
      }
    });

    dialogRef.afterClosed().subscribe(() => {
      // closed
    });
  }

}
