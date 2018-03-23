import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questionary',
  templateUrl: './questionary.component.html',
  styleUrls: ['./questionary.component.css']
})
export class QuestionaryComponent implements OnInit {

  questions: any[];

  currentIndex = 0;
  done = false;

  score = 0;

  constructor() { }

  ngOnInit() {
    this.questions = [
      {
        desc: 'Начнем с простого: какой из этих узлов НЕ придется вязать финалистам?',
        answers: [
          {
            desc: 'Булинь',
            correct: false,
            score: 0,
            wrong_because: 'Неверно! Это же классика...'
          },
          {
            desc: 'Встречный',
            correct: true,
            score: 1,
            correct_because: 'Правильно! Этот узел вязали финалисты прошлого года. В 2018-ом его заменили на встречную восьмерку.'
          },
          {
            desc: 'Встречная восьмерка',
            correct: false,
            score: 0,
            wrong_because: 'Неверно! Еще год назад вы бы были правы, но не в этот раз.'
          },
          {
            desc: 'Грейпвайн',
            correct: false,
            score: 0,
            wrong_because: 'Неверно! Ну что вы? Финалисты всегда вяжут этот узел. Он применяется для сращивания веревок и создания веревочных петель.'
          }
        ]
      },
      {
        desc: 'Продолжаем! Пройдемся по материалу первого отделения: каким узлом блокируют страховочную систему?  ',
        answers: [
          {
            desc: 'Двойной булинь',
            correct: true,
            score: 1,
            correct_because: 'Верно!'
          },
          {
            desc: 'Двойной рифовый',
            correct: false,
            score: 0,
            wrong_because: 'Ошибка. Двойной рифовый узел — чуть более сложный прямой. Он используется для связывания веревок одного' +
            'диаметра при небольшой тяге. http://vestigator.info/forum/MGalleryItem.php?id=519'
          },
          {
            desc: 'Академический',
            score: 0,
            correct: false,
            wrong_because: 'Ошибка. Академический —  усложненная разновидность прямого узла. Он применяется для связывания двух веревок' +
            'разного диаметра. При большой нагрузке не так сильно затягивается, как прямой узел, и его легче развязать. ' +
            'http://vestigator.info/forum/MGalleryItem.php?id=338'
          },
          {
            desc: 'Пятигорский беседочный',
            correct: false,
            score: 0,
            wrong_because: 'Ошибка. Такой узел существует, но он используется не ВМЕСТЕ с системой, а ВМЕСТО нее. Применяется при спуске' + 
            'тяжело пострадавшего а также для создания двойной петли самостраховки. http://vestigator.info/forum/MGalleryItem.php?id=511'
          }
        ]
      }
    ];
  }

  questionDone(question) {
    this.currentIndex += 1;

    if (this.currentIndex === this.questions.length) {
      this.done = true;

      this.score = this.questions.reduce((score, q) => {
        return score + q.answers
          .filter((a) => a.correct && a.clicked)
          .map((a) => a.score)
          .reduce((r, s) => s + r, 0);
      }, 0);

      console.log(this.score);
    }
  }
}
