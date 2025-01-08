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
    return !!charS.localeCompare(charT);
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

// --------------------------------------------------------------------------------------------------- //

// https://leetcode.com/problems/top-k-frequent-elements/
function topKFrequent(nums: number[], k: number): number[] {
    const frequencyMap: Map<number, number> = new Map();
    nums.forEach(num => {
        const existingNum = frequencyMap.get(num);
        if (!existingNum) frequencyMap.set(num, 1);
        else frequencyMap.set(num, existingNum + 1);
    })
    const frequentNumbers = Object.fromEntries(frequencyMap);
    return [];
}