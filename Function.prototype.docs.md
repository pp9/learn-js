## Methods

##### Function.prototype.call()
__Note__: While the syntax of this function is almost identical to that of `apply()`, the fundamental difference is that call() accepts an *argument list*, while `apply()` accepts a *single array of arguments*.

A different this object can be assigned when calling an existing function. this refers to the current object, the calling object. With call, you can write a method once and then inherit it in another object, without having to rewrite the method for the new object.

`fun.call(thisArg[, arg1[, arg2[, ...]]]);`

##### Function.prototype.bind()
The bind() function creates a new function (a *bound function*) with the same function body (internal call property in ECMAScript 5 terms) as the function it is being called on (the bound function's *target function*) with the this value bound to the first argument of bind(), which cannot be overridden. bind() also accepts leading default arguments to provide to the target function when the bound function is called. A bound function may also be constructed using the new operator: doing so acts as though the target function had instead been constructed. The provided this value is ignored, while prepended arguments are provided to the emulated function.

`Function fun.bind(thisArg[, arg1[, arg2[, ...]]]);`


##### Function.prototype.apply()
__Note__: While the syntax of this function is almost identical to that of call(), the fundamental difference is that call() accepts an argument list, while apply() accepts a single array of arguments.

You can assign a different this object when calling an existing function. this refers to the current object, the calling object. With apply, you can write a method once and then inherit it in another object, without having to rewrite the method for the new object

`fun.apply(thisArg, arg1, arg2, arg3);`


##### Function.prototype.isGenerator() :warning:

##### Function.prototype.toSource() :warning:

##### Function.prototype.toString()
Returns a function body
