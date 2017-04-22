var mongoose = require('mongoose');
var Company = mongoose.model('Company');

exports.findAll = function(req, res) {
	console.log('company.findAll');

	Company.find({}, function(err, results){
		return res.send(results);
	});
};

exports.findById = function(req, res) {
	console.log("compnay.findById Req", req.params.id);
	console.log("compnay.findById Req", req.body);

	console.log('compnay.findById')
	var id = req.params.id;
	Company.findOne({'_id': id}, function(err, result) {
		res.send(result);
	});
};

exports.add = function(req, res) {
		console.log("compnay.add")

	Company.create(req.body, function(err, company) {
		if (err) {
			return console.log(err);
		} else {
			return res.send(company);
		}
	});
};

exports.update = function(req, res) {
	console.log("compnay.update Req", req.params.id);
	console.log("compnay.update Req", req.body);
	var id = req.params.id;
	var updates = req.body;

	Company.update({'_id': id}, req.body, function(err, numberAffected) {
		if (err) {
			return console.log("update error", err);
		} 
		console.log('updated companies', numberAffected);

		return res.send(200);
	});
};

exports.import = function(req, res) {
	Company.create(
		{'name': 'Xerox', 'address': '123 Main St, Rochester NY 12345', 'revenue': 10000, 'phone': '585-555-1234' },
		{'name': 'Kodak', 'address': '456 South St, Rochester NY 12345', 'revenue': 20000, 'phone': '585-555-5678' },
		{'name': 'SigFig', 'address': '225 Valencia St, San Francisco, CA 94113', 'revenue': 999999, 'phone': '415-555-0123' },
		{'name': 'Google', 'address': '1 Moneybags Blvd, Mountain View, CA 90210', 'revenue': 88888, 'phone': '415-555-8888' },
		function(err) {
			if (err) {
        return console.log(err);
      }
        return res.send(200);
		});
}