// https://leetcode.com/problems/contains-duplicate/description/
function containsDuplicate(nums: number[]): boolean {
    return nums.length > [...new Set(nums)].length;

}
// console.log(containsDuplicate([1, 2, 3, 4, 5]));
// console.log(containsDuplicate([1, 2, 2, 4, 5]));

// --------------------------------------------------------------------------------------------------- //

// https://leetcode.com/problems/valid-anagram/description/
function isAnagram(s: string, t: string): boolean {
    const charS = s.split('').sort().join();
    const charT = t.split('').sort().join();
    return charT === charS;
}
// console.log(isAnagram('anagram', 'anagrma'));

// --------------------------------------------------------------------------------------------------- //

// https://leetcode.com/problems/two-sum/description/
function twoSum(nums: number[], target: number): number[] {
    let result: number[] = [];
    for (const [indexOne, numOne] of nums.entries()) {
        for (const [indexTwo, numTwo] of nums.entries()) {
            if ((numOne + numTwo === target) && (indexOne !== indexTwo)) {
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
    strs.forEach(str => {
        const charStr = str.split('').sort().join();
        if (!anagramMap.has(charStr)) anagramMap.set(charStr, []);
        anagramMap.get(charStr)?.push(str);
    })
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
    nums.forEach(num => {
        const existingNum = frequencyMap.get(num);
        if (!existingNum) frequencyMap.set(num, 1);
        else frequencyMap.set(num, existingNum + 1);
    })
    return Array.from(frequencyMap).sort((a, b) => b[1] - a[1]).slice(0, k).map(([i]) => i);
}

console.log(topKFrequent([1,1,1,2,2,3], 2))