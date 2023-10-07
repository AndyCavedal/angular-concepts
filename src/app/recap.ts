const username: string = 'andy';
const sum = (a: number, b: number) => {
  return a + b;
}
sum(1, 4);

class Person {
  constructor (public age:number, public lastName: string) {
  }
}

const nico = new Person(15, 'Ricardo');
