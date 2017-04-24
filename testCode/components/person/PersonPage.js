import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import PersonListRow from './PersonListRow';

export class PersonPage extends React.Component {
  render() {
    const {person} = this.props;
    return (
    <div className = "card">
      <PersonListRow person = {person} />
    </div>
    );
  }
}

PersonPage.propTypes = {
  person: PropTypes.object.isRequired
};

function getPersonById(people, id) {

  const person = people.filter(person => person._id == id);
  if(person) return person[0];
  return null;
}

function mapStateToProps(state, ownProps) {
  const personId = ownProps.params.id;
  let person = {name: '', email: '', _id:'', companyId: ''};

  if(personId && state.people.length > 0) {
    person = getPersonById(state.people, personId);
  }

  return {
    person: person
  };
}


export default connect(mapStateToProps)(PersonPage);