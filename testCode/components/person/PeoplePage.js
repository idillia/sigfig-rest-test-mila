import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as personActions from '../../actions/personActions';
import PersonList from './PersonList';
import {browserHistory} from 'react-router';
import Test from './test'
import {Link} from 'react-router';


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

   deletePerson(event, id) {

    console.log("deleting")
    this.setState({deleting: true});
    this.props.dispatch(personActions.deletePerson(id))
      .then(() => this.redirect())
      .catch(error => {
        toastr.error(error);
        this.setState({saving: false});
      });
  }


  // newFn() {
  //   var args = Array.prototype.slice.call(arguments);

  //   this.deletePerson.apply(this, args);
  //  }

  redirectToAddPersonPage() {
    browserHistory.push('/edit/person');
  }

  componentDidMount() {
    this.props.dispatch(personActions.loadPeople(this.props.params.id))
  }

  componentWillReceiveProps(nextProps) {

  }
  shouldComponentUpdate(nextProps, nextState){
    return true;
  }

  componentWillUpdate(nextProps, nextState) {

  }

  render() {
    // console.log("PeoplePage",this.newFn)
    const {people} = this.props;
    return (
      <div className = "card">
        <h2 className ="card-header">People</h2>  
        <div type="submit"
        value="Add Person"
        className="card-header"
        onClick={this.redirectToAddPersonPage}>Add Person</div>
        <div className="card-block">
        
      <div><PersonList people={people} /></div>
      </div>
     </div> 
    );
  }
}



PeoplePage.propTypes = {
  people: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    people: state.people
  };
}

export default connect(mapStateToProps)(PeoplePage);