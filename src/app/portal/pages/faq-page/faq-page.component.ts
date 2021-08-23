import { Component, OnInit } from '@angular/core';
import { FAQService } from 'src/app/core/services/faq.service';

@Component({
  selector: 'app-faq-page',
  templateUrl: './faq-page.component.html',
  styleUrls: ['./faq-page.component.scss'],
})
export class FaqPageComponent implements OnInit {
  faqs: any = [];
  showSpinner = false;

  constructor(private FAQService: FAQService) {}

  ngOnInit(): void {
    this.getAllFAQS();
  }

  getAllFAQS() {
    this.showSpinner = true;

    const query: any = {
      pageNumber: 1,
      pageSize: 50,
    };

    this.FAQService.getQuestions(query).subscribe(
      (response: any) => {
        if (response && response.body && response.body.length) {
          this.faqs = [...response.body];
        } else {
          this.faqs = [];
        }

        this.showSpinner = false;
      },
      () => {
        this.showSpinner = false;
      }
    );
  }
}
