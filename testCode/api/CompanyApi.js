import axios from 'axios';

class CompanyApi {

  static getAllCompanies() {
    return new Promise((resolve, reject) => {
      var url = 'http://localhost:3001/companies/';
      axios.get(url)
        .then(function (response) {
          resolve(Object.assign([], response.data));
        })
        .catch(function (error) {
          console.log(error);
        });
    });
  }

  static saveCompany(company) {
    var url = 'http://localhost:3001/companies/';
    var query = { name: company.name, address: company.address, phone: company.phone, revenue: company.revenue};
    company = Object.assign({}, company);
    return new Promise((resolve, reject) => {
      if(company._id) {    
        url = url + company._id;
        axios.put(url, query)
          .then(function(response){
            // console.log('company updated', response.data)
          }).catch(function (error) {
            console.log(error);
          })
      } else {
        axios.post(url, query)
          .then(function(response){
          // console.log('company posted', response.data)
        }).catch(function (error) {
          console.log(error);
        });  
      }
      resolve(company);
    });
  }

  // static getOneCompany(companyId) {
  //   var url = 'http://localhost:3001/companies/';
  //   return new Promise((resolve, reject) => {
  //     url = url + companyId;
  //     axios.put(url)
  //       .then(function(response){
  //         console.log('company updated', response.data)
  //         resolve(Object.assign([], response.data));

  //       }).catch(function (error) {
  //         console.log(error);
  //       })
  //   });
  // }
}

export default CompanyApi;