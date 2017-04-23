export  function companiesFormattedForDropdown(companies) { 
  return companies.map(company => {
    return {
      value: company._id,
      text: company.name
    };
  });
}