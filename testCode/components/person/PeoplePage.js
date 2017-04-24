import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as personActions from '../../actions/personActions';
import PersonList from './PersonList';
import {browserHistory} from 'react-router';

class PeoplePage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      people: Object.assign({}, this.props.people),
      deleting: {},
      error: false
    };
    this.redirectToAddPersonPage = this.redirectToAddPersonPage.bind(this);
  }

  componentDidMount() {
    this.props.actions.loadPeople(this.props.params.id);
  }

  redirectToAddPersonPage() {
    browserHistory.push('/edit/person');
  }

  render() {
    const {people} = this.props;
    return (
      <div className = "card">
        <h2 className ="card-header">People </h2>  
        <button className="btn btn-info btn-block" type="submit" onClick={this.redirectToAddPersonPage}>Add Person</button>
        <div className="card-block">
          <div><PersonList people={people} /></div>
        </div>
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