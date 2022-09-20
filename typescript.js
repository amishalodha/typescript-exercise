"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
var _ = require("Lodash");
var members = [
    { name: 'Laveesh Gupta', age: 20 },
    { name: 'Yash Jangid', age: 40 },
    { name: 'Firoz Khan', age: 41 },
    { name: 'Amrit Srivastava', age: 17 },
    { name: 'Chandraprakash Sharma' },
    { name: 'Swpril Ahuja', age: 45 },
    { name: 'Yogesh Khatri', age: 51 }
];
// ques 1  get array of first names of everyone 
var firstName = _.map(members, function (value) {
    var name = _.split(value.name, " ", 2);
    return name[0];
});
console.log(firstName);
// ques 2 Make everyone last name in uppercasein given array of object
var lastNameInUpperCase = _.map(members, function get(value) {
    var names = value.name;
    var lastindex = names.split(' ');
    var x = lastindex[0];
    var y = lastindex[1].toLocaleUpperCase();
    var UpperCase = x + ' ' + y;
    console.log(UpperCase);
});
//question3
//Get entries where age is between 41-60
var getTheAgeOfMember = _.filter(members, function (member) {
    _.inRange(member.age, 41, 60);
});
console.log(getTheAgeOfMember);
//question4
//Get average age
var getAverageAgeOfMembers = _.mean([20, 40, 41, 17, 45, 51]);
console.log(getAverageAgeOfMembers);
//question5
//Get Person with maximum age
var getMaximumAgeOfMembers = _.maxBy(members, 'age');
console.log(getMaximumAgeOfMembers);
var groupMembersByAge = _.groupBy(members, function (member) {
    if (member.age < 35) {
        return 'young';
    }
    else if (member.age > 35) {
        return 'old';
    }
    else {
        return 'noage';
    }
});
console.log(groupMembersByAge);
// ques 7 add a new member to same members array instance at index 2
var addNewArrayOfMemberIndex = __spreadArray([{ name: 'Amisha Lodha', age: 22 }], members, true);
console.log('New Array', addNewArrayOfMemberIndex);
//question8
//extract first and second element using destructing
var a = members[0], b = members[1], rest = members.slice(2);
console.log('First and second element: ', a, b);
console.log('members', rest);
//ques 9 create a new array instance adding a new member at index 0
var addNewArrayOfMember = __spreadArray([{ name: 'Amisha Lodha', age: 22 }], members, true);
console.log(' Array', addNewArrayOfMember);
//question1o
// Extract properties of object using destructuring
_.map(members, function (member) {
    var name = member.name, age = member.age;
    console.log('name of member', name);
    console.log('age of member', age);
});
//ques 11 rename extracted property of object while destructing 
_.map(members, function (member) {
    var n = member.name, age = member.age;
    console.log('rename the value', n);
    console.log(age);
});
// ques 12   destructure any property of an object and use spread operator to get remaining properties in an object 
var values = members[0], rests = members.slice(1);
console.log('key: ', values);
console.log('members', rests);
// ques 13 create a new object by copying using spread operator, override one of the properties to assign a new value in the same step
var addingProperty = members.map(function (key) { return (__assign(__assign({}, key), { field: 'I.T' })); });
console.log(addingProperty);
// ques 14 use reduce function on array and object
var addingTwoNumber = [12, 2].reduce(function (a, b) {
    return a + b;
});
console.log("sum is :" + addingTwoNumber);
// IN OBJECT
var obj2 = [
    {
        id: 1,
        name: 'amisha'
    },
    {
        id: 2,
        name: 'astha'
    },
    {
        id: 3,
        name: 'kavita'
    },
    {
        id: 4,
        name: 'anjali'
    }
];
var id = _.reduce(id, function sum(acc, curr) {
    return acc + curr.id;
}, 0);
console.log(id);
