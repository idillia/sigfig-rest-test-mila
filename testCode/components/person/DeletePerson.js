import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as personActions from '../../actions/personActions';
import toastr from 'toastr';



  class DeletePerson extends React.Component {
   deletePerson(personId, e) {
    e.preventDefault()
      console.log(`This is enter on item, which is called  ${personId}!`)
    // this.setState({deleting: true});
    this.props.dispatch(personActions.deletePerson(personId))
      .then(() => console.log("del success"))
      .catch(error => {
        toastr.error(error);
        // this.setState({saving: false});
      });


  }

  render() {
    console.log("prop in del", this.props)
    var personId = "58fa714d413f4c0aa21e4f56"
    return (
      <button type="submit" onClick={this.deletePerson.bind(this, personId)}>DeletePerson </button>
    )
  }

}


function getPersonById(people, id) {
  const person = people.filter(person => person._id == id);
  if(person) return person[0];
  return null;
}

function mapStateToProps(state, ownProps) {
  console.log(ownProps)
  console.log(state)
  // const personId = ownProps.params.id;
  // let person = {name: '', email: '', companyId: '', _id:''};

  // if(personId && state.people.length > 0) {
  //   person = getPersonById(state.people, personId);
  // }

  return {
    person: state.people
  };
}

export default connect(mapStateToProps)(DeletePerson);