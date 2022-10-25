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