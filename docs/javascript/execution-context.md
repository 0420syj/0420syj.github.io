---
sidebar_position: 2
---

# 실행 컨텍스트

Javascript 엔진은 **Memory Heap**과 **Call Stack**으로 구성되어 있습니다. Memory Heap은 메모리 할당이 일어나는 곳이고, Call Stack은 코드 실행에 따라 호출 스택이 쌓이는 곳입니다.

이때, **실행 컨텍스트 = Call Stack에 쌓이는 객체**입니다.

Javascript는 싱글 스레드 기반의 언어입니다. 이는 **Call Stack이 하나**라는 의미입니다. 따라서 한 번에 하나의 작업만 처리할 수 있습니다.

## 실행 컨텍스트 기본 개념

실행 컨텍스트(Execution Context)는 JavaScript에서 **코드가 실행되고 평가되는 환경 또는 범위**를 나타냅니다. 실행 컨텍스트는 코드의 실행 순서를 관리하고, 변수, 함수, 객체 등의 정보를 저장하는 데 사용됩니다.

## 실행 컨텍스트의 유형

1. **Global Execution Context(전역 실행 컨텍스트)**:

   - JavaScript 코드가 처음 실행될 때 생성됩니다.
   - 전역 변수와 함수가 여기에 포함됩니다.
   - 전역 객체(`window` 또는 `globalThis`)와 연결됩니다.

2. **Function Execution Context(함수 실행 컨텍스트)**:

   - 함수가 호출될 때마다 생성됩니다.
   - 함수 내부의 변수와 매개변수, `this` 값을 포함합니다.

3. **Eval Execution Context(eval 실행 컨텍스트)**:
   - `eval()` 함수가 실행될 때 생성됩니다.
   - `eval()` 함수의 코드를 실행합니다.

## 실행 컨텍스트의 구성 요소

1. **Variable Environment(변수 환경)**: 변수, 함수 선언, 함수 매개변수 등의 식별자를 저장합니다.
2. **Lexical Environment(렉시컬 환경)**: 변수 환경과 유사하지만, Lexical Scope에 따라 식별자와 관련 정보를 저장합니다.
3. **This Binding(this 바인딩)**: 실행 컨텍스트가 참조하는 `this` 값입니다.

### Variable Environment(변수 환경)

- **environmentRecord(식별자 정보)** : 현재 컨텍스트 내의 식별자(변수)들에 대한 정보
- **outerEnvironmentReference(외부 환경 정보)** : 외부 환경에 대한 참조
- 변경 사항이 실시간으로 반영되지 않음
- 스냅샷을 찍어놓은 것과 같음

### Lexical Environment(렉시컬 환경)

- 초기에는 **Variable Environment**와 동일
- 변경 사항이 실시간으로 반영됨

:::note

### Lexical Environment(렉시컬 환경)과 Lexical Scope(렉시컬 스코프)

- Lexical Environment는 실행 컨텍스트의 구성 요소 중 하나입니다.
- Lexical Scope는 함수가 선언된 위치에 따라 결정되는 스코프를 의미합니다.

### Lexical Scope

렉시컬 스코프는 함수를 어디에 선언하였는지에 따라 상위 스코프가 결정되는 것을 말합니다.  
자바스크립트를 포함한 대부분의 프로그래밍 언어는 렉시컬 스코프를 따르며, 이를 정적 스코프(Static Scope)라고도 합니다.

#### 상위 스코프를 결정하는 방법

1. Lexical scope/Static scope(렉시컬 스코프)

   - 함수를 어디서 선언 하였는지에 따라 상위 스코프를 결정
   - JavaScript 및 대부분의 프로그래밍 언어에서 사용하는 방법

2. Dynamic Scope(동적 스코프)

   - 함수를 어디서 호출 하였는지에 따라 상위 스코프를 결정

:::

### This Binding(this 바인딩)

- this 바인딩은 함수 호출 패턴에 따라 동적으로 결정됩니다.

## 실행 컨텍스트의 생성과 실행 과정

1. **생성 단계**:

   - environmentRecord 생성: 현재 컨텍스트 내의 식별자 정보를 수집합니다.
   - outerEnvironmentReference 생성: 외부 환경에 대한 참조를 생성합니다.
   - this 바인딩: this 값을 결정합니다.

:::info

### 호이스팅(Hoisting)

