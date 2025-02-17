# JavaScript Null/Undefined Handling Bug

This repository demonstrates a common, yet subtle, bug in JavaScript related to handling null and undefined values during arithmetic operations.  The bug arises from only explicitly checking for null values, while silently failing when one of the inputs is undefined.

## Bug Description

The original code attempts to add two numbers. However, if one of the inputs is undefined, it throws a runtime error instead of handling it gracefully.  The solution addresses this by explicitly checking for both null and undefined values before performing the addition.

## How to Reproduce

1. Clone this repository.
2. Run `bug.js`. You will observe an error if you call `foo` with an undefined parameter.
3. Run `bugSolution.js`.  You will see that the improved code handles both null and undefined parameters correctly.

## Bug Fix

The solution checks for both `null` and `undefined` using a more robust approach.  This ensures that the code handles various edge cases effectively.