import delay from './delay';
import axios from 'axios';

const companies = [
  {
    id: "react-flux-building-applications",
    title: "Building Applications in React and Flux",
    watchHref: "http://www.pluralsight.com/companies/react-flux-building-applications",
    personId: "cory-house",
    length: "5:08",
    category: "JavaScript"
  },
  {
    id: "clean-code",
    title: "Clean Code: Writing Code for Humans",
    watchHref: "http://www.pluralsight.com/companies/writing-clean-code-humans",
    personId: "cory-house",
    length: "3:10",
    category: "Software Practices"
  },
  {
    id: "architecture",
    title: "Architecting Applications for the Real World",
    watchHref: "http://www.pluralsight.com/companies/architecting-applications-dotnet",
    personId: "cory-house",
    length: "2:52",
    category: "Software Architecture"
  },
  {
    id: "career-reboot-for-developer-mind",
    title: "Becoming an Outlier: Reprogramming the Developer Mind",
    watchHref: "http://www.pluralsight.com/companies/career-reboot-for-developer-mind",
    personId: "cory-house",
    length: "2:30",
    category: "Career"
  },
  {
    id: "web-components-shadow-dom",
    title: "Web Component Fundamentals",
    watchHref: "http://www.pluralsight.com/companies/web-components-shadow-dom",
    personId: "cory-house",
    length: "5:10",
    category: "HTML5"
  }
];

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
      axios.get('http://localhost:3001/companies')
      .then(function (response) {
        resolve(Object.assign([], response.data));
        // resolve(Object.assign([], companies));
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    });
  }

  static saveCompany(company) {
    company = Object.assign({}, company); // to avoid manipulating object passed in.
      console.log("company in API", company)
      return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minCompanyNameLength = 3;
        if (company.name.length < minCompanyNameLength) {
          reject(`Name must be at least ${minCompanyNameLength} characters.`);
        }

        if (company._id) {
          const existingCourseIndex = companies.findIndex(a => a._id == company._id);
          companies.splice(existingCourseIndex, 1, company);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new courses in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          company.id = generateId(company);
          company.watchHref = `http://www.pluralsight.com/courses/${company.id}`;
          companies.push(company);
        }

        resolve(company);
      }, delay);
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