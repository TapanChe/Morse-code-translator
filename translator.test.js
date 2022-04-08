import { engToMorse, morseToEng } from "./script.js";
import { expect, it } from "@jest/globals";

// Valid
it("Should translate a to .-", () => {
    const result = engToMorse("a");
    expect(result).toBe(".-");
});

it("Should translate g to --.", () => {
    const result = engToMorse("G");
    expect(result).toBe("--.");
});

it("Should translate w to .--", () => {
    const result = engToMorse("W");
    expect(result).toBe(".--");
});

// Invalid

/*it("Should translate ] to invalid", () => {
    const result = engToMorse("]");
    expect(result).toBe("invalid");
});

it("Should translate ; to invalid", () => {
    const result = engToMorse(";");
    expect(result).toBe("invalid");
});*/

// Valid
it("Should translate .- to a", () => {
    const result = morseToEng(".-");
    expect(result).toBe("a");
});

it("Should translate --. to g", () => {
    const result = morseToEng("--.");
    expect(result).toBe("g");
});

it("Should translate .-- to w", () => {
    const result = morseToEng(".--");
    expect(result).toBe("w");
});

// Invalid

/*it("Should translate ] to invalid", () => {
    const result = morseToEng("]");
    expect(result).toBe("invalid");
});

it("Should translate ; to invalid", () => {
    const result = morseToEng(";");
    expect(result).toBe("invalid");
});*/
