// Your code here
// Cat Class
class Cat {
    constructor(name, sex) {
      this.name = name;
      this.sex = sex;
    }
  
    speak() {
      return `${this.name} says meow!`;
    }
  }
  
  // Dog Class
  class Dog {
    constructor(name, sex) {
      this.name = name;
      this.sex = sex;
    }
  
    speak() {
      return `${this.name} says woof!`;
    }
  }
  
  // Bird Class
  class Bird {
    constructor(name, sex) {
      this.name = name;
      this.sex = sex;
    }
  
    speak() {
      if (this.sex === "male") {
        return `It's me! ${this.name}, the parrot!`;
      } else {
        return `${this.name} says squawk!`;
      }
    }
  }
  
  // Example Instances
  const myCat = new Cat("Whiskers", "female");
  console.log(myCat.speak()); // "Whiskers says meow!"
  
  const myDog = new Dog("Buddy", "male");
  console.log(myDog.speak()); // "Buddy says woof!"
  
  const maleBird = new Bird("Charlie", "male");
  console.log(maleBird.speak()); // "It's me! Charlie, the parrot!"
  
  const femaleBird = new Bird("Polly", "female");
  console.log(femaleBird.speak()); // "Polly says squawk!"
  