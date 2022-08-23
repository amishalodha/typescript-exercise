const _ = require('lodash')
const members = [
    { name: 'Laveesh Gupta', age: 20 },
    { name: 'Yash Jangid', age: 40 },
    { name: 'Firoz Khan', age: 41 },
    { name: 'Amrit Srivastava', age: 17 },
    { name: 'Chandraprakash Sharma' },
    { name: 'Swpril Ahuja', age: 45 },
    { name: 'Yogesh Khatri', age: 51 }
]

// ques 1  get array of first names of everyone 

const firstname = _.map(members, value => {
    const name = _.split(value.name, " ", 2)
    return name[0]
})

console.log(firstname);

// ques 2 Make everyone last name in uppercasein given array of object

const res = _.map(members, function get(value) {
    const names = value.name

    const lastindex = names.split(' ')
    const x = lastindex[0];
    const y = lastindex[1].toLocaleUpperCase()

    const ans = x + ' ' + y
    console.log(ans)
})


// ques 3  get entries where age is between 41-60

const array = []
//const array: never[] = []
const result = _.map(members, function get(value) {
    if (value.age >= 41 && value.age <= 60) {

    }
})
console.log(array);

// ques 4  get average age
const avg = _.mean([20, 40, 41, 17, 45, 51]);

console.log(avg);

const average = _.meanBy(members, (p) => p.age);
console.log(average);


// ques 5  get person with maximum age

const value = _.find(members, (val) => { return val.age > 50 });
console.log(value);

// ques 6 divide persons in three groups, result should look like { 'young': [], 'old': [], 'age': [] } less than 35yrs is young, above 35 is old 

var arr1: number[] = [];
var arr2: number[] = [];
var arr3: number[] = [];
const results = _.map(members, function get(value) {
    if (value.age < 35) {
        arr1.push(value.age)
    }
    else if (value.age > 35) {
        arr2.push(value.age)
    }
    else {
        arr3.push(value.age)
    }
})


const obj = {
    'young': arr1,
    'old': arr2,
    'noage': arr3
}
console.log(obj);


// // ques 7 add a new member to same members array instance at index 2
var count = 0;
Object.keys(members).forEach(function (key) {
    count++;
    if (count == 2) {
        _.set(members[key], 'field ', 'IT');
    }

});
console.log(members);

// ques 8  extract first and second element using destructing


const Obj1 = _.find(members, { name: 'Laveesh Gupta', age: 20 });
const Obj2 = _.find(members, { name: 'Yash Jangid', age: 40 });

console.log(Obj1);
console.log(Obj2);

//ques 9  create a new array instance adding a  new member at index 0
const members1 = _.clone(members);
var count = 0;
Object.keys(members).forEach(function (key) {
    count++;
    if (count == 1) {
        _.set(members[key], 'roll no ', '6');
    }
});
console.log(members)



// ques 10  extract properties of object using destructuring 

const result1 = _.every(members, function (value) {
    console.log(value.name);
    console.log(value.age);


})


const objects = _.each(members, function (value) {
    console.log(value.name);
    console.log(value.age);


})


//ques 11 rename extracted property of object while destructing 
Object.keys(members).forEach(function (key) {
    members[key].id = members[key].age;
    delete members[key].age;
});

console.log(members);

// ques 12   destructure any property of an object and use spread operator to get remaining properties in an object 

//var arr3: number[]=[];
var obj3: number[] = [];
Object.keys(members).forEach(function (key) {
    obj3.push(members[key].name)
    obj3.push(members[key].age)
});

//console.log(...obj3);
const newArray = _.clone(obj3);
console.log(obj3);


// ques 13  create a new object by copying using spread operator, override one of the properties to assign a new value in the same step 

var result2 = _.clone(members)
Object.keys(result2).forEach(function (val) {
    _.set(result2[val], 'Field', 'I.T');
});
console.log(...result2);



// ques 14   use reduce function on array and object



// var _ = require('lodash')



const arr = [4, 6, 8, 1, 3];


var values = _.reduce(arr, function sum(acc, curr) {
    return acc + curr
}, 0)

console.log(values);

// IN OBJECT

const obj2 = [
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

var values = _.reduce(values, function sum(acc, curr) {
    return acc + curr.id;
}, 0);
console.log(values);



