# Function

+ in _strict mode_ `this` by default is `undefined`, in _normal mode_ is `Window`
+ __Rest parameters__ : `function(a, b, ...theArgs) { // ... }` last param prefixed by `...` - this arg becomes [ ];
    + !: IE, S;

## Properties

##### Function.caller
__Non-standard__

##### Function.length
length is a property of a function object, and indicates how many arguments the function expects, i.e. the number of formal parameters. This number does not include the rest parameter. By contrast, arguments.length is local to a function and provides the number of arguments actually passed to the function.

##### Function.name
+ !: IE

The name property returns the name of a function, or an empty string for anonymous functions:
