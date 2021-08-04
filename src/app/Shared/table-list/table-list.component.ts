import {Component, Input, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from "@angular/material/dialog";
import {DeletePopupComponent} from "../delete-popup/delete-popup.component";

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.scss']
})
export class TableListComponent implements OnInit {
  @Input() columns: any;
  @Input() columnsConfig: any;
  @Input() rows: any;
  public dataSource = new MatTableDataSource<any>();
  constructor( public dialog: MatDialog ) { }

  ngOnInit(): void {
    this.dataSource.data = this.rows;
  }

  delete(): void {
    const dialogRef = this.dialog.open(DeletePopupComponent, {
      width: '750px',
      panelClass: ['delete-popup', 'main-popup'],
    });

    dialogRef.afterClosed().subscribe(() => {
      // closed
    });
  }

}
