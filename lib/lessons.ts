export type Instrument = {
  slug: string
  name: string
  icon: string
  tagline: string
  lessonTitle: string
  intro: string
  steps: string[]
  closing: string
}

export const instruments: Instrument[] = [
  {
    slug: 'piano',
    name: 'Piano',
    icon: 'Piano',
    tagline: 'The perfect starting point for every musician.',
    lessonTitle: 'Lesson 1 — Your First Notes',
    intro:
      'Welcome to the piano! In this short lesson you will learn how to sit, find your first note, and play a simple pattern.',
    steps: [
      'Sit upright with relaxed shoulders.',
      'Place both hands gently on the keyboard.',
      'Locate Middle C (the white key just left of the two black keys near the center).',
      'Play the notes: C D E F G.',
      'Repeat the pattern five times, slowly and evenly.',
      'Practice for 10 minutes.',
    ],
    closing: 'Congratulations! You completed your first piano lesson.',
  },
  {
    slug: 'keyboard',
    name: 'Keyboard',
    icon: 'Music4',
    tagline: 'Explore sounds and rhythms on a portable keyboard.',
    lessonTitle: 'Lesson 1 — Getting Comfortable',
    intro:
      'The keyboard is a versatile instrument. Let us switch it on and play your very first notes.',
    steps: [
      'Sit or stand with good posture and relaxed wrists.',
      'Turn on the keyboard and select the piano voice.',
      'Find Middle C, the white key left of the two black keys.',
      'Play: C D E F G, one finger at a time.',
      'Repeat five times, keeping a steady beat.',
      'Practice for 10 minutes.',
    ],
    closing: 'Well done! You have finished your first keyboard lesson.',
  },
  {
    slug: 'guitar',
    name: 'Guitar',
    icon: 'Guitar',
    tagline: 'Strum your way into the world of music.',
    lessonTitle: 'Lesson 1 — Holding & First Strum',
    intro:
      'The guitar is a wonderful first instrument. Let us learn to hold it and play your first open strings.',
    steps: [
      'Sit upright and rest the guitar on your leg.',
      'Hold the neck gently with your left hand, thumb behind it.',
      'Rest your right forearm over the body of the guitar.',
      'Strum all six open strings slowly from top to bottom.',
      'Now pluck each string one at a time: E A D G B E.',
      'Practice for 10 minutes.',
    ],
    closing: 'Congratulations! You completed your first guitar lesson.',
  },
  {
    slug: 'bass-guitar',
    name: 'Bass Guitar',
    icon: 'Guitar',
    tagline: 'Feel the groove and hold down the rhythm.',
    lessonTitle: 'Lesson 1 — The Foundation',
    intro:
      'The bass guitar drives the rhythm of a song. Let us learn to hold it and play your first notes.',
    steps: [
      'Sit upright and rest the bass on your leg or use a strap.',
      'Place your left-hand fingers lightly on the fretboard.',
      'Rest your right thumb on the pickup for support.',
      'Pluck each open string one at a time: E A D G.',
      'Play a slow, steady rhythm on the E string, one note per beat.',
      'Practice for 10 minutes.',
    ],
    closing: 'Great work! You finished your first bass guitar lesson.',
  },
  {
    slug: 'drums',
    name: 'Drums',
    icon: 'Drum',
    tagline: 'Keep time and bring energy to any band.',
    lessonTitle: 'Lesson 1 — Your First Beat',
    intro:
      'Drums are all about rhythm. Let us set up correctly and play a simple, steady beat.',
    steps: [
      'Sit on the stool with your back straight and feet on the pedals.',
      'Hold the sticks with a relaxed grip, tips pointing forward.',
      'Count out loud: 1 - 2 - 3 - 4, slowly and evenly.',
      'Hit the snare on counts 2 and 4.',
      'Add the bass drum on counts 1 and 3.',
      'Practice for 10 minutes.',
    ],
    closing: 'Congratulations! You played your first drum beat.',
  },
  {
    slug: 'violin',
    name: 'Violin',
    icon: 'Music2',
    tagline: 'A graceful instrument with a beautiful voice.',
    lessonTitle: 'Lesson 1 — Posture & Open Strings',
    intro:
      'The violin rewards patience and good posture. Let us learn to hold it and sound your first open strings.',
    steps: [
      'Stand tall and rest the violin between your chin and shoulder.',
      'Hold the bow with relaxed, curved fingers.',
      'Keep your left hand lightly cupped under the neck.',
      'Draw the bow slowly across each open string: G D A E.',
      'Aim for a smooth, even sound with no scratching.',
      'Practice for 10 minutes.',
    ],
    closing: 'Wonderful! You completed your first violin lesson.',
  },
  {
    slug: 'saxophone',
    name: 'Saxophone',
    icon: 'Music',
    tagline: 'A smooth, expressive voice for any style.',
    lessonTitle: 'Lesson 1 — First Breath',
    intro:
      'The saxophone is expressive and fun. Let us assemble our embouchure and produce your first note.',
    steps: [
      'Stand or sit upright with the neck strap supporting the sax.',
      'Rest the mouthpiece on your lower lip, top teeth on top.',
      'Form a firm but relaxed seal with your lips.',
      'Blow a steady stream of air to produce a clear note.',
      'Hold the note for four counts, then rest and repeat.',
      'Practice for 10 minutes.',
    ],
    closing: 'Excellent! You played your first note on the saxophone.',
  },
  {
    slug: 'trumpet',
    name: 'Trumpet',
    icon: 'Music',
    tagline: 'Bright, bold and full of energy.',
    lessonTitle: 'Lesson 1 — The Buzz',
    intro:
      'The trumpet sound starts with your lips. Let us learn to buzz and play your first note.',
    steps: [
      'Stand tall and hold the trumpet with your left hand.',
      'Place your right fingers gently on the valves.',
      'Press your lips together and buzz like a bee.',
      'Now buzz into the mouthpiece to make a steady tone.',
      'Hold the note for four counts, then rest and repeat.',
      'Practice for 10 minutes.',
    ],
    closing: 'Great job! You produced your first trumpet note.',
  },
  {
    slug: 'recorder',
    name: 'Recorder',
    icon: 'Music4',
    tagline: 'A gentle, friendly first wind instrument.',
    lessonTitle: 'Lesson 1 — Your First Note (B)',
    intro:
      'The recorder is a perfect first wind instrument. Let us cover a hole and play the note B.',
    steps: [
      'Sit upright and hold the recorder with both hands.',
      'Cover the back hole with your left thumb.',
      'Cover the top front hole with your left index finger.',
      'Blow gently and say "doo" to start the note cleanly.',
      'Play the note B four times, softly and evenly.',
      'Practice for 10 minutes.',
    ],
    closing: 'Well done! You played your first note on the recorder.',
  },
  {
    slug: 'flute',
    name: 'Flute',
    icon: 'Music2',
    tagline: 'A bright, airy voice full of elegance.',
    lessonTitle: 'Lesson 1 — First Sound',
    intro:
      'The flute begins with a good airstream. Let us shape your lips and make your first sound.',
    steps: [
      'Stand tall with relaxed shoulders.',
      'Rest the lip plate against your lower lip.',
      'Shape your lips as if saying "poo".',
      'Blow a focused stream of air across the hole.',
      'Aim for a clear, steady tone and hold for four counts.',
      'Practice for 10 minutes.',
    ],
    closing: 'Beautiful! You created your first flute sound.',
  },
  {
    slug: 'ukulele',
    name: 'Ukulele',
    icon: 'Guitar',
    tagline: 'Small, cheerful and easy to love.',
    lessonTitle: 'Lesson 1 — First Strum',
    intro:
      'The ukulele is friendly and fun. Let us hold it and play your first strum.',
    steps: [
      'Hold the ukulele against your chest with your strumming arm.',
      'Rest your fretting hand gently on the neck.',
      'Strum all four open strings with your thumb: G C E A.',
      'Keep a slow, steady down-strum rhythm.',
      'Repeat for one minute without stopping.',
      'Practice for 10 minutes.',
    ],
    closing: 'Congratulations! You completed your first ukulele lesson.',
  },
  {
    slug: 'singing',
    name: 'Singing',
    icon: 'Mic',
    tagline: 'Your voice is your first instrument.',
    lessonTitle: 'Lesson 1 — Breath & Tone',
    intro:
      'Great singing starts with breathing. Let us warm up and sing your first simple scale.',
    steps: [
      'Stand tall with relaxed shoulders and feet apart.',
      'Breathe in slowly through your nose for four counts.',
      'Hum gently to feel a light buzz on your lips.',
      'Sing five notes going up: do re mi fa sol.',
      'Repeat five times, staying relaxed and in tune.',
      'Practice for 10 minutes.',
    ],
    closing: 'Wonderful! You completed your first singing lesson.',
  },
]

export function getInstrument(slug: string) {
  return instruments.find((i) => i.slug === slug)
}
