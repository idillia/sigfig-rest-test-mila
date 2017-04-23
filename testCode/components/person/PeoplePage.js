import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as personActions from '../../actions/personActions';
import PersonList from './PersonList';
import {browserHistory} from 'react-router';

class PeoplePage extends React.Component {

  componentWilllMount() {
    console.log("dispatch:loadPeople")
    this.props.dispatch(loadPeople(this.props.params.id))
  }

  render() {
    // console.log(this.props.params.id)
    const {people} = this.props;
    return (
      <div className = "card">
        <h2 className ="card-header">People</h2> 
        <div type="submit" value="Add Person" className="card-header" onClick={this.redirectToAddPersonPage}>Add Person</div>
        <div className="card-block">
          <PersonList people={people} />
        </div>
      </div>
    );
  }
}

PeoplePage.propTypes = {
  people: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  console.log("state in PeoplePage", state)
  console.log("ownProps in PeoplePage", ownProps)
  // let person = {name: '', email: '', _id: ''};
  return {
    people: state.people
  };
}

export default connect(mapStateToProps)(PeoplePage);