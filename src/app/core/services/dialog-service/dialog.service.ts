import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { ConfirmationPopupComponent } from 'src/app/Shared/confirmation-popup/confirmation-popup.component';
@Injectable()
export class DialogService {
  constructor(private dialog: MatDialog) {}
  dialogRef!: MatDialogRef<ConfirmationPopupComponent>;

  public open(options: any) {
    this.dialogRef = this.dialog.open(ConfirmationPopupComponent, {
      width: '700px',
      panelClass: ['confirm-popup', 'main-popup'],
      data: {
        title: options.title,
        message: options.message,
        confirmText: options.confirmText,
        cancelText : options.cancelText,
        moreText: options.moreText,
        type: options.type,
        icon: options.icon,
      },
    });
  }
  public confirmed(): Observable<any> {
    return this.dialogRef.afterClosed().pipe(
      take(1),
      map((res) => {
        return res;
      })
    );
  }

  public closeDialog(){
    this.dialogRef.close();
  }
}
