---
slug: solid-with-typescript
title: Typescript로 생각해보는 SOLID 원칙 ⚖️
description: Typesciprt를 통해 SOLID 원칙에 대해 정리해보았습니다.
image: "./images/preview.png"
authors: [wannysim]
tags: [typescript, solid, coupling, cohesion]
enableComments: true
---

Typesciprt를 통해 SOLID 원칙에 대해 정리해보았습니다.

<!-- truncate -->

## SOLID 원칙은 왜 중요할까? 🤔

**SOLID 원칙**은 유지보수, 확장 및 이해하기 쉬운 구조화된 시스템을 만드는 데 도움이 되므로 SW 아키텍처에서 매우 중요합니다. 특히 모든 아키텍처의 가장 중요한 2가지 측면인 **결합도(coupling)와 응집도(cohesion)**에 직접적인 영향을 미칩니다.

### 결합도(coupling) ⏬

모듈 간의 상호 의존성을 의미합니다. 결합도가 높다는 것은 한 모듈을 변경하면 해당 모듈에 의존하는 다른 모듈도 변경해야 하는 경우가 많다는 것을 의미합니다. 반면에 결합도가 낮으면 각 모듈이 다른 모듈에 영향을 주지 않고 독립적으로 수정하거나 교체할 수 있는 모듈화 된 코드가 더 많다는 뜻입니다.

:::info 관련 SOLID 원칙

- **의존성 역전 원칙(DIP)**: 구체적인 구현이 아닌 추상화에 의존함으로써 모듈은 서로 더 독립적일 수 있습니다. 따라서 의존 요소에 영향을 주지 않고 모듈을 교체하거나 수정하기가 더 쉬워집니다.
- **인터페이스 분리 원칙(ISP)**: 더 작고 집중된 인터페이스를 사용하면 클래스는 필요한 기능에만 의존할 수 있으므로 모듈 간의 불필요한 의존성을 줄일 수 있습니다.

:::

### 응집도(cohesion) ⏫

응집도는 모듈의 책임이 얼마나 밀접하게 연관되어 있는지를 말합니다. 응집도가 높다는 것은 모듈에 단일 책임이 있어 이해하고 유지 관리하기 쉽다는 것을 의미합니다. 응집도가 낮으면 모듈에 여러 가지 책임이 있어 코드가 복잡하고 유지보수가 어려울 수 있습니다.

:::info 관련 SOLID 원칙

- **단일 책임 원칙(SRP)**: 각 클래스가 하나의 책임만 갖도록 함으로써 가독성, 유지보수 및 확장이 더 쉬운 보다 집중적이고 응집도 있는 모듈을 만들 수 있습니다.
- **개방/폐쇄 원칙(OCP)**: 클래스를 수정 없이 확장할 수 있도록 설계하면 원래 클래스의 핵심 책임에 영향을 주지 않고 새로운 기능을 추가할 수 있습니다. 이렇게 하면 기존 모듈의 일관성을 유지하면서 새로운 요구 사항을 적용시킬 수 있습니다.

:::

SOLID 원칙을 따르면 결합도는 낮고 응집도는 높은 아키텍처를 만들 수 있으며, 그 결과 유지보수와 확장이 쉽고, 유연한 시스템을 구축할 수 있습니다. 이러한 특성은 변화하는 요구사항에 쉽게 적응하고 유지보수 비용을 절감하며 전반적인 코드 품질을 개선할 수 있으므로 소프트웨어 개발에 필수적입니다.

<!--여기부터 이어서 작성-->

## 1. 단일 책임 원칙(SRP) 🧩

클래스는 변경할 이유가 하나만 있어야 하며, 이는 책임이 하나만 있어야 한다는 의미입니다.

### 예시

```ts title="bad.ts"
// Bad: 사용자 데이터를 처리하고 데이터베이스에 저장하는 단일 클래스
class User {
  name: string;
  email: string;

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }

  saveToDatabase() {
    // 사용자 데이터를 DB에 저장하는 코드
  }
}
```

