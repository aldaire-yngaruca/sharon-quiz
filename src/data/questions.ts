export interface Question {
  id: number;
  question: string;
  options: string[];
  answer: string;
}

export const questions: Question[] = [
  {
    id: 1,
    question: "¿A qué país crees que me gustaría viajar contigo?",
    options: ["Japón", "EEUU", "Francia", "Tailandia"],
    answer: "Japón",
  },
  {
    id: 2,
    question: "¿Modelo de mi primer auto?",
    options: ["Impreza", "Celica", "Golf", "Civic"],
    answer: "Impreza",
  },
  {
    id: 3,
    question: "¿Mi color favorito?",
    options: ["Rojo", "Azul", "Verde", "Crema"],
    answer: "Verde",
  },
  {
    id: 4,
    question: "¿Mi banda de rock favorita?",
    options: [
      "Red hot chili peppers",
      "Adamo",
      "Limp Bizkit",
      "Rage against the machine",
    ],
    answer: "Red hot chili peppers",
  },
  {
    id: 5,
    question: "¿Modelo de mi actual carro?",
    options: ["Q1", "Q2", "Q3", "Q5"],
    answer: "Q3",
  },
  {
    id: 6,
    question: "¿Consideras que me importan tus exs?",
    options: ["Si", "No"],
    answer: "No",
  },
  {
    id: 7,
    question: "¿Cuál crees que es mi comida favorita para una cita contigo?",
    options: ["Marina", "Criolla", "Pasta", "Carnes"],
    answer: "Carnes",
  },
  {
    id: 8,
    question: "¿Qué crees que es lo que mas odio de ti?",
    options: [
      "Que duermas",
      "Que demores en responder",
      "Que salgas",
      "Que no comas",
    ],
    answer: "Que demores en responder",
  },
  {
    id: 9,
    question: "¿A qué departamento del país me gustaria viajar contigo?",
    options: ["Piura", "Puno", "Cusco", "Arequipa"],
    answer: "Cusco",
  },
  {
    id: 10,
    question: "¿Qué crees que hago cuando te extraño?",
    options: ["Te escribo", "Veo fotos", "Te llamo", "Me distraigo"],
    answer: "Veo fotos",
  },
  {
    id: 11,
    question:
      "¿Cuál es todas nuestras salidas crees que es la que mas me ha gustado?",
    options: ["Kong", "Casa tambo", "Show stand up", "Carnaval"],
    answer: "Carnaval",
  },
  {
    id: 12,
    question: "¿Crees que siento que ya te conozco bien?",
    options: ["No", "Si"],
    answer: "No",
  },
  {
    id: 13,
    question: "¿Qué crees que es lo que mas me gusta hacer contigo?",
    options: ["Salir a comer", "Hablar", "Besarnos", "Todo"],
    answer: "Todo",
  },
  {
    id: 14,
    question:
      "¿Qué lugar piensas que considero que fue nuestra primera salida con otra intencion?",
    options: ["Chilis", "Kong", "Luna Bar", "The point"],
    answer: "Kong",
  },
  {
    id: 15,
    question:
      "¿Qué crees que es lo primero que quiero que hagas cuando entras al carro?",
    options: ["Besarme", "Nada", "Decir Hola", "Abrazarme"],
    answer: "Besarme",
  },
  {
    id: 16,
    question: "¿Qué plan crees que prefiero hacer contigo?",
    options: ["Salir", "Comer", "Ver algo en casa", "Estar tranquilos juntos"],
    answer: "Estar tranquilos juntos",
  },
  {
    id: 17,
    question: "¿Qué tipo de película veríamos juntos?",
    options: ["Terror", "Romatica", "Romántica", "No la vemos"],
    answer: "No la vemos",
  },
  {
    id: 18,
    question: "¿Crees que me considero una persona celosa?",
    options: ["No", "Si"],
    answer: "Si",
  },
];
