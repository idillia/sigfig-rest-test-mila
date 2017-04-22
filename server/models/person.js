var mongoose = require('mongoose');

var Schema = mongoose.Schema;
/**
 * @swagger
 * definition:
 *   Person:
 *     properties:
 *       name:
 *         type: string
 *       companyId:
 *         type: string
 *       email:
 *         type: string
 */
var PersonSchema = new Schema({
	name: String,
	companyId: String,
	email: String
});

mongoose.model('Person', PersonSchema);