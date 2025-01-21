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

// https://leetcode.com/problems/plus-one/

function plusOne(digits: number[]): number[] {
  return (Number(digits.map((i) => i.toString()).join("")) + 1)
    .toString()
    .split("")
    .map((i) => Number(i));
}
// console.log(plusOne([1, 2, 3]));

// --------------------------------------------------------------------------------------------------- //

// https://leetcode.com/problems/find-greatest-common-divisor-of-array/

function findGCD(nums: number[]): number {
  let [min, max] = nums.sort((a, b) => a - b);
  nums.forEach((num) => {
    if (num < min) min = num;
    else max = num;
  });
  let gcp = 1;
  let temp = min;
  while (temp) {
    if (min % temp === 0 && max % temp === 0) {
      return temp;
    }
    temp--;
  }
  return gcp;
}

// console.log(findGCD([7, 5, 6, 8, 3, 15]));

// --------------------------------------------------------------------------------------------------- //

// https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/description/

function check(nums: number[]): boolean {
  let count: number = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[(i + 1) % nums.length]) count++;
  }
  return count <= 1;
}

// console.log(check([2, 1, 3, 4]));

// --------------------------------------------------------------------------------------------------- //

// https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/

function removeDuplicates(nums: number[]): number {
  let lastVisitedIndex = 0;
  const visitedValues = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (visitedValues.has(nums[i])) continue;
    else {
      visitedValues.add(nums[i]);
      nums[lastVisitedIndex] = nums[i];
      ++lastVisitedIndex;
    }
  }
  return visitedValues.size;
}

// console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

// --------------------------------------------------------------------------------------------------- //

// https://leetcode.com/problems/rotate-array/description/

/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): number[] {
  let temp = nums[0];
  for (let i = 0; i < k - 1; i++) {
    nums[i] = nums[i + 1];
  }
  nums[k - 1] = temp;
  return nums;
}

// console.log(rotate([-1, -100, 3, 99], 2));
// console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));

// --------------------------------------------------------------------------------------------------- //

// https://leetcode.com/problems/move-zeroes/description/

function moveZeroes(nums: number[]): number[] {
  let lastNonZeroIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    if (current !== 0) {
      nums[lastNonZeroIndex] = current;
      lastNonZeroIndex = i;
    }
  }
  return nums;
}

// console.log(moveZeroes([0, 1, 0, 3, 12]));

// --------------------------------------------------------------------------------------------------- //

// https://leetcode.com/problems/sort-an-array/

// selection sort

function selectionSortArray(nums: number[]): number[] {
  for (let i = 0; i <= nums.length - 2; i++) {
    let min = i;
    for (let j = i; j <= nums.length - 1; j++) {
      if (nums[j] < nums[min]) {
        min = j;
      }
    }
    const temp = nums[min];
    nums[min] = nums[i];
    nums[i] = temp;
  }
  return nums;
}

// bubble sort

function bubbleSortArray(nums: number[]): number[] {
  for (let i = nums.length - 1; i >= 1; i--) {
    for (let j = 0; j < nums.length - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        const temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
      }
    }
  }
  return nums;
}

// insertion sort

function sortArray(nums: number[]): number[] {
  for (let i = 0; i <= nums.length - 1; i++) {
    let j = i;
    while (j > 0 && nums[j - 1] > nums[j]) {
      const temp = nums[j];
      nums[j] = nums[j - 1];
      nums[j - 1] = temp;
      j--;
    }
  }
  return nums;
}

console.log(sortArray([5, 2, 3, 1]));

// --------------------------------------------------------------------------------------------------- //

// https://leetcode.com/problems/largest-odd-number-in-string/

function largestOddNumber(num: string): string {
  const nums = num.split("").map((i) => Number(i));
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] % 2 === 0) nums.pop();
    else break;
  }
  return nums.map((i) => i.toString()).join("");
}

// console.log(largestOddNumber("3452456457456666666666666666666666676666666666"));
