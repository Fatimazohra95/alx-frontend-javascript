export function taskFirst() {
  const task = 'I prefer const when I can.';
  return task;
}

export function taskNext() {
  let combination = 'But sometimes let';
  combination += getLast(); // Make sure to define getLast() function if it's used here

  return combination;
}

// Export getLast if it's used in taskNext
export function getLast() {
  return ' is okay';
}

