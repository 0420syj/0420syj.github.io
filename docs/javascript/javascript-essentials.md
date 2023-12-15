---
sidebar_position: 1
---

# Javascript Essentials 🥚

자바스크립트의 기초적인 문법과 개념을 살펴봅니다.

## 'use strict'

ES5(2009)에서 소개된 기능으로, 단어 그대로 JS에서 엄격 모드를 활성화시킵니다.
반드시 소스 최상단에 위치해야하며, 활성화된 엄격모드는 비활성화 할 수 없습니다.

아래 예제를 살펴봅시다.

```js
"use strict";

function strictModeExample() {
  a = 123; // 엄격모드에서는 전역 스코프 변수 선언 불가능
}

strictModeExample(); // ReferenceError: a is not defined
```

```js
function nonStrictModeExample() {
  a = 123;
}

nonStrictModeExample(); // OK
console.log(a); // 123
```

이처럼 전역 스코프 변수 선언이 불가능하도록 막습니다.

엄격모드의 기대효과는 다음과 같습니다:

1. **오류 감지 향상**: 일반적으로 무시되는 에러들을 실제 오류로 처리
2. **안전한 코딩**: 실수로 전역 변수를 생성하는 것을 방지
3. **성능 최적화**: 엔진이 코드 최적화를 더 효과적으로 수행
4. **향후 버전의 JS와의 호환성**: 향후 버전에서 금지될 기능들을 미리 금지

## 스코프와 변수 선언

### 스코프(Scope)

1. **전역 스코프 (Global Scope)**:
   - 전체 스크립트 어디서나 접근 가능합니다.
2. **지역 스코프 (Local Scope)**:
   - 특정 영역 내에서만 접근 가능합니다.
   - 지역 스코프는 2가지로 나뉩니다.
     - **함수 스코프 (Function Scope)**: 함수 내에서 선언된 변수들은 함수 내부에서만 접근 가능합니다. `var`로 선언된 변수가 여기에 해당합니다.
     - **블록 스코프 (Block Scope)**: `{}`로 둘러싸인 블록 내에서 선언된 변수들은 해당 블록 내에서만 접근 가능합니다. `let`과 `const`로 선언된 변수가 여기에 해당합니다.

함수 스코프와 블록 스코프를 명확히 이해하기 위한 예제코드입니다.

```js
function functionScopeExample() {
  if (true) {
    var functionScopedVar = "hello";
  }
  console.log(functionScopedVar); // "hello"
}

functionScopeExample();
console.log(typeof functionScopedVar); // 'undefined' (함수 외부에서는 접근할 수 없음)
```

```js
function blockScopeExample() {
  if (true) {
    let blockScopedLet = "저는 블록 스코프입니다";
    const blockScopedConst = "저도 블록 스코프입니다";
    console.log(blockScopedLet); // "저는 블록 스코프입니다"
    console.log(blockScopedConst); // "저도 블록 스코프입니다"
  }
  // console.log(blockScopedLet); // 에러: blockScopedLet은 블록 내에서만 접근 가능
  // console.log(blockScopedConst); // 에러: blockScopedConst는 블록 내에서만 접근 가능
}

blockScopeExample();
```

`var`를 사용한 경우에는 블록 스코프가 아닌 함수 스코프이기 때문에 if문(블록 스코프) 밖에서도 접근이 가능합니다.

### 키워드 없이 선언 및 초기화

- 전역 레벨 스코프(Global-level scope)
- 호이스팅되지 않음
- 엄격모드에서 사용불가
- 재선언 및 재할당 가능

아래 코드를 살펴봅시다.

```js
// console.log(foo); // ReferenceError: foo is not defined

(function () {
  foo = 1;
})();

console.log(foo); // 1
```

호이스팅되지 않아 함수 실행 전에는 `foo`에 접근할 수 없지만, 실행된 이후에는 전역 스코프에 변수가 선언되어 접근이 가능합니다.

### var

- **함수 레벨 스코프(Function-level scope)**: `var`는 함수 내에서 선언되면 함수 전체에서, 함수 외부에서 선언되면 전역 스코프에서 유효합니다.
- **호이스팅**: 선언된 위치와 상관없이 함수의 최상단으로 호이스팅됩니다. 단, 변수 초기화 값은 호이스팅 되지 않습니다.
- **재선언 가능**: 같은 스코프 내에서 변수를 중복하여 선언할 수 있습니다.

```js
function varExample() {
  console.log(x); // undefined (호이스팅으로 인해)
  var x = 5;
  console.log(x); // 5
}
varExample();

console.log(y); // undefined (호이스팅으로 인해)
if (true) {
  var y = 10;
}
console.log(y); // 10 (함수 외부이므로 전역 스코프)
```

### let

- **블록 레벨 스코프(Block-level scope)**
- **호이스팅**: `let`도 호이스팅되지만, 선언된 라인 이전에서 접근하려 하면 참조 에러(Reference Error)가 발생합니다. 이를 "일시적 사각지대(Temporal Dead Zone, TDZ)"라고 합니다.
- **재선언 불가능**: 같은 스코프 내에서는 재선언할 수 없습니다.
- **재할당 가능**: 재할당은 가능합니다.

