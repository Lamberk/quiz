import { Component, OnInit } from '@angular/core';
import "../../assets/js/share.js"
declare var VK: any;

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
        image:'http://guru-st.ru/userfiles/news/large/948_strakhovochnaya-sistema--chto.jpg',
        desc: 'Для начала пройдемся по материалу первого отделения: каким узлом блокируют страховочную систему?',
        answers: [
          {
            desc: 'Двойной булинь',
            correct:  true,
            score: 1,
            correct_because: 'Верно',
          },
          {
            desc: 'Двойной рифовый',
            correct: false,
            score: 0,
            wrong_because: 'Ошибка. Двойной рифовый узел — чуть более сложный прямой. Он используется для связывания веревок одного диаметра при небольшой тяге.', 
            image: 'http://vestigator.info/forum/MGalleryItem.php?id=519',
          },
          {
            desc: 'Академический',
            correct: false,
            score: 0,
            wrong_because: 'Ошибка. Академический —  усложненная разновидность прямого узла. Он применяется для связывания двух веревок разного диаметра. При большой нагрузке не так сильно затягивается, как прямой узел, и его легче развязать.',
            image: 'http://vestigator.info/forum/MGalleryItem.php?id=338',
          },
          {
            desc: 'Пятигорский беседочный',
            correct: false,
            score: 0,
            wrong_because: 'Ошибка. Такой узел существует, но он используется не ВМЕСТЕ с системой, а ВМЕСТО нее. Применяется при спуске' + 
            'тяжело пострадавшего а также для создания двойной петли самостраховки.',
            image: 'http://vestigator.info/forum/MGalleryItem.php?id=511',
          }
        ]
        
       },
      // {
      //   desc: 'Теперь посмотрим, разбираетесь ли вы в том, что и зачем вяжете. Какой из этих узлов применяется для сращивания веревок разного диаметра?',
      //   answers: [
      //     {
      //       desc: 'Брамшкотовый',
      //       correct: true,
      //       score: 1,
      //       correct_because: 'Да!'
      //     },
      //     {
      //       desc: 'Прямой',
      //       correct: false,
      //       score: 0,
      //       wrong_because: 'Нет, вы что! Прямой узел категорически нельзя использовать, если диаметры разные. При больших нагрузках тонкая веревка начинает рвать толстую.',
      //     },
      //     {
      //       desc: 'Австрийский проводник',
      //       score: 0,
      //       correct: false,
      //       wrong_because: 'Нет! Австрийский проводник — удачный узел, чтобы перекрыть битый участок на вашей веревке. Но сращивать с помощью него веревки разных диаметров — плохая идея. ',
      //     },
      //   ]
      // },
      // {
      //   image:'http://fb.ru/misc/i/gallery/45292/1823073.jpg',
      //   desc: 'Минутка этимологии. Почему узел грейпвайн (GrapeVine) так называется?',
      //   answers: [
      //     {
      //       desc: 'Его изобрели авcтрийцы, когда выпили много вина ',
      //       correct:  false,
      //       score: 0,
      //       wrong_because: 'Классная была бы история, но нет.',
      //     },
      //     {
      //       desc: 'Рисунок узла, повторенный много раз напоминает виноградную лозу',
      //       correct: false,
      //       score: 0,
      //       wrong_because: 'Вообще-то не особо напоминает.',
      //     },
      //     {
      //       desc: 'Половинкой этого узла подвязывают виноград            ',
      //       correct: true,
      //       score: 1,
      //       correct_because: 'Ага. Но это неточно :)',
      //     },
      //     {
      //       desc: ' Этот узел такой же крепкий, как портвейн в Португалии, где его и изобрели.',
      //       correct: false,
      //       score: 0,
      //       wrong_because: 'Портвейном интересуетесь? А вы в каком отделении?',
      //     }
      //   ]
      // },
      // {
      //   image:'http://fb.ru/misc/i/gallery/29368/1663495.jpg',
      //   desc: 'Как еще называют Австрийский проводник?',
      //   answers: [
      //     {
      //       desc: 'Узел среднего',
      //       correct:  true,
      //       score: 1,
      //       correct_because: 'И так тоже. В этом вопросе нет неправильных вариантов ответа. Оказывается, у «австрияка» много имен.',
      //     },
      //     {
      //       desc: 'Бабочка',
      //       correct:  true,
      //       score: 1,
      //       correct_because: 'И так тоже. В этом вопросе нет неправильных вариантов ответа. Оказывается, у «австрияка» много имен.',
      //     },
      //     {
      //       desc: 'Альпийский мотыль',
      //       correct:  true,
      //       score: 1,
      //       correct_because: 'И так тоже. В этом вопросе нет неправильных вариантов ответа. Оказывается, у «австрияка» много имен.',
      //     },
      //     {
      //       desc: 'Пчелка',
      //       correct:  true,
      //       score: 1,
      //       correct_because: 'И так тоже. В этом вопросе нет неправильных вариантов ответа. Оказывается, у «австрияка» много имен.',
      //     },
      //     {
      //       desc: 'Бергшафт',
      //       correct:  true,
      //       score: 1,
      //       correct_because: 'И так тоже. В этом вопросе нет неправильных вариантов ответа. Оказывается, у «австрияка» много имен.',
      //     },
      //     {
      //       desc: 'Ездовая петля',
      //       correct:  true,
      //       score: 1,
      //       correct_because: 'И так тоже. В этом вопросе нет неправильных вариантов ответа. Оказывается, у «австрияка» много имен.',
      //     },
      //   ]
      // },
      // {
      //   image:'http://www.stranniktut.by/uploaded/images/stranniktut_uzli_1.JPG',
      //   desc: 'Назовите альтернативное название прямого узла?',
      //   answers: [
      //     {
      //       desc: 'Узел Зевса',
      //       correct:  false,
      //       score: 0,
      //       wrong_because: 'Неверно. Узлами Зевса называют шаровые молнии.',
      //     },
      //     {
      //       desc: 'Геркулесов узел',
      //       correct:  true,
      //       score: 1,
      //       correct_because: 'Правильно. Еще бы знать почему ¯\_(ツ)_/¯             ',
      //     },
      //     {
      //       desc: 'Гордиев узел',
      //       correct:  false,
      //       score: 0,
      //       wrong_because: 'Неверно. Гордиев узел — чрезвычайно сложный узел из древнегреческой мифологии. В переносном смысле выражение «гордиев узел» означает запутанное сплетение обстоятельств.             ',
      //     },
      //     {
      //       desc: 'Узел Джека Воробья',
      //       correct:  false,
      //       score: 0,
      //       wrong_because: 'КАПИТАНА! Капитана Джека Воробья!             ',
      //     },
      //   ]
      // },
      // {
      //   desc: 'Какого из этих узлов не существет?',
      //   answers: [
      //     {
      //       desc: 'Пиратский',
      //       correct:  false,
      //       score: 0,
      //       wrong_because: 'Увы, он существет. Его использовали, чтобы привязать поводья лошади или что-то еще.             ',
      //       image: 'http://vestigator.info/forum/MGalleryItem.php?id=494',
      //     },
      //     {
      //       desc: 'Разбойничий',
      //       correct:  false,
      //       score: 0,
      //       wrong_because: 'Увы, он существет. Его использовали, чтобы привязать поводья лошади или что-то еще.             ',
      //       image: 'http://vestigator.info/forum/MGalleryItem.php?id=513',
      //     },
      //     {
      //       desc: 'Злодейский',
      //       correct:  false,
      //       score: 0,
      //       wrong_because: 'Увы, он существет. Его использовали, чтобы привязать поводья лошади или что-то еще.             ',
      //       image: 'http://vestigator.info/forum/MGalleryItem.php?id=417            ',
      //     },
      //     {
      //       desc: 'Узел Дьявола',
      //       correct:  true,
      //       score: 1,
      //       correct_because: 'Правильно!  Узел дьявола — это такой фильм с Колином Фёртом и Риз Уизерспун.          ',
      //     },
      //   ]
      // },
      // {
      //   desc: 'Назовите любимый узел пенсионеров?',
      //   answers: [
      //     {
      //       desc: 'Грейпвайн',
      //       correct:  false,
      //       score: 0,
      //       wrong_because: 'Нет. Они всегда забывают его название...',
      //     },
      //     {
      //       desc: 'Булинь',
      //       correct:  false,
      //       score: 0,
      //       wrong_because: 'Нет. Он слишком сложный.',
      //     },
      //     {
      //       desc: 'Штык',
      //       correct:  true,
      //       score: 1,
      //       correct_because: 'Правильно! Ведь рисунок этого узла лежит в основе вязания.',
      //     },
      //     {
      //       desc: 'Ведьмино седло',
      //       correct:  false,
      //       score: 0,
      //       wrong_because: 'Не все ведьмы старые, что за стереотипы?',
      //     },
          
      //   ]
      // },
      // {
      //   vid: 'https://www.youtube.com/embed/fWlw9r6Gbno',

      //   desc: 'Какой узел никак не могут завязать герои клипа норвежского комедийного дуэта Илвис? Если не понимаете, о чем речь, посмотрите клип. ',
      //   answers: [
      //     {
      //       desc: 'Фургонный',
      //       correct:  true,
      //       score: 1,
      //       correct_because: 'Судя по всему, да! Этот узел применяют, когда нужно получить выигрыш в силе в два раза. Хотя в клипе, кажется, вяжут не только его...',
      //       image: 'http://vestigator.info/forum/MGalleryItem.php?id=580',
      //     },
      //     {
      //       desc: 'Булинь',
      //       correct:  false,
      //       score: 0,
      //       wrong_because: 'Нет. Это bowline, о котором поют в начале песни',
      //     },
      //     {
      //       desc: 'Грепвайн',
      //       correct:  false,
      //       score: 0,
      //       wrong_because: 'Нет. Это double overhand, о котором поют в начале песни.',
      //     },
          
      //     {
      //       desc: 'Узел каменщиков',
      //       correct:  false,
      //       score: 0,
      //       wrong_because: 'Увы, это не тот узел',
      //     },
          
      //   ]
      // },
      // {
      //   desc: 'Скоро финал, расслабьтесь немного. Какой из этих узлов вы выучили первым?        ',
      //   answers: [
      //     {
      //       desc: 'Двойной булинь',
      //       correct:  false,
      //       score: 0,
      //       wrong_because: 'Неа. На самом деле, есть еще один узел, который вы наверняка выучили гора-а-аздо раньше. ',
      //     },
      //     {
      //       desc: 'Восьмерка',
      //       correct:  false,
      //       score: 0,
      //       wrong_because: 'Неа. На самом деле, есть еще один узел, который вы наверняка выучили гора-а-аздо раньше. ',
      //     },
      //     {
      //       desc: 'Австрийский проводник',
      //       correct:  false,
      //       score: 0,
      //       wrong_because: 'Неа. На самом деле, есть еще один узел, который вы наверняка выучили гора-а-аздо раньше. ',
      //     },
      //     {
      //       desc: 'Двойной рифовый',
      //       correct:  true,
      //       score: 1,
      //       correct_because: 'Правильно! Ведь именно так называется «бантик», завязывать который вы наверняка научились еще в детском саду.            ',
      //       image: 'http://vestigator.info/forum/MGalleryItem.php?id=519',
      //     },
    
      //   ]
      // },
      // {
      //   desc: 'И последний вопрос. Какой из этих узлов называется «королем узлов»? ',
      //   answers: [
      //     {
      //       desc: 'Булинь',
      //       correct:  true,
      //       score: 1,
      //       correct_because: 'Да! Он был известен древним египтянам и финикийцам еще за 3000 лет до нашей эры. Несмотря на изумительную компактность, содержит элементы простого, полуштыка, ткацкого и прямого узлов. Элементы всех этих узлов в определенном сочетании дают булиню право называться универсальным. Главное преимущество — простота завязывания и развязывания после снятия нагрузки. ',
      //       image: 'http://www.gomelscouts.com/html/uploads/images/knots/knot_018.jpg',
      //     },
      //     {
      //       desc: 'Грейпвайн',
      //       correct:  false,
      //       score: 0,
      //       wrong_because: 'Нет! Узел хорош, но это не он.',
      //     },
      //     {
      //       desc: 'Ведьмино седло',
      //       correct:  false,
      //       score: 0,
      //       wrong_because: 'Нет! Узел хорош, но это не он.',
      //     },
      //     {
      //       desc: 'Австрийский проводник',
      //       correct:  false,
      //       score: 0,
      //       wrong_because: 'Нет! У него много имен, но он не король...',
      //     },  
      //   ]
      // },
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
