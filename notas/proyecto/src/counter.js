let count = 0;

export function incrementCounter() {
  count++;
  updateDisplay();
}

function updateDisplay() {
  const el = document.getElementById("counter");
  if (el) el.textContent = `Tareas completadas: ${count}`;
}