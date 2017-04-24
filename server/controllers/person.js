var mongoose = require('mongoose');
var Person = mongoose.model('Person');

exports.findByCompanyId = function(req, res) {
	var companyId = req.params.companyId;
	Person.find({'companyId': companyId}, function(err, results) {
		return res.send(results);
	});
};

exports.findByPersonId = function(req, res) {
	var id = req.params.id;
	Person.findOne({'_id': id}, function(err, result) {
		res.send(result);
	});
};

exports.add = function(req, res) {
	Person.create(req.body, function (err, record) {
		return (err) ? console.log(err) : res.send(record);
  });
};

exports.update = function(req, res) {
	var id = req.params.id;
  var updates = req.body;

	Person.update({"_id":id}, req.body,
		function (err, numberAffected) {
        if (err) {
          return console.log(err);
          } else {
          console.log('updated %d companies', numberAffected["nModified"]);
          return res.send(202);
        }
		});
};

exports.delete = function(req, res) {
	var id = req.params.id;
	Person.remove({'_id':id},function(result) {
		return res.send(result);
	});
};

exports.import = function(req, res) {
	var companyId = req.params.companyId;
	
	Person.create(
		{'name': 'John Smith', 'companyId': companyId, 'email': 'john@example.org'},
		{'name': 'Sally Jones', 'companyId': companyId, 'email': 'sally@example.org'},
		{'name': 'Mike Johnson', 'companyId': companyId, 'email': 'mike@example.org'},
		{'name': 'Rachel Sampson', 'companyId': companyId, 'email': 'rachel@example.org'},
		{'name': 'Tina Belcher', 'companyId': companyId, 'email': 'tina@example.org'},
		
		function(err) {
		if (err) {
			console.log(err);
		}

		return res.send(202);
	});
};