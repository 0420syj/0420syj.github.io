---
slug: js-event-loop
title: (JS) Event Loop와 비동기 🔁
description: js-event-loop 정리
image: "./images/preview.png"
authors: [wannysim]
tags: [javascript, event loop, asynchronous]
enableComments: true
---

Single Threaded Language인 Javascript에서 비동기 처리를 하는 방법에 대해 Event Loop와 함께 알아보겠습니다.

<!-- truncate -->

## 시작하기에 앞서 📝

Javascript는 웹 개발에 널리 사용되지만, 싱글 스레드이기 때문에 올바르게 관리하지 않으면 성능 문제가 발생할 수 있습니다. 이 글에서는 이러한 한계를 극복하기 위해 Javascript가 Event Loop를 사용하여 비동기 작업을 수행하는 방법을 살펴봅니다.

## 비동기 프로그래밍이란? 🤔

설명하기에 앞서 코드 실행 방식에 대한 2가지 접근 방식인 동기 프로그래밍과 비동기 프로그래밍에 대해 알아보겠습니다.

- **동기 프로그래밍** : 한 작업이 완료될 때까지 기다렸다가 다음 작업을 시작
- **비동기 프로그래밍** : 여러 작업을 동시에 실행

데이터 fetching, 유저 input 처리, DOM 업데이트와 같은 작업에 서로 다른 시간이 소요될 수 있는 웹을 개발하는데 유용합니다. Javascript는 작업 실행과 콜백을 관리하는 Event Loop를 사용해 비동기 프로그래밍을 구현합니다.

## Event Loop 자세히 이해하기 🔁

Event Loop는 Javascript 런타임 환경의 중요한 부분입니다. Event Loop는 코드 실행, 이벤트 처리, 콜백을 non-blocking 방식으로 관리합니다.

Event Loop에는 다음과 같은 구성 요소가 있습니다:

:::note Event Loop의 구성 요소

1. **Call Stack**: Javascript 엔진은 함수 호출을 선입선출(LIFO) 순서로 여기에 저장합니다. 함수는 호출될 때 스택에 추가되고 완료되면 제거됩니다.

2. **Callback Queue:** "작업 Queue" 또는 "메시지 Queue"라고도 하며, 완료된 비동기 작업 콜백이 저장되는 곳입니다. 콜백은 추가된 순서대로 실행됩니다.

3. **Web API:** `setTimeout`, `fetch`, `addEventListener`와 같은 브라우저 제공 API는 비동기 작업을 처리합니다. Javascript 엔진과는 별개이지만 Event Loop와 긴밀하게 작동합니다.

4. **Microtask Queue:** 이 Queue는 프로미스 및 `MutationObserver` 콜백 같은 "Microtask"를 처리합니다. Microtask Queue는 Callback Queue보다 우선순위가 높으며, Call Stack의 각 작업 이후에 처리됩니다.

:::

Event Loop는 다음과 같이 작동합니다:

:::info Event Loop의 작동 방식

1. Javascript 엔진이 Call Stack에서 코드를 실행합니다.
2. 비동기 작업은 각 Web API로 off-load 됩니다.
3. 완료된 비동기 작업 콜백이 Callback Queue에 추가됩니다.
4. Event Loop는 Call Stack이 비워진 후 Microtask Queue를 처리합니다.
5. Event Loop는 Callback Queue를 처리하여 각 콜백을 순서대로 실행합니다.

```mermaid {theme: "forest"}
1. Call Stack           2. Web APIs
   ----------              --------
   |        | ---Async---> |      |
   ----------              --------
   |        |              |      |
   ----------              --------
        |                      |
        |                      |
        v                      v
3. Microtask Queue    4. Callback Queue
   ---------------       -------------
   |             | <---- |           |
   ---------------       -------------
   |             |       |           |
   ---------------       -------------
```

:::

이 프로세스를 통해 Javascript 엔진은 비동기 작업이 완료될 때까지 기다리는 동안 작업을 계속 실행할 수 있습니다.

## Node.js와 브라우저의 Event Loop 🌐

Node.js와 브라우저 모두 Event Loop를 사용하여 비동기 코드 실행을 처리합니다. 그러나 몇 가지 차이점이 있습니다:

:::note Node.js와 브라우저의 Event Loop 차이점

1. **Web API와 Timer:** 브라우저는 웹 API 세트를 가지고 있으며, Node.js는 자체 API와 타이머(`setImmediate`, `process.nextTick` 등)를 가지고 있습니다. 주요 차이점은 각 환경에서 사용 가능한 API입니다.

2. **Concurrency 모델:** 브라우저는 웹 워커 API를 사용하여 별도의 스레드에서 자바스크립트 코드를 동시에 실행합니다. 반면 Node.js는 비슷한 동시성을 달성하기 위해 워커 스레드 모듈을 사용합니다.

3. **Event-Driven 아키텍처:** Node.js와 브라우저 모두 이벤트를 발생시키고 수신하는 이벤트 주도 아키텍처를 사용합니다. 브라우저에서 이벤트는 일반적으로 유저 상호작용과 관련이 있으며, Node.js에서는 I/O 작업과 관련이 있습니다.

4. **Event Loop 구현:** 브라우저는 HTML5 사양을 사용하며, Node.js는 libuv 라이브러리를 기반으로 한 자체 크로스 플랫폼 Event Loop 구현을 제공합니다. 이러한 차이점에도 불구하고 Event Loop의 전반적인 동작 및 기능은 두 환경에서 크게 동일합니다.

:::

|                       | 브라우저            | Node.js                    |
| --------------------- | ------------------- | -------------------------- |
| Web API와 Timer       | Web API             | 자체 API와 타이머          |
| Concurrency 모델      | Web Workers API     | Worker Threads module      |
| Event-Driven 아키텍처 | User Interface      | I/O operations             |
| Event Loop 구현       | HTML5 specification | Built on the libuv library |

## 결론 🏁

Event Loop는 Javascript 언어 런타임 환경의 기본적인 부분이기 때문에 Javascript 개발자에게 Event Loop를 이해하는 것은 필수적입니다. Event Loop와 비동기 프로그래밍을 마스터하면 뛰어난 사용자 경험을 제공하는 반응성이 뛰어나고 효율적인 애플리케이션을 만들 수 있습니다.
