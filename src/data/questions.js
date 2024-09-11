export const questions = [
  {
    id: 1,
    question: "Какая электроустановка считается действующей?",
    answers: [
      {
        id: 1,
        isRight: true,
        text: "Электроустановка или ее часть, которая находится под напряжением, либо на которую напряжение может быть подано включением коммутационных аппаратов",
      },
      {
        id: 2,
        isRight: false,
        text: "Исправная электроустановка",
      },
      {
        id: 3,
        isRight: false,
        text: "Электроустановка, которая находится в постоянной эксплуатации ",
      },
      {
        id: 4,
        isRight: false,
        text: "Электроустановка, которая находится под напряжением не ниже 220 В",
      },
    ],
  },
  {
    id: 2,
    question:
      "Какие запрещающие плакаты вывешиваются на приводах коммутационных аппаратов во избежание подачи напряжения на рабочее место при проведении ремонта или планового осмотра оборудования? ",
    answers: [
      { id: 1, isRight: true, text: "Не включать! Работают люди" },
      { id: 2, isRight: false, text: "Не открывать! Работают люди" },
      {
        id: 3,
        isRight: false,
        text: "Электроустановка, которая находится в постоянной эксплуатации ",
      },
      {
        id: 4,
        isRight: false,
        text: "Работа под напряжением! Повторно не включать!",
      },
    ],
  },
  {
    id: 3,
    question:
      "Допустимо ли пребывание одного или нескольких членов бригады отдельно от производителя работ, в случае рассредоточения членов бригады по разным рабочим местам? ",
    answers: [
      {
        id: 1,
        isRight: true,
        text: "Допустимо, при наличии у членов бригады III группы по электробезопасности",
      },
      { id: 2, isRight: false, text: "Недопустимо в любом случае" },
      { id: 3, isRight: false, text: "Допустимо в любом случае" },
      {
        id: 4,
        isRight: false,
        text: "Допустимо, при проведении соответствующего инструктажа",
      },
    ],
  },
  {
    id: 4,
    question:
      "Кому разрешается работать единолично в электроустановках напряжением до 1000 В, расположенных в помещениях, кроме особо опасных?",
    answers: [
      {
        id: 1,
        isRight: true,
        text: "Работнику, имеющему III группу по электробезопасности и право быть производителем работ",
      },
      {
        id: 2,
        isRight: false,
        text: "Работнику, имеющему IV группу по электробезопасности",
      },
      {
        id: 3,
        isRight: false,
        text: "Работнику, имеющему III группу по электробезопасности",
      },

      { id: 4, isRight: false, text: "Работать единолично не разрешается" },
    ],
  },
  {
    id: 5,
    question:
      "Можно ли использовать землю в качестве фазного или нулевого провода в электроустановках до 1000 В?",
    answers: [
      {
        id: 1,
        isRight: true,
        text: "Правилами технической эксплуатации электроустановок потребителей запрещается",
      },
      { id: 2, isRight: false, text: "Разрешается без ограничений" },
      {
        id: 3,
        isRight: false,
        text: "Разрешается только в единичных случаях с разрешения органов энергонадзора",
      },
    ],
  },
  {
    id: 6,
    question:
      "Какие электроустановки и электрические приборы подлежат отключению по окончании рабочего времени?",
    answers: [
      {
        id: 1,
        isRight: true,
        text: "Электроустановки и бытовые электроприборы в помещениях, в которых по окончании рабочего времени отсутствует дежурный персонал",
      },
      { id: 2, isRight: false, text: "Дежурное освещение" },
      {
        id: 3,
        isRight: false,
        text: "Установки пожаротушения и противопожарного водоснабжения",
      },
      {
        id: 4,
        isRight: false,
        text: "Установки пожарной и охранно-пожарной сигнализации",
      },
    ],
  },
  {
    id: 7,
    question: "В каком случае нарушен порядок хранения и выдачи ключей?",
    answers: [
      {
        id: 1,
        isRight: true,
        text: "Допускается возвращать ключи от электроустановок оперативному персоналу в течение трех дней после полного окончания работ",
      },
      {
        id: 2,
        isRight: false,
        text: "Ключи от электроустановок должны быть пронумерованы и храниться в запираемом ящике. Один комплект должен быть запасным",
      },
      {
        id: 3,
        isRight: false,
        text: "Выдача ключей должна быть заверена подписью работника, ответственного за выдачу и хранение ключей, а также подписью работника, получившего ключи",
      },
      {
        id: 4,
        isRight: false,
        text: "Ключи от электроустановок должны выдаваться производителю работ при допуске к работам по наряду-допуску от помещений, вводных устройств, щитов, щитков, в которых предстоит работать",
      },
    ],
  },
  {
    id: 8,
    question:
      "Что запрещено работнику при выполнении работ с применением переносного электроинструмента?",
    answers: [
      {
        id: 1,
        isRight: true,
        text: "Разбирать ручные электрические машины и электроинструмент, производить какой-либо ремонт",
      },
      {
        id: 2,
        isRight: false,
        text: "Выполнять тестирование устройства защитного отключения",
      },
      {
        id: 3,
        isRight: false,
        text: "Проверять комплектность и надежность крепления деталей",
      },
      {
        id: 4,
        isRight: false,
        text: "Проверять исправность цепи заземления у машин I класса",
      },
    ],
  },
  {
    id: 9,
    question:
      "В каком случае удостоверение о проверке знаний правил работы в электроустановках подлежит замене?",
    answers: [
      {
        id: 1,
        isRight: true,
        text: "В случае изменения должности",
      },
      {
        id: 2,
        isRight: false,
        text: "По истечения срока действия группы по электробезопасности",
      },
      { id: 3, isRight: false, text: "В случае утери удостоверения" },
      {
        id: 4,
        isRight: false,
        text: "При повышении группы по электробезопасности",
      },
    ],
  },
  {
    id: 10,
    question:
      "Что должен сделать работник, заметивший неисправности электроустановки или средств защиты?",
    answers: [
      {
        id: 1,
        isRight: true,
        text: "Немедленно сообщить об этом своему непосредственному руководителю, в его отсутствие - вышестоящему руководителю",
      },
      { id: 2, isRight: false, text: "Принять меры по устранению неполадок" },
      {
        id: 3,
        isRight: false,
        text: "Вызвать ремонтную службу",
      },
      { id: 4, isRight: false, text: "Самостоятельно устранить неисправности" },
    ],
  },
  {
    id: 11,
    question:
      "Какие могут быть приняты меры, препятствующие подаче напряжения в электроустановках до 1000 В на место работы при выполнении технических мероприятий?",
    answers: [
      {
        id: 1,
        isRight: true,
        text: "Отсоединены  кабели от оборудования, на котором должны проводиться работы",
      },
      {
        id: 2,
        isRight: false,
        text: "На коммутационные аппараты надеты диэлектрические колпаки",
      },
      {
        id: 3,
        isRight: false,
        text: "Полностью отключена сеть освещения в помещении электроустановки",
      },
      { id: 4, isRight: false, text: "Включены заземляющие ножи" },
    ],
  },
  {
    id: 12,
    question:
      "Кто может выполнять работы по перекладыванию кабеля, находящегося под напряжением 0,4 кВ?",
    answers: [
      {
        id: 1,
        isRight: true,
        text: "Работы должны выполняться работниками, имеющими опыт прокладки кабеля, под надзором производителя работ, имеющего группу IV",
      },
      {
        id: 2,
        isRight: false,
        text: "Работы могут выполняться одним работником, имеющим группу IV",
      },
      {
        id: 3,
        isRight: false,
        text: "Работы должны выполняться работниками, имеющими опыт прокладки кабеля, под надзором наблюдающего",
      },
      {
        id: 4,
        isRight: false,
        text: "Работы должны выполняться работниками, имеющими в удостоверении запись на право проведения специальных работ",
      },
    ],
  },
  {
    id: 13,
    question:
      "Кому должен сообщать работник о замеченных им нарушениях, представляющих опасность для людей, если он не имеет права принять меры по их устранению?",
    answers: [
      {
        id: 1,
        isRight: true,
        text: "Своему непосредственному руководителю",
      },
      { id: 2, isRight: false, text: "Членам бригады" },
      {
        id: 3,
        isRight: false,
        text: "Оперативному персоналу",
      },
      { id: 4, isRight: false, text: "Инженеру по охране труда" },
    ],
  },
  {
    id: 14,
    question:
      "Укажите последовательность действий по восстановлению проходимости дыхательных путей и определению признаков жизни у пострадавшего. (приказ Минздрава России от 04.05.2012 № 477н).",
    answers: [
      {
        id: 1,
        isRight: true,
        text: "1) запрокинуть голову с подъемом подбородка; 2) выдвинуть нижнюю челюсть; 3) определить наличие дыхания с помощью слуха, зрения и осязания; 4) определить наличие кровообращения, проверить пульс на магистральных артериях",
      },
      {
        id: 2,
        isRight: false,
        text: "1) удалить слизь и содержимое желудка; 2) приподнять ноги и расстегнуть поясной ремень, при возможности положить холод на живот",
      },
      {
        id: 3,
        isRight: false,
        text: "1) убедиться в отсутствии пульса на сонной артерии; 2) убедиться в отсутствии признаков дыхания; 3) освободить грудную клетку от одежды и расстегнуть поясной ремень",
      },
    ],
  },
  {
    id: 15,
    question:
      "К основным средствам защиты для работы в электроустановках до 1000В относятся:",
    answers: [
      {
        id: 1,
        isRight: true,
        text: "диэлектрические перчатки; указатели напряжения; электроизмерительные клещи; ручной изолирующий  инструмент; изолирующие штанги всех видов; изолирующие клещи",
      },
      {
        id: 2,
        isRight: false,
        text: "диэлектрические ковры и изолирующие подставки; диэлектрические галоши; изолирующие колпаки, покрытия и накладки; лестницы приставные, стремянки изолирующие стеклопластиковые",
      },
      {
        id: 3,
        isRight: false,
        text: "диэлектрические перчатки; указатели напряжения; электроизмерительные клещи; диэлектрические ковры и изолирующие подставки; диэлектрические галоши",
      },
      {
        id: 4,
        isRight: false,
        text: "диэлектрические перчатки; указатели напряжения; электроизмерительные клещи; ручной изолирующий  инструмент; изолирующие штанги всех видов; изолирующие клещи; диэлектрические ковры и изолирующие подставки; диэлектрические галоши; изолирующие колпаки, покрытия и накладки; лестницы приставные, стремянки изолирующие стеклопластиковые",
      },
    ],
  },
  {
    id: 16,
    question:
      "К дополнительным средствам защиты для работы в электроустановках до 1000В относятся:",
    answers: [
      {
        id: 1,
        isRight: true,
        text: "диэлектрические ковры и изолирующие подставки; диэлектрические галоши; изолирующие колпаки, покрытия и накладки; лестницы приставные, стремянки изолирующие стеклопластиковые",
      },
      {
        id: 2,
        isRight: false,
        text: "диэлектрические перчатки; указатели напряжения; электроизмерительные клещи; ручной изолирующий  инструмент; изолирующие штанги всех видов; изолирующие клещи",
      },
      {
        id: 3,
        isRight: false,
        text: "диэлектрические ковры и изолирующие подставки; диэлектрические галоши; изолирующие штанги всех видов; изолирующие клещи",
      },
      {
        id: 4,
        isRight: false,
        text: "диэлектрические перчатки; указатели напряжения; электроизмерительные клещи; диэлектрические ковры и изолирующие подставки; диэлектрические галоши",
      },
    ],
  },
  {
    id: 17,
    question:
      "Перечислите мероприятия по проведению сердечно-легочной реанимации до появления признаков жизни. (приказ Минздрава России от 04.05.2012 № 477н).",
    answers: [
      {
        id: 1,
        isRight: true,
        text: "1) давление руками на грудину пострадавшего; 2) искусственное дыхание «Рот ко рту» (»Рот к носу», с использованием устройства для искусственного дыхания)",
      },
      {
        id: 2,
        isRight: false,
        text: "1) освободить грудную клетку от одежды и расстегнуть поясной ремень; 2) прикрыть двумя пальцами мечевидный отросток; 3) нанести удар кулаком по грудине; 4) проверить пульс, при отсутствии пульса перейти к непрямому массажу сердца",
      },
      {
        id: 3,
        isRight: false,
        text: "1) убедиться в отсутствии пульса на сонной артерии; 2) прикрыть двумя пальцами мечевидный отросток, нанести удар по грудине; 3) перейти к непрямому массажу сердца; 4) сделать вдох искусственного дыхания",
      },
    ],
  },
  {
    id: 18,
    question:
      "Каким образом производится присоединение заземляющих проводников к заземлителю и заземляющим конструкциям?",
    answers: [
      {
        id: 1,
        isRight: true,
        text: "Сваркой",
      },
      {
        id: 2,
        isRight: false,
        text: "Болтовым соединением",
      },
      {
        id: 3,
        isRight: false,
        text: "Резьбовым соединением",
      },
      {
        id: 4,
        isRight: false,
        text: "Фланцевым соединением",
      },
    ],
  },
  {
    id: 19,
    question:
      "Чем должны отличаться светильники аварийного освещения от светильников рабочего освещения?",
    answers: [
      {
        id: 1,
        isRight: true,
        text: "Знаками и окраской",
      },
      {
        id: 2,
        isRight: false,
        text: "Исполнением",
      },
      {
        id: 3,
        isRight: false,
        text: "Принципиальных отличий нет",
      },
    ],
  },
  {
    id: 20,
    question:
      "С каких частей электроустановки напряжением до 1000 В должно быть снято напряжение коммутационными аппаратами при выполнении технических мероприятий, обеспечивающих безопасность работ?",
    answers: [
      {
        id: 1,
        isRight: true,
        text: "Со всех токоведущих частей, на которых будет проводиться работа",
      },
      {
        id: 2,
        isRight: false,
        text: "Со всех частей электроустановки, где возможно приближение людей на расстояние менее 2 м",
      },
      {
        id: 3,
        isRight: false,
        text: "Со всех частей электроустановки, где возможно приближение людей на расстояние менее 1 м",
      },
      {
        id: 4,
        isRight: false,
        text: "С частей электроустановки, которые могут представлять опасность для работника, находящегося в согнутом положении",
      },
    ],
  },
];

