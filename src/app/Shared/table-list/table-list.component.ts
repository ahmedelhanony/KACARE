import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AdminApplicationDetailsComponent } from '../../admin/components/admin-applications/admin-application-details/admin-application-details.component';
import * as _ from 'lodash';
import { TABLELISTACTIONS } from '../utils/enums';
import { downloadFile } from '../utils/utils';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.scss'],
})
export class TableListComponent implements OnInit, OnChanges {
  @Input() columns: any;
  @Input() columnsConfig: any;
  @Input() rows: any;
  @Input() actions: any = [];
  @Input() className = '';
  @Output() emitData = new EventEmitter();

  dataSource = new MatTableDataSource<any>();
  get ACTIONS(): typeof TABLELISTACTIONS {
    return TABLELISTACTIONS;
  }

  constructor(public dialog: MatDialog) {}
  ngOnChanges(changes: SimpleChanges): void {
    this.dataSource.data = this.rows;
  }

  ngOnInit(): void {}

  openPopup(type: string, id: any): void {
    debugger;
    if (type === 'application') {
      const dialogRef = this.dialog.open(AdminApplicationDetailsComponent, {
        width: '950px',
        height: '90%',
        data: { id },
        panelClass: ['main-popup'],
      });

      dialogRef.afterClosed().subscribe(() => {
        // closed
      });
    }
  }

  onTakeAction(item: any, action: TABLELISTACTIONS) {
    this.emitData.emit({ item, action });
  }

  onDownLoadFile({ link, name }: any) {
    downloadFile(link, name);
  }
}
