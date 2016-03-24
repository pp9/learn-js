##### Array.from()
`Array.from(arrayLike[, mapFn[, thisArg]])`
The Array.from() method creates a new Array instance from an array-like or iterable object.

In ES6, class syntax allows for the subclassing of both built-in and user defined classes; as a result, class-side static methods such as Array.from are "inherited" by subclasses of Array and create new instances of the subclass, not Array.

##### Array.isArray()
`Array.isArray(obj)`
The Array.isArray() method returns true if an object is an array, false if it is not.

##### Array.of()
`Array.of(element0[, element1[, ...[, elementN]]])`
The Array.of() method creates a new Array instance with a variable number of arguments, regardless of number or type of the arguments.

The difference between Array.of() and the Array constructor is in the handling of integer arguments: Array.of(42) creates an array with a single element, 42, whereas Array(42) creates an array with 42 elements, each of which is undefined.
