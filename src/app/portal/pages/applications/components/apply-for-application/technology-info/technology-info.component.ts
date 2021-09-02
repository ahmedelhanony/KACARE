import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { LookupService } from 'src/app/core/services/lookup.service';
import { APPLICATIONAMES } from 'src/app/Shared/utils/applications-data';
import { SERVICES } from 'src/app/Shared/utils/enums';

@Component({
  selector: 'app-technology-info',
  templateUrl: './technology-info.component.html',
  styleUrls: ['./technology-info.component.scss'],
})
export class TechnologyInfoComponent implements OnInit {
  @Input() technologyForm!: FormGroup;
  @Input() appName!: string;
  public get APPNAMES(): typeof APPLICATIONAMES {
    return APPLICATIONAMES;
  }
  RFPTopics: any = [];

  constructor(private lookupService: LookupService) {}

  ngOnInit(): void {
    this.getRFPTopics();
  }

  getRFPTopics() {
    this.lookupService.getAll(SERVICES.RFPTopic).subscribe((res: any) => {
      if (res && res.length) {
        this.RFPTopics = [...res];
      }
    });
  }
}
