export  function companiesFormattedForDropdown(companies) { 
  return companies.map(company => {
    return {
      value: company.id,
      text: company.name
    };
  });
}