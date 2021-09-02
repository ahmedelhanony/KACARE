import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { TeamMember } from 'src/app/core/models/program/team-member';
import { APPLICATIONAMES } from 'src/app/Shared/utils/applications-data';
import * as _ from 'lodash';

@Component({
  selector: 'app-strategy-teams',
  templateUrl: './strategy-teams.component.html',
  styleUrls: ['./strategy-teams.component.scss'],
})
export class StrategyTeamsComponent implements OnInit, OnChanges {
  columns = [
    'name',
    'institutionName ',
    'memberRole',
    'qualifications',
    'pastExperience',
    'actions',
  ];
  columnsConfig = [
    {
      label: 'Member',
      type: 'input',
    },
    {
      label: 'Institution Name',
      type: 'input',
    },
    {
      label: 'Role',
      type: 'input',
    },
    {
      label: 'KeyQualifications',
      type: 'input',
    },
    {
      label: 'Experience Years',
      type: 'input',
    },
    {
      label: '',
      type: 'action',
    },
  ];
  actions: any = ['delete'];

  @Input() strategyForm!: FormGroup;
  @Input() appName!: string;
  public get APPNAMES(): typeof APPLICATIONAMES {
    return APPLICATIONAMES;
  }

  teamMembers!: FormArray;

  constructor(private fb: RxFormBuilder) {}
  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes &&
      !_.isEmpty(changes.strategyForm) &&
      !_.isEqual(
        changes.strategyForm.currentValue,
        changes.strategyForm.previousValue
      )
    ){
      this.teamMembers = this.strategyForm.controls.teamMembers as FormArray;
    }
  }

  ngOnInit(): void {}

  onAddNewMember() {
    this.teamMembers.push(this.fb.formGroup(new TeamMember()));
  }

  onDeleteMember(index: number) {
    this.teamMembers.removeAt(index);
  }
}
