"use strict";
let chunk = function (arr, k) {
    let outarr = [];
    for (let i = 0; i < arr.length; i += k) {
        outarr.push(arr.slice(i, i + k));
    }
    return outarr;
};
let sum = function (arr) {
    let sum = 0;
    let i = arr.length;
    for (i of arr) {
        sum += i;
    }
    return sum;
};
let filter = function (arr) {
    let outarr = [];
    let i = arr.length;
    for (i of arr) {
        if (i > 5) {
            outarr.push(i);
        }
    }
    return outarr;
};
let find = function (arr, condition) {
    let newarr = [];
    for (let i = 0; i < arr.length; i++) {
        if (condition(arr[i]) == true) {
            newarr.push(arr[i]);
        }
    }
};
// reducer takes an array, reducer() and initialValue as argument
function reduce(arr, reducer, initialValue) {
    let accumulator = initialValue === undefined ? 0 : initialValue;
    // loop though array    
    for (let i = 0; i < arr.length; i++) {
        accumulator = reducer(accumulator, arr[i], i, arr);
    }
    return accumulator;
}