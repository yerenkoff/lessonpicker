const sections = {
  1: { units: 10, lessons: 6 },
  2: { units: 22, lessons: 5 },
  3: { units: 21, lessons: 5 },
  4: { units: 46, lessons: 5 }
};

function pickRandom(max) {
  return Math.floor(Math.random() * max) + 1;
}

function pickRandomLesson() {
  const sectionNumbers = Object.keys(sections).map(Number);
  const section = sectionNumbers[pickRandom(sectionNumbers.length) - 1];

  const unit = pickRandom(sections[section].units);

  const lesson = pickRandom(sections[section].lessons);

  return { section, unit, lesson };
}

const pick = pickRandomLesson();
result.innerHTML = `Review: Section ${pick.section} → Unit ${pick.unit} → Lesson ${pick.lesson}`;
