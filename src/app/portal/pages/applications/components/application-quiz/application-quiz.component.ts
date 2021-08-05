import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-application-quiz',
  templateUrl: './application-quiz.component.html',
  styleUrls: ['./application-quiz.component.scss']
})
export class ApplicationQuizComponent implements OnInit {
  viewResult = false;
  stepperIndex = 1;
  questions = [
    {
      label: 'Question 1 one Example ?!',
      answer: 'no',
    },
    {
      label: 'Question 2 one Example ?!',
      answer: 'no',
    },
    {
      label: 'Question 3 one Example ?!',
      answer: 'no',
    },
    {
      label: 'Question 4 one Example ?!',
      answer: 'no',
    },
    {
      label: 'Question 5 one Example ?!',
      answer: 'no',
    },
    {
      label: 'Question 6 one Example ?!',
      answer: 'no',
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

  changeIndex(i: number): void{
    this.stepperIndex = i;
  }

}
