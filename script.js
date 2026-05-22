const ADMIN_KEY = "1611";

const characterImages = {
  profesor: "https://drive.google.com/uc?export=view&id=1SCiYS_kvlzHvkbviO7c0jq0Hd29kvkME",
  mossu: "https://drive.google.com/uc?export=view&id=1haZJnqbOcqKhSRYtfTOK5oPuxa1R8Jn2",
  ferny: "https://drive.google.com/uc?export=view&id=16unEJWgpXTb1elD8BjRItcu2W_YTGl-V",
  pino: "https://drive.google.com/uc?export=view&id=1l441An3IX3qvJbn3yO27KN2dhRu8zhch",
  flora: "https://drive.google.com/uc?export=view&id=1FqiD2GsYN4U5I4JbQRbr0YvYxKDJo9D0"
};

const characterQuotes = {
  profesor: "La ciencia también se entrena paso a paso.",
  mossu: "Pequeño por fuera, experto en esporas por dentro.",
  ferny: "Mis frondes y mis soros están listos para la aventura.",
  pino: "La sabiduría crece como una semilla fuerte y paciente.",
  flora: "Con flores y frutos, todo el ciclo cobra sentido."
};

const characterPowers = {
  profesor: "Poder: conocimiento botánico supremo.",
  mossu: "Poder: esporas, humedad y fijación con rizoides.",
  ferny: "Poder: frondes grandes y soros productores de esporas.",
  pino: "Poder: semillas desnudas y conos sabios.",
  flora: "Poder: flores, frutos y polinización perfecta."
};

const characterIntro = {
  profesor: "Soy el Profesor Botánico. Te guiaré en esta misión por el Reino Vegetal.",
  mossu: "Soy Mossu, el maestro de los musgos. Recuerda: no tengo vasos conductores y me fijo al suelo con rizoides.",
  ferny: "Soy Ferny, el explorador de los helechos. Mis frondes esconden soros donde se producen las esporas.",
  pino: "Soy PinoSensei, guardián de las gimnospermas. Mis semillas están desnudas y crecen en conos.",
  flora: "Soy Flora, reina de las angiospermas. Mis flores y frutos protegen la semilla y ayudan a la reproducción."
};

const state = {
  studentName: "",
  points: 0,
  unlockedCharacters: [],
  completedLevels: [],
  currentMode: null,
  currentQuestions: [],
  currentIndex: 0,
  currentScore: 0,
  currentWrong: [],
  lastReportHTML: "",
  currentLevelId: null,
  matchingPairsDone: 0,
  diagramIndex: 0,
  diagramScore: 0,
  diagramWrong: [],
  diagramQuestions: [],
  pretestAttempt: 0,
  posttestAttempt: 0,
  levelAttempts: {
    level1:0,
    level2:0,
    level3:0,
    level4:0,
    level5:0
  }
};

const characters = [
  { id:"profesor", name:"Profesor Botánico", icon:"🧑‍🏫", unlock:"Inicio" },
  { id:"mossu", name:"Mossu", icon:"🌿", unlock:"Nivel 1" },
  { id:"ferny", name:"Ferny", icon:"🍃", unlock:"Nivel 2" },
  { id:"pino", name:"PinoSensei", icon:"🌲", unlock:"Nivel 3" },
  { id:"flora", name:"Flora", icon:"🌸", unlock:"Nivel 4" }
];

