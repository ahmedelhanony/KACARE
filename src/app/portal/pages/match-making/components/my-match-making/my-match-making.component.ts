import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddMatchMakingComponent } from '../add-match-making/add-match-making.component';
import { ConfirmationPopupComponent } from '../../../../../Shared/confirmation-popup/confirmation-popup.component';
import {
  filters,
  FiltersService,
} from 'src/app/core/services/filters/filters.service';
import { Subject, Subscription } from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';
import { MatchMakingService } from 'src/app/core/services/matchmaking.service';
import { filter, finalize, takeUntil } from 'rxjs/operators';
import { SharedDataService } from 'src/app/core/services/sharedData.service';
import { TABLELISTACTIONS } from 'src/app/Shared/utils/enums';
import { DialogService } from 'src/app/core/services/dialog-service/dialog.service';
import { DefaultDeletionOptions } from 'src/app/Shared/utils/dialog-options';

@Component({
  selector: 'app-my-match-making',
  templateUrl: './my-match-making.component.html',
  styleUrls: ['./my-match-making.component.scss'],
})
export class MyMatchMakingComponent implements OnInit, OnDestroy {
  companies: any = [];
  showSpinner = false;
  filters!: filters;
  dropDownIds = ['visible', 'technologyId', 'matchMakingRoleId'];
  destoryed$: Subject<any> = new Subject<any>();
  subs: Subscription = new Subscription();

  constructor(
    public dialog: MatDialog,
    private router: Router,
    private filtersService: FiltersService,
    private matchMakingService: MatchMakingService,
    private sharedDataService: SharedDataService,
    private dialogService: DialogService
  ) {}

  ngOnInit(): void {
    this.showSpinner = true;
    this.onParamsChanges();

    this.router.events.pipe(takeUntil(this.destoryed$)).subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.onParamsChanges();
      }
    });

    this.subs.add(
      this.sharedDataService.isMatchMakingAdded$
        .pipe(
          takeUntil(this.destoryed$),
          filter((x: any) => !!x)
        )
        .subscribe((confirmed: boolean) => {
          if (confirmed) {
            this.onParamsChanges();
          }
        })
    );
  }

  onParamsChanges() {
    this.showSpinner = true;
    const params: any = this.filtersService.getParams();
    this.filters = this.filtersService.getDropdownFilters(params);

    Object.keys(params).forEach((key: any) => {
      if (this.dropDownIds.includes(key) && params[key]) {
        params[key] = +params[key];
      }
    });

    this.fetchData(params);
  }

  fetchData(params: object = {}) {
    this.showSpinner = true;

    this.matchMakingService
      .getMyMatchMaking(params)
      .pipe(
        finalize(() => {
          this.showSpinner = false;
        })
      )
      .subscribe((response: any) => {
        if (response && response.body && response.body.length) {
          this.companies = [...response.body];
        } else {
          this.companies = [];
        }
      });
  }

  onFilterChanges(selectedFilters: any) {
    this.filters = { ...selectedFilters };
    this.changeRouterParams();
  }

  changeRouterParams() {
    this.filtersService.changeParams(
      this.filters,
      '/match-making/my-match-making'
    );
  }

  edit(selectedMatcMaking: any): void {
    const dialogRef = this.dialog.open(AddMatchMakingComponent, {
      width: '750px',
      panelClass: 'main-popup',
      data: { action: TABLELISTACTIONS.EDIT, selectedMatcMaking },
    });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.onParamsChanges();
      }
    });
  }

  delete(id: number): void {
    this.dialogService.open(DefaultDeletionOptions());

    this.dialogService.confirmed().subscribe((confirmed: any) => {
      if (confirmed) {
        this.onDeleteMatchMaking(id);
      }
    });
  }

  onDeleteMatchMaking(id: number) {
    this.showSpinner = true;

    this.matchMakingService.deleteMatchMaking(id).subscribe(
      (res: any) => {
        if (res && !res.status) {
          this.onParamsChanges();
        }
      },
      () => {
        this.showSpinner = false;
      }
    );
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
    this.destoryed$.next(true);
    this.destoryed$.complete();
  }
}
