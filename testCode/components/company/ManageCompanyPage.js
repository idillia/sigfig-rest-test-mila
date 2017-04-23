import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as companyActions from '../../actions/companyActions';
import CompanyForm from './CompanyForm';
import toastr from 'toastr';


export class ManageCompanyPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      company: Object.assign({}, this.props.company),
      errors: {},
      saving: false
    };

    this.updateCompanyState = this.updateCompanyState.bind(this);
    this.saveCompany = this.saveCompany.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.company.id != nextProps.company.id) {
      this.setState({company: Object.assign({}, nextProps.company)});
    }
  }

  updateCompanyState(event) {
    const field = event.target.name;
    let company = this.state.company;
    company[field] = event.target.value;
    return this.setState({company:company});
  }

  companyFormIsValid() {
    let formIsValid = true;
    let errors = {};

    if(this.state.company.name.length < 3) {
      errors.name = 'Comapany name must be at least 3 characters.';
      formIsValid = false;
    }
    this.setState({errors:errors});
    return formIsValid;
  }

  saveCompany(event) {
    event.preventDefault();
    if(!this.companyFormIsValid()) {
      return;
    }

    this.setState({saving: true});
    this.props.actions.saveCompany(this.state.company)
      .then(() => this.redirect())
      .catch(error => {
        toastr.error(error);
        this.setState({saving: false});
      });
  }

  redirect() {
    this.setState({saving: false});
    toastr.success('Company saved');
    window.location.reload()  
    this.context.router.push('/companies');
  }
 
  render() {
    return (
        <CompanyForm 
          onChange={this.updateCompanyState}
          onSave={this.saveCompany}
          company={this.state.company}
          errors={this.state.errors}
          saving={this.state.saving}
        />
    );
  }
}

ManageCompanyPage.propTypes = {
  company: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};

ManageCompanyPage.contextTypes = {
  router: PropTypes.object
};

function getCompanyById(companies, id) {
  const company = companies.filter(company => company._id == id);
  if(company) return company[0];
  return null;
}

function mapStateToProps(state, ownProps) {
  const companyId = ownProps.params.id;
  let company = {address: '', name: '', phone: '', revenue: '', _id: ''};

  if(companyId && state.companies.length > 0) {
    company = getCompanyById(state.companies, companyId);
  }

  return {
    company: company
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(companyActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCompanyPage);