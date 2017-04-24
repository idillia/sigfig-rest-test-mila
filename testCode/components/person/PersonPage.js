import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import PersonListRow from './PersonListRow';
// import DeletePerson from './DeletePerson'; 
import {bindActionCreators} from 'redux';
import * as personActions from '../../actions/personActions';




export class PersonPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      person: Object.assign({}, this.props.person), 

    };
    this.deletePerson = this.deletePerson.bind(this);
  }

  deletePerson() {
        console.log("called", this.state.person)

    this.props.actions.deletePerson(this.state.person._id)
  }
  render() {
    const {person} = this.props;
    return (
    <div> 
     <button onClick={this.deletePerson} className="btn btn-default  ">delete</button>
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

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(personActions, dispatch)
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(PersonPage);