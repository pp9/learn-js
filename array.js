const objDemo = {
  val1: 'smm',
  val2: 10,
  meth1(i) {
    return i + 1;
  }
}
const arr = [0, 10, objDemo, 'string', false, null];
// arr.copyWithin(3, 3);
// let arrIter = arr.entries();
// console.log(typeof arr[3]);
let res = arr.every((el => {
  typeof el === 'string';
}));

arr.fill(0);

const arr3 = arr.filter(el => {
  if(el > 2) return true;
});
