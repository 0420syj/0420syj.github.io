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

### null과 undefined

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

<!--여기서부터 계속-->

### Literal Narrowing

Literal Narrowing은 타입스크립트가 리터럴 타입을 축소하는 방법입니다. 리터럴 타입은 타입스크립트에서 특정한 값을 나타내는 타입입니다.

```ts
let x: 10 = 10; // x는 10이라는 리터럴 타입을 가집니다.
```

### Union Types

Union Types는 타입스크립트가 여러 타입을 하나의 타입으로 합치는 방법입니다.

```ts
let x: number | string = 10; // x는 number 또는 string 타입을 가집니다.
```

### Type Guards

Type Guards는 타입스크립트가 타입을 확인하는 방법입니다. 타입을 확인하는 방법은 두 가지가 있습니다.

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

Type Compatibility는 타입스크립트가 타입을 호환되는지 확인하는 방법입니다. 타입 호환성은 구조적 타이핑(structural typing)을 기반으로 합니다. 구조적 타이핑은 타입이 구조적으로 같으면 호환된다는 것을 의미합니다.

```ts
interface Named {
  name: string; // name 프로퍼티가 있어야 합니다.
}

class Person {
  name: string; // name 프로퍼티가 있어야 합니다.
}

let p: Named;

// 구조적 타이핑이 string 타입을 가진 name 프로퍼티를 가지고 있기 때문에 호환됩니다.

p = new Person();
```

### Type Aliases

Type Aliases는 타입을 새로운 이름으로 정의하는 방법입니다.

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

Interface는 객체의 모양을 정의하여 특정 요구 사항을 충족하도록 하는 데 사용됩니다.

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

Class는 특정 구조와 동작을 가진 객체를 만드는 데 사용됩니다.

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
dog.speak(); // 출력 : My name is Buddy
```

## Module and Namespace

### Module

Module은 코드를 구성하고 캡슐화하는 데 도움이 됩니다. Module은 변수, 함수, 클래스 등을 포함할 수 있습니다.

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

console.log(add(1, 2)); // 출력 : 3
console.log(subtract(5, 3)); // 출력 : 2
```

### Namespace

Namespace는 코드를 구성하는 또 다른 방법입니다. Namespace는 이름 충돌을 방지하고 관련 기능을 함께 그룹화하는 데 도움이 됩니다:

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
