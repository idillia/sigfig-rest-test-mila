import React, {PropTypes} from 'react';
import PersonListRow from './PersonListRow';

const PersonList = ({people}) => {
  return (
    <div>
        {people.map(person => 
          <PersonListRow key={person._id} person={person}/>
        )}
    </div>
  );
};

PersonList.propTypes = {
  people: PropTypes.array.isRequired
};

export default PersonList;


