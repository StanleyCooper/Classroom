// Class: A blueprint for creating objects which makes it easy to create multiple objects that all have similar properties
// A class instance is an object built to the specifications of the class.

// Syntax:
// You use the keyword "class" to define a new class, like this:
class Event {
    // TODO
}; 

// To create an instance of the class, you use the "new" keyword and invoke the Event class like a function
// const lunch = new Event();
// console.log(lunch);

// May have a constructor function.
// Constructoris a special function that defines how a new instance of the class is created.
class Event {
  constructor() {
      console.log("Calling the constructor function");
    }
}
// Each time you create a new instance of the class, the constructor function is called

// The this keyword is used to reference the internals of a specific instance
class Event {
    constructor(name, startTime, endTime, location) {
        this.name = name;
        this.startTime = startTime;
        this.endTime = endTime;
        this.location = location;
    }
}
// Then you can create a new event by running the following code:
const lunch = new Event("Lunch", "12:00", "13:00", "Chipotle");

// Despite being an instance of the Event class, this object will act as any other object
lunch.startTime;
lunch.location;

const dinner = new Event("Dinner", "18:00", "19:30");
console.log(dinner); // location is "undefined"

// You can also use conditional statements within your constructor:
class Event {
    constructor(name, attendees, startTime, locationName, address) {
      let guests = null;
      if (attendees.length === 1) {
        guests = attendees[0];
      } else if (attendees.length > 1) {
        guests = `${attendees.length} attendees`;
      }
  
      this.name = guests ? `${name} with ${guests}` : name;
      this.details = { startTime, attendees, groupSize: attendees.length };
      this.location = { name: locationName, address };
    }
  }
  const event = new Event("Dinner", ["Sal"], 1830, "Frankie's", "477 Rain St.");
  /*
    Event {
      name: 'Dinner with Sal',
      details: { startTime: 1830, attendees: [ 'Sal' ], groupSize: 1 },
      location: { name: "Frankie's", address: '477 Rain St.' }
    }
  */

// You can also define methods when building a class
class Event {
    constructor(name, startTime, endTime, location) {
      // ...
    }
    toString() {
      // ...
    }
    isBefore(otherEvent) {
      // ...
    }
}