```js
function letExample() {
  // console.log(a); // 참조 에러: a가 초기화되지 않음 (TDZ)
  let a = 3;
  console.log(a); // 3
  // let a = 4; // 에러: 'a'가 이미 선언됨
  a = 5; // 재할당 가능
  console.log(a); // 5
}

letExample();

if (true) {
  let b = 20;
}
// console.log(b); // 에러: b는 블록 스코프 내에서만 유효
```

### const

- **블록 레벨 스코프**: `const`도 `let`처럼 블록 레벨 스코프를 갖습니다.
- **값 변경(재할당) 불가**: 선언과 동시에 초기화해야 하며, 한 번 할당된 값을 변경할 수 없습니다.
- **재선언 불가능**: `let`과 마찬가지로 같은 스코프 내에서 재선언할 수 없습니다.

### var는 왜 쓰지 않을까?

`var`는 위에서 살펴본대로 현대적인 코딩 스타일에 맞지 않는 특징을 가지고 있습니다.
따라서 `let`, `const`를 사용하는 것이 좋겠습니다.

이유는 아래와 같습니다:

1. **블록 레벨 스코프(Block-level Scope)**: 이는 코드 블록 밖에서도 변수에 접근할 수 있게 하여 의도치 않은 문제를 일으킬 수 있습니다.
2. **호이스팅 방지**: 선언 전에 접근하면, undefined를 반환합니다. 이는 디버깅을 어렵게 만들 수 있습니다.
3. **재선언 방지**: 같은 스코프 내에서 재선언이 가능하여 혼란을 초래할 수 있습니다.
4. **코드의 가독성과 유지보수성 향상**: let과 const의 사용은 코드의 가독성과 유지보수성을 향상시킵니다. 변수의 스코프가 명확하고, 재선언 및 변경이 제한됨으로써 코드의 예측 가능성이 높아집니다.

## 호이스팅과 TDZ

JS에서는 호이스팅(hoisting)이라는 메커니즘이 작동하는데, 이는 변수와 함수 선언이 그들이 포함된 범위의 최상단으로 끌어올려진 것처럼 작동한다는 것을 의미합니다. 단, 이 과정에서 변수의 초기화는 호이스팅되지 않습니다.

아래 예시 코드를 살펴봅시다:

```js
(function () {
  console.log(num); // 여기서 `num`을 호출

  var num = 1; // `num` 변수 선언과 초기화
})();
```

호이스팅의 관점에서 이 코드는 다음과 같이 해석됩니다:

1. `var num` 선언이 함수 범위의 최상단으로 호이스팅됩니다.
2. `console.log(num)`이 실행될 때, `num`은 이미 선언되었지만 아직 값이 할당되지 않았습니다.
3. 따라서 `num`은 `undefined` 상태입니다.
4. 이후 `num = 1`이 실행되면서 `num`에 `1`이 할당됩니다.

## 자료형(Data type)

크게 2가지 자료형으로 나뉩니다

- 원시 타입(Primitive Types)
- 객체(Object)

### 원시 타입(Primitive Types)

1. **Number**: `123`, `0.45`
2. **String**: 예: `'hello'`, `"world"`
3. **Boolean**: `true`, `false`
4. **Undefined**: `let a;`
5. **Null**: `typeof null`은 `object`지만, 이는 JS 초기설계에 있던 버그입니다. 예: `let a = null;`
6. **Symbol**: ES6에서 추가된 타입으로, 고유하고 변경 불가능한 데이터 타입입니다. 주로 객체 속성의 키로 사용됩니다.
7. **BigInt**: 매우 큰 정수를 나타낼 때 사용되는 타입입니다. 숫자 뒤에 `n`을 붙여 사용합니다. 예: `12345678901234567890n`

### 객체(Object)

- **Object**: 데이터와 그 데이터에 관련된 동작을 그룹화하는 컨테이너입니다. 객체는 키와 값의 쌍으로 구성됩니다. 예: `{ name: "Alice", age: 30 }`
- 특별한 형태의 객체들도 존재합니다. 예를 들어 배열(Array), 함수(Function), 날짜(Date), 정규표현식(RegExp) 등이 있습니다.

#### `typeof null === typeof object?`

10일만에 만들어진 JS의 초기구현 버그입니다.
32비트 중 첫 3비트는 값의 타입을 결정하는 데 사용되었습니다.
이 시스템에서 `null`은 모든 비트가 `0`으로 설정된 유일한 값이었고, 객체는 타입 비트는 `000`이였습니다.

이 버그가 수정될때 생기는 영향을 예측할 수 없어, 지금까지 수정되지 않고 있습니다.

| 참고: [링크](https://github.com/FEDevelopers/tech.description/wiki/%E2%80%9Ctypeof-null%E2%80%9D%EC%9D%98-%EC%97%AD%EC%82%AC)

#### undefined vs null

```js
typeof null; // "object" (not "null" for legacy reasons)
typeof undefined; // "undefined"
null === undefined; // false
null == undefined; // true
null === null; // true
null == null; // true
!null; // true
Number.isNaN(1 + null); // false
Number.isNaN(1 + undefined); // true
```

#### `typeof function(){} === 'function'`

`function`은 엄밀히는 객체입니다. 하지만 `typeof` 연산자는 `function`을 `function`으로 반환합니다.
함수에 전달된 인자가 특정 함수인지 확인할 때 사용됩니다. API나 라이브러리를 만들 때 사용자가 제공한 콜백 함수가 실제로 함수 타입인지 검증하는 데 유용합니다.
