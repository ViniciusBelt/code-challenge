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

// ------------------------------------------- \\

/*
Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).
Specifically, ans is the concatenation of two nums arrays.
Return the array ans.
*/

var getConcatenation = function(nums) {
    return nums.concat(nums)
};

// ------------------------------------------- \\

/*
Given a zero-based permutation nums (0-indexed), build an array ans of the same length where ans[i] = nums[nums[i]] for each 0 <= i < nums.length and return it.
A zero-based permutation nums is an array of distinct integers from 0 to nums.length - 1 (inclusive).
*/

var buildArray = function(nums) {
    let arr = []
    for (let i = 0; i < nums.length; i++) {
        let position = nums [i]
        arr.push(nums[position])
    }
    return arr
};

// ------------------------------------------- \\

/*
You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
Find two lines that together with the x-axis form a container, such that the container contains the most water.
Return the maximum amount of water a container can store.
Notice that you may not slant the container.
*/

var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let maxAreaBetweenTwoHeights = 0;

    while(left < right) {
        maxAreaBetweenTwoHeights = Math.max(maxAreaBetweenTwoHeights, 
                                   Math.min(height[right], height [left]) * (right - left) );
        if(height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return maxAreaBetweenTwoHeights;
}

// ------------------------------------------- \\

/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
You may assume the two numbers do not contain any leading zero, except the number 0 itself.
*/

var addTwoNumbers = function(l1, l2) {
    let sum = parseInt(l1.reverse().join('')) +parseInt(l2.reverse().join(''))
    return sum.split('')
};

// ------------------------------------------- \\

/*
You are given a non-negative floating point number rounded to two decimal places celsius, that denotes the temperature in Celsius.
You should convert Celsius into Kelvin and Fahrenheit and return it as an array ans = [kelvin, fahrenheit].
Return the array ans. Answers within 10-5 of the actual answer will be accepted.
*/

var convertTemperature = function(celsius) {
    return [celsius + 273.15, celsius * 1.80 + 32.00]
};

// ------------------------------------------- \\

/*
Given an integer x, return true if x is a palindrome, and false otherwise.
*/

var isPalindrome = function(x) {
    return x.toString().split('').reverse().join('') == x ? true : false
};

// ------------------------------------------- \\

/*
We are playing the Guess Game. The game is as follows:
I pick a number from 1 to n. You have to guess which number I picked.
Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.
You call a pre-defined API int guess(int num), which returns three possible results:
    -1: Your guess is higher than the number I picked (i.e. num > pick).
    1: Your guess is lower than the number I picked (i.e. num < pick).
    0: your guess is equal to the number I picked (i.e. num == pick).
Return the number that I picked.
*/

var guessNumber = function(n) {
    let interval = [1, n]

    while(interval[0] <= interval[1]) {
        let pick = Math.floor((interval[0] + interval[1]) / 2)
        let g = guess(pick)
        if(g == 0) {
            return pick;
        } else if(g == 1) {
            interval[0] = pick + 1
        } else {
            interval[1] = pick - 1;
        }
    }
    return 1;
};


var addTwoNumbers = function(l1, l2) {
    let sum = parseInt(l1.reverse().join('')) + parseInt(l2.reverse().join(''))
    return sum.toString().split('').reverse()
};

// ------------------------------------------- \\

/*
For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.
Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:
    I can be placed before V (5) and X (10) to make 4 and 9. 
    X can be placed before L (50) and C (100) to make 40 and 90. 
    C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.
*/

var romanToInt = function(s) {
    const romanMap = new Map();

    romanMap.set('I', 1);
    romanMap.set('V', 5);
    romanMap.set('X', 10);
    romanMap.set('L', 50);
    romanMap.set('C', 100);
    romanMap.set('D', 500);
    romanMap.set('M', 1000);

    const n = s.length;

    let num = romanMap.get(s[n - 1]);

    for (let i = n - 2; i >= 0; i--) {

        if (romanMap.get(s[i]) >= romanMap.get(s[i + 1])) {
            num += romanMap.get(s[i]);
        } else {
            num -= romanMap.get(s[i]);
        }
    }
    return num;
};