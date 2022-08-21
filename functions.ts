import { RandomPicker } from "./src/ddt/RandomPicker";

export const subtraction = (a: number, b: number): number => {
  return a - b;
};


// call a class
const items = [
  { original: "Bronze", weight: 20 },
  { original: "Silver", weight: 10 },
  { original: "Gold", weight: 3 },
  { original: "Platinum", weight: 1 },
];
const picker = new RandomPicker(items);
const pickedItem = picker.pick();
const picked = picker.pickMany(3);
console.log('at functions');
console.log({pickedItem});
console.dir(picked);


export const myObject = {
  PI: 3.14,
  sayName: (): void => {
    console.log(`Hello sayName`);
  }
};