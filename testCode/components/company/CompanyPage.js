import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import CompanyListRow from './CompanyListRow';


export class CompanyPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.onClickSave = this.onClickSave.bind(this);
  }
  onClickSave() {
    this.props.dispatch(personActions.loadPeople(this.props.params.id))
        browserHistory.push('/companies/' + this.props.company._id + '/people');
  }
 
  render() {
    const {company} = this.props;
    return (
      <div>
        <CompanyListRow company = {company}/>
      </div>

    );
  }
}

CompanyPage.propTypes = {
  company: PropTypes.object.isRequired
};


function getCompanyById(companies, id) {

  const company = companies.filter(company => company._id == id);
  if(company) return company[0];
  return null;
}

function mapStateToProps(state, ownProps) {
  // console.log(state)
  const companyId = ownProps.params.id;
  let company = {address: '', name: '', phone: '', revenue: '', _id: ''};

  if(companyId && state.companies.length > 0) {
    company = getCompanyById(state.companies, companyId);
  }

  return {
    company: company
  };
}

export default connect(mapStateToProps)(CompanyPage);




//     <div className = "card">
//       <div className = "card-header card-title">
//         <h3>{company.name}</h3>
//         <Link to={'/edit/company/' + company._id}>Edit</Link>
//       </div>
//       <div className = "card-block">
//         <span>Address</span>
//         <p className = "card-text">{company.address}</p>
//         <span>Revenue</span>
//         <p className = "card-text">{company.revenue}</p>
//         <span>Phone</span>
//         <p className = "card-text">{company.phone}</p>
//       </div>
//       <div className = "card-footer text-muted">
//               <button type="submit" onClick={this.onClickSave}>Get People</button>
// <Link to={'/companies/' + company._id + '/people'}>See who works there</Link>
//       </div>
//     </div>