const levelQuestionBanks = {
  level1: [
    [
      {
        question:"¿Cuál es la clasificación principal del tema?",
        options:["Plantas verdes y marrones","Plantas con semillas y sin semillas","Plantas grandes y pequeñas","Plantas de flor y de hoja"],
        answer:1,
        explanation:"El tema se organiza sobre todo entre plantas con semillas y plantas sin semillas."
      },
      {
        question:"¿Qué grupo incluye musgos y helechos?",
        options:["Plantas con semillas","Plantas sin semillas","Solo gimnospermas","Solo angiospermas"],
        answer:1,
        explanation:"Musgos y helechos son plantas sin semillas."
      },
      {
        question:"¿Qué grupo incluye gimnospermas y angiospermas?",
        options:["Plantas sin semillas","Briófitas","Plantas con semillas","Solo helechos"],
        answer:2,
        explanation:"Gimnospermas y angiospermas forman parte de las plantas con semillas."
      },
      {
        question:"¿Qué palabra significa semilla?",
        options:["Phyton","Gymnos","Sperma","Bryon"],
        answer:2,
        explanation:"Sperma significa semilla."
      }
    ],
    [
      {
        question:"Las plantas del tema se dividen principalmente según...",
        options:["si tienen flores grandes","si producen semillas o no","si viven en bosques","si tienen raíces largas"],
        answer:1,
        explanation:"La gran división del tema es plantas con semillas y plantas sin semillas."
      },
      {
        question:"Musgos y helechos pertenecen a...",
        options:["las plantas sin semillas","las angiospermas","las gimnospermas","las plantas con frutos"],
        answer:0,
        explanation:"Musgos y helechos son plantas sin semillas."
      },
      {
        question:"Gimnospermas y angiospermas forman parte de...",
        options:["las plantas con semillas","los musgos","las briófitas","las pteridófitas"],
        answer:0,
        explanation:"Ambas pertenecen al grupo de las espermatofitas."
      },
      {
        question:"¿Qué raíz significa planta?",
        options:["Sperma","Gymnos","Phyton","Rhiza"],
        answer:2,
        explanation:"Phyton significa planta."
      }
    ],
    [
      {
        question:"¿Qué distingue primero a los grandes grupos de plantas?",
        options:["El color","La presencia de semillas","La altura","El tipo de hoja"],
        answer:1,
        explanation:"La presencia o ausencia de semillas es la clasificación principal."
      },
      {
        question:"¿Cuál de estos grupos NO tiene semillas?",
        options:["Angiospermas","Gimnospermas","Helechos","Pinos"],
        answer:2,
        explanation:"Los helechos no tienen semillas."
      },
      {
        question:"¿Cuál de estos grupos sí tiene semillas?",
        options:["Musgos","Helechos","Briófitas","Angiospermas"],
        answer:3,
        explanation:"Las angiospermas sí tienen semillas."
      },
      {
        question:"¿Qué palabra aparece en angiospermas y gimnospermas y significa semilla?",
        options:["Soros","Sperma","Kaulos","Frons"],
        answer:1,
        explanation:"Sperma significa semilla."
      }
    ]
  ],
  level3: [
    [
      {
        question:"¿Qué significa gimnosperma?",
        options:["Semilla con fruto","Semilla desnuda","Planta sin hojas","Planta con esporas"],
        answer:1,
        explanation:"Gymnos = desnudo, sperma = semilla."
      },
      {
        question:"¿Qué producen los conos masculinos?",
        options:["Frutos","Polen","Raíces","Óvulos"],
        answer:1,
        explanation:"Los conos masculinos producen polen."
      },
      {
        question:"¿Qué tienen las angiospermas que las gimnospermas no tienen?",
        options:["Esporas","Frutos que protegen la semilla","Conos masculinos","Rizomas"],
        answer:1,
        explanation:"Las angiospermas tienen semillas encerradas dentro de frutos."
      },
      {
        question:"¿Qué ejemplo corresponde a una gimnosperma?",
        options:["Margarita","Manzano","Pino","Helecho"],
        answer:2,
        explanation:"El pino es una gimnosperma."
      }
    ],
    [
      {
        question:"Las gimnospermas se llaman así porque tienen...",
        options:["semillas desnudas","frutos carnosos","soros","raíces falsas"],
        answer:0,
        explanation:"Gimnosperma significa semilla desnuda."
      },
      {
        question:"El polen en las gimnospermas se forma en...",
        options:["los conos masculinos","el ovario","las frondes","los rizoides"],
        answer:0,
        explanation:"Los conos masculinos producen el polen."
      },
      {
        question:"Las angiospermas se distinguen porque sus semillas...",
        options:["están expuestas","están dentro de un fruto","salen de soros","no existen"],
        answer:1,
        explanation:"Las semillas de las angiospermas quedan protegidas por el fruto."
      },
      {
        question:"¿Cuál de estas plantas es una angiosperma?",
        options:["Pino","Abeto","Ciprés","Margarita"],
        answer:3,
        explanation:"La margarita es una angiosperma."
      }
    ],
    [
      {
        question:"¿Qué palabra significa desnudo en gimnosperma?",
        options:["Sperma","Gymnos","Phyton","Bryon"],
        answer:1,
        explanation:"Gymnos significa desnudo."
      },
      {
        question:"¿Qué estructura reproductora tienen las gimnospermas?",
        options:["Conos","Frutos","Soros","Esporangios florales"],
        answer:0,
        explanation:"Las gimnospermas tienen conos."
      },
      {
        question:"¿Qué protege las semillas en las angiospermas?",
        options:["El fruto","El soro","El cauloide","La fronde"],
        answer:0,
        explanation:"El fruto protege las semillas en las angiospermas."
      },
      {
        question:"¿Cuál de estas no es una gimnosperma?",
        options:["Pino","Abeto","Manzano","Ciprés"],
        answer:2,
        explanation:"El manzano es una angiosperma."
      }
    ]
  ],
  level5: [
    [
      {
        question:"¿Qué ocurre primero?",
        options:["Germinación","Polinización","Formación del fruto","Dispersión"],
        answer:1,
        explanation:"El ciclo reproductivo comienza con la polinización."
      },
      {
        question:"Después de la polinización ocurre...",
        options:["La fecundación","La dispersión","La caída del tallo","La fotosíntesis"],
        answer:0,
        explanation:"Tras la llegada del polen, se produce la fecundación."
      },
      {
        question:"¿Qué parte se transforma en fruto?",
        options:["El rizoma","El ovario","La testa","La antera"],
        answer:1,
        explanation:"El ovario se transforma en fruto."
      },
      {
        question:"¿Qué necesita una semilla para germinar?",
        options:["Solo oscuridad","Agua y temperatura adecuada","Solo viento","Solo polen"],
        answer:1,
        explanation:"La germinación necesita agua y condiciones adecuadas de temperatura."
      }
    ],
    [
      {
        question:"La primera etapa del ciclo reproductor de una angiosperma es...",
        options:["la polinización","la germinación","la dispersión","el crecimiento de la raíz"],
        answer:0,
        explanation:"Todo comienza con la polinización."
      },
      {
        question:"¿Qué sucede tras llegar el polen al estigma?",
        options:["Fecundación","Formación de soros","Aparición de rizoides","Caída de semillas desnudas"],
        answer:0,
        explanation:"Tras la polinización ocurre la fecundación."
      },
      {
        question:"El fruto se forma a partir de...",
        options:["la antera","el ovario","el albumen","la testa"],
        answer:1,
        explanation:"El ovario se transforma en fruto."
      },
      {
        question:"Para que una semilla germine necesita...",
        options:["solo luz","agua y temperatura adecuada","solo viento","solo insectos"],
        answer:1,
        explanation:"La semilla necesita agua y condiciones adecuadas."
      }
    ],
    [
      {
        question:"¿Qué proceso transporta el polen hasta el estigma?",
        options:["Germinación","Polinización","Dispersión","Fecundación"],
        answer:1,
        explanation:"La polinización es el transporte del polen."
      },
      {
        question:"¿Qué se forma después de la fecundación?",
        options:["El soro","La semilla","El cono","El rizoide"],
        answer:1,
        explanation:"Tras la fecundación se forma la semilla."
      },
      {
        question:"¿Qué estructura protege la semilla en las angiospermas tras la fecundación?",
        options:["El fruto","La fronde","El cáliz abierto","El rizoma"],
        answer:0,
        explanation:"El fruto protege la semilla."
      },
      {
        question:"En la germinación, lo primero que suele salir es...",
        options:["la raíz","el pétalo","el polen","el fruto"],
        answer:0,
        explanation:"La raíz suele emerger primero."
      }
    ]
  ]
};

