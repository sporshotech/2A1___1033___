let phase = 0;
let phaseNames = [
  "New Moon",
  "Waxing Crescent",
  "First Quarter",
  "Waxing Gibbous",
  "Full Moon",
  "Waning Gibbous",
  "Last Quarter",
  "Waning Crescent"
];

let phaseInfo = [
  "The Moon is between Earth and the Sun.",
  "A small part of the Moon lights up.",
  "Half of the Moon is visible.",
  "More than half is bright.",
  "The whole Moon is bright.",
  "Brightness starts decreasing.",
  "Half again but opposite side.",
  "Only a small slice is lit."
];

function nextPhase() {
  phase++;
  if (phase > 7) phase = 0;

  let earthOrbit = document.getElementById("earth-orbit");
  earthOrbit.style.transform = "rotate(" + (phase * 45) + "deg)";

  let moonOrbit = document.getElementById("moon-orbit");
  moonOrbit.style.transform = "rotate(" + (phase * 90) + "deg)";

  let moon = document.getElementById("moon");
  if (phase == 0) moon.style.background = "#111";
  if (phase == 1) moon.style.background = "radial-gradient(circle at 80% 50%, white 25%, black 70%)";
  if (phase == 2) moon.style.background = "linear-gradient(to right, white 50%, black 50%)";
  if (phase == 3) moon.style.background = "radial-gradient(circle at 20% 50%, white 70%, black 90%)";
  if (phase == 4) moon.style.background = "white";
  if (phase == 5) moon.style.background = "radial-gradient(circle at 80% 50%, black 30%, white 70%)";
  if (phase == 6) moon.style.background = "linear-gradient(to right, black 50%, white 50%)";
  if (phase == 7) moon.style.background = "radial-gradient(circle at 20% 50%, black 20%, white 70%)";

  document.getElementById("phase-title").textContent = phaseNames[phase];
  document.getElementById("phase-text").textContent = phaseInfo[phase];
}
