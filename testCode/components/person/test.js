import React, {PropTypes} from 'react';



class Test extends React.Component {
  componentDidlMount() {
    console.log("cdm")
    // loadPeople ();
    //     this.props.dispatch(personActions.loadPeople(this.props.params.id))

  }
  render() {
    return (
     <div>hllo</div>
  )   
  }

}  


// const Test = ({people}) => {
//   console.log(people)
//   return (
//     <div>
//         {people}
//     </div>
//   );
// };

Test.propTypes = {
  people: PropTypes.array.isRequired
};

export default Test;


