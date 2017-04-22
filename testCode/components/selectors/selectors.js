export  function peopleFormattedForDropdown(people) { 
  return people.map(person => {
    return {
      value: person.id,
      text: person.firstName + ' ' + person.lastName
    };
  });
}