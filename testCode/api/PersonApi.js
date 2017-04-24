import delay from './delay';
import axios from 'axios';


const generateId = (person) => {
  return person.firstName.toLowerCase() + '-' + person.lastName.toLowerCase();
};

class PersonApi {
  static getAllPeople(companyId) {
    return new Promise((resolve, reject) => {
      var url = 'http://localhost:3001/companies/' + companyId + '/people'
      axios.get(url)
        .then(function (response) {
          resolve(Object.assign([], response.data));
          // console.log("get all people", response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    });
  }

  static savePerson(person) {
      var url = 'http://localhost:3001/person/';
      var query = { name: person.name, address: person.email, companyId: person.companyId};
      person = Object.assign({}, person);
      return new Promise((resolve, reject) => {
        if(person._id) {    
          url = url + person._id;
          axios.put(url, query)
            .then(function(response){
              // console.log('person updated', response.data)
            }).catch(function (error) {
              console.log(error);
            })
        } else {
          axios.post(url, query)
            .then(function(response){
            // console.log('person posted', response.data)
          }).catch(function (error) {
            console.log(error);
          });  
        }
        resolve(person);
      });
  }    

  static deletePerson(personId) {
    var url = 'http://localhost:3001/person/' + personId;
    return new Promise((resolve, reject) => {
      axios.delete(url)
        .then(function (response) {
          console.log("person deleted", response.data);
          resolve();
        })
        .catch(function (error) {
          console.log(error);
        });
    });
  }
}

export default PersonApi;