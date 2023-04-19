---
slug: js-closure-and-method-chaining
title: (JS) Closure와 Method Chaining 🔗
description: LG유플러스에서 1년 4월동안 재직하며, Javascript의 가독성을 높이는 방법에 대해 고민했습니다.
image: "./images/preview.png"
authors: [wannysim]
tags: [javascript, closure, method chaining, solid]
enableComments: true
---

LG유플러스에서 1년 4월동안 재직하며, Javascript의 가독성을 높이는 방법에 대해 고민했습니다.

<!-- truncate -->

## 시작하기에 앞서 📝

당시 개발환경이 매우 특이하고, 어려운 점이 많았습니다.

### 당시 개발환경

I모 업체의 SPA기반 프레임워크를 사용하였고, XML 파일 안에서 JS로직을 개발하는 방식이였습니다.
브라우저도 같은 업체에서 개발한 Chrome 기반의 것을 사용했습니다.

올 3월 기준 Chrome 92 기반이 최신이였습니다.
IDE는 Spring Tool Suite를 사용했습니다.

### 문제점

- Syntax 자동완성 불가 (4월쯤부터 지원)
- VS code 사용불가 (Editor로써만 사용가능)
- 그들만의 Data 구조
- 그들만의 API
- 단위테스트 ❌
- 통합테스트 ❌

요약해서 말하자면, 유지보수가 매우 어려운 환경이었습니다.

### 해결방법

코드 전체가 카오스로 향하기 전에, 리팩토링을 통해 가독성을 높이는 방법에 대해 고민해봤습니다.

## 1. Closure 📦

### 개념

Closure는 외부 함수가 실행을 완료한 후에도 내부 함수가 외부 함수의 변수 및 매개변수에 액세스할 수 있다라는 개념입니다.

### 예시

Closure를 이해하기 위해, 간단한 Counter를 만들어보겠습니다.

```js
function createCounter() {
  let count = 0;

  return {
    increment: function () {
      count++;
    },
    decrement: function () {
      count--;
    },
    getCount: function () {
      return count;
    },
  };
}

const counter = createCounter();

counter.increment();
counter.increment();
console.log(counter.getCount()); // 출력 : 2

counter.decrement();
console.log(counter.getCount()); // 출력 : 1

console.log(counter.count); // 출력 : undefined
```

위 코드를 보면, `createCounter` 함수가 실행되면서 `count` 변수가 생성됩니다. 그리고 `createCounter` 함수는 `increment`, `decrement`, `getCount` 메서드를 가진 객체를 반환합니다. 이렇게 `createCounter` 함수가 실행되고 나면, `count` 변수는 사라집니다. 하지만, `createCounter` 함수가 반환한 객체의 메서드들은 `count` 변수에 접근할 수 있습니다. 이것이 Closure의 개념입니다.

### 적용 사례

```js {26-38}
scwin.initialize = () => {
  // 권한 Controller
  const authController = {
    checkAccessAuth: async () => {
      // 복잡한 내부 로직
    },
    spcyAuthCallback: () => {
      // 복잡한 내부 로직
    },
  };

  // 데이터 Controller
  const dataController = {
    initCommonCode: () => {
      // 복잡한 내부 로직
    },
    initUserData: () => {
      // 복잡한 내부 로직
    },
    initPageData: () => {
      // 복잡한 내부 로직
    },
  };

  // 개발자가 직접 호출하는 메서드
  return {
    // 모든 권한 체크
    checkAuth: async () => {
      await authController.checkAccessAuth();
      authController.spcyAuthCallback();
    },
    // 모든 변수 초기화
    initData: () => {
      dataController.initCommonCode();
      dataController.initUserData();
      dataController.initPageData();
    },
  };
};
```

### SOLID로 생각해보기

1. **단일 책임 원칙(SRP)**:
   이 코드는 `authController`와 `dataController`라는 두 개의 컨트롤러로 나뉩니다. 각 컨트롤러에는 고유한 책임이 있으며, `authController`는 권한 부여 로직을 처리하고 `dataController`는 데이터 초기화를 관리합니다. 이렇게 업무를 분리하면 코드를 유지 관리하고 수정하기가 더 쉬워집니다.

2. **개방/폐쇄 원칙(OCP)**:
   코드의 구조는 쉽게 확장할 수 있습니다. 예를 들어, 기존 메서드를 변경하지 않고도 `authController` 또는 `dataController`에 메서드를 더 추가할 수 있습니다. 이러한 유연성은 현재 기능에 영향을 주지 않고 새로운 기능을 추가할 수 있음을 의미합니다.

3. **인터페이스 분리 원칙(ISP)**:
   `authController`와 `dataController`는 각각 특정 작업에 초점을 맞춘 메서드가 포함된 명확하고 최소한의 인터페이스를 가지고 있습니다. 이러한 설계는 각 컨트롤러가 담당 업무와 관련된 메서드만 노출하도록 하여 개발자가 불필요한 복잡성 부담 없이 코드를 쉽게 이해하고 사용할 수 있도록 합니다.

## 2. `this`를 활용한 Method Chaining 🔗

### 개념

Method Chaining은 단일 객체 인스턴스에서 여러 메서드를 하나의 표현식으로 차례로 호출하는 것을 말합니다.

