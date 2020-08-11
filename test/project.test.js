const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
const assert = chai.assert;

let server;

chai.use( chaiHttp );

const Projects = require('./../src/app/models/projects');

describe('Resource Model - Projects', () => {
    beforeEach(() => {
        server = require('./../src/index');
    })

    describe('Add a resorce to database', () => {
        const data = {
            name: 'Unit Test - mocha and chai',
            priority: 1,
            description: "example for the description of the unit test",
            deliverydate: '2020-10-01'
        }

        it('response whit the object that was created with successflly', (done) => {

            Projects.create( data , { fields: Object.keys( data )}
            ).then((resorce) => {
                expect( resorce.get('name') ).to.equal( data.name );
                done();
            }).catch((err) => {
                done( err)
            });
        });

        it('doest not allow creation when name is not provider as a key of the object', (done) => {
            Projects.create({
                name: '',
                priority: data.priority,
                describe: data.description,
                deliverydate: data.deliverydate
            }).then((resorce) => {
                done('Invalidation of name did not work');
            }).catch((err) => {
                if ( err.errors[0].message == 'Please provider a name') {
                    done();
                }
            });
        });
    });

    describe("Resorce fecthed by HTTP", () => {
        
        describe("GET /", () => {
            // Test to get all students record
            it("should get all projects record", (done) => {
                 chai.request(server)
                    .get('/api/v1/projects')
                    .end((err, res) => {
                        expect(res).to.have.status(200);
                        expect(res.body).to.be.a('object');
                        done();
                    });
             });
            // Test to get single student record
            it("should get a single project record", (done) => {
                 const id = 1;
                 chai.request(server)
                    .get(`/api/v1/projects/${id}`)
                    .end((err, res) => {
                        expect(res).to.have.status(200);
                        expect(res.body).to.be.a('object');
                        done();
                    });
             });
             
            // Test to get single student record
            it("should not get a single project record", (done) => {
                 const id = 5;
                 chai.request(server)
                    .get(`/api/v1/projects/${id}`)
                    .end((err, res) => {
                        expect(res).to.have.status(200);
                        done();
                    });
             });
        });

    });

    afterEach( () => {
        server.close();
    })

});
