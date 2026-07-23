export type QuizQuestion = {
  question: string
  options: string[]
  answer: number
}

export const theoryTopics = [
  {
    title: 'The Musical Alphabet',
    text: 'Music uses only seven letters: A B C D E F G. After G, the pattern repeats back to A.',
  },
  {
    title: 'Treble Clef',
    text: 'The treble clef marks higher notes and is commonly used for the piano right hand, violin and flute.',
  },
  {
    title: 'Bass Clef',
    text: 'The bass clef marks lower notes and is used for the piano left hand, bass guitar and other low instruments.',
  },
  {
    title: 'Rhythm',
    text: 'Rhythm is the pattern of long and short sounds. Keeping a steady beat is the heartbeat of music.',
  },
  {
    title: 'Time Signatures',
    text: 'A time signature tells you how many beats are in each measure. 4/4 means four beats per measure.',
  },
  {
    title: 'Basic Note Values',
    text: 'A whole note lasts four beats, a half note two beats, and a quarter note one beat.',
  },
  {
    title: 'Practice Tips',
    text: 'Practice a little every day, start slowly, and count out loud. Consistency beats long, rare sessions.',
  },
]

export const quizQuestions: QuizQuestion[] = [
  {
    question: 'How many musical letters exist?',
    options: ['5', '7', '8', '12'],
    answer: 1,
  },
  {
    question: 'Which note comes after C?',
    options: ['B', 'D', 'E', 'A'],
    answer: 1,
  },
  {
    question: 'Which clef is commonly used for the piano right hand?',
    options: ['Bass clef', 'Alto clef', 'Treble clef', 'Tenor clef'],
    answer: 2,
  },
  {
    question: 'Which clef is used for lower notes and the piano left hand?',
    options: ['Treble clef', 'Bass clef', 'Soprano clef', 'C clef'],
    answer: 1,
  },
  {
    question: 'How many beats are in a measure of 4/4 time?',
    options: ['2', '3', '4', '6'],
    answer: 2,
  },
  {
    question: 'How many beats does a quarter note last?',
    options: ['1', '2', '3', '4'],
    answer: 0,
  },
]
