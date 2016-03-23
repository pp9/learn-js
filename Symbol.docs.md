# Symbol
A *symbol* is a unique and immutable data type and may be used as an identifier for object properties. The symbol object is an implicit object wrapper for the symbol primitive data type.

`Symbol([description]);`
```js
let sym1 = Symbol('this is hidden property =>');
let d3 = {
    name: 'some name',
    [sym1]() {
        return 'some hidden method';
    }
}
```
Method sym1 can only be envoken like this `d3[sym1]()` - `d3.sym1 == error`;
