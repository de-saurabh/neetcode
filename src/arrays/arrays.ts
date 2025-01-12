// https://leetcode.com/problems/contains-duplicate/description/
function containsDuplicate(nums: number[]): boolean {
  return nums.length > [...new Set(nums)].length;
}
// console.log(containsDuplicate([1, 2, 3, 4, 5]));
// console.log(containsDuplicate([1, 2, 2, 4, 5]));

// --------------------------------------------------------------------------------------------------- //

// https://leetcode.com/problems/valid-anagram/description/
function isAnagram(s: string, t: string): boolean {
  const charS = s.split("").sort().join();
  const charT = t.split("").sort().join();
  return charT === charS;
}
// console.log(isAnagram('anagram', 'anagrma'));

// --------------------------------------------------------------------------------------------------- //

// https://leetcode.com/problems/two-sum/description/
function twoSum(nums: number[], target: number): number[] {
  let result: number[] = [];
  for (const [indexOne, numOne] of nums.entries()) {
    for (const [indexTwo, numTwo] of nums.entries()) {
      if (numOne + numTwo === target && indexOne !== indexTwo) {
        result = [indexOne, indexTwo];
      }
    }
  }
  return result;
}
// console.log(twoSum([2, 7, 11, 15], 9))

// -------------------------------------------------------------------------------------------------------- //

// https://leetcode.com/problems/group-anagrams/description/
// optimized
function groupAnagrams(strs: string[]): string[][] {
  const anagramMap: Map<string, string[]> = new Map();
  strs.forEach((str) => {
    const charStr = str.split("").sort().join();
    if (!anagramMap.has(charStr)) anagramMap.set(charStr, []);
    anagramMap.get(charStr)?.push(str);
  });
  return Array.from(anagramMap.values());
}

// brute force
// function groupAnagrams(strs: string[]): string[][] {
//     const result: string[][] = [];
//     for (let indexOne = 0; indexOne < strs.length; indexOne++) {
//         const tempResult: string[] = [];
//         if (!result.flat().includes(strs[indexOne])) tempResult.push(strs[indexOne]);
//         for (let indexTwo = indexOne + 1; indexTwo < strs.length; indexTwo++) {
//             const isTwoAnagram = isAnagram(strs[indexOne], strs[indexTwo]);
//             if (isTwoAnagram && indexOne !== indexTwo && !result.flat().includes(strs[indexTwo])) tempResult.push(strs[indexTwo]);
//         }
//         if (tempResult.length) result.push(tempResult);
//     }
//     return result;
// }
//
// function isAnagram(s: string, t: string): boolean {
//     const charS = s.split('').sort().join();
//     const charT = t.split('').sort().join();
//     return charT === charS;
// }

// console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))

// --------------------------------------------------------------------------------------------------- //

// https://leetcode.com/problems/top-k-frequent-elements/
function topKFrequent(nums: number[], k: number): number[] {
  const frequencyMap: Map<number, number> = new Map();
  nums.forEach((num) => {
    const existingNum = frequencyMap.get(num);
    if (!existingNum) frequencyMap.set(num, 1);
    else frequencyMap.set(num, existingNum + 1);
  });
  return Array.from(frequencyMap)
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map(([i]) => i);
}

// console.log(topKFrequent([1,1,1,2,2,3], 2))

// --------------------------------------------------------------------------------------------------- //

// https://leetcode.com/problems/encode-and-decode-strings/description/
// Requires LeetCode Premium

// Design an algorithm to encode a list of strings to a single string. The encoded string is then decoded back to the original list of strings.
//
// Please implement encode and decode
//
// Example 1:
//
// Input: ["neet","code","love","you"]
//
// Output:["neet","code","love","you"]
// Example 2:
//
// Input: ["we","say",":","yes"]
//
// Output: ["we","say",":","yes"]

class EncodeDecodeString {
  encode(str: string[]): string {
    return str.length ? str.join("#") : "";
  }
  decode(str: string): string[] {
    return str.length ? str.split("#") : [];
  }
}

// console.log(new EncodeDecodeString().encode(["neet", "code", "love", "you"]));
// console.log(new EncodeDecodeString().decode("neet#code#love#you"));

// --------------------------------------------------------------------------------------------------- //

// function productExceptSelf(nums: number[]): number[] {
//   const result: number[] = [];
//   // const preProd = nums.slice(0, index);
//   for (const [index, value] of nums.entries()) {
//     const newArr = [
//       ...nums.slice(0, index),
//       ...nums.slice(index + 1, nums.length),
//     ];
//     result.push(newArr.reduce((a, b) => a * b, 1));
//   }
//   return result;
// }

// console.log(productExceptSelf([1, 2, 3, 4]));

// --------------------------------------------------------------------------------------------------- //

// https://leetcode.com/problems/longest-consecutive-sequence/description/

// --------------------------------------------------------------------------------------------------- //

// https://leetcode.com/problems/valid-sudoku/description/

function isValidSudoku(board: string[][]): boolean {
  let rows: Set<number>[] = Array.from({ length: 9 }, () => new Set());
  let cols: Set<number>[] = Array.from({ length: 9 }, () => new Set());
  let boxes: Set<number>[] = Array.from({ length: 9 }, () => new Set());
  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      if (board[r][c] === ".") {
        continue;
      }

      let value = Number(board[r][c]);
      let boxIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);

      if (
        rows[r].has(value) ||
        cols[c].has(value) ||
        boxes[boxIndex].has(value)
      ) {
        return false;
      }

      rows[r].add(value);
      cols[c].add(value);
      boxes[boxIndex].add(value);
    }
  }

  return true;
}
//
// console.log(
//   isValidSudoku([
//     ["5", "3", ".", ".", "7", ".", ".", ".", "."],
//     ["6", ".", ".", "1", "9", "5", ".", ".", "."],
//     [".", "9", "8", ".", ".", ".", ".", "6", "."],
//     ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
//     ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
//     ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
//     [".", "6", ".", ".", ".", ".", "2", "8", "."],
//     [".", ".", ".", "4", "1", "9", ".", ".", "5"],
//     [".", ".", ".", ".", "8", ".", ".", "7", "9"],
//   ]),
// );

// --------------------------------------------------------------------------------------------------- //

function longestCommonPrefix(strs: string[]): string {
  const maxPossibleString = Math.min(...strs.map((str) => str.length));
  let result = "";
  for (let char = 0; char <= maxPossibleString - 1; char++) {
    let lastChar = result[char];
    for (let str = 0; str < strs.length; str++) {
      const currentChar = strs[str][char];
      if (!lastChar) {
        result += currentChar;
        lastChar = currentChar;
      } else if (lastChar !== currentChar) break;
    }
  }
  return result;
}

// console.log(longestCommonPrefix(["flower", "flow", "flight"]));

// --------------------------------------------------------------------------------------------------- //

// https://leetcode.com/problems/longest-consecutive-sequence/

function longestConsecutive(nums: number[]): number {
  let result = 0;
  for (let num = 0; num < nums.length; num++) {}
  return result;
}

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

console.log(isValid("(}"));
