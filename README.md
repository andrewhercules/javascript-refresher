## JavaScript Refresher

### Introduction

After completing the [JavaScript practice problems I found online](http://github.com/andrewhercules/javascript-practice), I decided to recreate [Makers Academy's Ruby Refresher challenge](http://github.com/makersacademy/ruby-refresher) using JavaScript and Jasmine to further consolidate my (re)learning of JavaScript's structure and syntax.

### Languages/Platforms/Tools

* JavaScript
* Jasmine

### Learning Outcomes

When first starting this project, my goal was to continue to get reacquainted with JavaScript's syntax and structure and to create a series of exercises that I could return to at a later date if I stopped using JavaScript for a substantial period of time. I also wanted to solve each problem using JavaScript best-practices - see [answers branch](https://github.com/andrewhercules/javascript-refresher/tree/answers) for solutions.

### To-do list

- [X] Covert Ruby Refresher Rspec tests into Jasmine tests
- [X] Add additional questions (e.g. numeral conversion)
- [X] Solve each problem and transfer solutions to [answers branch](https://github.com/andrewhercules/javascript-refresher/tree/answers)

### Instructions

Clone the repository:

```
$ git clone git@github.com:andrewhercules/javascript-refresher.git
```

Change into the directory and run the Jasmine tests:

```
$ cd javascript-refresher
$ open SpecRunner.html
```

### Notes

* Each spec test has been 'x'-ed into pending mode to make it easier when first opening the SpecRunner.html file. Simply remove the x before the each test's "it( ... )" statement
* symbolToString test removed due to limited support for JavaScript's Symbol() and Symbol.for() functions
