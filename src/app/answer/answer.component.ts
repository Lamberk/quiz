import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {

  @Input() answer: any;
  @Input() touched = false;
  @Input() clicked = false;

  @Output() answered = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.answered.emit();
  }

}
