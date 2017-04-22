import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as companyActions from '../../actions/companyActions';
import CompanyList from './CompanyList';
import {browserHistory} from 'react-router';

class CompaniesPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.redirectToAddCompanyPage = this.redirectToAddCompanyPage.bind(this);
  }

  redirectToAddCompanyPage() {
    browserHistory.push('/company');
  }

  render() {
    const {companies} = this.props;
    return (
      <div>
        <h1>Hello</h1>
        <input type="submit"
               value="Add Company"
               className="btn btn-primary"
               onClick={this.redirectToAddCompanyPage} />
        <CompanyList companies={companies} />
      </div>
    );
  }
}

CompaniesPage.propTypes = {
  companies: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    companies: state.companies
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(companyActions, dispatch)
  };
}



export default connect(mapStateToProps, mapDispatchToProps)(CompaniesPage);