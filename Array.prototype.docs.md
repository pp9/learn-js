##### Array.prototype.length
`arr.length`
The length property represents an unsigned, 32-bit integer that is always numerically greater than the highest index in the array.



##### Array.prototype.concat()
`Array arr.concat(value1[, value2[, ...[, valueN]]])`

concat creates a new array consisting of the elements in the object on which it is called, followed in order by, for each argument, the elements of that argument (if the argument is an array) or the argument itself (if the argument is not an array).

concat does not alter this or any of the arrays provided as arguments but instead returns a shallow copy that contains copies of the same elements combined from the original arrays. Elements of the original arrays are copied into the new array as follows:

Object references (and not the actual object): concat copies object references into the new array. Both the original and new array refer to the same object. That is, if a referenced object is modified, the changes are visible to both the new and original arrays.
Strings and numbers (not String and Number objects): concat copies the values of strings and numbers into the new array.

```js
var alpha = ['a', 'b', 'c'];
var alphaNumeric = alpha.concat(1, [2, 3]);
// Result: ['a', 'b', 'c', 1, 2, 3]
```


##### Array.prototype.copyWithin()
`arr.copyWithin(target, start[, end = this.length])`

:warning: ES6
:x: IE, S

The arguments target, start, and end are coerced to Number and truncated to integer values.

If start is negative, it is treated as length+start where length is the length of the array. If end is negative, it is treated as length+end.

The copyWithin function is intentionally generic, it does not require that its this value be an Array object and in addition, copyWithin is a  _mutable_ method, it will change this object itself, and return it, not just return a copy of it.



##### Array.prototype.entries()
`ArrayIterator arr.entries()`

:warning: ES6
:x: IE

The __entries()__ method returns a new __Array Iterator__ object that contains the key/value pairs for each index in the array.

```js
let arrIter = arr.entries();
arrIter.next().value;
arrIter.next().value;
```


##### Array.prototype.every()
`Boolean arr.every(callback[, thisArg])`

The every method executes the provided callback function once for each element present in the array until it finds one where callback returns a falsy value (a value that becomes false when converted to a Boolean). If such an element is found, the every method immediately returns false. Otherwise, if callback returned a true value for all elements, every will return true. callback is invoked only for indexes of the array which have assigned values; it is not invoked for indexes which have been deleted or which have never been assigned values.

callback is invoked with three arguments: the value of the element, the index of the element, and the Array object being traversed.

If a thisArg parameter is provided to every, it will be passed to callback when invoked, for use as its this value. Otherwise, the value undefined will be passed for use as its this value.  The this value ultimately observable by callback is determined according to [the usual rules for determining the this seen by a function.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)

every does not mutate the array on which it is called.

The range of elements processed by every is set before the first invocation of callback. Elements which are appended to the array after the call to every begins will not be visited by callback. If existing elements of the array are changed, their value as passed to callback will be the value at the time every visits them; elements that are deleted are not visited.

every acts like the "for all" quantifier in mathematics. In particular, for an empty array, it returns true. ([It is vacuously true](https://en.wikipedia.org/wiki/Vacuous_truth#Vacuous_truths_in_mathematics) that all elements of the [empty set](https://en.wikipedia.org/wiki/Empty_set#Common_problems) satisfy any given condition.)

```js
let res = arr.every(el => {
  typeof el === 'string';
});
//false
```

##### Array.prototype.fill()
`arr.fill(value[, start = 0[, end = this.length]])`
The fill() method fills all the elements of an array from a start index to an end index with a static value

##### Array.prototype.find()
`arr.find(callback[, thisArg])`
The find() method returns a value in the array, if an element in the array satisfies the provided testing function. Otherwise undefined is returned.

See also the findIndex() method, which returns the index of a found element in the array instead of its value.

##### Array.prototype.findIndex()
`arr.findIndex(callback[, thisArg])`
The findIndex() method returns an index in the array, if an element in the array satisfies the provided testing function. Otherwise -1 is returned.

See also the find() method, which returns the value of a found element in the array instead of its index.

##### Array.prototype.forEach()
`arr.forEach(callback[, thisArg])`
The forEach() method executes a provided function once per array element.

##### Array.prototype.includes()
`var boolean = array.includes(searchElement[, fromIndex])`
:warning: ES7
The includes() method determines whether an array includes a certain element, returning true or false as appropriate.

##### Array.prototype.indexOf()
`arr.indexOf(searchElement[, fromIndex = 0])`
The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.

##### Array.prototype.join()
`str = arr.join([separator = ','])`
The join() method joins all elements of an array into a string.

##### Array.prototype.keys()
`arr.keys()`
The keys() method returns a new Array Iterator that contains the keys for each index in the array.

##### Array.prototype.lastIndexOf()
`arr.lastIndexOf(searchElement[, fromIndex = arr.length - 1])`
The lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.

##### Array.prototype.map()
`arr.map(callback[, thisArg])`
The map() method creates a new array with the results of calling a provided function on every element in this array.

##### Array.prototype.pop()
`arr.pop()`
The pop() method removes the last element from an array and returns that element.

##### Array.prototype.push()
`arr.push(element1, ..., elementN)`
The push() method adds one or more elements to the end of an array and returns the new length of the array.

##### Array.prototype.reduce()
`arr.reduce(callback[, initialValue])`
The reduce() method applies a function against an accumulator and each value of the array (from left-to-right) to reduce it to a single value.

##### Array.prototype.reduceRight()
`arr.reduceRight(callback[, initialValue])`
The reduceRight() method applies a function against an accumulator and each value of the array (from right-to-left) has to reduce it to a single value.

##### Array.prototype.reverse()
`arr.reverse()`
The reverse() method reverses an array in place. The first array element becomes the last and the last becomes the first.

##### Array.prototype.shift()
`arr.shift()`
The shift() method removes the first element from an array and returns that element. This method changes the length of the array.

##### Array.prototype.some()
`arr.some(callback[, thisArg])`
The some() method tests whether some element in the array passes the test implemented by the provided function.

##### Array.prototype.sort()
`arr.sort([compareFunction])`
The sort() method sorts the elements of an array in place and returns the array. The sort is not necessarily stable. The default sort order is according to string Unicode code points.

##### Array.prototype.splice()
`array.splice(start, deleteCount[, item1[, item2[, ...]]])`
The splice() method changes the content of an array by removing existing elements and/or adding new elements.

##### .prototype.toLocaleString()
`arr.toLocaleString();`
The toLocaleString() method returns a string representing the elements of the array. The elements are converted to Strings using their toLocaleString methods and these Strings are separated by a locale-specific String (such as a comma “,”)

##### Array.prototype.toSource() :exclamation:
##### Array.prototype.toString()
`arr.toString()`
The toString() method returns a string representing the specified array and its elements.

##### Array.prototype.unshift()
`arr.unshift([element1[, ...[, elementN]]])`
The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.

##### Array.prototype.values()
`arr.values()`
The values() method returns a new Array Iterator object that contains the values for each index in the array.



##### Array.prototype.filter()
`Array arr.filter(callback[, thisArg])`

filter() calls a provided callback function once for each element in an array, and constructs a new array of all the values for which callback returns a true value or a value that coerces to true. callback is invoked only for indexes of the array which have assigned values; it is not invoked for indexes which have been deleted or which have never been assigned values. Array elements which do not pass the callback test are simply skipped, and are not included in the new array.

If a thisArg parameter is provided to filter, it will be passed to callback when invoked, for use as its this value.  Otherwise, the value undefined will be passed for use as its this value. The this value ultimately observable by callback is determined according to the usual rules for determining the this seen by a function.

filter() does not mutate the array on which it is called.

The range of elements processed by filter() is set before the first invocation of callback. Elements which are appended to the array after the call to filter() begins will not be visited by callback. If existing elements of the array are changed, or deleted, their value as passed to callback will be the value at the time filter() visits them; elements that are deleted are not visited.



##### Array.prototype.map()
`Array arr.map(callback[, thisArg])`

map calls a provided callback function once for each element in an array, in order, and constructs a new array from the results. callback is invoked only for indexes of the array which have assigned values, including undefined. It is not called for missing elements of the array (that is, indexes that have never been set, which have been deleted or which have never been assigned a value).

callback is invoked with three arguments: the value of the element, the index of the element, and the Array object being traversed.

If a thisArg parameter is provided to map, it will be passed to callback when invoked, for use as its this value. Otherwise, the value undefined will be passed for use as its this value. The this value ultimately observable by callback is determined according to the usual rules for determining the this seen by a function.

map does not mutate the array on which it is called (although callback, if invoked, may do so).

The range of elements processed by map is set before the first invocation of callback. Elements which are appended to the array after the call to map begins will not be visited by callback. If existing elements of the array are changed, or deleted, their value as passed to callback will be the value at the time map visits them; elements that are deleted are not visited.

```js
const arr3 = arr.map(el => {
  return el + 2;
});
// arr3 = [3, 6, 7, 12]
```



##### Array.prototype.slice()
`arr.slice([begin[, end]])`

slice does not alter. It returns a shallow copy of elements from the original array. Elements of the original array are copied into the returned array as follows:

 + For object references (and not the actual object), slice copies object references into the new array. Both the original and new array refer to the same object. If a referenced object changes, the changes are visible to both the new and original arrays.
 + For strings and numbers (not String and Number objects), slice copies strings and numbers into the new array. Changes to the string or number in one array does not affect the other array.

If a new element is added to either array, the other array is not affected.

```js
const arr = [1, 4, 5, 10];
const arr2 = arr.slice(0, 3);
// arr2 = [1, 4, 5]
```
