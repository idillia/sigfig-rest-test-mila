import React from 'react';
import TextInput from '../common/TextInput';
import NumberInput from '../common/NumberInput';
import SelectInput from '../common/SelectInput';

const PersonForm = ({person,allCompanies, onSave, onChange, saving, errors}) => {
  return (
    <form>
      <h1>Manage Person</h1>
      <TextInput
        name="name"
        label="Person Name"
        value={person.name}
        onChange={onChange}
        error={errors.name} /> 

      <TextInput
        name="email"
        label="Person Email"
        value={person.email}
        onChange={onChange}
        error={errors.email} /> 

      <SelectInput
        name="companyId"
        label="Company"
        value={person.companyId}
        defaultOption="SelectCompany"
        options={allCompanies} 
        onChange={onChange}
        error={errors.companyId} />  

      <input
        type="submit"
        disabled={saving}
        value={saving ? 'Saving...' : 'Save'}
        className="btn btn-primary"
        onClick={onSave} />  
    </form>
  );
};

PersonForm.propTypes = {
  person: React.PropTypes.object.isRequired,
  allCompanies: React.PropTypes.array,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  saving: React.PropTypes.bool,
  errors: React.PropTypes.object
};

export default PersonForm;



