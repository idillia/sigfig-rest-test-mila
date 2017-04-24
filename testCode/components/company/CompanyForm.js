import React from 'react';
import TextInput from '../common/TextInput';
import NumberInput from '../common/NumberInput';
import SelectInput from '../common/SelectInput';

const CompanyForm = ({company,onSave, onChange, saving, errors}) => {
  return (
    <form>
      <h1>Manage Company</h1>
      <TextInput
        name="name"
        label="Company Name"
        value={company.name}
        onChange={onChange}
        error={errors.name} /> 

      <TextInput
        name="address"
        label="Address"
        value={company.address}
        onChange={onChange}
        error={errors.address} /> 

      <TextInput
        name="phone"
        label="Phone"
        value={company.phone}
        onChange={onChange}
        error={errors.phone} /> 

      <NumberInput
        name="revenue"
        label="Revenue"
        value={company.revenue}
        onChange={onChange}
        error={errors.revenue} /> 

      <input
        type="submit"
        disabled={saving}
        value={saving ? 'Saving...' : 'Save'}
        className="btn btn-primary"
        onClick={onSave} />  
    </form>
  );
};

CompanyForm.propTypes = {
  company: React.PropTypes.object.isRequired,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  saving: React.PropTypes.bool,
  errors: React.PropTypes.object
};

export default CompanyForm;
