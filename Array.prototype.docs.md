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