export const questionsEasy = [
  {
    id: 1,
    question: "Что такое электроустановка?",
    answers: [
      {
        id: 1,
        isRight: true,
        text: "Совокупность машин, аппаратов, линий и вспомогательного оборудования, предназначенных для производства, преобразования, трансформации, передачи, распределения электрической энергии и преобразования ее в другой вид энергии",
      },
      {
        id: 2,
        isRight: false,
        text: "Совокупность устройств, служащая для приема и распределения электроэнергии и содержащая коммутационные аппараты, сборные и соединительные шины, вспомогательные устройства, а также устройства защиты, автоматики и измерительные приборы",
      },
      {
        id: 3,
        isRight: false,
        text: "Совокупность устройств для передачи и распределения электрической энергии, состоящая из подстанций, распределительных устройств, токопроводов, воздушных и кабельных линий электропередачи, работающих на определенной территории",
      },
      {
        id: 4,
        isRight: false,
        text: "Установка, служащая для приема и распределения электроэнергии и содержащая коммутационные аппараты, сборные и соединительные шины, вспомогательные устройства (компрессорные, аккумуляторные и др.), а также устройства защиты, автоматики и измерительные приборы",
      },
    ],
  },
  {
    id: 2,
    question:
      "Кто осуществляет государственный энергетический надзор за соблюдением требований правил и норм электробезопасности в электроустановках?",
    answers: [
      { id: 1, isRight: true, text: "Ростехнадзор" },
      { id: 2, isRight: false, text: "Росстандарт" },
      {
        id: 3,
        isRight: false,
        text: "МЧС России",
      },
      {
        id: 4,
        isRight: false,
        text: "Роспотребнадзор",
      },
    ],
  },
  {
    id: 3,
    question:
      "Кто дает разрешение на снятие напряжения при несчастных случаях для освобождения пострадавшего от действия электрического тока?",
    answers: [
      {
        id: 1,
        isRight: true,
        text: "Напряжение должно быть снято немедленно без предварительного разрешения",
      },
      {
        id: 2,
        isRight: false,
        text: "Разрешение дает ответственный за электрохозяйство",
      },
      {
        id: 3,
        isRight: false,
        text: "Разрешение дает вышестоящий оперативный персонал",
      },
      {
        id: 4,
        isRight: false,
        text: "Разрешение дает административно-технический персонал",
      },
    ],
  },
  {
    id: 4,
    question: "Какая электроустановка считается действующей?",
    answers: [
      {
        id: 1,
        isRight: true,
        text: "Электроустановка или ее часть, которая находится под напряжением, либо на которую напряжение может быть подано включением коммутационных аппаратов",
      },
      {
        id: 2,
        isRight: false,
        text: "Электроустановка, которая находится в постоянной эксплуатации",
      },
      {
        id: 3,
        isRight: false,
        text: "Электроустановка, служащая для приема и распределения электроэнергии и содержащая коммутационные аппараты, сборные и соединительные шины, вспомогательные устройства (компрессорные, аккумуляторные и др.), а также устройства защиты, автоматики и измерительные приборы",
      },

      {
        id: 4,
        isRight: false,
        text: "Электроустановка, предназначенная для преобразования и распределения электрической энергии",
      },
    ],
  },
  {
    id: 5,
    question:
      "Какие запрещающие плакаты вывешиваются на приводах коммутационных аппаратов во избежание подачи напряжения на рабочее место при проведении ремонта или планового осмотра оборудования?",
    answers: [
      {
        id: 1,
        isRight: true,
        text: "Не включать! Работают люди",
      },
      { id: 2, isRight: false, text: "Не открывать! Работают люди" },
      {
        id: 3,
        isRight: false,
        text: "Опасно!",
      },
      {
        id: 4,
        isRight: false,
        text: "Работа под напряжением! Повторно не включать!",
      },
    ],
  },
  {
    id: 6,
    question:
      "Какие электроустановки и электрические приборы подлежат отключению по окончании рабочего времени?",
    answers: [
      {
        id: 1,
        isRight: true,
        text: "Электроустановки и бытовые электроприборы в помещениях, в которых по окончании рабочего времени отсутствует дежурный персонал",
      },
      { id: 2, isRight: false, text: "Дежурное освещение" },
      {
        id: 3,
        isRight: false,
        text: "Установки пожаротушения и противопожарного водоснабжения",
      },
      {
        id: 4,
        isRight: false,
        text: "Установки пожарной и охранно-пожарной сигнализации",
      },
    ],
  },
  {
    id: 7,
    question: "В каком случае нарушен порядок хранения и выдачи ключей?",
    answers: [
      {
        id: 1,
        isRight: true,
        text: "Допускается возвращать ключи от электроустановок оперативному персоналу в течение трех дней после полного окончания работ",
      },
      {
        id: 2,
        isRight: false,
        text: "Ключи от электроустановок должны быть пронумерованы и храниться в запираемом ящике. Один комплект должен быть запасным",
      },
      {
        id: 3,
        isRight: false,
        text: "Выдача ключей должна быть заверена подписью работника, ответственного за выдачу и хранение ключей, а также подписью работника, получившего ключи",
      },
      {
        id: 4,
        isRight: false,
        text: "Ключи от электроустановок должны выдаваться производителю работ при допуске к работам по наряду-допуску от помещений, вводных устройств, щитов, щитков, в которых предстоит работать",
      },
    ],
  },
  {
    id: 8,
    question:
      "Что запрещено работнику при выполнении работ с применением переносного электроинструмента?",
    answers: [
      {
        id: 1,
        isRight: true,
        text: "Разбирать ручные электрические машины и электроинструмент, производить какой-либо ремонт",
      },
      {
        id: 2,
        isRight: false,
        text: "Выполнять тестирование устройства защитного отключения",
      },
      {
        id: 3,
        isRight: false,
        text: "Проверять комплектность и надежность крепления деталей",
      },
      {
        id: 4,
        isRight: false,
        text: "Проверять исправность цепи заземления у машин I класса",
      },
    ],
  },
  {
    id: 9,
    question:
      "В каком случае удостоверение о проверке знаний правил работы в электроустановках подлежит замене?",
    answers: [
      {
        id: 1,
        isRight: true,
        text: "В случае изменения должности",
      },
      {
        id: 2,
        isRight: false,
        text: "По истечения срока действия группы по электробезопасности",
      },
      { id: 3, isRight: false, text: "В случае утери удостоверения" },
      {
        id: 4,
        isRight: false,
        text: "При повышении группы по электробезопасности",
      },
    ],
  },
  {
    id: 10,
    question:
      "Что должен сделать работник, заметивший неисправности электроустановки или средств защиты?",
    answers: [
      {
        id: 1,
        isRight: true,
        text: "Немедленно сообщить об этом своему непосредственному руководителю, в его отсутствие - вышестоящему руководителю",
      },
      { id: 2, isRight: false, text: "Принять меры по устранению неполадок" },
      {
        id: 3,
        isRight: false,
        text: "Вызвать ремонтную службу",
      },
      { id: 4, isRight: false, text: "Самостоятельно устранить неисправности" },
    ],
  },
];
