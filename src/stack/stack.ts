// --------------------------------------------------------------------------------------------------- //

// https://leetcode.com/problems/valid-parentheses/description/

function isValid(s: string): boolean {
  const stack: string[] = [];
  const bracesMap: Map<string, string> = new Map();
  bracesMap.set(")", "(");
  bracesMap.set("}", "{");
  bracesMap.set("]", "[");
  for (let n = 0; n < s.length; n++) {
    const top = stack[stack.length - 1];
    const oppBrace = bracesMap.get(s[n]);
    if (oppBrace && oppBrace === top) stack.pop();
    else stack.push(s[n]);
  }
  return stack.length === 0;
}

// console.log(isValid("(}"));

// --------------------------------------------------------------------------------------------------- //

// https://leetcode.com/problems/evaluate-reverse-polish-notation/description/

function evalRPN(tokens: string[]): number {
  const stack: string[] = [];
  const operators: string[] = ["*", "+", "-", "/"];
  for (let n = 0; n < tokens.length; n++) {
    const char = tokens[n];
    if (operators.includes(char)) {
      const top = stack[stack.length - 1];
      const secondTop = stack[stack.length - 2];
      let result = 0;
      if (char === "*") result = Number(secondTop) * Number(top);
      if (char === "+") result = Number(secondTop) + Number(top);
      if (char === "-") result = Number(secondTop) - Number(top);
      if (char === "/") result = Math.trunc(Number(secondTop) / Number(top));
      stack.pop();
      stack.pop();
      stack.push(result.toString());
    } else stack.push(char);
  }
  return Number(stack[stack.length - 1]);
}

// console.log(
//   evalRPN([
//     "10",
//     "6",
//     "9",
//     "3",
//     "+",
//     "-11",
//     "*",
//     "/",
//     "*",
//     "17",
//     "+",
//     "5",
//     "+",
//   ]),
// );

// --------------------------------------------------------------------------------------------------- //

// https://leetcode.com/problems/daily-temperatures/description/

function dailyTemperatures(temperatures: number[]): number[] {
  const nextHigherTemps: number[] = new Array(temperatures.length).fill(0);
  for (let [index, value] of temperatures.entries()) {
    let nextIndex = index + 1;
    while (nextIndex <= temperatures.length - 1) {
      if (temperatures[nextIndex] > temperatures[index]) {
        nextHigherTemps[index] = nextIndex - index;
        break;
      } else nextIndex++;
    }
  }
  return nextHigherTemps;
}

// console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));

// --------------------------------------------------------------------------------------------------- //

// https://leetcode.com/problems/3sum/description/

function threeSum(nums: number[]): number[][] {
  nums = nums.sort((a, b) => a - b);
  const result: number[][] = [];
  for (const [indexOne, numOne] of nums.entries()) {
    const firstNumber = numOne;
    for (let [indexTwo, numTwo] of nums.entries()) {
    }
  }
  return result;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