const pretestModels = [
  [
    {
      question:"¿Qué diferencia principal separa los grandes grupos de plantas de este tema?",
      options:["Si producen semillas o no","Si son verdes o no","Si viven en macetas","Si tienen tallo largo"],
      answer:0,
      explanation:"La clasificación principal distingue plantas con semillas y plantas sin semillas."
    },
    {
      question:"Los musgos...",
      options:["tienen frutos","no tienen vasos conductores","tienen conos","tienen flores"],
      answer:1,
      explanation:"Los musgos no tienen vasos conductores."
    },
    {
      question:"¿Qué estructura fija el musgo al suelo?",
      options:["Antera","Rizoides","Ovario","Fronde"],
      answer:1,
      explanation:"Los rizoides fijan el musgo al suelo."
    },
    {
      question:"¿Qué parte del helecho es la hoja?",
      options:["Rizoma","Soro","Fronde","Testa"],
      answer:2,
      explanation:"Las frondes son las hojas del helecho."
    },
    {
      question:"Las gimnospermas tienen...",
      options:["frutos","semillas desnudas","soros","rizoides"],
      answer:1,
      explanation:"Las gimnospermas tienen semillas desnudas."
    },
    {
      question:"Las angiospermas...",
      options:["no tienen semillas","tienen semillas dentro de un fruto","solo viven en agua","se reproducen con soros"],
      answer:1,
      explanation:"Las angiospermas tienen semillas protegidas dentro de un fruto."
    },
    {
      question:"¿Qué parte de la flor produce el polen?",
      options:["Antera","Ovario","Estigma","Sépalo"],
      answer:0,
      explanation:"La antera produce el polen."
    },
    {
      question:"La polinización es...",
      options:["el nacimiento de la raíz","el viaje del polen hasta el estigma","la formación del fruto","la salida del tallo"],
      answer:1,
      explanation:"La polinización es el transporte del polen hasta el estigma."
    },
    {
      question:"¿Qué se forma tras la fecundación?",
      options:["La semilla","El rizoide","El soro","El rizoma"],
      answer:0,
      explanation:"Tras la fecundación se forma la semilla."
    },
    {
      question:"¿Qué ocurre en la germinación?",
      options:["La semilla empieza a crecer","Se produce polen","Aparece el fruto","Se forman soros"],
      answer:0,
      explanation:"La germinación es el comienzo del crecimiento de una nueva planta."
    }
  ],
  [
    {
      question:"La clasificación principal de las plantas del tema depende de...",
      options:["su color","si tienen semillas o no","su tamaño","su olor"],
      answer:1,
      explanation:"La gran clasificación del tema depende de la presencia de semillas."
    },
    {
      question:"Los musgos se caracterizan porque...",
      options:["tienen vasos conductores","producen frutos","no tienen vasos conductores","tienen flores"],
      answer:2,
      explanation:"Los musgos no tienen vasos conductores."
    },
    {
      question:"Los rizoides sirven para...",
      options:["producir polen","fijar el musgo al suelo","formar frutos","crear soros"],
      answer:1,
      explanation:"Los rizoides fijan el musgo al suelo."
    },
    {
      question:"Las hojas de los helechos se llaman...",
      options:["frondes","sépalos","filoides","anteras"],
      answer:0,
      explanation:"Las hojas de los helechos son las frondes."
    },
    {
      question:"¿Qué grupo tiene semillas desnudas?",
      options:["Helechos","Angiospermas","Musgos","Gimnospermas"],
      answer:3,
      explanation:"Las gimnospermas tienen semillas desnudas."
    },
    {
      question:"¿Qué grupo produce frutos?",
      options:["Musgos","Helechos","Angiospermas","Gimnospermas"],
      answer:2,
      explanation:"Las angiospermas producen frutos."
    },
    {
      question:"El polen se produce en...",
      options:["la antera","el estigma","el ovario","el soro"],
      answer:0,
      explanation:"La antera produce el polen."
    },
    {
      question:"¿Qué proceso lleva el polen al estigma?",
      options:["Germinación","Dispersión","Polinización","Fecundación"],
      answer:2,
      explanation:"La polinización transporta el polen."
    },
    {
      question:"Después de la fecundación se forma...",
      options:["la semilla","el rizoide","el cáliz","la fronde"],
      answer:0,
      explanation:"Tras la fecundación se forma la semilla."
    },
    {
      question:"La germinación ocurre cuando...",
      options:["la flor atrae insectos","la semilla empieza a crecer","aparecen soros","se forma el polen"],
      answer:1,
      explanation:"La germinación es el inicio del crecimiento de la semilla."
    }
  ],
  [
    {
      question:"¿Cuál es la gran división del tema?",
      options:["Plantas con y sin semillas","Plantas altas y bajas","Plantas verdes y rojas","Plantas con tallo y sin tallo"],
      answer:0,
      explanation:"La gran división es plantas con semillas y sin semillas."
    },
    {
      question:"Los musgos no tienen...",
      options:["vasos conductores","esporas","rizoides","humedad"],
      answer:0,
      explanation:"Los musgos no tienen vasos conductores."
    },
    {
      question:"¿Qué estructura del musgo lo fija al sustrato?",
      options:["Rizoma","Rizoides","Estigma","Antera"],
      answer:1,
      explanation:"Los rizoides fijan el musgo al suelo."
    },
    {
      question:"¿Dónde aparecen los soros?",
      options:["En el ovario","Bajo las frondes","En la semilla","En el fruto"],
      answer:1,
      explanation:"Los soros están en el envés de las frondes."
    },
    {
      question:"Un pino es una...",
      options:["angiosperma","gimnosperma","briófita","pteridófita"],
      answer:1,
      explanation:"El pino es una gimnosperma."
    },
    {
      question:"Una margarita es una...",
      options:["gimnosperma","angiosperma","briófita","pteridófita"],
      answer:1,
      explanation:"La margarita es una angiosperma."
    },
    {
      question:"¿Qué parte recibe el polen?",
      options:["El estigma","La antera","La testa","El albumen"],
      answer:0,
      explanation:"El estigma recibe el polen."
    },
    {
      question:"La polinización ocurre antes de...",
      options:["la fecundación","los soros","los rizoides","el fruto seco"],
      answer:0,
      explanation:"Primero ocurre la polinización y después la fecundación."
    },
    {
      question:"¿Qué se forma a partir del óvulo fecundado?",
      options:["La semilla","La antera","El pétalo","El soro"],
      answer:0,
      explanation:"El óvulo fecundado se transforma en semilla."
    },
    {
      question:"La germinación necesita...",
      options:["agua y temperatura adecuada","solo viento","solo polen","solo pétalos"],
      answer:0,
      explanation:"La germinación necesita agua y condiciones adecuadas."
    }
  ]
];

