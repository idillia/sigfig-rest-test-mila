import React, {PropTypes} from 'react';
import CompanyListRow from './CompanyListRow';

const CompanyList = ({companies}) => {
  return (
    <div>
        {companies.map(company => 
          <CompanyListRow key={company._id} company={company}/>
        )}
    </div>
  );
};

CompanyList.propTypes = {
  companies: PropTypes.array.isRequired
};

export default CompanyList;


