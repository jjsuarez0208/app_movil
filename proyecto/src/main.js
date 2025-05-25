import { incrementCounter } from './counter.js';

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("addBtn").addEventListener("click", addNote);
});

function addNote() {
  const title = document.getElementById("title").value;
  const list = document.getElementById("noteList");

  if (title.trim() === "") return;

  const note = document.createElement("div");
  note.className = "note";
  note.innerHTML = `
    <span>${title}</span>
    <button onclick="this.parentElement.remove(); window.incrementCounter();">✅</button>
  `;
  list.appendChild(note);
  document.getElementById("title").value = "";
}