const posttestModels = [
  [
    {
      question:"¿Qué diferencia principal hay entre musgos y helechos?",
      options:["Los musgos tienen vasos conductores y los helechos no","Los helechos tienen vasos conductores y los musgos no","Los musgos tienen frutos","Los helechos tienen semillas"],
      answer:1,
      explanation:"Los helechos tienen vasos conductores y los musgos no."
    },
    {
      question:"¿Qué producen los esporangios?",
      options:["Esporas","Pétalos","Frutos","Semillas desnudas"],
      answer:0,
      explanation:"Los esporangios producen esporas."
    },
    {
      question:"¿Dónde están los soros?",
      options:["En el ovario","En el envés de las frondes","En la testa","En el cáliz"],
      answer:1,
      explanation:"Los soros están bajo las hojas del helecho."
    },
    {
      question:"¿Qué significa angiosperma?",
      options:["Semilla desnuda","Semilla dentro de un recipiente","Planta sin raíz","Flor sin pétalos"],
      answer:1,
      explanation:"Angio significa recipiente y sperma semilla."
    },
    {
      question:"¿Qué parte recibe el polen?",
      options:["El estigma","La testa","La antera","El rizoma"],
      answer:0,
      explanation:"El estigma recibe el polen."
    },
    {
      question:"¿Qué conducto forma el polen para llegar al ovario?",
      options:["Tubo polínico","Rizoide","Soro","Cotiledón"],
      answer:0,
      explanation:"El tubo polínico lleva los gametos masculinos hasta el óvulo."
    },
    {
      question:"¿Qué parte alimenta al embrión en la semilla?",
      options:["Albumen","Antera","Estigma","Sépalos"],
      answer:0,
      explanation:"El albumen es la reserva de alimento."
    },
    {
      question:"¿Qué se transforma en fruto?",
      options:["El ovario","La fronde","El soro","El rizoide"],
      answer:0,
      explanation:"El ovario se transforma en fruto."
    },
    {
      question:"¿Qué ayuda a dispersar semillas?",
      options:["Animales, viento y agua","Solo raíces","Solo pétalos","Solo el cáliz"],
      answer:0,
      explanation:"Las semillas pueden dispersarse por animales, viento y agua."
    },
    {
      question:"¿Qué ocurre primero en la germinación?",
      options:["Se forma el fruto","La semilla absorbe agua","Aparece el polen","Se forman soros"],
      answer:1,
      explanation:"La semilla absorbe agua y activa el embrión."
    }
  ],
  [
    {
      question:"Los helechos se diferencian de los musgos porque...",
      options:["tienen frutos","tienen vasos conductores","tienen flores","tienen semillas"],
      answer:1,
      explanation:"Los helechos sí tienen vasos conductores."
    },
    {
      question:"Las esporas se producen en...",
      options:["esporangios","anteras","ovarios","frutos"],
      answer:0,
      explanation:"Los esporangios producen esporas."
    },
    {
      question:"Los soros aparecen en...",
      options:["los helechos","los musgos","las flores","los conos"],
      answer:0,
      explanation:"Los soros son propios de los helechos."
    },
    {
      question:"Angiosperma significa...",
      options:["semilla dentro de un recipiente","semilla desnuda","planta musgo","planta hoja"],
      answer:0,
      explanation:"Angio es recipiente y sperma es semilla."
    },
    {
      question:"¿Qué parte del pistilo recibe el polen?",
      options:["Estigma","Estilo","Ovario","Óvulo"],
      answer:0,
      explanation:"El estigma recibe el polen."
    },
    {
      question:"Para llegar al óvulo, el polen forma...",
      options:["un tubo polínico","un rizoide","un soro","un cáliz"],
      answer:0,
      explanation:"El polen forma un tubo polínico."
    },
    {
      question:"La reserva alimenticia de la semilla se llama...",
      options:["albumen","testa","antera","fronde"],
      answer:0,
      explanation:"El albumen alimenta al embrión."
    },
    {
      question:"Tras la fecundación, el fruto procede del...",
      options:["ovario","estigma","soro","rizoide"],
      answer:0,
      explanation:"El fruto se forma a partir del ovario."
    },
    {
      question:"La dispersión puede producirse por...",
      options:["animales, viento y agua","solo raíces","solo polen","solo sépalos"],
      answer:0,
      explanation:"Las semillas pueden dispersarse de varias formas."
    },
    {
      question:"La germinación comienza cuando la semilla...",
      options:["absorbe agua","produce polen","forma pétalos","crea soros"],
      answer:0,
      explanation:"La germinación comienza cuando la semilla absorbe agua."
    }
  ],
  [
    {
      question:"¿Cuál es una diferencia clave entre musgos y helechos?",
      options:["Los helechos tienen vasos conductores","Los musgos tienen frutos","Los helechos tienen semillas","Los musgos tienen flores"],
      answer:0,
      explanation:"Los helechos sí tienen vasos conductores."
    },
    {
      question:"Los esporangios son estructuras que producen...",
      options:["esporas","frutos","pétalos","óvulos"],
      answer:0,
      explanation:"Los esporangios producen esporas."
    },
    {
      question:"Los soros están situados...",
      options:["bajo las frondes","en el ovario","en la corola","en la testa"],
      answer:0,
      explanation:"Los soros se encuentran en el envés de las frondes."
    },
    {
      question:"Una angiosperma se caracteriza porque la semilla...",
      options:["está dentro de un fruto","está desnuda","sale de soros","se fija con rizoides"],
      answer:0,
      explanation:"La semilla de las angiospermas está dentro de un fruto."
    },
    {
      question:"El polen llega primero a...",
      options:["el estigma","la testa","el albumen","el rizoma"],
      answer:0,
      explanation:"El polen llega al estigma."
    },
    {
      question:"El tubo polínico sirve para...",
      options:["llevar los gametos masculinos al óvulo","formar hojas","crear el fruto","proteger la semilla"],
      answer:0,
      explanation:"El tubo polínico conduce los gametos hasta el óvulo."
    },
    {
      question:"¿Qué parte alimenta a la futura planta dentro de la semilla?",
      options:["Albumen","Sépalo","Antera","Soro"],
      answer:0,
      explanation:"El albumen es la reserva nutritiva."
    },
    {
      question:"¿Qué estructura floral se transforma en fruto?",
      options:["Ovario","Antera","Estigma","Pétalo"],
      answer:0,
      explanation:"El ovario se convierte en fruto."
    },
    {
      question:"La dispersión evita...",
      options:["la competencia con la planta madre","la fotosíntesis","la germinación","el crecimiento del tallo"],
      answer:0,
      explanation:"La dispersión ayuda a colonizar nuevos lugares y reduce la competencia."
    },
    {
      question:"En la germinación suele aparecer primero...",
      options:["la raíz","el fruto","la antera","el pétalo"],
      answer:0,
      explanation:"La raíz emerge primero."
    }
  ]
];

const levels = [
  {
    id:"level1",
    title:"Nivel 1 — Clasificación del Reino Vegetal",
    enemy:"Slime Confusión",
    emoji:"🟢",
    type:"quiz",
    unlocks:"Mossu"
  },
  {
    id:"level2",
    title:"Nivel 2 — Musgos y Helechos",
    enemy:"Bestia del Pantano",
    emoji:"🌫️",
    type:"matching",
    unlocks:"Ferny",
    modelPairs:[
      [
        { id:1, term:"Rizoides", def:"Fijan el musgo al suelo" },
        { id:2, term:"Cauloide", def:"Estructura parecida al tallo en los musgos" },
        { id:3, term:"Filoides", def:"Estructuras parecidas a hojas en los musgos" },
        { id:4, term:"Frondes", def:"Hojas de los helechos" },
        { id:5, term:"Soros", def:"Grupos de esporangios bajo las hojas del helecho" },
        { id:6, term:"Rizoma", def:"Tallo subterráneo del helecho" }
      ],
      [
        { id:1, term:"Musgo", def:"Planta sin vasos conductores" },
        { id:2, term:"Helecho", def:"Planta con vasos conductores y esporas" },
        { id:3, term:"Esporangio", def:"Estructura que produce esporas" },
        { id:4, term:"Soros", def:"Conjunto de esporangios en el helecho" },
        { id:5, term:"Frondes", def:"Nombre de las hojas del helecho" },
        { id:6, term:"Rizoides", def:"Estructuras de fijación del musgo" }
      ],
      [
        { id:1, term:"Cauloide", def:"Parte del musgo parecida a tallo" },
        { id:2, term:"Filoides", def:"Partes del musgo parecidas a hojas" },
        { id:3, term:"Rizoma", def:"Tallo subterráneo del helecho" },
        { id:4, term:"Frondes", def:"Hojas del helecho" },
        { id:5, term:"Esporas", def:"Células reproductivas de musgos y helechos" },
        { id:6, term:"Soros", def:"Agrupaciones de esporangios en el helecho" }
      ]
    ]
  },
  {
    id:"level3",
    title:"Nivel 3 — Gimnospermas y Angiospermas",
    enemy:"Guardián de las Semillas",
    emoji:"🛡️",
    type:"quiz",
    unlocks:"PinoSensei"
  },
  {
    id:"level4",
    title:"Nivel 4 — Identificar partes de la flor",
    enemy:"Avispa del Polen",
    emoji:"🐝",
    type:"diagram",
    unlocks:"Flora",
    models:[
      [
        { label:"A", answer:"Pétalos", explanation:"Los pétalos atraen a los polinizadores." },
        { label:"B", answer:"Antera", explanation:"La antera produce el polen." },
        { label:"C", answer:"Estigma", explanation:"El estigma recibe el polen." },
        { label:"D", answer:"Ovario", explanation:"El ovario contiene los óvulos y luego puede transformarse en fruto." },
        { label:"E", answer:"Sépalos", explanation:"Los sépalos protegen la flor." }
      ],
      [
        { label:"A", answer:"Antera", explanation:"La antera contiene el polen." },
        { label:"B", answer:"Pétalos", explanation:"Los pétalos son estructuras llamativas." },
        { label:"C", answer:"Ovario", explanation:"El ovario contiene los óvulos." },
        { label:"D", answer:"Estigma", explanation:"El estigma recibe el polen." },
        { label:"E", answer:"Sépalos", explanation:"Los sépalos protegen la base de la flor." }
      ],
      [
        { label:"A", answer:"Sépalos", explanation:"Los sépalos protegen la flor cuando está cerrada." },
        { label:"B", answer:"Estigma", explanation:"El estigma es la parte receptora del polen." },
        { label:"C", answer:"Pétalos", explanation:"Los pétalos atraen a los polinizadores." },
        { label:"D", answer:"Antera", explanation:"La antera produce el polen." },
        { label:"E", answer:"Ovario", explanation:"El ovario contiene los óvulos." }
      ]
    ],
    options:["Pétalos","Antera","Estigma","Ovario","Sépalos","Rizoides","Frondes"]
  },
  {
    id:"level5",
    title:"Nivel 5 — Ciclo de reproducción",
    enemy:"Señor del Ciclo Vital",
    emoji:"🌪️",
    type:"quiz",
    unlocks:"Final"
  }
];