```ts title="good.ts"
// Good: 여러 클래스로 책임 분리
class User {
  name: string;
  email: string;

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }
}

class UserRepository {
  save(user: User) {
    // 사용자 데이터를 DB에 저장하는 코드
  }
}
```

### 설명

이 예시에서 `bad.ts`의 `User` 클래스는 **사용자 데이터 관리**와 **DB 저장**이라는 2가지 책임을 갖습니다. 이는 SRP를 위반하는 것이므로 이 2가지 책임은 `User`와 `UserRepository`라는 2개의 다른 클래스로 분리됩니다. 이제 각 클래스는 하나의 책임만 가지므로 유지보수와 가독성이 향상됩니다.

## 2. 개방/폐쇄 원칙(OCP)🚪

소프트웨어 요소는 확장에는 열려 있어야 하고, 변경에는 닫혀 있어야 합니다.

### 예시

```ts title="bad.ts"
// Bad: 기존 클래스를 수정하여 새 도형 추가
class AreaCalculator {
  calculateArea(shape: "circle" | "square", size: number) {
    if (shape === "circle") {
      return Math.PI * size * size;
    } else if (shape === "square") {
      return size * size;
    }
  }
}
```

```ts title="good.ts"
// Good: 추상화 및 상속을 사용하여 기능 확장
abstract class Shape {
  abstract calculateArea(): number;
}

class Circle extends Shape {
  radius: number;

  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Square extends Shape {
  side: number;

  constructor(side: number) {
    super();
    this.side = side;
  }

  calculateArea(): number {
    return this.side * this.side;
  }
}

class AreaCalculator {
  calculateArea(shape: Shape): number {
    return shape.calculateArea();
  }
}
```

### 설명

`bad.ts`의 `AreaCalculator` 클래스는 if-else문을 사용하여 여러 도형의 면적을 계산합니다. 새 도형을 추가하려면 기존 클래스를 수정해야 하는데, 이는 OCP를 위반하는 것입니다.

리팩토링된 `good.ts`는 추상화 된 `calculateArea()`가 있는 추상화 된 `Shape` 클래스를 사용합니다. `Circle` 및 `Square` 클래스는 `Shape`에서 상속되어, `calculateArea()`를 구현합니다. 이제 새 도형을 추가하더라도 `AreaCalculator` 클래스를 수정하지 않고, `Shape`를 확장하는 새 클래스를 만들 수 있습니다.

## 3. 리스코프 치환 원칙(LSP) 🔄

상위 타입의 객체를 하위 타입의 객체로 치환해도, 상위 타입을 사용하는 프로그램은 정상적으로 동작해야 한다.

### 예시

```ts title="bad.ts"
class Bird {
  fly(): void {
    console.log("I can fly");
  }
}

class Pigeon extends Bird {}

class Ostrich extends Bird {
  fly(): never {
    throw new Error("I can't fly");
  }
}

// Bad: Ostrich는 Bird의 하위 타입이 될 수 없습니다.
const bird: Bird = new Ostrich();
bird.fly(); // Throws an error
```

```ts title="good.ts"
// Good: 동작에 따라 여러 클래스로 분리
class Bird {}

class FlyingBird extends Bird {
  fly(): void {
    console.log("I can fly");
  }
}

class NonFlyingBird extends Bird {}

class Pigeon extends FlyingBird {}
class Ostrich extends NonFlyingBird {}
```

### 설명

`bad.ts`에서 `Ostrich` 클래스는 `fly()`가 있는 `Bird`를 상속합니다. 그러나 `Ostrich`는 날 수 없으므로 LSP를 위반합니다.

리팩토링된 `good.ts`는 `Bird` 클래스를 `FlyingBird`와 `NonFlyingBird`로 분리합니다. 이제 `Ostrich` 클래스는 `Pigeon` 클래스를 확장하고, `Pigeon`와 `Ostrich` 모두 문제를 일으키지 않고 각각의 기본 클래스를 대체할 수 있으므로 LSP가 유지됩니다.

## 4. 인터페이스 분리 원칙(ISP) ➗

인터페이스는 클라이언트에게 필요한 것만 제공해야 합니다. 즉, 클라이언트는 자신이 사용하는 메서드에만 의존해야 합니다.