실행 컨텍스트의 생성 단계에서는 변수와 함수 선언문을 먼저 수집합니다. 이때, 변수 선언문은 선언부만 수집하고, 할당은 무시합니다. 함수 선언문은 함수 전체를 수집합니다.

그리하여 같은 컨텍스트 내에서는 호이스팅된 변수가 할당되기 전에 참조될 수 있습니다. 다시 말해 호이스팅의 '끌어올리다'는 식별자 정보를 수집하는 과정을 이해하기 쉽게 표현한 것입니다.

:::

2. **실행 단계**:
   - 코드 실행: 함수 내부 또는 전역 코드를 순차적으로 실행합니다.

## Closure(클로저)

함수가 외부 렉시컬 환경에 대한 참조를 유지함으로써, 클로저가 형성됩니다. 이를 통해 내부 함수가 외부 함수의 변수에 접근할 수 있습니다.

### 예시

```javascript
function outerFunction() {
  let outerVar = "외부 변수";

  function innerFunction() {
    console.log(outerVar); // '외부 변수'
  }

  return innerFunction;
}

const inner = outerFunction();
inner(); // '외부 변수'
```

이 예제에서 `innerFunction`은 `outerFunction`의 렉시컬 환경에 접근할 수 있습니다. 이는 `innerFunction`이 생성될 때, 그 렉시컬 환경이 `outerFunction`의 렉시컬 환경을 참조하기 때문입니다.

렉시컬 환경은 JavaScript의 스코프와 클로저를 이해하는 데 핵심적인 개념으로, 코드의 실행 흐름과 변수의 가시성을 관리하는 데 중요한 역할을 합니다.

# 5. 클로저에 대해서 설명해줘. 앞서 얘기한 컨텍스트와 렉시컬 환경에 대한 얘기와 연계해서 설명해줘

클로저(Closure)는 JavaScript에서 매우 중요한 개념으로, 함수가 자신이 생성될 때의 렉시컬 환경(Lexical Environment)에 대한 참조를 유지하는 현상을 의미합니다. 클로저는 함수와 그 함수가 선언될 당시의 렉시컬 환경의 조합입니다.

### 클로저의 생성

클로저는 다음과 같은 상황에서 생성됩니다:

1. **내부 함수**: 외부 함수 내부에서 정의된 함수입니다.
2. **렉시컬 환경**: 내부 함수는 외부 함수의 변수 등을 포함하는 렉시컬 환경에 대한 참조를 가집니다.
3. **외부에서의 접근**: 내부 함수가 외부로 반환되어 외부 함수의 실행 컨텍스트가 종료된 후에도 해당 함수를 호출할 수 있습니다.

### 클로저의 작동 방식

- **렉시컬 환경의 유지**: 함수가 호출될 때, 해당 함수의 렉시컬 환경은 실행 컨텍스트에 저장됩니다. 내부 함수는 외부 함수의 렉시컬 환경에 대한 참조를 유지하므로, 외부 함수가 실행을 마치고 컨텍스트가 사라진 후에도 외부 함수의 변수에 접근할 수 있습니다.
- **데이터 은닉과 캡슐화**: 클로저를 통해 외부에서 접근할 수 없는 변수를 만들어 데이터를 은닉하고, 특정 함수에 대한 접근을 제한할 수 있습니다.

### 클로저의 예제

```javascript
function createCounter() {
  let count = 0;
  return function () {
    count += 1;
    return count;
  };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
```

이 예제에서 `createCounter` 함수는 내부 함수를 반환합니다. 이 내부 함수는 `createCounter` 함수의 렉시컬 환경(여기서는 `count` 변수)에 접근할 수 있습니다. `createCounter` 함수의 실행 컨텍스트가 종료된 후에도, 반환된 내부 함수는 `count` 변수에 접근하여 값을 변경하고 반환할 수 있습니다. 이것이 바로 클로저의 핵심입니다.

### 중요성

- 클로저는 함수형 프로그래밍에서 매우 중요한 역할을 합니다.
- 상태를 안전하게 은닉하고, 메모리 내에 데이터를 유지할 수 있게 해줍니다.
- 클로저는 JavaScript의 핵심적인 특성으로, 모듈 패턴, 고차 함수, 콜백 등 다양한 곳에서 활용됩니다.

## 참고

<https://junilhwang.github.io/TIL/Javascript/Domain/Execution-Context/>
<https://gamguma.dev/post/2022/04/js_execution_context>
