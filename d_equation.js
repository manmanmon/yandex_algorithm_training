// Решите в целых числах уравнение:
//  _______
// √ ax + b = c
// a, b, c – данные целые числа: найдите все решения или сообщите, что решений в целых числах нет.
// Формат ввода:
// Вводятся три числа a, b и c по одному в строке.
// Формат вывода:
// Программа должна вывести все решения уравнения в порядке возрастания, 
// либо NO SOLUTION (заглавными буквами), если решений нет. Если решений бесконечно много, 
// вывести MANY SOLUTIONS.

// Пример 1
// Ввод	| Вывод
// 1     | 0
// 0     |
// 0     | 

// Пример 2
// Ввод	| Вывод
// 1     | 7
// 2     |
// 3     |

// Пример 3
// Ввод	| Вывод
// 1     | NO SOLUTION
// 2     |
// -3    |

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
});

const solution = (data) => {
  const [a, b, c] = data.map((n) => +n);
  if (c < 0) return "NO SOLUTION";
  if (a === 0) return Math.sqrt(b) === c ? "MANY SOLUTIONS" : "NO SOLUTION";
  if (a === b === c === 0) return "MANY SOLUTIONS";
  const x = (c * c - b) / a;
  if (Math.round(x) != x) return "NO SOLUTION";
  return x;
};

const lines = [];
rl.on("line", (line) => {
  lines.push(line.trim());
  if (lines.length == 3) rl.close();
}).on("close", () => {
  const result = solution(lines);
  process.stdout.write(result + "");
});
