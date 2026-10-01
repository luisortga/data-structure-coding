<div align="center">

# Data Structure Coding

### Data Structures · Algorithms · Coding Practice · Testing

[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge\&logo=javascript\&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![TypeScript](https://img.shields.io/badge/TypeScript-5+-3178C6?style=for-the-badge\&logo=typescript\&logoColor=white)](https://www.typescriptlang.org/)
[![Python](https://img.shields.io/badge/Python-3+-3776AB?style=for-the-badge\&logo=python\&logoColor=white)](https://www.python.org/)
[![Node.js](https://img.shields.io/badge/Node.js-ESM-339933?style=for-the-badge\&logo=node.js\&logoColor=white)](https://nodejs.org/)
[![RxJS](https://img.shields.io/badge/RxJS-7.8-B7178C?style=for-the-badge\&logo=reactivex\&logoColor=white)](https://rxjs.dev/)
[![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?style=for-the-badge\&logo=docker\&logoColor=white)](https://www.docker.com/)
[![GitHub](https://img.shields.io/badge/Repository-GitHub-181717?style=for-the-badge\&logo=github\&logoColor=white)](https://github.com/luisortga/data-structure-coding)

<br>

<img src="https://skillicons.dev/icons?i=js,ts,py,nodejs,rxjs,docker&theme=dark" alt="Technology Stack">

</div>

---

## Overview

**Data Structure Coding** is an educational coding repository that started as a collection of implementations for fundamental data structures and gradually evolved into a broader programming practice laboratory.

The repository contains implementations and experiments using:

* JavaScript
* TypeScript
* Python
* Data structures
* Algorithms
* Coding exercises
* Code testing
* Reactive programming experiments
* Complexity analysis
* Programming logic

The goal is not to build a single application, but to **understand how programming concepts work by implementing, testing, comparing and experimenting with them through code**.

---

## From Data Structures to Coding Practice

This repository began with a relatively focused objective:

```text
Learn Data Structures
        │
        ▼
Implement Them
        │
        ▼
Compare Different Languages
        │
        ▼
Practice Algorithms
        │
        ▼
Experiment With Code
        │
        ▼
Add Tests & Coding Exercises
```

Over time, the repository naturally expanded beyond data structures.

It became a place where different programming concepts can be tested in isolation without the constraints of a large production application.

This makes the project useful as a **personal programming laboratory**.

---

## Core Data Structures

The repository contains implementations and practice involving fundamental structures such as:

| Data Structure | Main Concept                              |
| -------------- | ----------------------------------------- |
| Arrays         | Indexed collections and sequential access |
| Linked Lists   | Nodes and dynamic relationships           |
| Stack          | LIFO — Last In, First Out                 |
| Queue          | FIFO — First In, First Out                |
| Hash Table     | Key-value data organization               |
| Graphs         | Relationships between nodes               |
| Priority Queue | Ordered access based on priority          |

These structures provide the foundation for understanding how higher-level abstractions organize and manipulate data.

---

## Coding Practice

Beyond implementing data structures, the repository is also used to practice programming problems and algorithms.

The coding exercises focus on concepts such as:

* Problem solving
* Algorithmic thinking
* Recursion
* Searching
* Data manipulation
* Iteration
* Functional programming concepts
* Complexity analysis
* Edge cases
* Code organization

The repository therefore acts as a bridge between **learning the theory of data structures and applying programming logic to concrete problems**.

---

## Testing Experiments

One of the interesting evolutions of this repository is the addition of code testing.

Instead of only writing an implementation and checking the output manually, some exercises can be approached as:

```text
Implementation
      │
      ▼
Expected Behavior
      │
      ▼
Test Cases
      │
      ▼
Assertions
      │
      ▼
Feedback
      │
      ▼
Improve Implementation
```

This introduces another important software engineering concept:

> Code should not only work — its behavior should be verifiable.

Testing also provides an opportunity to experiment with edge cases and understand how an implementation behaves under different inputs.

---

## Technology Stack

<div align="center">

<img src="https://skillicons.dev/icons?i=js,ts,py,nodejs,docker&theme=dark" alt="Languages and Tools">

</div>

### Languages

| Technology | Role                                               |
| ---------- | -------------------------------------------------- |
| JavaScript | Main language for programming experiments          |
| TypeScript | Typed implementations and language exploration     |
| Python     | Alternative implementations and algorithm practice |

### JavaScript Ecosystem

| Technology                          | Role                             |
| ----------------------------------- | -------------------------------- |
| Node.js                             | JavaScript runtime               |
| ES Modules                          | Modern JavaScript module system  |
| RxJS                                | Reactive programming experiments |
| `@datastructures-js/priority-queue` | Priority queue implementation    |

The current `package.json` defines the project as an ES module and includes `@datastructures-js/priority-queue` and `rxjs` as dependencies.

### Development & Environment

| Tool           | Purpose                               |
| -------------- | ------------------------------------- |
| Git            | Version control                       |
| GitHub         | Repository and source management      |
| Docker         | Containerized development experiments |
| Docker Compose | Environment configuration             |

---

## Repository Structure

The project organizes the learning material around different languages and data structure concepts.

```text
data-structure-coding/
│
├── src/
│   │
│   ├── javascript/
│   │   ├── arrays/
│   │   ├── linked-list/
│   │   ├── stacks/
│   │   ├── queue/
│   │   ├── hash-table/
│   │   └── graphs/
│   │
│   ├── typescript/
│   │   ├── arrays/
│   │   ├── linked-list/
│   │   ├── stacks/
│   │   ├── queue/
│   │   ├── hash-table/
│   │   └── graphs/
│   │
│   └── python/
│       ├── arrays/
│       ├── linked-list/
│       ├── stacks/
│       ├── queue/
│       ├── hash-table/
│       └── graphs/
│
├── package.json
├── package-lock.json
├── dockerfile
├── compose.yml
├── .gitignore
└── README.md
```

The repository currently has `src/`, `package.json`, `package-lock.json`, `dockerfile`, and `compose.yml` at its root.

---

## Data Structures Concept Map

```text
                         DATA STRUCTURES
                               │
             ┌─────────────────┼─────────────────┐
             │                 │                 │
             ▼                 ▼                 ▼
          LINEAR            HASHING            GRAPH
             │                 │                 │
       ┌─────┼─────┐           │           ┌─────┴─────┐
       │     │     │           │           │           │
       ▼     ▼     ▼           ▼           ▼           ▼
     Array  Stack Queue    Hash Table     Nodes       Edges
       │
       ▼
 Linked List
       │
       ▼
 Priority Queue
```

The purpose of this section is not to represent every implementation in the repository, but to show how the major concepts relate to one another.

---

## Programming Concepts

The repository provides practice with several fundamental computer science concepts.

### Data Organization

Understanding how different structures store and access information.

### Algorithms

Developing solutions for manipulating, searching and processing data.

### Complexity

Analyzing how an algorithm behaves as the amount of input grows.

```text
Time Complexity
      │
      ├── O(1)
      ├── O(log n)
      ├── O(n)
      ├── O(n log n)
      └── O(n²)
```

### Recursion

Understanding how functions can solve problems by reducing them into smaller instances of the same problem.

### Memory

Exploring how data structures influence memory organization and access patterns.

### Testing

Moving from:

```text
"Does this code seem to work?"
```

toward:

```text
"Can I automatically verify that this behavior is correct?"
```

---

## Multi-Language Learning

One of the main characteristics of this repository is implementing similar concepts in different languages.

```text
             Same Concept
                  │
        ┌─────────┼─────────┐
        │         │         │
        ▼         ▼         ▼
   JavaScript TypeScript  Python
        │         │         │
        └─────────┼─────────┘
                  ▼
          Compare Approaches
```

This makes it possible to observe differences in:

* Syntax
* Type systems
* APIs
* Data manipulation
* Object models
* Error handling
* Implementation style

Rather than learning a data structure as an abstract concept, the repository encourages understanding it through actual implementations.

---

## Coding Laboratory

The repository can be thought of as a small **coding laboratory**.

Instead of every experiment needing to become a complete application, individual concepts can be explored independently.

```text
                Coding Laboratory
                       │
       ┌───────────────┼───────────────┐
       │               │               │
       ▼               ▼               ▼
 Data Structures    Algorithms       Testing
       │               │               │
       └───────────────┼───────────────┘
                       ▼
                Programming Practice
```

This approach makes the repository particularly useful as a personal reference while learning new programming concepts.

---

## Installation

Clone the repository:

```bash
git clone https://github.com/luisortga/data-structure-coding.git
```

Enter the project:

```bash
cd data-structure-coding
```

Install the JavaScript dependencies:

```bash
npm install
```

The project currently uses the following npm dependencies:

```text
@datastructures-js/priority-queue
rxjs
```

---

## Running JavaScript

Individual JavaScript files can be executed with Node.js:

```bash
node path/to/file.js
```

The project uses ES Modules:

```json
{
  "type": "module"
}
```

This allows modern `import` / `export` syntax.

---

## Running TypeScript

TypeScript examples can be executed according to the local TypeScript tooling used by the individual exercise.

A typical workflow is:

```bash
tsc
```

followed by executing the generated JavaScript with Node.js.

---

## Running Python

Python exercises can be executed directly:

```bash
python path/to/file.py
```

On systems where Python 3 is invoked separately:

```bash
python3 path/to/file.py
```

---

## Docker

The repository also contains Docker-related configuration for experimentation with containerized development.

```text
Source Code
     │
     ▼
 Dockerfile
     │
     ▼
Docker Image
     │
     ▼
Container
```

A `compose.yml` file is also present in the repository for container orchestration experiments.

---

## Learning Objectives

The main objectives of this repository are:

* Understand fundamental data structures
* Implement structures instead of only using built-in abstractions
* Practice algorithmic thinking
* Analyze time complexity
* Explore memory concepts
* Practice recursion
* Compare programming languages
* Solve coding exercises
* Experiment with reactive programming
* Introduce automated testing
* Improve code organization
* Build stronger programming fundamentals

---

## What This Repository Represents

This repository is intentionally different from a production application.

It represents the **learning and experimentation layer of software development**.

```text
                 Software Development
                         │
          ┌──────────────┴──────────────┐
          │                             │
          ▼                             ▼
     Production                    Fundamentals
          │                             │
   APIs / Apps / DBs          Data Structures
   Deployment / Cloud         Algorithms
                              Logic
                              Testing
                              Complexity
```

Production projects teach how to build systems.

This repository focuses on understanding the **fundamental building blocks behind those systems**.

---

## Future Improvements

Potential additions include:

* More data structures
* Binary trees
* Binary search trees
* Heaps
* Graph traversal algorithms
* Sorting algorithms
* Searching algorithms
* More coding challenges
* More unit tests
* Test coverage
* Complexity documentation
* Benchmark comparisons
* More TypeScript implementations
* More Python implementations
* CI-based automated testing

---

## Contribution

This repository is primarily a personal learning project, but improvements and educational contributions are welcome.

Possible contributions include:

* Improving implementations
* Adding new algorithms
* Adding test cases
* Documenting complexity
* Fixing bugs
* Improving examples
* Adding implementations in another language

```bash
git checkout -b feature/new-data-structure
```

Make your changes, commit them, push the branch and open a Pull Request.

---

## Author

<div align="center">

### Luis Ortega

Backend Developer · DevOps Learner · Frontend Learner

<br>

<a href="https://github.com/luisortga">
<img src="https://img.shields.io/badge/GitHub-luisortga-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub">
</a>

</div>

---

<div align="center">

### Data Structure Coding

**Data Structures · Algorithms · Coding Practice · Testing**

<br>

<img src="https://skillicons.dev/icons?i=js,ts,py,nodejs,rxjs,docker&theme=dark" alt="Technologies">

<br><br>

<a href="https://github.com/luisortga/data-structure-coding">
<img src="https://img.shields.io/badge/View%20Repository-GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Repository">
</a>

</div>
