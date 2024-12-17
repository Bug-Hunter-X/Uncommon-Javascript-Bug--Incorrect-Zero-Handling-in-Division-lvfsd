# Uncommon Javascript Bug: Incorrect Zero Handling in Division

This repository demonstrates a subtle bug in JavaScript related to division with zero inputs. The `myFunc` function fails to properly handle cases where `a` or `b` is 0. This can result in unexpected behavior, including division by zero errors.

## Bug Description

The original code attempts to divide `a` by `b`. However, it uses a simple `if` statement to check for zero values which is insufficient.  If either `a` or `b` is 0, the function returns 0, masking the error.

## Solution

The improved code handles the zero-value case correctly, returning `NaN` (Not a Number) when division by zero is encountered, providing a more robust error handling strategy.