import { engToMorse, morseToEng } from "./script.js";

const morseInput = document.getElementById("morseInput");
const englishInput = document.getElementById("englishInput");
const morseOutput = document.getElementById("morseOutput");
const englishOutput = document.getElementById("englishOutput");

document.getElementById("btnToMorse").addEventListener("click", () => {
    morseOutput.value = engToMorse(englishInput.value);
});

document.getElementById("btnToEng").addEventListener("click", () => {
    englishOutput.value = morseToEng(morseInput.value);
});
