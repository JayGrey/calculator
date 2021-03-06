// o o d o d o o o d o o

const findNextNum = (arr: string[], pos = 0): number => {
  if (pos >= arr.length) {
    return -1;
  }

  return arr[pos].search(/^\d/) !== -1 ? pos : findNextNum(arr, pos + 1);
};

const findLastNum = (arr: string[], pos = arr.length - 1): number => {
  return pos == -1 || arr[pos].search(/^\d+/) !== -1 ? pos : findLastNum(arr, pos - 1);
};

const findAnyNextOperator = (arr: string[], pos = 0): number => {
  if (pos >= arr.length) {
    return -1;
  }

  arr[pos].match(/\d/);
  return arr[pos].search(/\d/) == -1 ? pos : findAnyNextOperator(arr, pos + 1);
};

const trimBeginning = (arr: string[]): string[] => {
  const index = findNextNum(arr);
  if (index == 0 || index == -1) {
    return arr;
  } else {
    if (arr[index - 1] == "-") {
      return [Number(Number(arr[index]) * -1).toString(), ...arr.slice(index + 1)];
    } else {
      return [...arr.slice(index)];
    }
  }
};

const trimEnding = (arr: string[]): string[] => {
  const index = findLastNum(arr);
  return index == -1 ? arr : arr.slice(0, index + 1);
};

const simplifyOperators = (arr: string[]): string[] => {
  let accum: string[] = [];

  return arr.reduce((resArray: string[], current: string) => {
    if (current.match(/^\d/)) {
      // squash accum
      if (accum.length == 0) {
        return [...resArray, current];
      } else {
        const op = accum.reduceRight((accum: string, current: string) => {
          if (accum.length == 0) {
            return current;
          }
          if (accum.length == 1 && accum == "-") {
            return current + accum;
          }
          return accum;
        }, "");
        accum = [];
        return [...resArray, op, current];
      }
    } else {
      accum.push(current);
      return resArray;
    }
  }, []);
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

  if (!Number.isFinite(num) || Number.isNaN(num)) {
    throw new Error();
  }

  return Number(num).toString();
};

const evalOperator = (arr: string[]): string[] => {
  const index = findAnyNextOperator(arr);

  return index < 1
    ? arr
    : evalOperator([
        ...arr.slice(0, index - 1),
        calculate(arr[index], arr[index - 1], arr[index + 1]),
        ...arr.slice(index + 2),
      ]);
};

export const evaluate = (arr: string[]): string => {
  const result = evalOperator(simplifyOperators(trimEnding(trimBeginning(arr))));

  return result[0];
};

// console.log(evaluate(["5", "+", "-", "9", "+", "5"]));

export const getDigitName = (n: number): string => {
  switch (n) {
    case 0:
      return "zero";
    case 1:
      return "one";
    case 2:
      return "two";
    case 3:
      return "three";
    case 4:
      return "four";
    case 5:
      return "five";
    case 6:
      return "six";
    case 7:
      return "seven";
    case 8:
      return "eight";
    case 9:
      return "nine";
    default:
      return "";
  }
};
