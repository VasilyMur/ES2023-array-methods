const fruits = ['orange', 'banana', 'apple'];

const fruits2 = [...fruits];

fruits2[1] = 'kiwi';

const fruits3 = fruits.map((fruit, index) => {
  if (index === 1) {
    return 'kiwi';
  }

  return fruit;
});

const fruits4 = fruits.with(1, 'mango');
const fruitsSorted = fruits.toSorted();
const fruitsReversed = fruits.toReversed();

const removed = fruits.toSpliced(1, 1);

console.log('fruits > ', fruits);
console.log('fruits2 > ', fruits2);
console.log('fruits3 > ', fruits3);
console.log('fruits4 > ', fruits4);

console.log('fruitsSorted > ', fruitsSorted);
console.log('fruitsReversed > ', fruitsReversed);