### 예시

```ts {22-24} title="bad.ts"
// Bad: 여러 책임을 하나의 인터페이스에 포함
interface Worker {
  work(): void;
  eat(): void;
}

class Human implements Worker {
  work(): void {
    console.log("I am working");
  }

  eat(): void {
    console.log("I am eating");
  }
}

class Robot implements Worker {
  work(): void {
    console.log("I am working");
  }

  eat(): void {
    throw new Error("I can't eat");
  }
}
```

```ts title="good.ts"
// Good: 서로 다른 인터페이스로 책임 분리
interface Worker {
  work(): void;
}

interface Eater {
  eat(): void;
}

class Human implements Worker, Eater {
  work(): void {
    console.log("I am working");
  }

  eat(): void {
    console.log("I am eating");
  }
}

class Robot implements Worker {
  work(): void {
    console.log("I am working");
  }
}
```

### 설명

`bat.ts`의 `Worker` 인터페이스는 `work()`와 `eat()`를 둘 다 포함하고 있습니다. 이로 인해 `Robot` 클래스는 필요하지 않은 `eat()`을 강제로 구현해야 합니다.

리팩토링된 `good.ts`는 `Worker` 인터페이스를 `Worker`와 `Eater`라는 두 개의 인터페이스로 분리합니다. 이제 `Robot` 클래스는 `Worker` 인터페이스만 구현하면 되고, `Human` 클래스는 `Worker`와 `Eater` 인터페이스를 모두 구현합니다. 이는 클라이언트가 더 이상 사용하지 않는 메서드에 의존하지 않아도 되므로 ISP를 준수합니다.

## 5. 의존성 역전 원칙(DIP) 🔀

고수준 모듈은 저수준 모듈에 의존해서는 안 됩니다. 둘 다 추상화에 의존해야 합니다. 추상화는 저수준에 의존해서는 안 되고, 저수준은 추상화에 의존해야 합니다.

:::info 용어 설명

- 고수준 모듈 : 인터페이스와 같은 객체의 상위 수준에 위치하는 추상적인 모듈
- 저수준 모듈 : 구체적인 구현을 포함하는 모듈

:::

### 예시

```ts title="bad.ts"
// Bad: 고수준 모듈(ContentProcessor)이 저수준 모듈(FileReader)에 의존합니다. (DIP 위반)
class FileReader {
  read(): string {
    // Read from a file
    return "file content";
  }
}

class ContentProcessor {
  process(reader: FileReader): void {
    const content = reader.read();
    console.log("Processing:", content);
  }
}
```

```ts title="good.ts"
// Good: 고수준 모듈(ContentProcessor)이 저수준 모듈(FileReader)에 의존하지 않습니다. (DIP 준수)
interface IReader {
  read(): string;
}

class FileReader implements IReader {
  read(): string {
    // Read from a file
    return "file content";
  }
}

class ContentProcessor {
  process(reader: IReader): void {
    const content = reader.read();
    console.log("Processing:", content);
  }
}
```

### 설명

`bad.ts`에서 `ContentProcessor` 클래스는 `FileReader` 클래스에 의존합니다. 이는 고수준 모듈이 저수준 모듈에 의존하므로 DIP를 위반합니다.

리팩토링된 `good.ts`에서는 `IReader` 인터페이스를 정의하고, `FileReader` 클래스는 이 인터페이스를 구현합니다. 이제 `ContentProcessor` 클래스는 `IReader` 인터페이스에 의존하므로 DIP를 준수합니다.

## 마치며 🏁

SOLID 원칙은 객체지향 프로그래밍에서 가장 중요한 원칙입니다. 이 원칙을 잘 지키면 코드의 유지보수성이 높아지고, 코드의 재사용성이 높아지며, 코드의 확장성이 높아집니다.

저도 여전히 SOLID 원칙을 잘 지키지 못하는 경우가 많습니다. 이 글을 쓰면서도 많이 반성하게 되었습니다. 앞으로 결합도와 응집도에 대해 항상 고민하고, SOLID 원칙을 떠올리며 코드를 작성해야겠습니다!
