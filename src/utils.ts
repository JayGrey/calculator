// o o d o d o o o d o o

const findNextNum = (arr: string[], pos = 0): number => {
  if (pos >= arr.length) {
    return -1;
  }

  return arr[pos].match(/^\d/) ? pos : findNextNum(arr, pos + 1);
};

const findLastNum = (arr: string[], pos = arr.length - 1): number => {
  return pos == -1 || arr[pos].match(/^\d+/) ? pos : findLastNum(arr, pos - 1);
};

const simplifyOperators = (arr: string[]): string => {
  if (arr.length == 1) {
    return arr[0];
  }

  return arr[arr.length - 1] == "-" ? arr.slice(arr.length - 2).join("") : arr[arr.length - 1];
};

const trimBeginning = (arr: string[]): string[] => {
  const index = findNextNum(arr);
  if (index == 0) {
    return arr;
  }
};

const findNextOperator = (oper: string, arr: string[], pos = 0): number => {
  if (pos >= arr.length) {
    return -1;
  }
  return arr[pos][0] == oper ? pos : findNextOperator(oper, arr, pos + 1);
};

const calculate = (oper: string, num1: string, num2: string): string => {
  const koefecient = oper.length == 2 && oper[1] == "-" ? -1 : 1;
  const num =
    oper[0] == "+"
      ? Number(num1) + koefecient * Number(num2)
      : oper[0] == "-"
      ? Number(num1) - koefecient * Number(num2)
      : oper[0] == "*"
      ? Number(num1) * koefecient * Number(num2)
      : oper[0] == "/"
      ? Number(num1) / (koefecient * Number(num2))
      : NaN;

  return (Number.isInteger(num) ? num : Number(num).toFixed(4)).toString();

  // switch (oper[0]) {
  //   case "+":
  //     return Number(Number(num1) + koefecient * Number(num2)).toString();
  //   case "-":
  //     return Number(Number(num1) - koefecient * Number(num2)).toString();
  //   case "*":
  //     return Number(Number(num1) * koefecient * Number(num2)).toString();
  //   case "/":
  //     return Number(Number(num1) / (koefecient * Number(num2))).toString();
  //   default:
  //     throw Error(`unknown operator: ${oper}`);
  // }
};

const evalOperator = (oper: string, arr: string[]): string[] => {
  const index = findNextOperator(oper, arr);

  return index < 1
    ? arr
    : evalOperator(oper, [
        ...arr.slice(0, index - 1),
        calculate(arr[index], arr[index - 1], arr[index + 1]),
        ...arr.slice(index + 2),
      ]);
};

export const evaluate = (arr: string[]): string => {
  // simplify start of the arr
  // simplify end of the arr
  // reduce to one sequence of operators

  // process / operator
  // process * operator
  // process + operator
  // process - operator
  const result = evalOperator("-", evalOperator("+", evalOperator("*", evalOperator("/", arr))));

  // trim fraction part to 4 digits
  return result[0];
};

console.log("util started");

// console.log(evaluate(["1", "+", "2"]));
// console.log(findLastNum(["1", "+", "2", "+", "-"]));
// console.log(findLastNum(["+", "-"]));
// console.log(findLastNum([]));

// console.log(findNextNum(["1", "+", "2", "+", "-"]));
// console.log(findNextNum(["-", "1", "+", "2", "+", "-"]));
// console.log(findNextNum(["+", "-", "1", "+", "2", "+", "-"]));
// console.log(findNextNum(["-"]));
// console.log(findNextNum([]));

// simplify operators
// console.log(simplifyOperators(["+"]));
// console.log(simplifyOperators(["*", "-", "/"]));
// console.log(simplifyOperators(["*", "/", "-"]));
// console.log(simplifyOperators(["*", "-", "-"]));

// calculate
// console.log(calculate("+-", "2", "3"));
// console.log(calculate("+", "2", "3"));

// console.log(calculate("--", "2", "3"));
// console.log(calculate("-", "2", "3"));

// console.log(calculate("*-", "2", "3"));
// console.log(calculate("*", "2", "3"));

// console.log(calculate("/-", "2", "3"));
// console.log(calculate("/", "2", "3"));

// findNextOperator
// console.log(findNextOperator("+", ["1", "/", "2", "-", "3"]));
// console.log(findNextOperator("+", ["1", "/", "2", "+", "3"]));
// console.log(findNextOperator("-", ["1", "/", "2", "+", "3"]));

// evalOperator
// console.log(evalOperator("+", ["7", "+", "2", "+-", "3", "/", "2"]));

console.log(evaluate(["7", "+", "2", "+-", "3", "/", "2"]));
