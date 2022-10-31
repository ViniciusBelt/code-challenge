/*
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
The overall run time complexity should be O(log (m+n)).
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let arr = nums1.concat(nums2).sort()
    arr = arr.map(function(x) {
        x += '';
        return Number(x.replace('.', ''));
    }).sort(function(a, b) {
        return a - b;
    });
    let mid = arr.length / 2
    return Number.isInteger(mid) ? (arr[mid] + arr[mid - 1]) / 2 : arr[Math.floor(mid)]
};

// ------------------------------------------- \\

/* 
Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.
A string is represented by an array if the array elements concatenated in order forms the string.
*/
 var arrayStringsAreEqual = function(word1, word2) {
    return word1.join('') == word2.join('') ? true : false
};

// ------------------------------------------- \\

/*
You are given an array of strings arr. A string s is formed by the concatenation of a subsequence of arr that has unique characters.
Return the maximum possible length of s.
A subsequence is an array that can be derived from another array by deleting some or no elements without changing the order of the remaining elements.
*/
 var maxLength = function(arr) {
    let maxLen = 0;
    arr = arr.filter(isUnique);
    const mem = {};
    maxLen = dfs(arr, "", 0, maxLen, mem);
    function dfs(arr, path, i, maxLen, mem) {
        if (mem[path]) return mem[path];
        let pathIsUnique = isUnique(path);
        if (pathIsUnique) {
            maxLen = Math.max(path.length, maxLen);
        }
        if (i === arr.length || !pathIsUnique) {
            mem[path] = maxLen;
            return maxLen;
        }
        for (let j = i; j < arr.length; j++) {
            maxLen = dfs(arr, path + arr[j], j + 1, maxLen, mem);
        }


        mem[path] = maxLen;
        return maxLen;
    }

    function isUnique(str) {
        const set = new Set(str);
        return set.size === str.length
    }
    return maxLen;
};

// ------------------------------------------- \\

/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
*/
var twoSum = function(nums, target) {
    result = [];
    index_map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let difference = target - nums[i];
        if (index_map.has(difference)) {
            result[0] = i;
            result[1] = index_map.get(difference);
            break;
        } else {
            index_map.set(nums[i], i);
        }
    }
    return result;
};

// ------------------------------------------- \\

/*
You are given an array tasks where tasks[i] = [actuali, minimumi]:
actuali is the actual amount of energy you spend to finish the ith task.
minimumi is the minimum amount of energy you require to begin the ith task.
For example, if the task is [10, 12] and your current energy is 11, you cannot start this task. However, if your current energy is 13, you can complete this task, and your energy will be 3 after finishing it.
You can finish the tasks in any order you like.
Return the minimum initial amount of energy you will need to finish all the tasks.
*/

var minimumEffort = function(tasks) {
    let result = 0
    for (let i = 0; i < tasks.length; i++) {
        for (let energy = 0; energy < tasks[i]; energy++) {
            result = energy
        }
    }
    return result
};

let tasks = [[1,7],[2,8],[3,9],[4,10],[5,11],[6,12]]
console.log(minimumEffort(tasks));

// ------------------------------------------- \\

/*
Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.
If target is not found in the array, return [-1, -1].
You must write an algorithm with O(log n) runtime complexity.
*/

var searchRange = function(nums, target) {
    return [findFirstOccurrence(nums, target), findLastOccurrence(nums, target)];
};

const findFirstOccurrence = (nums, target) => {
    let left = 0;
    let right = nums.length - 1;
    let firstOccurrence = -1;
    while (left <= right) {
        let middle = left + parseInt((right - left) / 2);
        if (nums[middle] === target) {
            firstOccurrence = middle;
            right = middle - 1;
        } else if (target < nums[middle]) {
            right = middle - 1;
        } else {
            left = middle + 1;
        }
    }
    return firstOccurrence;
};

const findLastOccurrence = (nums, target) => {
    let left = 0;
    let right = nums.length - 1;
    let lastOccurrence = -1;
    while (left <= right) {
        let middle = left + parseInt((right - left) / 2);
        if (nums[middle] === target) {
            lastOccurrence = middle;
            left = middle + 1;
        } else if (target < nums[middle]) {
            right = middle - 1;
        } else {
            left = middle + 1;
        }
    }
    return lastOccurrence;
};

let arr = [1,4]

// ------------------------------------------- \\

/*
Given an m x n matrix, return true if the matrix is Toeplitz. Otherwise, return false.
A matrix is Toeplitz if every diagonal from top-left to bottom-right has the same elements.
*/

var isToeplitzMatrix = function(matrix) {
    let row = matrix.length;
    let col = matrix[0].length;
    let map = new Map();

    for(let i = 0; i < row; i++)
    {
        for(let j = 0; j < col; j++)
        {
            let key = i - j;
            if (map.has(key)){
                if (map.get(key) != matrix[i][j])
                    return false;
            } else {
                map.set(i - j, matrix[i][j]);
            }
        }
    }
    return true;
};

let obj = [[1,2],[2,2]]
console.log(isToeplitzMatrix(obj));