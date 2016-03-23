'use strict';

const proto = {
    getProp1() {
        return this.prop1;
    }
}
function MyClass() {
    this.name = 'this is name prop';
    this.getName = function() {
        return name;
    }
}

const obj = Object.create(new Array('some', 'esle', 'and'), {
    'prop1': {
        value: "val for prop1",
        writable: true,
        enumerable: true,
        configurable: true
    }
});
const obj2 = {
    val1: 'val of val1',
    fn() {
        return this.val1 + 'new';
    }
}

const obj1 = Object.create(obj2);

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
Object.defineProperties(obj1, {
    'prop3': {
        value: "val for prop3",
        writable: true,
        enumerable: true,
        configurable: true,
    }
});

Object.freeze(obj1);
let obj3 = {
    val1: 'val of val1',
    fn() {
        return this.val1 + 'new';
    }
}
var d1 = {
    some: 10
}
Object.freeze(d1);
var d2 = {};
Object.defineProperty(d2, 'some', {
    value: 10,
    writable: false,
    enumerable: true,
    configurable: false,
});
function demoFunc(a1, a2, ...a3) {
    return a1 + a2;
};
// console.log(Symbol);
var sym1 = Symbol('this is hidden property =>');

var d3 = {
    name: 'some name',
    [sym1]() {
        return 'some hidden method';
    }
}
demoFunc();

const arr = [1, 4, 5, 10];
// const arr2 = arr.slice(0, 3);
// const arr3 = arr.map(el => {
//   return el + 2;
// });
const arr3 = arr.filter(el => {
  if(el > 2) return true;
});
console.log(arr3);
