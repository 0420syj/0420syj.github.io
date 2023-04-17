---
slug: typescript-basic
title: TypeScript Basic🐤
description: I've summarized the basics of TypeScript.
image: "./images/preview.png"
authors: [wannysim]
tags: [typescript]
enableComments: true
---

I've summarized the basics of TypeScript.

<!-- truncate -->

## Introduction to Typescript

Typescript is a superset of Javascript that extends the functionality of Javascript by adding static types. Typescript is designed to be compatible with existing Javascript code while making it easier to write and maintain large applications.

## Table of Contents

Article is broken down into four parts

- [Basic syntax and types](#basic-syntax-and-types)
- [Concepts in Typescript](#concepts-in-typescript)
- [Interface and Class](#interface-and-class)
- [Module and Namespace](#module-and-namespace)

## Basic syntax and types

There are a few basic types in Typescript that can be used to add type annotations to variables:

- `number`: number
- `string`: text
- `boolean`: true or false
- `any`: any type, if you don't want to specify a type

Here's an example of how to declare a variable using a type annotation in Typescript:

```ts
let firstName: string = "John";
let age: number = 30;
let isStudent: boolean = false;
```

### array

In Typescript, an array is written like this

```ts
let numbers: number[] = [1, 2, 3];
let names: string[] = ["John", "Jane", "Bob"];

// Or

let numbers: Array<number> = [1, 2, 3];
```

### tuple

A tuple is an array of fixed length, where each element can have a specific type.

```ts
let person: [string, number] = ["John", 30];
```

### enum

An enum is a set of constants with names.

```ts
enum Color {
  Red,
  Green,
  Blue,
}

let c: Color = Color.Green;
```

### any

any represents any type. any skips type checking, so you lose type safety.

```ts
let notSure: any = 4;

notSure = "maybe a string instead";

notSure = false; // okay, definitely a boolean
```

### function

In TypeScript, a function is written like this

```ts
function add(a: number, b: number): number {
  return a + b;
}
```

### void

void is the return type for functions that have no return value.

```ts
function warnUser(): void {
  console.log("This is my warning message");
}
```

### null and undefined

Each of null and undefined has its own type. By default, null and undefined are subtypes of all types.

```ts
let u: undefined = undefined;

let n: null = null;
```

### never

never represents a value that will never occur. never can be used as the return type of a function.

```ts
function error(message: string): never {
  throw new Error(message);
}
```

### object

object represents all types except primitive types.

```ts
declare function create(o: object | null): void;

create({ prop: 0 }); // OK

create(null); // OK

create(42); // Error

create("string"); // Error

create(false); // Error

create(undefined); // Error
```

## Concepts in Typescript

### Type Inference

Type inference is how Typescript infers types. If you don't specify the type of a variable, Typescript will infer the type of the variable.

```ts
let a = 1 + 2; // a is inferred to be of type number.

let b = [1, null]; // b is inferred to be of type (number | null)[].

let c = "abc".substr(1); // c is inferred to be of type string.
```

### Type Assertions

Type assertions tell the compiler to specify a type as a particular type. Typescript allows developers to specify types, but it is the developer's responsibility to do so.

In other words, you're asserting to the compiler, "Do what I tell you to do."

```ts
let someValue: any = "this is a string";

let strLength: number = (someValue as string).length; // as syntax

// Or

let strLength: number = (<string>someValue).length; // Not available in JSX syntax.
```

### Literal Narrowing

Literal Narrowing is a way for Typescript to narrow literal types. A literal type is a type that represents a specific value in Typescript.

```ts
let x: 10 = 10; // x has a literal type of 10.
```

### Union Types

Union Types is a way for Typescript to combine multiple types into a single type.

```ts
let x: number | string = 10; // x has the type number or string.
```

### Type Guards

Type guards are a way for TypeScript to check types. There are two ways to check types

- typeof
- instanceof

```ts {2,6,11,15}
function isNumber(x: any): x is number {
  return typeof x === "number"; // return x instanceof Number;
}

function isString(x: any): x is string {
  return typeof x === "string"; // return x instanceof String;
}

function padLeft(value: string, padding: string | number) {
  // "number"
  if (isNumber(padding)) {
    return Array(padding + 1).join(" ") + value;
  }
  // "string"
  if (isString(padding)) {
    return padding + value;
  }
  throw new Error(`Expected string or number, got '${padding}'.`);
}
```

### Type Compatibility

Type compatibility is a way for Typescript to ensure that types are compatible. Type compatibility is based on structural typing. Structural typing means that types are compatible if they are structurally equivalent.

```ts
interface Named {
  name: string; // It must have a name property.
}

class Person {
  name: string; // It must have a name property.
}

let p: Named;

// Structured typing is compatible because it has a name property with a string type.

p = new Person();
```

### Type Aliases

Type Aliases are a way to define a type with a new name.

```ts
type Name = string;

type NameResolver = () => string;

type NameOrResolver = Name | NameResolver;

function getName(n: NameOrResolver): Name {
  if (typeof n === "string") {
    return n;
  } else {
    return n();
  }
}
```

## Interface and Class

### Interface

Interfaces are used to define the appearance of an object so that it meets specific requirements.

```ts
interface User {
  id: number;
  name: string;
  email: string;
}

const user: User = {
  id: 1,
  name: "John Doe",
  email: "john@example.com",
};
```

### Class

Classes are used to create objects with specific structure and behavior.

```ts
class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  speak(): void {
    console.log(`My name is ${this.name}`);
  }
}

const dog = new Animal("Buddy");
dog.speak(); // Output : My name is Buddy
```

## Module and Namespace

### Module

Modules help you organize and encapsulate your code. Modules can contain variables, functions, classes, and more.

```ts title="math.ts"
export function add(a: number, b: number): number {
  return a + b;
}
```

```ts title="subtraction.ts"
export function subtract(a: number, b: number): number {
  return a - b;
}
```

```ts title=index.ts
import { add } from "./math";
import { subtract } from "./subtraction";

console.log(add(1, 2)); // Output : 3
console.log(subtract(5, 3)); // Output : 2
```

### Namespace

Namespaces are another way to organize your code. Namespaces help you avoid name conflicts and group related functions together:

```typescript
namespace Geometry {
  export interface Point {
    x: number;
    y: number;
  }

  export function calculateDistance(p1: Point, p2: Point): number {
    const dx = p1.x - p2.x;
    const dy = p1.y - p2.y;
    return Math.sqrt(dx * dx + dy * dy);
  }
}

const point1: Geometry.Point = { x: 0, y: 0 };
const point2: Geometry.Point = { x: 3, y: 4 };
const distance: number = Geometry.calculateDistance(point1, point2);

console.log(distance); // Output: 5
```
