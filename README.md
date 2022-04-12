# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @nadyacorscadden/lotide`

**Require it:**

`const _ = require('@nadyacorscadden/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual()`: console logs whether or not arrays are equal
* `assertEqual()`: console logs whether or not two values are equal
* `assertObjectsEqual()`: console logs whether or not two objects are equal
* `countLetters()`: counts the number of each letter in a string
* `countOnly()`: counts the number of specific items in an array
* `eqArrays()`: determines whether two arrays are equal
* `eqObjects()`: determines whether two objects are equal
* `findKey()`: finds the key with the first instance of a specific key value
* `findKeyByValue()`: finds a specific key by its value
* `flatten()`: flattens one set of arrays within an array
* `head()`: returns the first value in an array
* `letterPositions()`: returns the index values of letters in a string
* `map()`: finds specific values within an array determined by a funciton input
* `middle()`: returns the middle value(s)
* `tail()`: returns the tail of an array
* `takeUntil()`: returns an array with an input-function-determined stopping point
* `without()`: returns array without specified values
