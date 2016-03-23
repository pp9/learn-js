### Object

##### Object.create()
`Object.create(Object prototype || null [, propertiesObject]);`

[The difference between `new` and `create`](http://stackoverflow.com/a/14593952)

```js
const proto = {
    getProp1() {
        return this.prop1;
    }
}
const obj = Object.create(proto, {
    'prop1': {
        value: "val for prop1",
        writable: true,
        enumerable: true,
        configurable: true
    }
});
```
##### Object.defineProperty()
Defines a new property directly on an object, or modifies an existing property on an object, and returns the object.

`Object.defineProperty(Object obj, String prop, Object descriptor);`
```js
Object.defineProperty(obj1, 'prop2', {
    value: "val for prop2",
    writable: true,
    enumerable: true,
    configurable: true,
    // get() {
    //     return 'this is value';
    // },
    // set(val) {
    //     return val += 1;
    // }
});
```

##### Object.defineProperties()
Defines new or modifies existing properties directly on an object, returning the object.

`Object.defineProperties(Object obj, Object descriptor);`

```js
Object.defineProperties(obj1, {
    'prop3': {
        value: "val for prop3",
        writable: true,
        enumerable: true,
        configurable: true,
        // get() {
        //     return 'this is value';
        // },
        // set(val) {
        //     return val += 1;
        // }
    }
});
```

##### Object.assign()
:warning:
ES6

:x: IE

Used to copy the values of all enumerable own properties from one or more source objects to a target object. It will return the target object.
Acts like extend().

`Object.assign(Object target, ...sources);`

```js
Object.assign(obj1, obj2, obj3);
```

##### Object.entries()
+ ES6;
+ !: None;

Returns an array of a given object's own enumerable property [key, value] pairs, in the same order as that provided by a for...in loop (the difference being that a for-in loop enumerates properties in the prototype chain as well).

##### Object.freeze()
Freezes an object: that is, prevents new properties from being added to it; prevents existing properties from being removed; and prevents existing properties, or their enumerability, configurability, or writability, from being changed. In essence the object is made effectively immutable. The method returns the object being frozen.

`Object.freeze(obj)`

##### Object.getOwnPropertyDescriptor()
Returns a property descriptor for an own property (that is, one directly present on an object, not present by dint of being along an object's prototype chain) of a given object.
`Object Object.getOwnPropertyDescriptor(Object obj, String prop)`

##### Object.getOwnPropertyNames()
 Returns an array of all properties (enumerable or not) found directly upon a given object.
 `Array Object.getOwnPropertyNames(Object obj);`

##### Object.getOwnPropertySymbols()
+ ES6;
+ !: IE;

Returns an array of all symbol properties found directly upon a given object.
`Array Object.getOwnPropertySymbols(Object obj)`


##### Object.getPrototypeOf()
Returns the prototype (i.e. the value of the internal [[Prototype]] property) of the specified object.
Return the `__proto__` value.
`Object Object.getPrototypeOf(Object obj)`

##### Object.is()
+ ES6
+ !: IE, S

Determines whether two values are the same value.
Looks like more strict copy of `===` operator.
`Boolean Object.is(value1, value2);`

##### Object.isExtensible()
Determines if an object is extensible (whether it can have new properties added to it).
Eeturn false is obj is `Object.preventExtensions()`, `Object.seal()`, or `Object.freeze()`.
`Boolean Object.isExtensible(obj);`

##### Object.isFrozen()
Determines if an object is frozen.
An object is frozen if and only if it is not extensible, all its properties are non-configurable, and all its data properties (that is, properties which are not accessor properties with getter or setter components) are non-writable.

##### Object.isSealed();
Returns true if the object is sealed, otherwise false. An object is sealed if it is not extensible and if all its properties are non-configurable and therefore not removable (but not necessarily non-writable).
`Boolean Object.isSealed(obj)`

##### Object.seal()
By default, objects are extensible (new properties can be added to them). Sealing an object prevents new properties from being added and marks all existing properties as non-configurable. This has the effect of making the set of properties on the object fixed and immutable. Making all properties non-configurable also prevents them from being converted from data properties to accessor properties and vice versa, but it does not prevent the values of data properties from being changed. Attempting to delete or add properties to a sealed object, or to convert a data property to accessor or vice versa, will fail, either silently or by throwing a TypeError (most commonly, although not exclusively, when in strict mode code).
`Object Object.seal(obj)`

##### Object.setPrototypeOf()
+ x: Changing the [[Prototype]] of an object is, by the nature of how modern JavaScript engines optimize property accesses, a very slow operation, in every browser and JavaScript engine. The effects on performance of altering inheritance are subtle and far-flung, and are not limited to simply the time spent in obj`.__proto__` = ... statement, but may extend to any code that has access to any object whose [[Prototype]] has been altered. If you care about performance you should avoid setting the [[Prototype]] of an object. Instead, create a new object with the desired [[Prototype]] using Object.create().
+ !: S, IE11

Throws a TypeError exception if the object whose [[Prototype]] is to be modified is non-extensible according to Object.isExtensible(). Does nothing if the prototype parameter isn't an object or null (i.e., number, string, boolean, or undefined). Otherwise, this method changes the [[Prototype]] of obj to the new value.

Object.setPrototypeOf() is in the latest ECMAScript 6 standard draft. It is generally considered the proper way to set the prototype of an object, vs. the more controversial Object.prototype.__proto__ property.
`Object.setPrototypeOf(obj, prototype);`

##### Object.values()
+ !: none

Object.values() returns an array whose elements are strings corresponding to the enumerable property values found directly upon object. The ordering of the properties is the same as that given by looping over the property values of the object manually.
`Array Object.values(obj);`

##### Object.keys()
Object.keys() returns an array whose elements are strings corresponding to the enumerable properties found directly upon object. The ordering of the properties is the same as that given by looping over the properties of the object manually.

`Array Object.keys(obj)`

##### Object.preventExtensions()
An object is extensible if new properties can be added to it. Object.preventExtensions() marks an object as no longer extensible, so that it will never have properties beyond the ones it had at the time it was marked as non-extensible. Note that the properties of a non-extensible object, in general, may still be deleted. Attempting to add new properties to a non-extensible object will fail, either silently or by throwing a TypeError (most commonly, but not exclusively, when in strict mode).

Object.preventExtensions() only prevents addition of own properties. Properties can still be added to the object prototype. However, calling Object.preventExtensions() on an object will also prevent extensions on its __proto__  property.

If there is a way to turn an extensible object to a non-extensible one, there is no way to do the opposite in ECMAScript 5.
`Object.preventExtensions(obj)`
