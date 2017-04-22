module.exports = function(app){

    var company = require('./controllers/company.js');
    var person = require('./controllers/person.js');

    /**
     * @swagger
     * /companies:
     *   get:
     *     tags:
     *       - Companies
     *     description: Returns all Companies
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: All Companies
     *         schema:
     *           type: array
     *           $ref: '#/definitions/Company'
     */
    app.get('/companies', company.findAll);

    /**
     * @swagger
     * /companies/{companyId}:
     *  get:
     *    tags:
     *      - Companies
     *    description: Returns a single Company
     *    produces:
     *      - application/json
     *    parameters:
     *      - name: companyId
     *        description: Company Id
     *        in: path
     *        required: true
     *        type: string
     *    responses:
     *      200:
     *        description: A single company
     *        schema:
     *          $ref: '#/definitions/Company'
     */
    app.get('/companies/:id', company.findById);


    /**
     * @swagger
     * /companies:
     *   post:
     *     tags:
     *       - Companies
     *     description: Creates a new Company
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: company
     *         description: Company Object
     *         in: body
     *         required: true
     *         type: object
     *         schema:
     *           $ref: '#/definitions/Company'
     *     responses:
     *       200:
     *         description: A single company
     *         schema:
     *           $ref: '#/definitions/Company'
     */
     app.post('/companies', company.add);

    /**
     * @swagger
     * /companies/{companyId}:
     *   put:
     *     tags:
     *       - Companies
     *     description: Updates a single company
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: company
     *         description: Company object
     *         in: body
     *         required: true
     *         schema:
     *           $ref: '#/definitions/Company'
     *       - name: companyId
     *         description: Company Id
     *         in: path
     *         required: true
     *         type: string
     *     responses:
     *       200:
     *         description: A single compnay
     *         schema:
     *           $ref: '#/definitions/Company'
     */
     app.put('/companies/:id', company.update);

    /**
     * @swagger
     * /importCompanies:
     *   get:
     *     tags:
     *       - Companies
     *     description: Imports all companies
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: An array of Companies
     *         schema:
     *           $ref: '#/definitions/Company'
     */    
    app.get('/importCompanies', company.import);


    /**
     * @swagger
     * /companies/{companyId}/people:
     *   get:
     *     tags:
     *       - Companies
     *       - People
     *     description: Returns all People associated to a company
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: companyId
     *         description: Company Id
     *         in: path
     *         required: true
     *         type: string
     *     responses:
     *       200:
     *         description: An array of People
     *         schema:
     *           $ref: '#/definitions/Person'
     */
     app.get('/companies/:companyId/people', person.findByCompanyId);

    /**
     * @swagger
     * /person/{personId}:
     *  get:
     *    tags:
     *      - People
     *    description: Returns a single Person
     *    produces:
     *      - application/json
     *    parameters:
     *      - name: personId
     *        description: Person Id
     *        in: path
     *        required: true
     *        type: string
     *    responses:
     *      200:
     *        description: A single Person
     *        schema:
     *          $ref: '#/definitions/Person'
     */
     app.get('/person/:id', person.findByPersonId);

    /**
     * @swagger
     * /person:
     *   post:
     *     tags:
     *       - People
     *     description: Creates a new Person
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: Person
     *         description: Person object
     *         in: body
     *         required: true
     *         schema:
     *           $ref: '#/definitions/Person'
     *     responses:
     *       200:
     *         description: A single Person
     *         schema:
     *           $ref: '#/definitions/Person'
     */
     app.post('/person', person.add);

    /**
     * @swagger
     * /person/{personId}:
     *   put:
     *     tags:
     *       - People
     *     description: Updates a single person
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: person
     *         description: Person object
     *         in: body
     *         required: true
     *         schema:
     *           $ref: '#/definitions/Person'
     *       - name: personId
     *         description: Person Id
     *         in: path
     *         required: true
     *         type: string
     *     responses:
     *       200:
     *         description: A single Person
     *         schema:
     *           $ref: '#/definitions/Person'
     */    
     app.put('/person/:id', person.update);

    /**
     * @swagger
     * /person/{personId}:
     *   delete:
     *     tags:
     *       - People
     *     description: Deletes a single Persxon
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: personId
     *         description: Person Id
     *         in: path
     *         required: true
     *         type: string
     *     responses:
     *       200:
     *         description: A single Person
     *         schema:
     *           $ref: '#/definitions/Person'
     */
     app.delete('/person/:id', person.delete);

    /**
     * @swagger
     * /importPeopleForCompany/{companyId}:
     *   get:
     *     tags:
     *       - People
     *     description: Imports people for given company id
     *     produces:
     *       - application/json
     *     parameters:
     *       - name: companyId
     *         description: Compnay Id
     *         in: path
     *         required: true
     *         type: string
     *     responses:
     *       200:
     *         description: An array of People
     *         schema:
     *           type: array
     *           $ref: '#/definitions/Person'
     */
     app.get('/importPeopleForCompany/:companyId', person.import);

    //swagger docs routes
    // serve swagger
    app.get('/swagger.json', function(req, res) {
      res.setHeader('Content-Type', 'application/json');
      res.send(app.swaggerSpec);
    });

}