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

A class should have only one reason to change, meaning it should have only one responsibility.

### 예시

```ts
// Bad: A single class handling user data and saving it to a database
class User {
  name: string;
  email: string;

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }

  saveToDatabase() {
    // Code to save user data to a database
  }
}

// Good: Separating responsibilities into different classes
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
    // Code to save user data to a database
  }
}
```

### 설명

In this example, the User class initially has two responsibilities: managing user data and saving it to a database. This violates SRP, so the responsibilities are separated into two different classes, User and UserRepository. Now, each class has only one responsibility, making it easier to maintain and understand.

## 2. 개방/폐쇄 원칙(OCP)🚪

Software entities should be open for extension but closed for modification.

### 예시

```ts
// Bad: Modifying the existing class to add new shapes
class AreaCalculator {
  calculateArea(shape: 'circle' | 'square', size: number) {
    if (shape === 'circle') {
      return Math.PI * size * size;
    } else if (shape === 'square') {
      return size * size;
    }
  }
}

// Good: Using abstraction and inheritance to extend functionality
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

Initially, the AreaCalculator class calculates the area of different shapes using if-else statements. To add a new shape, you have to modify the existing class, which violates OCP. The refactored code uses an abstract Shape class with an abstract calculateArea method. The Circle and Square classes inherit from Shape, implementing their own calculateArea methods. Now, to add a new shape, you can create a new class that extends Shape without modifying the AreaCalculator class.

## 3. 리스코프 치환 원칙(LSP) 🔄

Derived classes must be substitutable for their base classes.

### 예시

```ts
class Bird {
  fly(): void {
    console.log('I can fly');
  }
}

class Pigeon extends Bird {}

class Ostrich extends Bird {
  fly(): never {
    throw new Error("I can't fly");
  }
}

// Bad: Ostrich can't be used as a substitute for Bird
const bird: Bird = new Ostrich();
bird.fly(); // Throws an error

// Good: Separating the behaviors into different classes
class Bird {}

class FlyingBird extends Bird {
  fly(): void {
    console.log('I can fly');
  }
}

class NonFlyingBird extends Bird {}

class Pigeon extends FlyingBird {}
class Ostrich extends NonFlyingBird {}
```

### 설명

In the first example, the Ostrich class extends Bird, which has a fly method. However, an ostrich cannot fly, so the LSP is violated. The refactored code separates the Bird class into FlyingBird and NonFlyingBird. Now, the Ostrich class extends NonFlyingBird, and the LSP is preserved since both Pigeon and Ostrich can be used as substitutes for their respective base classes without causing issues.

## 4. 인터페이스 분리 원칙(ISP) ➗

Clients should not be forced to depend on interfaces they do not use.

### 예시

```ts
// Bad: A single interface with multiple responsibilities
interface Worker {
  work(): void;
  eat(): void;
}

// Good: Separating the responsibilities into different interfaces
interface Worker {
  work(): void;
}

interface Eater {
  eat(): void;
}

class Human implements Worker, Eater {
  work(): void {
    console.log('I am working');
  }

  eat(): void {
    console.log('I am eating');
  }
}

class Robot implements Worker {
  work(): void {
    console.log('I am working');
  }
}

// Usage
const human = new Human();
human.work();
human.eat();

const robot = new Robot();
robot.work();
```

### 설명

Initially, the Worker interface contains both work and eat methods. This forces the Robot class to implement the eat method, which it doesn't need. The refactored code separates the Worker interface into two interfaces, Worker and Eater. Now, the Robot class only needs to implement the Worker interface, and the Human class implements both the Worker and Eater interfaces. This adheres to the ISP, as clients are no longer forced to depend on methods they don't use.

## 5. 의존성 역전 원칙(DIP) 🔀

High-level modules should not depend on low-level modules. Both should depend on abstractions. Abstractions should not depend on details. Details should depend on abstractions.

### 예시

```ts
// Bad: High-level module depends on the low-level module directly
class FileReader {
  read(): string {
    // Read from a file
    return 'file content';
  }
}

class ContentProcessor {
  process(reader: FileReader): void {
    const content = reader.read();
    console.log('Processing:', content);
  }
}

// Good: Both high-level and low-level modules depend on abstractions
interface IReader {
  read(): string;
}

class FileReader implements IReader {
  read(): string {
    // Read from a file
    return 'file content';
  }
}

class ContentProcessor {
  process(reader: IReader): void {
    const content = reader.read();
    console.log('Processing:', content);
  }
}
```

### 설명

In this example, the ContentProcessor class no longer depends on the concrete FileReader class. Instead, both the high-level ContentProcessor and low-level FileReader modules depend on the IReader interface abstraction. This makes the system more flexible and easier to maintain, as new reader implementations can be easily introduced without changing the ContentProcessor class.

## 마치며 🏁

In conclusion, the SOLID principles are essential guidelines for designing maintainable, scalable, and flexible software systems. By adhering to these principles, developers can improve code quality and create a foundation for future growth and adaptability.

To recap, the SOLID principles are:

Single Responsibility Principle (SRP): A class should have only one reason to change, meaning it should have only one responsibility.
Open/Closed Principle (OCP): Software entities should be open for extension but closed for modification.
Liskov Substitution Principle (LSP): Derived classes must be substitutable for their base classes.
Interface Segregation Principle (ISP): Clients should not be forced to depend on interfaces they do not use.
Dependency Inversion Principle (DIP): High-level modules should not depend on low-level modules. Both should depend on abstractions.
By understanding and applying the SOLID principles in your TypeScript projects, you can create code that is easier to read, understand, and maintain. These principles enable you to develop software that is more resilient to changes and can be extended effortlessly when new requirements emerge. Keep these principles in mind when designing and implementing software systems, and you'll be well on your way to creating robust and efficient applications.