"use strict";
//chuck
let chunk = function (arr, k) {
    let newarr = [];
    for (let i = 0; i < arr.length; i += k) {
        newarr.push(arr.slice(i, i + k));
    }
    return newarr;
};
//reduce
let reduce = (arr) => arr.reduce((total, item) => total + item, 0);
//filter
let filter = (arr) => arr.filter(data => data % 3 === 0);
//find
let find = (arr) => arr.filter(data => data % 7 == 0);
//sum
let sum = (arr) => arr.reduce((acc, item) => acc += item, 0);
 