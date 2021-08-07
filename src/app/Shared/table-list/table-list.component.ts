import {Component, Input, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from "@angular/material/dialog";
import {ConfirmationPopupComponent} from "../confirmation-popup/confirmation-popup.component";
import {AdminApplicationDetailsComponent} from "../../admin/components/admin-applications/admin-application-details/admin-application-details.component";


@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.scss']
})
export class TableListComponent implements OnInit {
  @Input() columns: any;
  @Input() columnsConfig: any;
  @Input() rows: any;
  @Input() className = '';
  public dataSource = new MatTableDataSource<any>();
  constructor( public dialog: MatDialog ) { }

  ngOnInit(): void {
    this.dataSource.data = this.rows;
    // this.togglePublishBtn(this.publishedText)
  }

  togglePublishBtn(element: any): void{
    console.log(element.status)
    if (element.status === 'published'){
      element.status = 'publish'
    } else{
      element.status = 'published'
    }
  }


  openPopup(type: string): void {
    if(type === 'application'){
      const dialogRef = this.dialog.open(AdminApplicationDetailsComponent, {
        width: '950px',
        height: '90%',
        panelClass: ['main-popup'],
      });

      dialogRef.afterClosed().subscribe(() => {
        // closed
      });
    }

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
