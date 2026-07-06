const todayKey = new Date().toISOString().slice(0, 10);
const storageKey = `young-athlete-fuel-${todayKey}`;
const boxes = Array.from(document.querySelectorAll("[data-track]"));
const scoreNow = document.querySelector("#scoreNow");
const resetButton = document.querySelector("#resetTracker");
const printButton = document.querySelector("#printPage");

function readState() {
  try {
    return JSON.parse(localStorage.getItem(storageKey)) || {};
  } catch {
    return {};
  }
}

function writeState(state) {
  localStorage.setItem(storageKey, JSON.stringify(state));
}

function updateScore() {
  const checked = boxes.filter((box) => box.checked).length;
  scoreNow.textContent = String(checked);
}

function hydrateTracker() {
  const state = readState();
  boxes.forEach((box) => {
    box.checked = Boolean(state[box.dataset.track]);
    box.addEventListener("change", () => {
      const next = readState();
      next[box.dataset.track] = box.checked;
      writeState(next);
      updateScore();
    });
  });
  updateScore();
}

resetButton?.addEventListener("click", () => {
  localStorage.removeItem(storageKey);
  boxes.forEach((box) => {
    box.checked = false;
  });
  updateScore();
});

printButton?.addEventListener("click", () => window.print());

hydrateTracker();
