import {Component, Input, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from "@angular/material/dialog";
import {ConfirmationPopupComponent} from "../confirmation-popup/confirmation-popup.component";


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
  }

  delete(): void {
    const dialogRef = this.dialog.open(ConfirmationPopupComponent, {
      width: '700px',
      panelClass: ['confirm-popup', 'main-popup'],
    });

    dialogRef.afterClosed().subscribe(() => {
      // closed
    });
  }

}
