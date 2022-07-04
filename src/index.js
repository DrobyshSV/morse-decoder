const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  // write your solution here
  const divide = (str, count) => {
    let arr = [];
    while (str) {
      arr.push(str.slice(0, count));
      str = str.slice(count);
    }
    return arr;
  };
  let tenArr = divide(expr, 10);
  let twoTenArr = tenArr.map((t) => divide(t, 2));
  let mouserArr = twoTenArr.map((t) => {
    t = t.map((x) => {
      if (x == 10) {
        return ".";
      } else if (x == 11) {
        return "-";
      } else if (x === "**") {
        return "";
      }
    });
    return t.join("");
  });
  let decodedArr = mouserArr.map((t) => {
    if (t) {
      return MORSE_TABLE[t];
    } else {
      return " ";
    }
  });
  return decodedArr.join("");
}
module.exports = {
  decode,
};
