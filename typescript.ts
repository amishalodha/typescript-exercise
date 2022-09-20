import * as _ from "Lodash";


export type member = { name: string; age?: number };

const members: member[] = [
    { name: 'Laveesh Gupta', age: 20 },
    { name: 'Yash Jangid', age: 40 },
    { name: 'Firoz Khan', age: 41 },
    { name: 'Amrit Srivastava', age: 17 },
    { name: 'Chandraprakash Sharma' },
    { name: 'Swpril Ahuja', age: 45 },
    { name: 'Yogesh Khatri', age: 51 }
]

// ques 1  get array of first names of everyone 

const firstName: string[] = _.map(members, (value) => {

    const name = _.split(value.name, " ", 2)
    return name[0]
})

console.log(firstName);

// ques 2 Make everyone last name in uppercasein given array of object

const lastNameInUpperCase: string[] = _.map(members, function get(value) {
    const names = value.name

    const lastindex = names.split(' ')
    const x = lastindex[0];
    const y = lastindex[1].toLocaleUpperCase()

    const UpperCase = x + ' ' + y
    console.log(UpperCase)

})

//ques 3
//Get entries where age is between 41-60
const getTheAgeOfMember: member[] = _.filter(members, member => {
    _.inRange(member.age, 41, 60)
})
console.log(getTheAgeOfMember);



//ques 4
//Get average age
const getAverageAgeOfMembers: number = _.mean([20, 40, 41, 17, 45, 51]);
console.log(getAverageAgeOfMembers);



//quest 5
//Get Person with maximum age
const getMaximumAgeOfMembers: member = _.maxBy(members, 'age');
console.log(getMaximumAgeOfMembers);


// ques 6 divide persons in three groups, result should look like
//   { 'young': [], 'old': [], 'age': [] }
//    less than 35yrs is young,
//     above 35 is old 

type age = { [x: string]: number[] | undefined }
const groupMembersByAge: age = _.groupBy(members, (member) => {
    if (member.age < 35) {
        return 'young'
    }
    else if (member.age > 35) {
        return 'old'
    }
    else {
        return 'noage'
    }
}
)
console.log(groupMembersByAge);

// ques 7 add a new member to same members array instance at index 
const addNewArrayOfMemberIndex: member[] = [{ name: 'Amisha Lodha', age: 22 }, ...members]
console.log(' Array', addNewArrayOfMemberIndex);



//ques 8
//extract first and second element using destructing
const [a, b, ...rest] = members
console.log('First and second element: ', a, b);
console.log('members', rest);




//ques 9 create a new array instance adding a new member at index 0
const addNewArrayOfMember: member[] = [{ name: 'Amisha Lodha', age: 22 }, ...members]
console.log(' Array', addNewArrayOfMember);



//ques 1o
// Extract properties of object using destructuring
_.map(members, member => {
    const { name, age } = member
    console.log('name of member', name);
    console.log('age of member', age);
});






//ques 11 rename extracted property of object while destructing 

_.map(members, member => {
    const { name: n, age } = member

    console.log('rename the value', n);
    console.log(age);
})

// ques 12   destructure any property of an object and use spread operator to get remaining properties in an object 

const [values, ...rests] = members
console.log('key: ', values);
console.log('members', rests);


// ques 13 create a new object by copying using spread operator, override one of the properties to assign a new value in the same step

var addingProperty = members.map(key => ({
    ...key, field: 'I.T'

}))
console.log(addingProperty);

// ques 14 use reduce function on array and object

const addingTwoNumber = [12, 2].reduce(function (a, b) {
    return a + b;
});
console.log("sum is :" + addingTwoNumber);



// IN OBJECT
const obj2: { id: number; name: string }[] = [
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

