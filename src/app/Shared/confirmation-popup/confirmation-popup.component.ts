import {Component, Inject, Input, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-confirmation-popup',
  templateUrl: './confirmation-popup.component.html',
  styleUrls: ['./confirmation-popup.component.scss']
})
export class ConfirmationPopupComponent implements OnInit {
  // @Input() title = '';
  // @Input() message = '';
  // @Input() confirmText = '';
  // @Input() moreText = '';
  // @Input() type = '';
  // @Input() icon = '';

  constructor(@Inject(MAT_DIALOG_DATA) public data:
                {title: string, message: string, confirmText: string, moreText: string, type: string, icon: string}
  ) { }

  ngOnInit(): void {
  }

}
