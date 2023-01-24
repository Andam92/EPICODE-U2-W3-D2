class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  confrontAge(p1, p2, p3) {
    if (p1.age > p2.age || p1.age > p3.age) {
      console.log(p1.name, "è più vecchio di ", p2.name, " e ", p3.name);
    } else if (p2.age > p1.age || p2.age > p3.age) {
      console.log(p2.name, "è più vecchio di ", p1.name, " e ", p3.name);
    } else {
      console.log(p3.name, "è più vecchio di", p1.name, "e ", p2.name);
    }
  }
}

let p1 = new Person("Antonio", 31);
let p2 = new Person("Roberta", 30);
let p3 = new Person("Federico", 27);

console.log(p1.confrontAge(p1, p2, p3));

/* function confrontAge() {
  if (p1.age > p2.age) {
    console.log(p1.name, "è più vecchio di ", p2.name);
  } else {
    console.log(p2.name, "è più vecchio di " + p1.name);
  }
}
console.log(confrontAge()); */

// console.log(p1.quote(), p2, p3);

/* class Student extends Person {
  constructor(name, age, adress) {
    super(name, age);
    this.adress = adress;
  }
}

let Tizio = new Student("Tizio", 25, "via Arimondi 209");
console.log(Tizio);
 */
