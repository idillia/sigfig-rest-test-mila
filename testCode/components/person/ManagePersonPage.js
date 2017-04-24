import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as personActions from '../../actions/personActions';
import PersonForm from './PersonForm';
import toastr from 'toastr';
import {companiesFormattedForDropdown} from '../selectors/selectors';
import {browserHistory} from 'react-router';



export class ManagePersonPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      person: Object.assign({}, this.props.person),
      errors: {},
      saving: false
    };

    this.updatePersonState = this.updatePersonState.bind(this);
    this.savePerson = this.savePerson.bind(this);
    this.deletePerson = this.deletePerson.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.person._id != nextProps.person._id) {
      this.setState({person: Object.assign({}, nextProps.person)});
    }
  }

  updatePersonState(event) {
    const field = event.target.name;
    let person = this.state.person;
    person[field] = event.target.value;
    return this.setState({person:person});
  }

  companyFormIsValid() {
    let formIsValid = true;
    let errors = {};

    if(this.state.person.name.length < 2) {
      errors.name = 'Person\'s name must be at least 2 characters';
      formIsValid = false;
    }

    if(this.state.person.companyId == "") {
      errors.companyId = 'Select company';
      formIsValid = false;
    }
    this.setState({errors:errors});
    return formIsValid;
  }

  savePerson(event) {
    event.preventDefault();
    if(!this.companyFormIsValid()) {
      return;
    }

    this.setState({saving: true});
    this.props.actions.savePerson(this.state.person)
      .then(() => this.redirect())
      .catch(error => {
        toastr.error(error);
        this.setState({saving: false});
      });
  }

  redirect() {
    this.setState({saving: false});
    toastr.success('Person saved');
    window.location.reload();
    // browserHistory.push('/companies/'+ this.state.person.companyId + '/people');
    this.context.router.push('/');
  }

  deletePerson() {
    this.props.actions.deletePerson(this.state.person._id);
    browserHistory.push('/companies/'+ this.state.person.companyId + '/people');
  }
 
  render() {
    return (
      <div>
        <button onClick={this.deletePerson} className="btn btn-info btn-block">delete</button>
        <PersonForm 
          allCompanies={this.props.companies}
          onChange={this.updatePersonState}
          onSave={this.savePerson}
          person={this.state.person}
          errors={this.state.errors}
          saving={this.state.saving}
        />
      </div>  
    );
  }
}

ManagePersonPage.propTypes = {
  person: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  companies: PropTypes.array.isRequired
};

ManagePersonPage.contextTypes = {
  router: PropTypes.object
};

function getPersonById(people, id) {
  const person = people.filter(person => person._id == id);
  if(person) return person[0];
  return null;
}

function mapStateToProps(state, ownProps) {
  const personId = ownProps.params.id;
  let person = {name: '', email: '', companyId: '', _id:''};

  if(personId && state.people.length > 0) {
    person = getPersonById(state.people, personId);
  }

  return {
    person: person,
    companies: companiesFormattedForDropdown(state.companies)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(personActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManagePersonPage);