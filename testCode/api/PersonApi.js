import delay from './delay';
import axios from 'axios';



const people = [
  {
    id: 'cory-house',
    firstName: 'Cory',
    lastName: 'House'
  },
  {
    id: 'scott-allen',
    firstName: 'Scott',
    lastName: 'Allen'
  },
  {
    id: 'dan-wahlin',
    firstName: 'Dan',
    lastName: 'Wahlin'
  }
];

const generateId = (person) => {
  return person.firstName.toLowerCase() + '-' + person.lastName.toLowerCase();
};

class PersonApi {
  static getAllPeople() {
    return new Promise((resolve, reject) => {

    });
   
  }

  static savePerson(person) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minPersonNameLength = 3;
        if (person.firstName.length < minPersonNameLength) {
          reject(`First Name must be at least ${minPersonNameLength} characters.`);
        }

        if (person.lastName.length < minPersonNameLength) {
          reject(`Last Name must be at least ${minPersonNameLength} characters.`);
        }

        if (person.id) {
          const existingPersonIndex = people.findIndex(a => a.id == person.id);
          people.splice(existingPersonIndex, 1, person);
        } else {
          //Just simulating creation here.
          //The server would generate ids for new people in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          person.id = generateId(person);
          people.push(person);
        }

        resolve(Object.assign({}, person));
      }, delay);
    });
  }

  static deleteAuthor(personId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfPersonToDelete = people.findIndex(person => {
          person.personId == personId;
        });
        people.splice(indexOfPersonToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default PersonApi;