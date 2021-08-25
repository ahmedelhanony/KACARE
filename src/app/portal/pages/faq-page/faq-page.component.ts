import { Component, OnInit } from '@angular/core';
import { FAQService } from 'src/app/core/services/faq.service';
import { LoadingService } from 'src/app/core/services/loading/loading.service';

@Component({
  selector: 'app-faq-page',
  templateUrl: './faq-page.component.html',
  styleUrls: ['./faq-page.component.scss'],
})
export class FaqPageComponent implements OnInit {
  faqs: any = [];
  loading$ = this.loader.loading$;

  constructor(private FAQService: FAQService, private loader: LoadingService) {}

  ngOnInit(): void {
    this.getAllFAQS();
  }

  getAllFAQS() {
    const query: any = {
      pageNumber: 1,
      pageSize: 30,
      visible: true,
    };

    this.FAQService.getQuestions(query).subscribe((response: any) => {
      if (response && response.body && response.body.length) {
        this.faqs = [...response.body];
      } else {
        this.faqs = [];
      }
    });
  }
}
