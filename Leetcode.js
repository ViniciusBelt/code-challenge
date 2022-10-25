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