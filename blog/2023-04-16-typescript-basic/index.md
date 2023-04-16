---
slug: typescript-basic
title: TypeScript 기초🐤
description: TypeScript의 기초적인 내용을 정리해보았습니다.
image: "./images/preview.png"
authors: [wannysim]
tags: [typescript]
enableComments: true
---

TypeScript의 기초적인 내용을 정리해보았습니다.

<!-- truncate -->

## Typescript 소개

Typescript는 Javascript의 superset으로, 정적 type을 추가하여 Javascript의 기능을 확장합니다. Typescript는 기존 Javascript 코드와 호환되면서도 대규모 애플리케이션을 더 쉽게 작성하고 유지보수할 수 있도록 설계되었습니다.

## 목차

크게 4가지로 나누어 정리해보았습니다.

- [기본 문법과 유형](#기본-문법과-유형)
- [Typescript 개념](#typesciprt-개념)
- [Interface와 Class](#interface와-class)
- [Module과 Namespace](#module과-namespace)

## 기본 문법과 유형

타입스크립트에는 변수에 타입 어노테이션을 추가하는 데 사용할 수 있는 몇 가지 기본 타입이 있습니다:

- `number`: 숫자
- `string`: 텍스트
- `boolean`: 참 또는 거짓
- `any`: 모든 유형, 유형을 지정하지 않으려는 경우

다음은 타입스크립트에서 타입 어노테이션을 사용하여 변수를 선언하는 방법의 예시입니다:

```ts
let firstName: string = "John";
let age: number = 30;
let isStudent: boolean = false;
```

### array

타입스크립트에서 array은 다음과 같이 작성됩니다:

```ts
let numbers: number[] = [1, 2, 3];
let names: string[] = ["John", "Jane", "Bob"];

// 또는

let numbers: Array<number> = [1, 2, 3];
```

### tuple

tuple은 고정된 길이의 array입니다. 각 요소는 특정 타입을 가질 수 있습니다.

```ts
let person: [string, number] = ["John", 30];
```

### enum

enum은 이름이 있는 상수 집합입니다.

```ts
enum Color {
  Red,
  Green,
  Blue,
}

let c: Color = Color.Green;
```

### any

any는 모든 유형을 나타냅니다. any는 타입 검사를 건너뛰기 때문에, 타입 안전성을 잃게 됩니다.

```ts
let notSure: any = 4;

notSure = "maybe a string instead";

notSure = false; // okay, definitely a boolean
```

### function

타입스크립트에서 function은 다음과 같이 작성됩니다:

```ts
function add(a: number, b: number): number {
  return a + b;
}
```

### void

void는 반환 값이 없는 함수의 반환 타입입니다.

```ts
function warnUser(): void {
  console.log("This is my warning message");
}
```

### null과 undefined

null과 undefined는 각각 자신의 타입을 가집니다. 기본적으로 null과 undefined는 모든 타입의 하위 타입입니다.

```ts
let u: undefined = undefined;

let n: null = null;
```

### never

never는 절대 발생하지 않는 값을 나타냅니다. never는 함수의 반환 타입으로 사용될 수 있습니다.

```ts
function error(message: string): never {
  throw new Error(message);
}
```

### object

object는 원시 타입을 제외한 모든 타입을 나타냅니다.

```ts
declare function create(o: object | null): void;

create({ prop: 0 }); // OK

create(null); // OK

create(42); // Error

create("string"); // Error

create(false); // Error

create(undefined); // Error
```

## Typesciprt 개념

### Type Inference

Type Inference는 타입스크립트가 타입을 추론하는 방법입니다. 타입스크립트는 변수의 타입을 지정하지 않으면 변수의 타입을 추론합니다.

```ts
let a = 1 + 2; // a는 number 타입으로 추론됩니다.

let b = [1, null]; // b는 (number | null)[] 타입으로 추론됩니다.

let c = "abc".substr(1); // c는 string 타입으로 추론됩니다.
```

### Type Assertions

Type Assertions는 컴파일러에게 특정 타입으로 타입을 지정하도록 지시합니다. Typescript는 개발자가 타입을 지정하는 것을 허용하지만, 타입을 지정하는 것은 개발자의 책임입니다.

다시 말해, 컴파일러에게 "내가 시키는 대로 하라"라고 단언(assert)하는 것입니다.

```ts
let someValue: any = "this is a string";

let strLength: number = (someValue as string).length; // as 문법

// 또는

let strLength: number = (<string>someValue).length; // JSX 문법에서는 사용할 수 없습니다.
```

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

## Interface와 Class

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

## Module과 Namespace

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
