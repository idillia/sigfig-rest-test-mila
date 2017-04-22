import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as personActions from '../../actions/personActions';
import PersonList from './PersonList';
import {browserHistory} from 'react-router';

class PeoplePage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.redirectToAddPersonPage = this.redirectToAddPersonPage.bind(this);
  }

  redirectToAddPersonPage() {
    browserHistory.push('/edit/person');
  }

  render() {
    const {people} = this.props;
    return (
      <div>
        <h1>List of people</h1>
        <input type="submit"
               value="Add Person"
               className="btn btn-primary"
               onClick={this.redirectToAddPersonPage} />
        <PersonList people={people} />

      </div>
    );
  }
}

PeoplePage.propTypes = {
  people: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    people: state.people
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(personActions, dispatch)
  };
}



export default connect(mapStateToProps, mapDispatchToProps)(PeoplePage);