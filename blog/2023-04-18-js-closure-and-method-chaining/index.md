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

## 시작하기에 앞서

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

## 1. Closure

### 개념

Closure는 외부 함수가 실행을 완료한 후에도 내부 함수가 외부 함수의 변수 및 매개변수에 액세스할 수 있다라는 개념입니다.

### 예시

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

### 적용 사례

<!--line highlight 개선 후 이어서-->

```js {26~38}
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

### 개선점

## 2. Method Chaining

### 개념

### 예시

### 적용 사례

### 개선점

## 마치며