function $(id){ return document.getElementById(id); }

function shuffle(arr){
  const copy = [...arr];
  for(let i = copy.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function escapeHTML(str){
  return String(str)
    .replaceAll("&","&amp;")
    .replaceAll("<","&lt;")
    .replaceAll(">","&gt;")
    .replaceAll('"',"&quot;")
    .replaceAll("'","&#039;");
}

function ensureStudent(){
  const name = $("studentName").value.trim();
  if(!name){
    alert("Escribe primero el nombre del estudiante.");
    return false;
  }
  state.studentName = name;
  return true;
}

function hideAllScreens(){
  ["homeScreen","missionMapScreen","quizScreen","matchingScreen","diagramScreen","resultScreen"]
    .forEach(id => $(id).classList.add("hidden"));
}

function goHome(){
  hideAllScreens();
  $("homeScreen").classList.remove("hidden");
}

function initCharacters(){
  if(state.unlockedCharacters.length === 0){
    state.unlockedCharacters = ["profesor"];
  }
}

function renderCharacters(){
  const grid = $("characterGrid");
  grid.innerHTML = "";
  characters.forEach(c => {
    const unlocked = state.unlockedCharacters.includes(c.id);
    const div = document.createElement("div");
    div.className = "character " + (unlocked ? "" : "locked");

    const visual = unlocked
      ? `<img src="${characterImages[c.id]}" alt="${c.name}" class="char-art">`
      : `<div style="font-size:32px;">${c.icon}</div>`;

    div.innerHTML = `
      ${visual}
      <h3 style="margin:8px 0 6px;">${c.name}</h3>
      <p class="small">Desbloqueo: ${c.unlock}</p>
      <p><strong>${unlocked ? "Desbloqueado" : "Bloqueado"}</strong></p>
    `;
    grid.appendChild(div);
  });
}

function renderMissionMap(){
  $("globalPoints").textContent = state.points;
  $("globalCharacters").textContent = state.unlockedCharacters.length;
  $("globalCompleted").textContent = state.completedLevels.length;

  const map = $("missionMap");
  map.innerHTML = "";

  levels.forEach((lvl, index) => {
    const unlocked = index === 0 || state.completedLevels.includes(levels[index - 1].id);
    const done = state.completedLevels.includes(lvl.id);

    const div = document.createElement("div");
    div.className = "level " + (done ? "done" : "") + (unlocked ? "" : " locked");
    div.innerHTML = `
      <div class="enemy">${lvl.emoji}</div>
      <h3>${lvl.title}</h3>
      <p><strong>Enemigo:</strong> ${lvl.enemy}</p>
      <p><strong>Premio:</strong> desbloquear ${lvl.unlocks}</p>
      <p class="small">${done ? "Misión superada" : unlocked ? "Disponible" : "Bloqueada"}</p>
      <button class="btn ${done ? "gray" : ""}" ${!unlocked ? "disabled" : ""} onclick="startLevel('${lvl.id}')">
        ${done ? "Repetir nivel" : unlocked ? "Jugar nivel" : "Bloqueado"}
      </button>
    `;
    map.appendChild(div);
  });
}

function openMissionMap(){
  if(!ensureStudent()) return;
  initCharacters();
  hideAllScreens();
  $("missionMapScreen").classList.remove("hidden");
  renderCharacters();
  renderMissionMap();
}

function unlockCharacterByLevel(levelId){
  const map = {
    level1:"mossu",
    level2:"ferny",
    level3:"pino",
    level4:"flora"
  };
  const charId = map[levelId];
  if(charId && !state.unlockedCharacters.includes(charId)){
    state.unlockedCharacters.push(charId);
    return charId;
  }
  return null;
}

function getModel(models, attempt){
  return models[attempt % models.length];
}

function chooseQuizForLevel(levelId){
  state.levelAttempts[levelId] = (state.levelAttempts[levelId] || 0) + 1;
  const attemptIndex = state.levelAttempts[levelId] - 1;
  const model = getModel(levelQuestionBanks[levelId], attemptIndex);
  return shuffle(model);
}

function choosePretest(){
  state.pretestAttempt++;
  const model = getModel(pretestModels, state.pretestAttempt - 1);
  return shuffle(model);
}

function choosePosttest(){
  state.posttestAttempt++;
  const model = getModel(posttestModels, state.posttestAttempt - 1);
  return shuffle(model);
}

function startPretest(){
  if(!ensureStudent()) return;
  startQuizMode("test inicial", choosePretest(), "Diagnóstico antes de estudiar");
}

function startPosttest(){
  if(!ensureStudent()) return;
  startQuizMode("test final", choosePosttest(), "Comprobación final del dominio del tema");
}

function startQuizMode(modeName, questions, subtitle){
  state.currentMode = modeName;
  state.currentQuestions = questions;
  state.currentIndex = 0;
  state.currentScore = 0;
  state.currentWrong = [];

  hideAllScreens();
  $("quizScreen").classList.remove("hidden");
  $("quizTitle").textContent = modeName === "test inicial" ? "Test inicial" :
                               modeName === "test final" ? "Test final" : modeName;
  $("quizSubtitle").textContent = subtitle;
  renderQuizQuestion();
}

function renderQuizQuestion(){
  const q = state.currentQuestions[state.currentIndex];
  $("qIndex").textContent = state.currentIndex + 1;
  $("qTotal").textContent = state.currentQuestions.length;
  $("score").textContent = state.currentScore;
  $("quizBar").style.width = ((state.currentIndex) / state.currentQuestions.length) * 100 + "%";
  $("questionText").textContent = q.question;
  $("feedbackBox").classList.add("hidden");
  $("feedbackBox").innerHTML = "";
  $("nextBtn").classList.add("hidden");

  const box = $("optionsBox");
  box.innerHTML = "";

  q.options.forEach((opt, idx) => {
    const btn = document.createElement("button");
    btn.className = "option";
    btn.textContent = opt;
    btn.onclick = () => answerQuiz(idx, btn);
    box.appendChild(btn);
  });
}

function answerQuiz(selected, btnNode){
  const q = state.currentQuestions[state.currentIndex];
  const all = document.querySelectorAll("#optionsBox .option");
  all.forEach((node, idx) => {
    node.disabled = true;
    if(idx === q.answer) node.classList.add("correct");
  });

  const ok = selected === q.answer;
  if(ok){
    state.currentScore++;
    btnNode.classList.add("correct");
    playCorrectSound();
  } else {
    btnNode.classList.add("incorrect");
    playWrongSound();
    state.currentWrong.push({
      question:q.question,
      selected:q.options[selected],
      correct:q.options[q.answer],
      explanation:q.explanation
    });
  }

  $("score").textContent = state.currentScore;
  $("feedbackBox").classList.remove("hidden");
  $("feedbackBox").innerHTML = ok
    ? `<span class="good">Correcto.</span> ${q.explanation}`
    : `<span class="bad">Incorrecto.</span> Respuesta correcta: <strong>${q.options[q.answer]}</strong>. ${q.explanation}`;

  $("nextBtn").classList.remove("hidden");
}

function nextQuestion(){
  state.currentIndex++;
  if(state.currentIndex >= state.currentQuestions.length){
    finishQuizMode();
  } else {
    renderQuizQuestion();
  }
}

function finishQuizModeBase(){
  const total = state.currentQuestions.length;
  const grade = ((state.currentScore / total) * 10).toFixed(1);
  const title = state.currentMode === "test inicial" ? "Resultado del test inicial"
               : state.currentMode === "test final" ? "Resultado del test final"
               : "Resultado";

  hideAllScreens();
  $("resultScreen").classList.remove("hidden");
  $("resultTitle").textContent = title;
  $("finalScore").textContent = `${state.currentScore}/${total}`;
  $("finalGradeText").innerHTML = `Nota automática: <strong>${grade}/10</strong>`;

  let html = `
    <p><strong>Alumno:</strong> ${escapeHTML(state.studentName)}</p>
    <p><strong>Actividad:</strong> ${escapeHTML(title)}</p>
    <p><strong>Aciertos:</strong> ${state.currentScore} de ${total}</p>
    <p><strong>Nota:</strong> ${grade}/10</p>
    <hr>
  `;

  if(state.currentWrong.length === 0){
    html += `<p class="good">No hubo errores. Dominio excelente del contenido.</p>`;
  } else {
    html += `<h3>Errores, respuesta correcta y explicación</h3>`;
    state.currentWrong.forEach((e, i) => {
      html += `
        <div style="margin-bottom:14px;">
          <span class="tag">Error ${i + 1}</span>
          <p><strong>Pregunta:</strong> ${escapeHTML(e.question)}</p>
          <p><strong>Tu respuesta:</strong> ${escapeHTML(e.selected)}</p>
          <p><strong>Respuesta correcta:</strong> ${escapeHTML(e.correct)}</p>
          <p><strong>Explicación:</strong> ${escapeHTML(e.explanation)}</p>
        </div>
      `;
    });
  }

  $("reportPreview").innerHTML = html;
  state.lastReportHTML = buildReportHTML(title, html);
}

function finishQuizMode(){
  const isLevel = levels.some(l => l.title === state.currentMode);
  if(isLevel){
    const total = state.currentQuestions.length;
    const passed = state.currentScore >= Math.ceil(total * 0.6);

    if(passed){
      let newChar = null;
      if(!state.completedLevels.includes(state.currentLevelId)){
        state.completedLevels.push(state.currentLevelId);
        state.points += 100;
        newChar = unlockCharacterByLevel(state.currentLevelId);
      }
      playVictorySound();

      if(state.currentLevelId === "level1"){
        showVictoryModal(
          "¡Nivel superado!",
          `Has vencido al enemigo y conseguido ${state.currentScore}/${total} aciertos.`,
          "🌿 Has desbloqueado a Mossu",
          openMissionMap,
          "mossu"
        );
      } else if(state.currentLevelId === "level3"){
        showVictoryModal(
          "¡Nivel superado!",
          `Has vencido al enemigo y conseguido ${state.currentScore}/${total} aciertos.`,
          "🌲 Has desbloqueado a PinoSensei",
          openMissionMap,
          "pino"
        );
      } else if(state.currentLevelId === "level5"){
        showVictoryModal(
          "¡Nivel superado!",
          `Has vencido al enemigo y conseguido ${state.currentScore}/${total} aciertos.`,
          "🏆 Dominas el ciclo de reproducción",
          openMissionMap,
          "profesor"
        );
      } else {
        showVictoryModal(
          "¡Nivel superado!",
          `Has vencido al enemigo y conseguido ${state.currentScore}/${total} aciertos.`,
          "Has ganado 100 puntos.",
          openMissionMap,
          newChar
        );
      }
    } else {
      playWrongSound();
      showVictoryModal(
        "Nivel no superado",
        `Necesitas al menos ${Math.ceil(total * 0.6)} aciertos. Has conseguido ${state.currentScore}/${total}.`,
        "Vuelve a intentarlo. La siguiente vez cambiarán el orden y el modelo de preguntas.",
        openMissionMap,
        null
      );
    }
  } else {
    finishQuizModeBase();
  }
}

function buildReportHTML(title, detailHTML){
  return `
  <!DOCTYPE html>
  <html lang="es">
  <head>
    <meta charset="UTF-8">
    <title>${escapeHTML(title)}</title>
    <style>
      body{font-family:Arial,Helvetica,sans-serif;padding:30px;color:#1f2937}
      h1{color:#2e7d32}
      .tag{display:inline-block;background:#eef2ff;color:#3730a3;padding:4px 8px;border-radius:8px;font-size:12px}
    </style>
  </head>
  <body>
    <h1>${escapeHTML(title)}</h1>
    ${detailHTML}
  </body>
  </html>`;
}

function downloadReport(){
  if(!state.lastReportHTML){
    alert("Todavía no hay informe disponible.");
    return;
  }
  const blob = new Blob([state.lastReportHTML], { type:"text/html;charset=utf-8" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = `informe_reino_vegetal_${state.studentName.replace(/\s+/g,"_").toLowerCase()}.html`;
  a.click();
  URL.revokeObjectURL(a.href);
}

function startLevel(levelId){
  state.currentLevelId = levelId;
  const lvl = levels.find(l => l.id === levelId);
  if(!lvl) return;

  if(lvl.type === "quiz"){
    const questions = chooseQuizForLevel(levelId);
    startQuizMode(lvl.title, questions, `Derrota a ${lvl.enemy} para desbloquear ${lvl.unlocks}`);
  } else if(lvl.type === "matching"){
    startMatchingLevel(lvl);
  } else if(lvl.type === "diagram"){
    startDiagramLevel(lvl);
  }
}

function finishCurrentLevel(){
  const levelId = state.currentLevelId;
  let newChar = null;
  if(!state.completedLevels.includes(levelId)){
    state.completedLevels.push(levelId);
    state.points += 100;
    newChar = unlockCharacterByLevel(levelId);
  }
  playVictorySound();
  showVictoryModal(
    "¡Nivel superado!",
    "Has completado correctamente la misión.",
    levelId === "level2" ? "🍃 Has desbloqueado a Ferny" : "Has ganado 100 puntos.",
    openMissionMap,
    levelId === "level2" ? "ferny" : newChar
  );
}

let matchingData = [];
let selectedTerm = null;
let selectedDef = null;

function startMatchingLevel(level){
  state.levelAttempts[level.id] = (state.levelAttempts[level.id] || 0) + 1;
  const attemptIndex = state.levelAttempts[level.id] - 1;
  const selectedModel = getModel(level.modelPairs, attemptIndex);

  hideAllScreens();
  $("matchingScreen").classList.remove("hidden");
  $("matchingTitle").textContent = level.title;
  $("matchingSubtitle").textContent = `Empareja conceptos para vencer a ${level.enemy} y desbloquear ${level.unlocks}.`;

  matchingData = shuffle(selectedModel).map(p => ({...p, done:false}));
  const shuffledDefs = shuffle(selectedModel.map(p => ({ id:p.id, def:p.def })));

  state.matchingPairsDone = 0;
  $("matchCount").textContent = 0;
  $("matchTotal").textContent = selectedModel.length;
  $("matchBar").style.width = "0%";
  $("matchingFeedback").classList.add("hidden");
  $("matchingNextBtn").classList.add("hidden");

  const termsCol = $("termsCol");
  const defsCol = $("defsCol");
  termsCol.innerHTML = "<h3>Términos</h3>";
  defsCol.innerHTML = "<h3>Definiciones</h3>";

  selectedTerm = null;
  selectedDef = null;

  matchingData.forEach(item => {
    const btn = document.createElement("button");
    btn.className = "term-btn";
    btn.textContent = item.term;
    btn.dataset.id = item.id;
    btn.onclick = () => selectTerm(btn);
    termsCol.appendChild(btn);
  });

  shuffledDefs.forEach(item => {
    const btn = document.createElement("button");
    btn.className = "def-btn";
    btn.textContent = item.def;
    btn.dataset.id = item.id;
    btn.onclick = () => selectDef(btn);
    defsCol.appendChild(btn);
  });
}

function selectTerm(btn){
  if(btn.classList.contains("ok")) return;
  document.querySelectorAll(".term-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  selectedTerm = btn;
  tryMatch();
}

function selectDef(btn){
  if(btn.classList.contains("ok")) return;
  document.querySelectorAll(".def-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  selectedDef = btn;
  tryMatch();
}

function tryMatch(){
  if(!selectedTerm || !selectedDef) return;

  const ok = selectedTerm.dataset.id === selectedDef.dataset.id;
  const feedback = $("matchingFeedback");
  feedback.classList.remove("hidden");

  if(ok){
    selectedTerm.classList.remove("active");
    selectedDef.classList.remove("active");
    selectedTerm.classList.add("ok");
    selectedDef.classList.add("ok");
    selectedTerm.disabled = true;
    selectedDef.disabled = true;
    feedback.innerHTML = `<span class="good">Pareja correcta.</span>`;
    playCorrectSound();
    state.matchingPairsDone++;
    $("matchCount").textContent = state.matchingPairsDone;
    $("matchBar").style.width = (state.matchingPairsDone / matchingData.length) * 100 + "%";
  } else {
    playWrongSound();
    feedback.innerHTML = `<span class="bad">No coinciden.</span> Prueba otra vez.`;
    selectedTerm.classList.remove("active");
    selectedDef.classList.remove("active");
  }

  selectedTerm = null;
  selectedDef = null;

  if(state.matchingPairsDone === matchingData.length){
    feedback.innerHTML = `<span class="good">¡Misión completada!</span> Has emparejado todos los conceptos.`;
    $("matchingNextBtn").classList.remove("hidden");
  }
}

function startDiagramLevel(level){
  state.levelAttempts[level.id] = (state.levelAttempts[level.id] || 0) + 1;
  const attemptIndex = state.levelAttempts[level.id] - 1;
  state.diagramQuestions = getModel(level.models, attemptIndex);

  hideAllScreens();
  $("diagramScreen").classList.remove("hidden");
  $("diagramTitle").textContent = level.title;
  $("diagramSubtitle").textContent = `Identifica las partes señaladas para vencer a ${level.enemy} y desbloquear ${level.unlocks}.`;
  state.diagramIndex = 0;
  state.diagramScore = 0;
  state.diagramWrong = [];
  renderDiagramQuestion();
}

function renderFlowerDiagram(){
  const canvas = $("diagramCanvas");
  const ctx = canvas.getContext("2d");

  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0,0,canvas.width,canvas.height);

  ctx.strokeStyle = "#2e7d32";
  ctx.lineWidth = 10;
  ctx.beginPath();
  ctx.moveTo(380, 380);
  ctx.lineTo(380, 250);
  ctx.stroke();

  ctx.fillStyle = "#66bb6a";
  ctx.beginPath();
  ctx.ellipse(330, 320, 40, 20, -0.6, 0, Math.PI*2);
  ctx.fill();
  ctx.beginPath();
  ctx.ellipse(430, 320, 40, 20, 0.6, 0, Math.PI*2);
  ctx.fill();

  ctx.fillStyle = "#f8bbd0";
  drawPetal(ctx,380,160,0);
  drawPetal(ctx,320,190,-0.7);
  drawPetal(ctx,440,190,0.7);
  drawPetal(ctx,340,130,-1.2);
  drawPetal(ctx,420,130,1.2);

  ctx.fillStyle = "#81c784";
  ctx.beginPath();
  ctx.ellipse(350,220,30,14,-0.8,0,Math.PI*2);
  ctx.fill();
  ctx.beginPath();
  ctx.ellipse(410,220,30,14,0.8,0,Math.PI*2);
  ctx.fill();

  ctx.fillStyle = "#c8e6c9";
  ctx.beginPath();
  ctx.ellipse(380,225,28,22,0,0,Math.PI*2);
  ctx.fill();
  ctx.strokeStyle = "#388e3c";
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.strokeStyle = "#43a047";
  ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.moveTo(380, 225);
  ctx.lineTo(380, 155);
  ctx.stroke();

  ctx.fillStyle = "#66bb6a";
  ctx.beginPath();
  ctx.arc(380,145,12,0,Math.PI*2);
  ctx.fill();

  ctx.strokeStyle = "#6d4c41";
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(350,220); ctx.lineTo(340,160);
  ctx.moveTo(410,220); ctx.lineTo(420,160);
  ctx.moveTo(365,220); ctx.lineTo(360,155);
  ctx.moveTo(395,220); ctx.lineTo(400,155);
  ctx.stroke();

  ctx.fillStyle = "#fdd835";
  [[340,155],[420,155],[360,150],[400,150]].forEach(([x,y]) => {
    ctx.beginPath();
    ctx.ellipse(x,y,10,7,0,0,Math.PI*2);
    ctx.fill();
  });

  const q = state.diagramQuestions[state.diagramIndex];
  const labelPositions = getDiagramLetterPositionsForAnswer(q.answer, q.label);
  drawArrowLabel(ctx, labelPositions.x1, labelPositions.y1, labelPositions.x2, labelPositions.y2, q.label);

  ctx.fillStyle = "#1f2937";
  ctx.font = "bold 22px Arial";
  ctx.fillText("Flor señalada con letra", 24, 34);
}

function getDiagramLetterPositionsForAnswer(answer, label){
  const map = {
    "Pétalos": {x1:560,y1:85,x2:445,y2:135},
    "Antera": {x1:585,y1:150,x2:420,y2:155},
    "Estigma": {x1:570,y1:45,x2:389,y2:145},
    "Ovario": {x1:585,y1:245,x2:410,y2:225},
    "Sépalos": {x1:575,y1:315,x2:412,y2:220}
  };
  return {...map[answer], label};
}

function drawPetal(ctx,x,y,rot){
  ctx.save();
  ctx.translate(x,y);
  ctx.rotate(rot);
  ctx.beginPath();
  ctx.ellipse(0,0,36,62,0,0,Math.PI*2);
  ctx.fill();
  ctx.restore();
}

function drawArrowLabel(ctx, x1, y1, x2, y2, label){
  ctx.strokeStyle = "#111827";
  ctx.fillStyle = "#111827";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();

  const angle = Math.atan2(y2 - y1, x2 - x1);
  const head = 10;
  ctx.beginPath();
  ctx.moveTo(x2, y2);
  ctx.lineTo(x2 - head * Math.cos(angle - Math.PI/6), y2 - head * Math.sin(angle - Math.PI/6));
  ctx.lineTo(x2 - head * Math.cos(angle + Math.PI/6), y2 - head * Math.sin(angle + Math.PI/6));
  ctx.closePath();
  ctx.fill();

  roundRectCompat(ctx, x1 - 16, y1 - 18, 32, 26, 6);
  ctx.fillStyle = "#ffffff";
  ctx.fill();
  ctx.strokeStyle = "#111827";
  ctx.stroke();

  ctx.fillStyle = "#111827";
  ctx.font = "bold 18px Arial";
  ctx.fillText(label, x1 - 6, y1);
}

function roundRectCompat(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

function renderDiagramQuestion(){
  const lvl = levels.find(l => l.id === state.currentLevelId);
  const q = state.diagramQuestions[state.diagramIndex];
  renderFlowerDiagram();
  $("diagramQuestion").textContent = `¿Qué parte de la flor está señalada con la letra ${q.label}?`;
  $("diagramFeedback").classList.add("hidden");
  $("diagramFeedback").innerHTML = "";
  $("diagramNextBtn").classList.add("hidden");

  const box = $("diagramOptions");
  box.innerHTML = "";

  shuffle(lvl.options).forEach(opt => {
    const btn = document.createElement("button");
    btn.className = "option";
    btn.textContent = opt;
    btn.onclick = () => answerDiagram(opt, btn, q);
    box.appendChild(btn);
  });
}

function answerDiagram(selected, btnNode, q){
  const box = document.querySelectorAll("#diagramOptions .option");
  box.forEach(b => b.disabled = true);
  const ok = selected === q.answer;

  box.forEach(b => {
    if(b.textContent === q.answer) b.classList.add("correct");
  });

  if(ok){
    btnNode.classList.add("correct");
    playCorrectSound();
    state.diagramScore++;
  } else {
    btnNode.classList.add("incorrect");
    playWrongSound();
    state.diagramWrong.push({
      question:`Parte señalada con la letra ${q.label}`,
      selected:selected,
      correct:q.answer,
      explanation:q.explanation
    });
  }

  $("diagramFeedback").classList.remove("hidden");
  $("diagramFeedback").innerHTML = ok
    ? `<span class="good">Correcto.</span> ${q.explanation}`
    : `<span class="bad">Incorrecto.</span> Respuesta correcta: <strong>${q.answer}</strong>. ${q.explanation}`;

  $("diagramNextBtn").classList.remove("hidden");
}

function nextDiagramQuestion(){
  state.diagramIndex++;
  if(state.diagramIndex >= state.diagramQuestions.length){
    let newChar = null;
    if(!state.completedLevels.includes(state.currentLevelId)){
      state.completedLevels.push(state.currentLevelId);
      state.points += 100;
      newChar = unlockCharacterByLevel(state.currentLevelId);
    }
    playVictorySound();
    showVictoryModal(
      "¡Nivel superado!",
      "Has identificado correctamente las partes de la flor.",
      "🌸 Has desbloqueado a Flora",
      openMissionMap,
      "flora"
    );
  } else {
    renderDiagramQuestion();
  }
}

function showVictoryModal(title, text, reward, callback, characterId = null){
  const overlay = document.createElement("div");
  overlay.className = "victory-overlay";

  const imageHTML = characterId && characterImages[characterId]
    ? `<img src="${characterImages[characterId]}" alt="${characterId}" class="victory-character">`
    : `<div style="font-size:56px;">🏆</div>`;

  const quoteHTML = characterId && characterQuotes[characterId]
    ? `<div class="character-quote">"${characterQuotes[characterId]}"</div>`
    : "";

  const powerHTML = characterId && characterPowers[characterId]
    ? `<div class="character-power">${characterPowers[characterId]}</div>`
    : "";

  const introHTML = characterId && characterIntro[characterId]
    ? `<p style="margin-top:12px;">${characterIntro[characterId]}</p>`
    : "";

  overlay.innerHTML = `
    <div class="victory-card">
      ${imageHTML}
      <h2>${escapeHTML(title)}</h2>
      <p>${escapeHTML(text)}</p>
      <div class="sparkles">✨ ✨ ✨</div>
      <p><strong>${escapeHTML(reward)}</strong></p>
      ${introHTML}
      ${quoteHTML}
      ${powerHTML}
      <div class="row" style="justify-content:center; margin-top:16px;">
        <button class="btn" id="victoryContinueBtn">Continuar</button>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);
  $("victoryContinueBtn").onclick = () => {
    overlay.remove();
    if(typeof callback === "function") callback();
  };
}

function adminUnlockAll(){
  const key = $("adminKey").value.trim();
  if(key !== ADMIN_KEY){
    alert("Clave incorrecta.");
    return;
  }
  state.completedLevels = ["level1","level2","level3","level4","level5"];
  state.unlockedCharacters = ["profesor","mossu","ferny","pino","flora"];
  state.points = 500;
  alert("Admin Mode activado: todo desbloqueado para pruebas.");
  openMissionMap();
}

function adminResetGame(){
  const key = $("adminKey").value.trim();
  if(key !== ADMIN_KEY){
    alert("Clave incorrecta.");
    return;
  }
  state.completedLevels = [];
  state.unlockedCharacters = ["profesor"];
  state.points = 0;
  state.pretestAttempt = 0;
  state.posttestAttempt = 0;
  state.levelAttempts = { level1:0, level2:0, level3:0, level4:0, level5:0 };
  $("adminKey").value = "";
  alert("Juego reseteado correctamente.");
  goHome();
}

function playTone(freq, duration, type="sine", gainValue=0.03){
  const AudioCtx = window.AudioContext || window.webkitAudioContext;
  if(!AudioCtx) return;
  const ctx = new AudioCtx();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = type;
  osc.frequency.value = freq;
  gain.gain.value = gainValue;

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.start();
  gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);
  osc.stop(ctx.currentTime + duration);
}

function playCorrectSound(){
  playTone(660, 0.15, "sine", 0.03);
  setTimeout(() => playTone(880, 0.15, "sine", 0.025), 90);
}

function playWrongSound(){
  playTone(240, 0.18, "sawtooth", 0.03);
  setTimeout(() => playTone(180, 0.20, "sawtooth", 0.025), 80);
}

function playVictorySound(){
  playTone(523, 0.12, "triangle", 0.03);
  setTimeout(() => playTone(659, 0.12, "triangle", 0.03), 100);
  setTimeout(() => playTone(784, 0.18, "triangle", 0.03), 200);
}

initCharacters();
goHome();