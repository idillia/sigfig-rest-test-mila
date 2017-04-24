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
      people: Object.assign({}, this.props.people)
    };
    this.redirectToAddPersonPage = this.redirectToAddPersonPage.bind(this);
  }

  redirectToAddPersonPage() {
    browserHistory.push('/edit/person');
  }

  componentDidMount() {
    this.props.dispatch(personActions.loadPeople(this.props.params.id))
  }

  componentWillReceiveProps(nextProps) {
    // console.log("PP this.props.people",this.props)
    // console.log("PP nextProps.people",nextProps)
    // console.log("the same: ", this.props.people == nextProps.people)
    // if(this.props.people != nextProps.people) {
    //   console.log("setting state this.props.people")
    //   this.setState({people: Object.assign({}, this.props.people)});
    // }
  }
  shouldComponentUpdate(nextProps, nextState){
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    // console.log("cwuPP this.state.people",nextState)
    // console.log("cwuPP nextProps.people",nextProps)
    //     if(this.props.people != nextProps.people) {
    //   console.log("setting state this.props.people")
    //   this.setState({people: Object.assign({}, nextState)});
    // }
  }

  render() {
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
  console.log("state.people", state)
  return {
    people: state.people
  };
}

export default connect(mapStateToProps)(PeoplePage);