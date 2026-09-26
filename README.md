# JavaScript + TypeScript — Learning by Building

This repository documents my aggressive, hands-on approach to improving my JavaScript and TypeScript skills.

The goal is not to complete another course or copy tutorial projects.

The goal is to become capable of:

* Reasoning through JavaScript behavior
* Writing code without following tutorials
* Debugging problems independently
* Understanding why code works
* Using TypeScript properly
* Building reusable utilities and applications
* Explaining JavaScript concepts clearly
* Handling common frontend interview questions
* Writing cleaner, maintainable code

---

# Learning Strategy

I am following a **70 / 20 / 10 approach**.

## 70% — Build

Most of the time will be spent writing code.

Instead of watching implementations, I will attempt problems first and learn concepts while solving them.

Examples:

* Build debounce
* Build throttle
* Create custom array utilities
* Build an event emitter
* Work with APIs
* Handle async operations
* Build state management logic
* Create reusable TypeScript utilities
* Build small applications

The rule is:

> Try → Break → Debug → Understand → Improve → Explain

---

## 20% — Concepts

Concepts will be studied when they become relevant to what I am building or when I discover gaps in my understanding.

Topics include:

### JavaScript Fundamentals

* Execution Context
* Call Stack
* Scope
* Lexical Environment
* Hoisting
* Temporal Dead Zone
* Closures
* `this`
* Objects
* Prototypes
* Prototype Chain
* Classes
* Reference vs Value
* Shallow vs Deep Copy

### Functions

* Function declarations
* Function expressions
* Arrow functions
* Higher-order functions
* Callbacks
* Pure functions
* Currying
* Memoization
* Debouncing
* Throttling

### Arrays

* map
* filter
* reduce
* find
* some
* every
* sort
* flat
* custom implementations of common array methods

### Asynchronous JavaScript

* Event Loop
* Microtask Queue
* Macrotask Queue
* Promises
* async / await
* Promise chaining
* Promise.all
* Promise.allSettled
* Promise.race
* Promise.any
* Error handling
* Fetch API

### Browser JavaScript

* DOM
* Events
* Event bubbling
* Event capturing
* Event delegation
* Local Storage
* Session Storage

---

# TypeScript

After strengthening the JavaScript foundation, the same projects and utilities will gradually be migrated to TypeScript.

Topics include:

* Primitive types
* Arrays
* Objects
* Functions
* Interfaces
* Type aliases
* Union types
* Intersection types
* Literal types
* Optional properties
* Generics
* Utility types
* Type narrowing
* Type guards
* `keyof`
* `typeof`
* Indexed access types
* Generic constraints
* Discriminated unions

The goal is not simply to remove TypeScript errors.

The goal is to understand:

> How can the type system make incorrect states difficult or impossible to represent?

---

# 10% — Interview Practice

Every day I will spend some time testing whether I actually understand what I learned.

Activities include:

* Predicting JavaScript outputs
* Explaining code execution
* Solving small coding problems
* Implementing utilities from scratch
* Explaining concepts verbally
* Refactoring existing solutions
* Answering JavaScript interview questions

Example:

```javascript
function counter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const increment = counter();

console.log(increment());
console.log(increment());
console.log(increment());
```

Questions I should be able to answer:

* What is the output?
* Why does `count` survive?
* Where is `count` stored?
* What happens if `counter()` is called again?
* What JavaScript concept makes this possible?

---

# Repository Structure

```text
js-ts-learning/
│
├── README.md
│
├── notes/
│
│   ├── execution-context.md
│   ├── closures.md
│   ├── event-loop.md
│   ├── promises.md
│   └── typescript.md
│
├── javascript/
│
│   ├── fundamentals/
│   │   ├── scope.js
│   │   ├── closures.js
│   │   ├── this.js
│   │   └── prototypes.js
│   │
│   ├── utilities/
│   │   ├── debounce.js
│   │   ├── throttle.js
│   │   ├── memoize.js
│   │   ├── deepClone.js
│   │   └── eventEmitter.js
│   │
│   ├── async/
│   │   ├── event-loop.js
│   │   ├── promises.js
│   │   ├── promise-all.js
│   │   └── retry.js
│   │
│   └── challenges/
│       ├── output-questions/
│       ├── coding-problems/
│       └── implementations/
│
├── typescript/
│
│   ├── fundamentals/
│   ├── generics/
│   ├── utility-types/
│   ├── advanced-types/
│   └── challenges/
│
├── projects/
│
│   ├── 01-task-manager/
│   ├── 02-api-dashboard/
│   ├── 03-search-autocomplete/
│   └── 04-typescript-project/
│
└── experiments/
    └── playground.js
```

