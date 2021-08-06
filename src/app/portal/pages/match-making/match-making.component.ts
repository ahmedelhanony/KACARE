import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AddMatchMakingComponent} from "./components/add-match-making/add-match-making.component";

@Component({
  selector: 'app-match-making',
  templateUrl: './match-making.component.html',
  styleUrls: ['./match-making.component.scss']
})
export class MatchMakingComponent implements OnInit {
  isRegistered = true;
  constructor( public dialog: MatDialog ) { }

  ngOnInit(): void {
  }

  Add(): void {
    const dialogRef = this.dialog.open(AddMatchMakingComponent, {
      width: '750px',
      panelClass: 'main-popup',
    });

    dialogRef.afterClosed().subscribe(() => {
      // closed
    });
  }
}
