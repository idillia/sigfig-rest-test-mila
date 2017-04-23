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
      errors: {},
      saving: false
    };

    // this.loadPeople = this.loadPeople.bind(this);
    // this.onClickSave = this.onClickSave.bind(this);
  }
  componentDidMount() {
    // if (__CLIENT__) {
    //     // initialize google map here

    // }
    console.log("hello")
        this.props.dispatch(personActions.loadPeople(this.props.params.id))

}


  componentWillReceiveProps(nextProps) {
    console.log("nextPR", nextProps)
        if(this.props.people != nextProps.people) {

      this.setState({people: Object.assign({}, nextProps.people)});
    }
  }

    componentWillUpdate(nextProps, nextState) {
      if(this.props != nextProps) {
              console.log("cwu", nextProps)

      }
    }







  render() {
    // const people= "help";

    if (this.props.people[0] != "undefiend"){
      console.log("this.props", this.props.people)
       const {people} = this.props;

    }
       const {people} = this.props;

        console.log("statew", this.state)
          var a = this.props.people
          console.log("tp",  a)
    return (
      <div><PersonList people={people} /></div>
    );
  }
}


PeoplePage.propTypes = {
  people: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  console.log("state in PeoplePage", state)

  return {
    people: state.people
  };
}

// export default PeoplePage;
export default connect(mapStateToProps)(PeoplePage);