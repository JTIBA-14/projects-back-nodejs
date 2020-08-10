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

        afterEach(() => {
            // Remove data after each unit testing case
            Projects.destroy({
                where: { name: data.name }
            }).catch( (err) => {
                console.log(err);
            });
        })
    });

    afterEach( () => {
        server.close();
    })

});
