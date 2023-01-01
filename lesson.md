# Lesson

## Lesson Overview

Software programming is a process of writing instructions that can be understood and executed by computers. Instructions are `statements` written with rules, or syntax, of the programming language (in our case, JavaScript). In this lesson, learners will learn to write simple instructions and execute them.


---

## Part 1 - Statement vs Expression (15 mins)

Expression is a subset of statement. Expression always resolve to a value, such as: `1 + 2` will resolve `3`. 

```js
const x = 1;
const y = 2;
const z = x + y;
console.log(z); // 3
```

Yet, not every statements will resolve to a value, such as:

```js
if(1 + 2 === 3){
    console.log("I am three");
}
```

In the example above, the `if` statement does not resolve to a value. It simply checks if the `condition` is true. If it is true, it executes the code block defined it is.

A software such as mobile app or web app contains massive amount of statements (and expressions). This is the smallest building block of a program.

---

## Part 2 - Arithmetic Operators and Data Types (15 mins)

There are four types of basic operator in programming languages:

1. Arithmetic 
1. Assignment
1. Comparison (Part 3)
1. Logical (Part 3)

A simple program such as below would utilizes Arithmetic and Assignment operators.

```js
const x = 10; // = is assignment operator
const y = 20; 
const z = x + y; // + is an arithmetic operator that sums x and y, the resolved value is assigned to z with = operator.
console.log(z); // 30
```

The above example are used with the `number` data type. Let us try with a similar example but using `string` data type.

```js
const a = "10"; // the value of a string data type is surrounded with double quote (").
const b = "20";
const c = a + b; // string cannot behaviour like number, so it is being concatenated.
console.log(c); // "1020"
```

### Activity - Self Discovery (30 mins)

> 20 mins activity and 10 mins sharing of answers

Learners are to refer to [part2activity.js](./src/lesson/part2activity.js). Instructions of this activity is given in comments. By the end of this activity, learners should be able to answer the questions below.

Qn 1: What `%` operator does?

```
Enter answer here
```

Qn 2: Why is `true + true` resolve to `2`?

```
Enter answer here
```

Qn 3: What is `NaN`?

```
Enter answer here
```

---

## Part 3 - Conditional Flow (`if` and `switch`)

The conditional flow will check against the given condition. If the condition is resolved to `true`, the code block will be executed. 

A result of a condition (expects `boolean` type) can be resolved with arithmetic, comparison, and logical operator.

### `IF` Condition with Arithmetic and Comparison Operator:
```js
const x = 1;
const y = 1;

// x + y === 2 will resolve to a single boolean value: true

if(x + y === 2){
    console.log("The condition is true");
}
```

### `IF` Condition with Logical Operator

When `||` is used, either value is `true` will resolve to `true`.
When `&&` is used, both values must be `true` to resolve to `true`.

```js
const a = true;
const b = false;

// a || b will resolve to true
if(a || b){
    console.log("Using OR operator");
}

// a && b will resolve to false
if(a && b){
    console.log("Using AND operator");
}
```

### `SWITCH` Condition

A switch condition simply compares value. 

```js
const fruit = "APPLE";

switch(fruit){
    case "APPLE":
        console.log("I am making apple juice");
        break;
    
    case "ORANGE":
        console.log("I am making orange juice");
        break;

    case "DURIAN":
        console.log("I shall simply eat the durian");
        break;
        
    default:
        console.log("I don't know what to do with this fruit");
        break;
}

```

END