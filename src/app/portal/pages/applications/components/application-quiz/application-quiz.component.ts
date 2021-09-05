import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-application-quiz',
  templateUrl: './application-quiz.component.html',
  styleUrls: ['./application-quiz.component.scss'],
})
export class ApplicationQuizComponent implements OnInit {
  viewResult = false;
  stepperIndex = 1;
  questions: any = {
    0: {
      label:
        '0 Is the system, as proposed, ready for production and deployment ?!',
      noAnswer: 1,
      yesAnswer: 2,
      noDecision: null,
      yesDecision: null,
    },
    1: {
      label:
        '1 Is the system, as proposed, ready for production and deployment ?!',
      noAnswer: 3,
      yesAnswer: 2,
      noDecision: null,
      yesDecision: null,
    },
    2: {
      label:
        '2 Is the system, as proposed, ready for production and deployment ?!',
      noAnswer: 3,
      yesAnswer: 4,
      noDecision: null,
      yesDecision: null,
    },
    3: {
      label:
        '3 Is the system, as proposed, ready for production and deployment ?!',
      noAnswer: 4,
      yesAnswer: null,
      noDecision: null,
      yesDecision: 'Demo',
    },
    4: {
      label:
        '4 Is the system, as proposed, ready for production and deployment ?!',
      noAnswer: null,
      yesAnswer: null,
      noDecision: 'PD',
      yesDecision: 'Feas',
    },
  };

  currentQuestion = this.questions[0];

  constructor() {}

  ngOnInit(): void {}

  answer(action: boolean) {
    if (action) {
      if (this.currentQuestion.yesAnswer) {
        this.currentQuestion = this.questions[this.currentQuestion.yesAnswer];
      } else {
        this.viewResult = true;
        console.log('Decision', this.currentQuestion.yesDecision);
      }
    } else {
      if (this.currentQuestion.noAnswer) {
        this.currentQuestion = this.questions[this.currentQuestion.noAnswer];
      } else {
        this.viewResult = true;
        console.log('Decision', this.currentQuestion.noDecision);
      }
    }
  }

  changeIndex(i: number): void {
    this.stepperIndex = i;
  }
}