이를 통해 코드를 더 간결하고 가독성이 좋게 만들 수 있습니다.

:::caution
Method Chaining은 `this`를 사용하기 때문에, 화살표 함수를 사용하면 안됩니다.
화살표 함수는 `this` 컨텍스트를 가지지 않고, 상위 스코프의 `this`를 사용합니다.
자세한 내용은 [여기](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/Arrow_functions)를 참고해주세요.
:::

### 예시

Method Chaining을 이해하기 위해, 간단한 Calculator 클래스를 만들어보겠습니다.

```js
class Calculator {
  constructor() {
    this.value = 0;
  }

  add(num) {
    this.value += num;
    return this;
  }

  subtract(num) {
    this.value -= num;
    return this;
  }

  multiply(num) {
    this.value *= num;
    return this;
  }

  divide(num) {
    this.value /= num;
    return this;
  }
}

const calc = new Calculator();
calc.add(10).subtract(3).multiply(2).divide(7);
concole.log(calc.value); // 출력 : 2
```

위 코드를 보면, `add`, `subtract`, `multiply`, `divide` 메서드가 모두 `this`를 반환합니다. 이렇게 `this`를 반환하면, `calc` 인스턴스에서 메서드를 연속적으로 호출할 수 있습니다.

### 적용 사례

```js {52-60}
class ParamData {
  constructor() {
    this.userInfo = {};
    this.encnInfo = {};
    this.hmMllnGrpId = "";
  }

  async setUserInfo() {
    const userInfo = await getUserInfo();
    this.userInfo = userInfo;
    return this;
  }

  async setEncnInfo() {
    const encnInfo = await getEncnInfo();
    this.encnInfo = encnInfo;
    return this;
  }

  async setHmMllnGrpId() {
    const hmMllnGrpId = await getHmMllnGrpId();
    this.hmMllnGrpId = hmMllnGrpId;
    return this;
  }

  async checkUserInfo() {
    const { userInfo } = this;
    if (!userInfo) {
      throw new Error("사용자 정보가 없습니다.");
    }
    return this;
  }

  async checkEncnInfo() {
    const { encnInfo } = this;
    if (!encnInfo) {
      throw new Error("encn 정보가 없습니다.");
    }
    return this;
  }

  async checkHmMllnGrpId() {
    const { hmMllnGrpId } = this;
    if (!hmMllnGrpId) {
      throw new Error("hmMllnGrpId가 없습니다.");
    }
    return this;
  }
}

// 사용 예시
const paramData = new ParamData();

try {
  paramData.setUserInfo().then(() => paramData.checkUserInfo());
  paramData.setEncnInfo().then(() => paramData.checkEncnInfo());
  paramData.setHmMllnGrpId().then(() => paramData.checkHmMllnGrpId());
} catch (error) {
  console.log(error);
}
```

### SOLID로 생각해보기

1. **단일 책임 원칙(SRP)**:
   ParamData 클래스는 사용자 정보, encn 정보 및 hmMllnGrpId에 대한 관련 데이터와 메서드를 캡슐화합니다. 클래스의 각 메서드에는 단일 책임이 있으므로 코드를 더 쉽게 유지 관리하고 수정할 수 있습니다.

2. **개방/폐쇄 원칙(OCP)**:
   ParamData 클래스를 확장하여 기존 구현을 수정하지 않고도 더 많은 데이터와 관련 메서드를 추가할 수 있습니다. ParamData를 서브클래싱하면 기존 기능에 영향을 주지 않고 새로운 기능을 추가할 수 있습니다.

3. **리스코프 치환 원칙(LSP)**:
   이 코드는 전체 기능에 영향을 주지 않으면서 ParamData의 서브클래스를 쉽게 생성하고 대체할 수 있는 방식으로 작성되었습니다. ParamData를 확장하는 새로운 클래스가 도입될 경우 기본 클래스 대신 문제 없이 사용할 수 있어야 합니다.

4. **인터페이스 분리 원칙(ISP)**:
   ParamData 클래스는 특정 데이터 속성을 설정하고 확인하는 메서드가 있는 집중적이고 최소한의 인터페이스를 가지고 있습니다. 이러한 설계는 클래스가 담당 업무와 관련된 메서드만 노출하도록 하여 개발자가 불필요한 복잡성 없이 코드를 쉽게 이해하고 사용할 수 있도록 합니다.

## 마치며

이 글의 제목은 `(JS) Closure와 Method Chaining 🔗`이지만, 실제로는 SOLID 원칙에 대한 글입니다. SOLID 원칙은 객체 지향 프로그래밍에서 가장 중요한 원칙 중 하나입니다. 이 원칙을 잘 이해하고 적용하면, 코드를 더 깔끔하고 가독성이 좋게 만들 수 있습니다.

리팩토링으로 완성된 위의 JavaScript 코드 예제는 SOLID 원칙을 통해, 어떻게 더 깔끔하고 체계적이며 효율적인 코드가 만들어지는지를 보여줍니다.

아직 부족한 점이 많지만 앞으로 SOLID 원칙과 더불어 결합도는 낮추고 응집도는 높이는 등의 다양한 리팩토링 기법을 공부하고 적용해보겠습니다.
