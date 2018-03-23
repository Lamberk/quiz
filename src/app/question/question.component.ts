import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  @Input() question: any;
  @Output() answered = new EventEmitter();

  disabled = false;

  constructor() { }

  ngOnInit() {
  }

  answerClicked(answer) {
    if (!this.disabled) {
      answer.touched = true;
      answer.clicked = true;
      this.disabled = true;

      this.question.answers.forEach(a => {
        if (a.correct && answer !== a) {
          a.touched = true;
        }
      });
    }
  }

  finishQuestion() {
    this.answered.emit(this.question);
  }

}