---

# Daily Workflow

For every concept or problem, I will follow this process.

## Step 1 — Attempt

Try solving the problem without searching for the solution.

Example:

```text
Build a debounce function.
```

---

## Step 2 — Identify the Knowledge Gap

If I get stuck, determine exactly what I don't understand.

For example:

```text
I don't understand how the timeout variable survives between function calls.
```

This indicates that I need to understand:

```text
Closures
```

---

## Step 3 — Learn the Concept

Study only enough theory to understand the problem.

Avoid spending hours consuming unrelated material.

---

## Step 4 — Implement

Write the implementation myself.

Example:

```javascript
function debounce(fn, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}
```

---

## Step 5 — Break It

Test different scenarios.

Ask:

* What if delay is `0`?
* What happens with multiple arguments?
* What happens to `this`?
* What happens if the function is called 100 times?
* Can I cancel the debounce?

---

## Step 6 — Improve It

Create a stronger implementation.

Possible improvements:

```text
debounce.cancel()
debounce.flush()
preserve this
proper TypeScript typing
```

---

## Step 7 — Explain It

I should be able to explain:

```text
What problem does debounce solve?

Why does debounce require a closure?

Why is clearTimeout necessary?

Where does the timer variable live?
```

If I cannot explain the code clearly, I do not fully understand it yet.

---

# Learning Rules

## Rule 1

Do not copy solutions immediately.

Attempt first.

---

## Rule 2

Do not blindly use AI-generated code.

AI can:

* explain concepts
* review implementations
* challenge assumptions
* generate test cases
* identify edge cases

But the first implementation should come from me.

---

## Rule 3

Every important concept must eventually appear inside working code.

---

## Rule 4

When something behaves unexpectedly, investigate it instead of memorizing the result.

---

## Rule 5

Refactor older code as understanding improves.

Git history should show progression.

---

# Progress Log

## Day 1 — JavaScript Execution Model

Topics:

* Execution Context
* Scope
* Lexical Environment
* Hoisting
* TDZ
* Closures

Build:

* Counter
* once()
* memoize()
* basic debounce()

Interview:

* Closure output questions
* Scope prediction questions

---

## Day 2 — Functions and Objects

Topics:

* `this`
* call
* apply
* bind
* objects
* prototypes

Build:

* Custom bind
* Object utilities
* Event emitter

---

## Day 3 — Arrays and Functional JavaScript

Topics:

* map
* filter
* reduce
* higher-order functions
* immutability

Build:

* Custom map
* Custom filter
* Custom reduce
* GroupBy
* Flatten array

---

## Day 4 — Async JavaScript

Topics:

* Event Loop
* Promises
* Microtasks
* Macrotasks
* async / await

Build:

* Promise utilities
* Retry function
* Delay function
* Parallel task runner

---

## Day 5 — Browser JavaScript

Topics:

* DOM
* Events
* Event delegation
* Storage
* Fetch

Build:

### Search Autocomplete

Features:

* API requests
* debounce
* loading states
* error handling
* DOM updates

---

## Day 6 — TypeScript

Convert existing JavaScript utilities to TypeScript.

Focus:

* interfaces
* type aliases
* generics
* narrowing
* utility types

Build typed versions of:

* debounce
* event emitter
* API utilities

---

## Day 7 — Integration

Build one small application without following a tutorial.

Possible project:

### TypeScript Task Manager

Features:

* Create tasks
* Update tasks
* Delete tasks
* Filter tasks
* Search
* Local storage
* Typed models
* Reusable utilities

After finishing:

* Refactor
* Document
* Add tests
* Explain architecture
* Review interview questions

---

# End Goal

At the end of this repository, I should not simply be able to say:

> I studied JavaScript.

I should have Git history demonstrating that I can:

```text
Understand → Implement → Debug → Refactor → Explain
```

That is the purpose of this repository.

