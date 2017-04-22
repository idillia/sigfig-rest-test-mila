import delay from './delay';
import axios from 'axios';

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (course) => {
  return replaceAll(course.title, ' ', '-');
};

class CompanyApi {
  static getAllCompanies() {
    return new Promise((resolve, reject) => {


    });
  }

  static saveCompany(company) {
    company = Object.assign({}, company); // to avoid manipulating object passed in.
      // console.log("company in API", company)
      return new Promise((resolve, reject) => {
        if(company._id) {    
          var url = 'http://localhost:3001/companies/' + company._id;
          axios.put(url, { name: company.name, address: company.address, phone: company.phone, revenue: company.revenue})
            .then(function(response){
              // console.log('compnay updated', response.data)
            }).catch(function (error) {
              console.log(error);
            })



        } else {
        var url = 'http://localhost:3001/companies/';
        axios.post(url, { name: company.name, address: company.address, phone: company.phone, revenue: company.revenue})
          .then(function(response){
          // console.log('company posted', response.data)
        }).catch(function (error) {
        console.log(error);
      })  
    }
 resolve(company);

      // setTimeout(() => {
      //   // Simulate server-side validation
      //   const minCompanyNameLength = 3;
      //   if (company.name.length < minCompanyNameLength) {
      //     reject(`Name must be at least ${minCompanyNameLength} characters.`);
      //   }

      //   if (company._id) {
      //     const existingCourseIndex = companies.findIndex(a => a._id == company._id);
      //     companies.splice(existingCourseIndex, 1, company);
      //   } else {
      //     //Just simulating creation here.
      //     //The server would generate ids and watchHref's for new courses in a real app.
      //     //Cloning so copy returned is passed by value rather than by reference.
      //     company.id = generateId(company);
      //     company.watchHref = `http://www.pluralsight.com/courses/${company.id}`;
      //     companies.push(company);
      //   }

      //   resolve(company);
      // }, delay);
    });
  }

  static deleteCourse(courseId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfCourseToDelete = companies.findIndex(company => {
          company.courseId == courseId;
        });
        companies.splice(indexOfCourseToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default CompanyApi;