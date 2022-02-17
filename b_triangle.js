// Даны три натуральных числа. Возможно ли построить треугольник с такими сторонами.
//  Если это возможно, выведите строку YES, иначе выведите строку NO.
// Треугольник — это три точки, не лежащие на одной прямой.
// Формат ввода:
// Вводятся три натуральных числа.
// Формат вывода:
// Выведите ответ на задачу.

// Пример 1
// Ввод |	Вывод
// 3    |  YES
// 4    |
// 5    |

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
});

function solution(data) {
  const [a, b, c] = data.map(num => +num)
  if(a < b + c && b < a + c && c < a + b) return "YES"
  else return "NO"
}

const lines = [];
rl.on("line", (line) => {
  lines.push(line.trim());
  if (lines.length == 3) rl.close();
}).on("close", () => {
  const result = solution(lines);
  process.stdout.write(result + "");
});
